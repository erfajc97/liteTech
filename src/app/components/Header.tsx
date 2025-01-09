"use client"
import LogoIcon from '@/assets/svg/LogoIcon';
import RigthArrowIcon from '@/assets/svg/RigthArrowIcon';
import { Button, Link, useDisclosure } from '@nextui-org/react';
import NewPostModal from '@/features/posts/components/modal/NewPostModal';

const Header = () => {
  const { isOpen, onOpenChange, onOpen } = useDisclosure();
  const handleOpenModal = () => {
    onOpen();
  }
  return (
    <div className='bg-black/70 fixed top-0 left-0 right-0 flex items-center justify-between container max-w-screen-2xl mx-auto p-5 lg:px-2 z-50 cursor-pointer'>
      <Link href='/' className='flex items-center gap-2'>
        <LogoIcon />
        <p className='text-2xl lg:text-3xl font-bold text-white'>Lite-tech</p>
      </Link>
      <div>
        <Button className='text-white bg-transparent text-lg lg:text-xl ' onPress={handleOpenModal}>
          <p>New Post</p>
          <RigthArrowIcon />
        </Button>
      </div>
      <NewPostModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
};

export default Header;