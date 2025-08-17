import React from 'react'
import ChatsHeader from './ChatsHeader';
import ChatsMessageList from './ChatsMessageList';

type Props = {
  selectedChat?: string;
}

const ChatsSection: React.FC<Props>  = ({ selectedChat }) => {
  return (
    <div className='w-full'>
        <ChatsHeader />
      <div>
        <ChatsMessageList selectedChat={selectedChat} />
      </div>
    </div>
  )
}

export default ChatsSection;