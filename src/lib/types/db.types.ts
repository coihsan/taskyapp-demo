import { Prisma } from '@prisma/client'
import {
  Edge,
  Node,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
} from '@xyflow/react';

export type AppNode = Node;

export type AppState = {
  nodes: AppNode[];
  edges: Edge[];
  onNodesChange: OnNodesChange<AppNode>;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  setNodes: (nodes: AppNode[]) => void;
  setEdges: (edges: Edge[]) => void;
};

export interface UserDataTypes {
  userId: string;
  username: string;
  createdAt: Date | undefined;
  clerkId: string;
  password?: string;
  bio?: string;
  fullName?: string;
  imageUrl?: string;
  emailUser?: string;
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

export interface userProps {
  imageUrl: string;
  id: string;
  clerkId: string;
  emailUser: string;
  username: string;
  fullName: string;
  password: string;
  bio: string;
  createdAt: Date;
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

export type boardProps = {
  status: "Backlogs" | "Inprogress" | "Review" | "Done";
};
export enum status {
  "Backlogs",
  "Inprogress",
  "Review",
  "Done",
}

export type StatePerson = {
  fullName: string;
  image: string;
  bio: string;
  username: string;
  password: string
};
export type PersonAction = {
  updateFullName: (firstName: StatePerson['fullName']) => void
  updateImage: (image: StatePerson['image']) => void
  updateBio: (status: StatePerson['bio']) => void
  updateUsername: (username: StatePerson['username']) => void
  updatePassword: (password: StatePerson['password']) => void
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