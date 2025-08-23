import ChatsSection from "@/components/ChatsSection";
import Profile from '@/components/ProfileSection';

type Props = {
  searchParams: { [key: string]: string | undefined };
}
export default function Home({ searchParams }: Props) {
  return (
    <div className='flex h-screen'>
      <div className='relative w-full sm:min-w-[300px] sm:flex-[0.5] border-r border-[var(--border-gray)] overflow-hidden'>
        <Profile />
        <ChatsSection selectedChat={searchParams.selectedChat} />
      </div>
      <div className='relative hidden sm:block sm:flex-[1]'>
        <div className='absolute z-0 inset-0 bg-red-400 '></div>
        <div className='relative'>hi</div>
      </div>
    </div>
  );
}
