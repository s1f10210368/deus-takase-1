import type { DirectMessage } from '$/api/@types';
import type { PrismaClient } from '@prisma/client';

export const directMessageRepo = {
  create: async (prisma: PrismaClient, { content, receiverId, senderId }: Pick<DirectMessage, 'content' | 'receiverId' | 'senderId'>): Promise<DirectMessage> => {
    const directMessage = await prisma.directMessage.create({
      data: {
        content,
        receiverId,
        senderId,
        createdAt: new Date()
      }
    });
    return {
      id: directMessage.id,
      content: directMessage.content,
      createdAt: directMessage.createdAt.toISOString(),
      senderId: directMessage.senderId,
      receiverId: directMessage.receiverId
    };
  },
  findByUserId: async (prisma: PrismaClient, userId: string, limit?: number): Promise<DirectMessage[]> => {
    const directMessages = await prisma.directMessage.findMany({
      where: { OR: [{ senderId: userId }, { receiverId: userId }] },
      take: limit,
      orderBy: { createdAt: 'desc' }
    });
    return directMessages.map((directMessage) => ({
      id: directMessage.id,
      content: directMessage.content,
      createdAt: directMessage.createdAt.toISOString(),
      senderId: directMessage.senderId,
      receiverId: directMessage.receiverId
    }));
  }
};
