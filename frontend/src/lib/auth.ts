export const API_BASE = import.meta.env.VITE_API_BASE ?? '/api';
export const TOKEN_KEY = 'qli:auth:token';

export type AuthUser = {
  email: string;
  nickname: string;
};

export type LoginResponse = {
  access_token: string;
  token_type: string;
  user: AuthUser;
};

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function clearToken() {
  localStorage.removeItem(TOKEN_KEY);
}

export function authHeaders() {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function apiFetch<T>(path: string, init: RequestInit = {}): Promise<T> {
  const headers = new Headers(init.headers);
  headers.set('Content-Type', 'application/json');
  const token = getToken();
  if (token) headers.set('Authorization', `Bearer ${token}`);

  const response = await fetch(`${API_BASE}${path}`, {
    ...init,
    headers,
  });
  if (!response.ok) {
    let detail = response.statusText;
    try {
      const body = await response.json();
      detail = body.detail ?? detail;
    } catch {
      // ignore JSON parse failures
    }
    throw new Error(detail);
  }
  return response.json() as Promise<T>;
}

export async function login(email: string, password: string) {
  const body = await apiFetch<LoginResponse>('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
  setToken(body.access_token);
  return body.user;
}

export async function fetchMe() {
  return apiFetch<AuthUser>('/auth/me');
}

export async function resetPassword(currentPassword: string, newPassword: string) {
  return apiFetch<{ status: string }>('/auth/password', {
    method: 'POST',
    body: JSON.stringify({ current_password: currentPassword, new_password: newPassword }),
  });
}

export function requireAuth() {
  if (!getToken()) {
    const next = encodeURIComponent(window.location.search || '/');
    window.location.href = `/?page=login&next=${next}`;
    return false;
  }
  return true;
}
