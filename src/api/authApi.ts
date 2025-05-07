// src/api/authApi.ts

const BASE = process.env.NEXT_PUBLIC_API_BASE_URL!

// 현재 로그인 상태 확인 (200 → true, 그 외 → false)
export async function checkAuth(): Promise<boolean> {
  const res = await fetch(`${BASE}/api/auth/status`, {
    method: 'GET',
    credentials: 'include',
  })
  return res.ok
}

// 로그아웃 요청
export async function logoutApi(): Promise<void> {
  const res = await fetch(`${BASE}/api/auth/logout`, {
    method: 'POST',
    credentials: 'include',
  })
  if (!res.ok) {
    throw new Error('Logout failed')
  }
}