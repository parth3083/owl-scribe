import React from 'react'
import MaxWidth from '../components/MaxWidth'

function page() {
  return (
    <div className=' flex-1 w-screen '>
      <MaxWidth className='w-full flex flex-col items-center gap-10 pt-10'>
        {/* HERO SECTION 1 */}
        <section className='hero1 w-full flex items-center gap-10 h-[70vh] bg-green-400'>
          <div className="left flex-1 h-full">This is the left side </div>
          <div className="right flex-1 h-full">Thsi is the right side </div>

        </section>
     </MaxWidth>
    </div>
  )
}

export default page