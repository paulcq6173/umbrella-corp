import { notifyVar } from '@/apollo-cache/cache';
import { useReactiveVar } from '@apollo/client';

export const SendNotify = ({
  message,
  success,
}: {
  message: string;
  success?: boolean;
}) => {
  notifyVar({ message, success: success || false });
  setTimeout(() => {
    notifyVar({ message: '' });
  }, 5000);
};

const NotifyHandler = () => {
  const { message, success } = useReactiveVar(notifyVar);

  if (!message) {
    return null;
  }

  const textColor = success ? 'text-green-600' : 'text-red-600';

  return <div className={`text-sm sm:text-base ${textColor}`}>{message}</div>;
};

export default NotifyHandler;
