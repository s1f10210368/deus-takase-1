import { useRouter } from 'next/router';
import { MessageList } from 'src/pages/@components/MessageList/MessageList';
import { MessageSender } from 'src/pages/@components/MessageSender/MessageSender';

const ChannelPage = () => {
  const router = useRouter();
  const { channelId } = router.query;

  if (typeof channelId !== 'string') return null;

  return (
    <div>
      <MessageList channelId={channelId} />
      <MessageSender channelId={channelId} />
    </div>
  );
};

export default ChannelPage;
