import { useAuth } from '@/hooks/useAuth';

export function LogoutButton() {
  const { logout } = useAuth();

  return (
    <button
      onClick={async () => {
        await logout();
        window.location.href = '/';
      }}
      className="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 text-sm"
    >
      로그아웃
    </button>
  );
}