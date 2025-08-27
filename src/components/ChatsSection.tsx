import React from 'react'
import ChatsHeader from './ChatsHeader';
import ChatsMessageList from './ChatsMessageList';

type Props = {
  selectedChat?: string;
}

const ChatsSection: React.FC<Props> = ({ selectedChat }) => {
  return (
    <div id='chatsSection' className={`section !relative flex flex-col`}>
      <ChatsHeader />
      <div className='flex-1 overflow-y-scroll scrollable'>
        <ChatsMessageList selectedChat={selectedChat} />
      </div>
    </div>
  )
}

export default ChatsSection;