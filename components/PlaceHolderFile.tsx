"use client"

import React from 'react'
import { Button } from './ui/button'
import { PlusCircleIcon } from 'lucide-react'
import { useRouter } from 'next/router'

function PlaceHolderFile() {

    const Router = useRouter();

  const handleClick = () => {
    // check if user is free or pro plan and if limit exceed then push to upgrade page else to upload page
         Router.push('/dashboard/upload');  
};

  return (
     <Button onClick={handleClick} className='w-64 h-80 bg-gray-200 text-gray-400 drop-shadow-md'>
        <PlusCircleIcon/>
        <p>Upload the file</p>
     </Button>
  )
}

export default PlaceHolderFile