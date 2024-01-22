import { useEffect, useState } from 'react';
import { apiClient } from 'src/utils/apiClient';
import { useInterval } from 'src/utils/useInterval';
import type { Message } from '$/api/@types';

export const MessageList = ({ channelId }: { channelId: string }) => {
  const [messages, setMessages] = useState<Message[]>([]);

  const fetchMessages = async () => {
    const res = await apiClient.private.channels._channelId(channelId).messages.$get();
    setMessages(res);
  };

  useEffect(() => {
    fetchMessages();
  }, [channelId, fetchMessages]);

  useInterval(() => {
    fetchMessages();
  }, 3000);

  return (
    <div>
      {messages.map((message) => (
        <div key={message.id}>{message.content}</div>
      ))}
    </div>
  );
};
