from fastapi.testclient import TestClient

from app.core.config import settings
from app.main import app

client = TestClient(app)


def login(password: str | None = None) -> str:
    response = client.post(
        "/api/auth/login",
        json={
            "email": settings.default_user_email,
            "password": password or settings.default_user_password,
        },
    )
    assert response.status_code == 200
    body = response.json()
    assert body["token_type"] == "bearer"
    assert body["user"]["email"] == settings.default_user_email
    return body["access_token"]


def test_login_and_me() -> None:
    token = login()
    response = client.get("/api/auth/me", headers={"Authorization": f"Bearer {token}"})
    assert response.status_code == 200
    assert response.json()["email"] == settings.default_user_email


def test_login_rejects_wrong_password() -> None:
    response = client.post(
        "/api/auth/login",
        json={"email": settings.default_user_email, "password": "wrong-password"},
    )
    assert response.status_code == 401


def test_reset_password() -> None:
    token = login()
    new_password = "NewPassword-12345!"
    response = client.post(
        "/api/auth/password",
        headers={"Authorization": f"Bearer {token}"},
        json={"current_password": settings.default_user_password, "new_password": new_password},
    )
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}
    login(new_password)
