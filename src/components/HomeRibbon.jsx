import React from 'react'

function HomeRibbon() {
  return (
    <div className='no-print h-auto py-3 w-full flex flex-col justify-center items-center gap-2 md:my-5'>
     <p className='text-2xl md:text-3xl font-bold '>Generate cover letter for <span className='text-red-400'>.com.np</span></p>
     <p className='hidden text-center text-md font-light text-gray-500 md:px-[28%] md:flex'>For the domain registration, you need to submit a Cover letter. Not sure how to write a cover letter? Get .np Domain Registration Request Cover Letter now.</p>
     <p className='text-center text-md font-light text-gray-500 md:px-[28%] md:hidden'>Fill up all the fields and click print to generate cover letter.</p>
    </div>
  )
}

export default HomeRibbon