import Image from 'next/image';
import React from 'react';

const InfoDetail = () => {
  return (
    <div className='flex flex-col gap-8'>
      <div>
        <p className='text-xl font-semibold pb-5 max-w-[600px]'>Curabitur sit amet sapien at velit fringilla tincidunt porttitor eget lacus. Sed mauris libero, malesuada et venenatis vitae, porta ac enim. </p>
        <p className='text-base text-[#595959] max-w-[600px] leading-8 text-justify'>Curabitur sit amet sapien at velit fringilla tincidunt porttitor eget lacus. Sed mauris libero, malesuada et venenatis vitae, porta ac enim. Aliquam erat volutpat. Cras tristique eleifend dolor, et ultricies nisl feugiat sed. Pellentesque blandit orci eu velit vehicula commodo. Phasellus imperdiet finibus ex eget gravida. Maecenas vitae molestie dolor. Nulla hendrerit ipsum leo, in tempor urna interdum ut. Sed molestie sodales quam. Mauris sollicitudin metus at eros imperdiet, vitae pulvinar nunc condimentum. Pellentesque rhoncus, lacus sit amet mollis placerat, nulla lectus maximus justo, quis gravida elit augue id lacus</p>
      </div>
      <Image src="/png/Image4.png" alt="Image" width={600} height={200} />
      <div>
        <p className='text-xl font-semibold pb-5 max-w-[600px]'>Curabitur sit amet sapien at velit fringilla tincidunt porttitor eget lacus. Sed mauris libero, malesuada et venenatis vitae, porta ac enim. </p>
        <p className='text-base text-[#595959] max-w-[600px] leading-8 text-justify'>Curabitur sit amet sapien at velit fringilla tincidunt porttitor eget lacus. Sed mauris libero, malesuada et venenatis vitae, porta ac enim. Aliquam erat volutpat. Cras tristique eleifend dolor, et ultricies nisl feugiat sed. Pellentesque blandit orci eu velit vehicula commodo. Phasellus imperdiet finibus ex eget gravida. Maecenas vitae molestie dolor. Nulla hendrerit ipsum leo, in tempor urna interdum ut. Sed molestie sodales quam. Mauris sollicitudin metus at eros imperdiet, vitae pulvinar nunc condimentum. Pellentesque rhoncus, lacus sit amet mollis placerat, nulla lectus maximus justo, quis gravida elit augue id lacus</p>
      </div>
      <Image src="/png/Image5.png" alt="Image" width={600} height={200} />
      <div className=' max-w-[500px] mx-auto border-l-2 border-[#D8F34E] pl-5'>
        <p className='text-start'>Commodo eget mi. In orci nunc, laoreet eleifend sem vel, suscipitlon lorem ipsum</p>
      </div>
      <p className='text-base text-[#595959] max-w-[600px] leading-8 text-justify mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel sem in nunc porttitor dapibus a sollicitudin nunc. Sed lacinia nisl a magna congue, maximus tristique tellus finibus. </p>
      <div>
        <p className='text-xl font-semibold pb-5 max-w-[600px]'>Nullam tristique tellus purus </p>
        <p className='text-base text-[#595959] max-w-[600px] leading-8 text-justify'>Maecenas iaculis et dolor ac laoreet. Curabitur placerat porta dolor. Quisque consectetur vitae odio ac posuere. Nullam tristique tellus purus, quis aliquet purus sodales sed. Sed hendrerit gravida augue luctus suscipit. Maecenas id faucibus magna. Sed placerat orci ac orci blandit, at porta ante ornare. Praesent tristique sollicitudin fringilla. Morbi at laoreet enim, sed viverra ligula. Sed laoreet, elit vel faucibus semper, urna ante euismod sem, accumsan volutpat augue ante ut elit. Phasellus rutrum, nulla vitae euismod blandit, elit nisi placerat neque, vitae facilisis massa sapien a mi. Fusce sit amet blandit lectus. </p>
      </div>
    </div>
  );
};

export default InfoDetail;