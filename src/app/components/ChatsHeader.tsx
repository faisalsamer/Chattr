import Sidemenu from "./ui/Sidemenu";
import SearchInput from "./ui/SearchInput";

const ChatsHeader: React.FC = () => {

    return (
        <div className='bg-[var(--bg-gray-50)] p-5 flex flex-col gap-3 border-b border-[var(--border-gray)]'>
            <div className='flex items-center gap-2 h-9'>
                <Sidemenu />
                <h1 className='select-none'>Chats</h1>
            </div>
            <SearchInput />
        </div>
    )
}

export default ChatsHeader;