import React from 'react'

const GptSearch = () => {
  return (
    <>
    <div className="absolute -z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="background"
        />
      </div>
    <div className='flex rounded-md align-middle justify-center pt-52'>
        <form className='p-4 py-6 flex w-[50%] bg-black'>
          <input className='mr-2 p-4 w-[90%]' type='text' placeholder='what would you like to watch today?'/>
          <button className='px-2 text-white bg-red-800'>Search</button>
        </form>
    </div>
    </>
  )
}

export default GptSearch