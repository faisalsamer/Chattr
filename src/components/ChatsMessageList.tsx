import React, { type JSX } from 'react';
import { Check } from 'lucide-react';
import fontStyle from './styles/fonts.module.css';
import { messages, type Message } from '../util/data';
import Link from 'next/link';
type Props = {
    selectedChat?: string;
  }

const ChatsMessageList: React.FC<Props> = ({ selectedChat }) => {

    const messageContainer = (message: Message): JSX.Element => {
        const selected: boolean = String(message.id) === selectedChat;

        return (
            <Link href={`?selectedChat=${message.id}`}
                className={`${selected ? 'bg-blue-100' : 'hover:bg-[var(--bg-hover-gray)] active:bg-[var(--bg-gray-200)]'}
                flex items-center gap-4 
                h-17 p-2 px-3 rounded-lg cursor-pointer select-none`}>
                <div className={`bg-gray-300 relative aspect-square h-full rounded-full ${message.image ?? 'p-2'}`}>
                    <img src={message.image ?? 'placeholder.svg'} alt='profile' draggable="false"  className='h-full aspect-square object-cover rounded-full' />
                </div>
                <div className='flex flex-col h-full w-full min-w-0'>
                    <div className='flex justify-between items-center h-full'>
                        <span className={`${fontStyle.messagerName}`}>{message.name}</span>
                        <span className={`${fontStyle.messageTime} ${message.unreadNo > 0 ? fontStyle.active : ''}`}>{message.time}</span>
                    </div>
                    <div className='flex justify-between items-center gap-1 h-full'>
                        <div className='flex gap-1 items-center min-w-0'>
                            <Check width={15} className={`${!message.received ? 'hidden' : ''} text-[var(--text-secondary)]`} />
                            <span className={`${fontStyle.message} ${fontStyle.truncate} !font-[var(--font-primary)]`}> {message.latestMessage}</span>
                        </div>
                        <div
                            className={`${message.unreadNo === 0 ? 'hidden' : ''}
                                bg-[var(--primary-blue)]
                                flex items-center justify-center
                                px-[6px] rounded-full`}>
                            <span className={fontStyle.messageNumber}>{message.unreadNo}</span>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }

    return (
        <div className='flex flex-col gap-3 p-5 pl-2 pr-1 pt-2'>
            {messages.map(message => (
                <React.Fragment key={message.id}>
                    {messageContainer(message)}
                </React.Fragment>
            ))}
        </div>
    )
}

export default ChatsMessageList;