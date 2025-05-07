import '@/styles/globals.css';

export const metadata = { title: 'Web Scheduler' };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
        <header className="bg-white shadow p-4">
          <h1 className="text-xl font-bold">Web Scheduler</h1>
        </header>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}