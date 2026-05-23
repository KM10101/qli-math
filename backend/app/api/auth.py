from typing import Annotated

from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from pydantic import BaseModel, EmailStr, Field

from app.core.config import settings
from app.core.security import create_access_token, decode_access_token, hash_password, verify_password

router = APIRouter(prefix="/auth", tags=["auth"])
bearer = HTTPBearer(auto_error=False)

# MVP 单用户认证。后续接数据库后替换为 UserRepository。
password_hash = hash_password(settings.default_user_password)


class LoginRequest(BaseModel):
    email: EmailStr
    password: str = Field(min_length=8)


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user: "UserResponse"


class UserResponse(BaseModel):
    email: EmailStr
    nickname: str


class ResetPasswordRequest(BaseModel):
    current_password: str = Field(min_length=8)
    new_password: str = Field(min_length=12)


class ResetPasswordResponse(BaseModel):
    status: str


def current_user(
    credentials: Annotated[HTTPAuthorizationCredentials | None, Depends(bearer)],
) -> UserResponse:
    if credentials is None:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Not authenticated")
    subject = decode_access_token(credentials.credentials)
    if subject != settings.default_user_email:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token")
    return UserResponse(email=settings.default_user_email, nickname=settings.default_user_nickname)


@router.post("/login", response_model=TokenResponse)
def login(payload: LoginRequest) -> TokenResponse:
    if payload.email != settings.default_user_email or not verify_password(
        payload.password, password_hash
    ):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password",
        )
    user = UserResponse(email=settings.default_user_email, nickname=settings.default_user_nickname)
    return TokenResponse(access_token=create_access_token(settings.default_user_email), user=user)


@router.get("/me", response_model=UserResponse)
def me(user: Annotated[UserResponse, Depends(current_user)]) -> UserResponse:
    return user


@router.post("/password", response_model=ResetPasswordResponse)
def reset_password(
    payload: ResetPasswordRequest,
    _user: Annotated[UserResponse, Depends(current_user)],
) -> ResetPasswordResponse:
    global password_hash
    if not verify_password(payload.current_password, password_hash):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Current password is incorrect",
        )
    if verify_password(payload.new_password, password_hash):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="New password must be different from current password",
        )
    password_hash = hash_password(payload.new_password)
    return ResetPasswordResponse(status="ok")
