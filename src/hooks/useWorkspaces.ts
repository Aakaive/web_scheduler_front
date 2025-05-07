'use client';
import { useState, useEffect, useCallback } from 'react';
import { Workspace, fetchWorkspaces, createWorkspace } from '@/api/workspaceApi';

export function useWorkspaces() {
  const [workspaces, setWorkspaces] = useState<Workspace[]>([]);
  const [loading, setLoading]       = useState(true);
  const [error, setError]           = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      setLoading(true);
      setWorkspaces(await fetchWorkspaces());
      setError(null);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  const create = useCallback(
    async (name: string) => {
      const ws = await createWorkspace(name);
      setWorkspaces(wsList => [ws, ...wsList]);
      return ws;
    },
    []
  );

  useEffect(() => { load(); }, [load]);

  return { workspaces, loading, error, load, create };
}