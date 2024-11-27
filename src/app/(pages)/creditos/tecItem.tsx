'use client'
import Image from "next/image"

import ReactIcon from '@/components/icons/react-ico.svg'
import NextIcon from '@/components/icons/next-ico.svg'
import FirestoreIcon from '@/components/icons/firebase-ico.svg'
// import TailwindIcon from '@/components/icons/tailwind-icon.svg'


export type TechItemProp = {
    name?: string | number
    ico?: string | number
    
}

export function ReactItem() {
  return (
    <div className="flex flex-col max-w-28  text-center gap-2 p-4 bg-white rounded-lg shadow-sm">
       <Image 
        src={ReactIcon}
        width={120}
        height={120}
        alt="Icone React"
       />
        <span>ReactJS</span>
    </div>
  )
}
export function NexItem() {
  return (
    <div className="flex flex-col max-w-28  text-center gap-2 p-4 bg-white rounded-lg shadow-sm">
       <Image 
        src={NextIcon}
        width={120}
        height={120}
        alt="Icone React"
       />
        <span>NextJS</span>
    </div>
  )
}
export function Tailwindtem() {
  return (
    <div className="flex flex-col max-w-28  text-center gap-2 p-4 bg-white rounded-lg shadow-sm">
       <Image 
        src={TailwindIcon}
        width={120}
        height={120}
        alt="Icone React"
       />
        <span>NextJS</span>
    </div>
  )
}
export function FirestoreItem() {
  return (
    <div className="flex flex-col max-w-28  text-center gap-2 p-4 bg-white rounded-lg shadow-sm">
       <Image 
        src={FirestoreIcon}
        width={120}
        height={120}
        alt="Icone React"
       />
        <span>Firestore</span>
    </div>
  )
}

