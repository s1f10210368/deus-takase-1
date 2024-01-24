import type { TaskModel } from '$/api/@types/models';
import { useCallback, useEffect, useState } from 'react';
import { apiClient } from 'src/utils/apiClient';
import { useInterval } from 'src/utils/useInterval';

export const MessageList = ({ channelId }: { channelId: string }) => {
  const [messages, setMessages] = useState<TaskModel[]>([]);

  const fetchMessages = useCallback(async () => {
    const res = await apiClient.public.tasks.$get();
    setMessages(res);
  }, []);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  useInterval(() => {
    fetchMessages();
  }, 3000);

  return (
    <div>
      {messages.map((message) => (
        <div key={message.id}>{message.label}</div>
      ))}
    </div>
  );
};
