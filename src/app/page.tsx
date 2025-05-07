'use client';
import { useAuth } from '@/hooks/useAuth';
import { LoginButton } from '@/components/LoginButton';
import Link from 'next/link';
import Loading from './loading';

export default function HomePage() {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn === null) return <Loading />;

  return isLoggedIn ? (
    <div className="flex flex-col items-center justify-center h-[70vh] space-y-4">
      <p className="text-lg">이미 로그인된 상태입니다.</p>
      <Link
        href="/workspace"
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        워크스페이스로 이동
      </Link>
    </div>
  ) : (
    <div className="flex items-center justify-center h-[70vh]">
      <LoginButton />
    </div>
  );
}