import type { Workspace } from '@/api/workspaceApi';

interface Props {
  workspaces: Workspace[];
  selectedId: number | null;
  onSelect: (id: number) => void;
}

export function WorkspaceSidebar({
  workspaces,
  selectedId,
  onSelect,
}: Props) {
  return (
    <ul className="mt-4 space-y-2">
      {workspaces.map(ws => (
        <li
          key={ws.id}
          onClick={() => onSelect(ws.id)}
          className={`p-2 rounded cursor-pointer ${
            ws.id === selectedId
              ? 'bg-blue-100 font-medium'
              : 'hover:bg-gray-100'
          }`}
        >
          {ws.name}
        </li>
      ))}
    </ul>
  );
}