export function LoginButton() {
    const onLogin = () => {
      window.location.href =
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/oauth2/authorization/google?prompt=select_account`;
    };
  
    return (
      <button
        onClick={onLogin}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Google 계정으로 로그인
      </button>
    );
  }