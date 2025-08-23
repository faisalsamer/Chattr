import React from 'react'
import ChatsHeader from './ChatsHeader';
import ChatsMessageList from './ChatsMessageList';

type Props = {
  selectedChat?: string;
}

const ChatsSection: React.FC<Props>  = ({ selectedChat }) => {
  return (
    <div id='chatsSection' className={`relative chatsSection`}>
        <ChatsHeader />
      <div>
        <ChatsMessageList selectedChat={selectedChat} />
      </div>
    </div>
  )
}

export default ChatsSection;