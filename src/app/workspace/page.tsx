'use client';
import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useWorkspaces } from '@/hooks/useWorkspaces';
import { useWorkspaceCards } from '@/hooks/useWorkspaceCards';
import { LogoutButton }    from '@/components/LogoutButton';
import { WorkspaceForm }   from '@/components/WorkspaceForm';
import { WorkspaceSidebar } from '@/components/WorkspaceSidebar';
import { WorkspaceDetail } from '@/components/WorkspaceDetail';
import Loading             from '../loading';

export default function WorkspacePage() {
  const { isLoggedIn } = useAuth();
  const { workspaces, loading: wsLoading, error, create } =
    useWorkspaces();
  const [selectedId, setSelectedId] = React.useState<number | null>(null);
  const { cards, loading: cardLoading } =
    useWorkspaceCards(selectedId);

  if (isLoggedIn === false) {
    window.location.href = '/';
    return null;
  }
  if (wsLoading) return <Loading />;
  if (error)     return <p className="text-red-500">{error}</p>;

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <aside className="w-64 bg-white border-r p-4 overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">워크스페이스</h2>
          <LogoutButton />
        </div>
        <WorkspaceForm onCreate={create} />
        <WorkspaceSidebar
          workspaces={workspaces}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />
      </aside>
      <section className="flex-1 p-6 overflow-auto">
        {selectedId == null ? (
          <p className="text-gray-500">워크스페이스를 선택하세요.</p>
        ) : cardLoading ? (
          <Loading />
        ) : (
          <WorkspaceDetail
            workspace={workspaces.find(ws => ws.id === selectedId)!}
            cards={cards}
          />
        )}
      </section>
    </div>
  );
}