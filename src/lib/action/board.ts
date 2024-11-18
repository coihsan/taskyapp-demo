"use server";

import { Card, Board, SubTask } from "@prisma/client";
import { db } from "@/lib/server/db";
import { v4 } from "uuid";

export const createNewBoard = async (projectId: string, board: Board) => {
    const response = await db.board.create({
        data: {
            ...board,
            id: v4(),
            projectId: projectId,
        },
    });
    return response;
};

export const getBoards = async (projectId: string) => {
    const response = await db.board.findMany({
        where: {
            projectId: projectId,
        },
        include:{
            cards: true,
        }
    });
    return response;
};

export const createNewTask = async (boardId: string, task: Card) => {
    const response = await db.card.create({
        data: {
            ...task,
            boardId: boardId,
        },
        include:{
            board: true
        }
    });
    return response;
};

export const createSubTask = async (cardId: string, subTask: SubTask) => {
    const response = await db.subTask.create({
        data: {
            ...subTask,
            id: v4(),
            cardId: cardId,
        },
    });
    return response
}