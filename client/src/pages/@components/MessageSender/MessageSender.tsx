import { useState } from 'react';
import { apiClient } from 'src/utils/apiClient';

export const MessageSender = ({ channelId }: { channelId: string }) => {
  const [content, setContent] = useState('');

  const sendMessage = async () => {
    if (!content.trim()) return;
    await apiClient.private.tasks.$post({ body: { label: content } });
    setContent('');
  };

  return (
    <div>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};
