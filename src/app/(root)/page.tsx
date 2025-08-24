import ChatsSection from "@/components/ChatsSection";
import Profile from '@/components/ProfileSection';

type Props = {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}
export default async function Home({ searchParams }: Props) {
  const params = await searchParams;
  return (
    <div className='flex h-screen'>
      <div className='relative w-full sm:min-w-[300px] sm:flex-[0.5] border-r border-[var(--border-gray)] overflow-hidden'>
        <Profile />
        <ChatsSection selectedChat={params.selectedChat} />
      </div>
      <div className='relative hidden sm:block sm:flex-[1]'>
        <div className='absolute z-0 inset-0 bg-white '></div>
        <div className='relative'>hi</div>
      </div>
    </div>
  );
}
