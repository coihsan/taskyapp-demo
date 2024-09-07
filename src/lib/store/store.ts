import { create } from 'zustand';
import { addEdge, applyNodeChanges, applyEdgeChanges } from '@xyflow/react';

import initialNodes from '@/lib/data/workflows/nodes'
import initialEdges from '@/lib/data/workflows/edges'
import { AppState, StatePerson, PersonAction } from '../types/db.types';

export const useStore = create<AppState>((set, get) => ({
  nodes: initialNodes,
  edges: initialEdges,
  onNodesChange: (changes) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgesChange: (changes) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  onConnect: (connection) => {
    set({
      edges: addEdge(connection, get().edges),
    });
  },
  setNodes: (nodes) => {
    set({ nodes });
  },
  setEdges: (edges) => {
    set({ edges });
  },
}));

export const usePersonStore = create<StatePerson & PersonAction>((set) => ({
  fullName: '',
  image: '',
  username: '',
  bio: '',
  password: '',
  updateFullName: (fullName) => set(() => ({ fullName: fullName })),
  updateImage: (image) => set(() => ({ image: image })),
  updateUsername: (username) => set(() => ({ username: username})),
  updateBio: (bio) => set(() => ({bio : bio})),
  updatePassword: (password) => set(() => ({password: password}))
}))