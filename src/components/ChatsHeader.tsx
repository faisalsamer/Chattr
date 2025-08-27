'use client';
import Sidemenu from "./ui/Sidemenu";
import SearchInput from "./ui/SearchInput";
import { Search } from "lucide-react";

const ChatsHeader: React.FC = () => {

    return (
        <div className='bg-[var(--bg-gray-50)] p-3 flex flex-col gap-3 border-b border-[var(--border-gray)]'>
            <div className='flex items-center gap-4 h-9'>
                <Sidemenu />
                <h1>Chats</h1>
            </div>
            <SearchInput icon={Search} placeholder='Search users' />
        </div>
    )
}

export default ChatsHeader;