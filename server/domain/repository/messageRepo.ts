import type { Message } from '$/api/@types';
import type { PrismaClient } from '@prisma/client';

export const messageRepo = {
  create: async (
    prisma: PrismaClient,
    { content, channelId, senderId }: Pick<Message, 'content' | 'channelId' | 'senderId'>
  ): Promise<Message> => {
    const message = await prisma.message.create({
      data: {
        content,
        channelId,
        senderId,
        createdAt: new Date(),
      },
    });
    return {
      id: message.id,
      content: message.content,
      createdAt: message.createdAt.toISOString(),
      senderId: message.senderId,
      channelId: message.channelId,
    };
  },
  findByChannelId: async (
    prisma: PrismaClient,
    channelId: string,
    limit?: number
  ): Promise<Message[]> => {
    const messages = await prisma.message.findMany({
      where: { channelId },
      take: limit,
      orderBy: { createdAt: 'desc' },
    });
    return messages.map((message) => ({
      id: message.id,
      content: message.content,
      createdAt: message.createdAt.toISOString(),
      senderId: message.senderId,
      channelId: message.channelId,
    }));
  },
};
