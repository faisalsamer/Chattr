'use client';
import React, { useState } from 'react'
import BackButton from './ui/BackButton';
import Image from 'next/image';
import { Camera } from 'lucide-react';
import ButtonLayer from './ui/ButtonLayer';
import { Check } from 'lucide-react';
import Input from './ui/Input';
import ProfilePhotoEditor from './ProfilePhotoEditor';



const EditProfileSection: React.FC = () => {
  const [isButtonVisible, setIsButtonVisible] = useState<boolean>(false);
  const inputDescriptionStyle = 'text-xs text-gray-400 mt-3';
  const defaultData = {
    firstName: 'Faisal Samer Mohammed Hael',
    lastName: 'Al-Madhehagi',
    bio: 'Hi, my name is Faisal and I like web development!',
    username: 'fsm_3455'
  }

  const handleButtonVisibility = (): void => {
    setIsButtonVisible(true);
  }

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>):void => {
    e.preventDefault();
  }

  return (
    <div id='editProfileSection' className='flex flex-col section h-full'>
      <div className='flex items-center p-3 gap-4'>
        <BackButton backTo='profileSection' />
        <h1>Edit profile</h1>
      </div>

      <form onSubmit={handleSubmit} className='py-5 flex-1 overflow-y-scroll scrollable'>
        <div className='px-5 flex items-center justify-center mb-5'>
          <div className='relative aspect-[1/1] h-30 overflow-hidden rounded-full'>
            <Image src={'/FaisalPhoto.jpg'} fill className='object-contain' alt='Profile Photo' />
            <ButtonLayer
              className='bg-black/50 hover:scale-120 duration-200 rounded-full'>
              <Camera color='white' size={35} />
            </ButtonLayer>
          </div>
        </div>

        <div className='flex flex-col w-full'>
          <div className="px-5 flex flex-col gap-5">
            <Input type="text" id="first name" defaultValue={defaultData.firstName} onChangeValue={handleButtonVisibility} buttonVisible={isButtonVisible} minLength={3} maxLength={50} placeholder="First name" required />
            <Input type="text" id="last-name" defaultValue={defaultData.lastName} onChangeValue={handleButtonVisibility} buttonVisible={isButtonVisible} maxLength={25} placeholder="Last name" />
            <div>
              <Input type="text" id="bio" defaultValue={defaultData.bio} onChangeValue={handleButtonVisibility} buttonVisible={isButtonVisible} maxLength={70} placeholder="Bio" />
              <p className={inputDescriptionStyle}>Tell people about you.</p>
            </div>
          </div>

          <div className='h-2 bg-stone-100 my-5 shadow-[inset_0_1px_4px_rgba(0,0,0,0.07)]' />

          <div className="px-5 flex flex-col">
            <Input type="text" id="username" defaultValue={defaultData.username} onChangeValue={handleButtonVisibility} buttonVisible={isButtonVisible} maxLength={12} placeholder="Username" required />
            <p className={inputDescriptionStyle}>Your username is used by people to search for your profile.</p>
          </div>
          <button type='submit'
            className={`fixed right-4 duration-300
          flex items-center justify-center
          bg-blue-500 hover:bg-blue-600 h-12 aspect-square rounded-full cursor-pointer
          ${isButtonVisible ? 'bottom-4' : 'bottom-0 translate-y-[100%]'}`}>
            <Check color='white' />
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditProfileSection;