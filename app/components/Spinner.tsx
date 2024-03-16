import Image from 'next/image';
import React from 'react';
import snipper from '@/public/spinner.gif'

const Spinner = () => {
  return (
    <>
      <Image className='w-[200px] m-auto block' src={snipper} alt='loading..' />
    </>
  );
};

export default Spinner;