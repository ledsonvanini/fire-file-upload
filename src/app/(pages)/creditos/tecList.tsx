import React from 'react'

import {ReactItem, NexItem, FirestoreItem} from "@/app/(pages)/creditos/tecItem"

export default function TecList() {
  return (
    <div className='flex flex-wrap gap-3 overflow-auto'>     
        <ReactItem />
        <NexItem />
        {/* <Tailwindtem /> */}
        <FirestoreItem />
      
    </div>
  )
}
