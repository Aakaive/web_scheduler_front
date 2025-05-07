export interface Workspace { id: number; name: string }
export interface Card      { id: number; title: string }

// 전체 워크스페이스 조회
export async function fetchWorkspaces(): Promise<Workspace[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/workspaces`,
    { method: 'GET', credentials: 'include' }
  );
  if (!res.ok) throw new Error('워크스페이스 조회 실패');
  return res.json();
}

// 워크스페이스 생성
export async function createWorkspace(
  name: string
): Promise<Workspace> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/workspaces`,
    {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    }
  );
  if (!res.ok) throw new Error('워크스페이스 생성 실패');
  return res.json();
}

// 특정 워크스페이스의 카드 목록 조회
export async function fetchWorkspaceCards(
  workspaceId: number
): Promise<Card[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/workspaces/${workspaceId}/cards`,
    { method: 'GET', credentials: 'include' }
  );
  if (!res.ok) throw new Error('카드 조회 실패');
  return res.json();
}