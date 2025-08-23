export type Message = {
    id: number,
    name: string,
    time: string,
    latestMessage: string,
    unreadNo: number,
    received: boolean,
    image: string | null,
};

export const messages: Message[] = [
    {
        id: 1,
        name: 'Faisal Samer',
        time: 'Yesterday',
        latestMessage: 'Hi bro, where are you??',
        unreadNo: 6,
        received: true,
        image: 'https://wallpapers.com/images/hd/cool-neon-blue-profile-picture-u9y9ydo971k9mdcf.jpg',

    },
    {
        id: 2,
        name: 'Sarah Lee',
        time: 'Today',
        latestMessage: 'Don’t forget the meeting at 3 PM.',
        unreadNo: 0,
        received: true,
        image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-olly-733872.jpg&fm=jpg',
      },
      {
        id: 3,
        name: 'Mike Johnson',
        time: '2 hours ago',
        latestMessage: 'Can you send me the files?',
        unreadNo: 2,
        received: false,
        image: null,
      },
      {
        id: 4,
        name: 'Emily Davis',
        time: 'Monday',
        latestMessage: 'Had a great time yesterday!',
        unreadNo: 0,
        received: true,
        image: null
      },
      {
        id: 5,
        name: 'John Smith',
        time: '3 days ago',
        latestMessage: 'Let’s catch up this weekend.',
        unreadNo: 1,
        received: false,
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
      },
      {
        id: 6,
        name: 'Anna Taylor',
        time: 'Yesterday',
        latestMessage: 'Thanks for your help!',
        unreadNo: 0,
        received: true,
        image: null,
      }      
];