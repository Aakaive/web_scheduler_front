// src/hooks/useAuth.ts

'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { checkAuth, logoutApi } from '@/api/authApi'

export function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null)
  const router = useRouter()

  // 마운트 시점에 로그인 상태 확인
  useEffect(() => {
    checkAuth()
      .then(ok => setIsLoggedIn(ok))
      .catch(() => setIsLoggedIn(false))
  }, [])

  // 로그아웃 함수
  const logout = async () => {
    try {
      await logoutApi()
    } catch (e) {
      console.error('logout failed', e)
    } finally {
      // 상태 초기화 후 메인으로
      setIsLoggedIn(false)
      router.push('/')
    }
  }

  return { isLoggedIn, logout }
}