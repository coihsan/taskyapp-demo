import { Prisma } from '@prisma/client'
import { EntityState } from '@reduxjs/toolkit';

export interface User {
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

export interface UserState {
  user: User;
  loading: boolean;
  error: string | null;
  status: "pending" | "fulfilled" | "rejected" | null;
}

export interface navlink {
  id: number;
  title: string;
  url: string;
  icons: any;
}

export interface Board {
  id: string;
  title: string;
  column_index: number;
  color: string;
  created_at: string;
  updated_at: string;
  projectId: string;
}

export interface BoardState extends EntityState<Board, string> {
  activeBoardId: string;
  activeColumnId: string;
  activeCardId: string;
}

export interface CardItem {
  id: string;
  title: string;
  description: string;
  content: string;
  is_complete: boolean;
  column_index: number;
  row_index: number;
  created_at: Date;
  updated_at: Date;
}

export interface CardState extends EntityState<CardItem, string>{
  activeCardId: string;
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