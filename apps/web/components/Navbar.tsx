
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button} from "../../../packages/ui/components/ui/button"


function Navbar() {
  return (
    <div className='w-full h-16 z-50 backdrop-blur-xl shadow-xl sticky top-0 flex items-center justify-between px-5 sm:px-10'>
      <Link href={'/'} className='flex text-lg sm:text-2xl font-semibold  items-center gap-1'>
        <div className='size-12 '>
          <Image
            src={"/logo.png"}
            alt="logo"
            width={500}
            height={500}
            quality={100}
          />
      </div>
        <span>Owl Scribe </span>
      </Link>
      <Button className='px-4 py-1 border border-[#8B4513]  text-[#8B4513] rounded-full cursor-pointer hover:bg-[#8B4513] hover:text-white transition-colors   duration-200 ease-in-out'>
        Add to Chrome
</Button>

    </div>
  )
}

export default Navbar