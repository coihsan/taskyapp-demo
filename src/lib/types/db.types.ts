import { Prisma } from '@prisma/client'
import {
  Edge,
  Node,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
} from '@xyflow/react';

export type AppNode = Node;

export interface FeatureOptionsType {
  id: string,
  name: string,
  link: string
}

export type AppState = {
  nodes: AppNode[];
  edges: Edge[];
  onNodesChange: OnNodesChange<AppNode>;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  setNodes: (nodes: AppNode[]) => void;
  setEdges: (edges: Edge[]) => void;
};

export interface StateUser {
  id: string,
  name: string,
  email: string,
  emailVerified: Date | null,
  image: string,
  username: string,
  bio: string,
  preferences: string,
  password: string,
};

export interface SpaceDataTypes {
  id: string;
  name: string ;
  description: string | null;
  created_at: Date; 
  updated_at: Date;
}

export interface workspaceTypes {
  id: string;
  name: string;
  status: string | null;
  created_at: Date;
  updated_at: Date;
}

export interface cardType {
  id: number;
  title?: string;
  tags?: string;
  createDate?: Date;
  subtask?: [
    {
      id: number;
      title?: string;
      isComplete?: boolean;
    },
  ];
  member?: string[];
  comment?: boolean;
  attachment?: boolean;
  media?: boolean;
}
export interface navlink {
  id: number;
  title: string;
  url: string;
  icons: any;
}

export interface StateBoard {
  title: string;
  column_index: number,
  color: string
}

export type AuthUserOrganization =
  | Prisma.PrismaClientKnownRequestError
  | Prisma.PrismaClientUnknownRequestError;


export interface IndexProps {
    id: number;
    title: string;
    url: string;
    icon: any | JSX.Element;
  }
  
export interface SidebarProps {
    menuName: string;
    index: IndexProps[];
    className: string;
  }
  

export type useMediaQueryType = (query: string) => boolean;

export interface NoteItem {
  id: string
  text: string
  created: string
  lastUpdated: string
  category?: string
  scratchpad?: boolean
  trash?: boolean
  favorite?: boolean
}