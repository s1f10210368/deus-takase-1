import { useEffect, useState } from 'react';
import { apiClient } from 'src/utils/apiClient';
import { useInterval } from 'src/utils/useInterval';

export const MessageList = ({ recipientId }: { recipientId: string }) => {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    // ここでメッセージを取得するAPIを呼び出す
    // 今回はサンプルとして空の配列を設定
    setMessages([]);
  };

  useEffect(() => {
    fetchMessages();
  }, [recipientId]);

  // メッセージを定期的にポーリングする
  useInterval(() => {
    fetchMessages();
  }, 3000); // 3秒ごとにポーリング

  return (
    <div>
      {messages.map((message) => (
        <div key={message.id}>{message.content}</div>
      ))}
    </div>
  );
};
