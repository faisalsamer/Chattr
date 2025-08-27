import ChatsSection from "@/components/ChatsSection";
import ProfileSection from '@/components/ProfileSection';
import EditProfileSection from "@/components/EditProfileSection";

type Props = {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}
export default async function Home({ searchParams }: Props) {
  const params = await searchParams;
  return (
    <div className='flex h-screen'>
      <div className='relative w-full sm:min-w-[350px] sm:flex-[0.34] border-r border-[var(--border-gray)] overflow-hidden'>
        <EditProfileSection />
        <ProfileSection />
        <ChatsSection selectedChat={params.selectedChat} />
      </div>
      <div className='relative hidden sm:block sm:flex-[1]'>
        <div className='absolute z-0 inset-0 bg-white '></div>
        <div className='relative'>hi</div>
      </div>
    </div>
  );
}
