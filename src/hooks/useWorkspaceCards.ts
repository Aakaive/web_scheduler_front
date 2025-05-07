'use client';
import { useState, useEffect } from 'react';
import { Card, fetchWorkspaceCards } from '@/api/workspaceApi';

export function useWorkspaceCards(workspaceId: number | null) {
  const [cards, setCards]   = useState<Card[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (workspaceId == null) return;
    setLoading(true);
    fetchWorkspaceCards(workspaceId)
      .then(setCards)
      .catch(() => setCards([]))
      .finally(() => setLoading(false));
  }, [workspaceId]);

  return { cards, loading };
}