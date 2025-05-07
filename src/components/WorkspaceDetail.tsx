import type { Workspace, Card } from '@/api/workspaceApi';

interface Props { workspace: Workspace; cards: Card[] }

export function WorkspaceDetail({ workspace, cards }: Props) {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">{workspace.name}</h2>
      {cards.length === 0 ? (
        <p className="text-gray-500">아직 일정카드가 없습니다.</p>
      ) : (
        <ul className="space-y-2">
          {cards.map(c => (
            <li
              key={c.id}
              className="p-2 bg-white rounded shadow hover:bg-gray-50"
            >
              {c.title}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}