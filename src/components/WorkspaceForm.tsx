'use client';
import { useState } from 'react';

interface Props { onCreate: (name: string) => Promise<any> }

export function WorkspaceForm({ onCreate }: Props) {
  const [name, setName]     = useState('');
  const [loading, setLoading] = useState(false);

  const handle = async () => {
    if (!name.trim()) return;
    setLoading(true);
    try {
      await onCreate(name);
      setName('');
    } catch {
      alert('생성 실패');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex gap-2">
      <input
        className="flex-1 px-2 py-1 border rounded-l focus:outline-none"
        placeholder="새 워크스페이스"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button
        onClick={handle}
        disabled={loading}
        className="px-3 bg-green-500 text-white rounded-r hover:bg-green-600 disabled:opacity-50"
      >
        {loading ? '...' : '추가'}
      </button>
    </div>
  );
}