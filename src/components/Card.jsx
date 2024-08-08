import React from 'react'

function Card({values,handleClick,index}) {
  const {image,name,proffesion,friend} = values;


  
  return (
    <div className='h-62 w-52 bg-zinc-600 m-5'>
      <div className='h-36  w-full bg-red-300'>
        <img className='h-full w-full forced-color-adjust-auto' src={image} alt="" />
      </div>
      <div className='h-26 w-full   bg-yellow-200'>
      <h1 className='ml-5 pt-2 size-md text-xl font-semibold'>{name}</h1>
      <h3 className='ml-5 font-normal'>{proffesion}</h3>
      <button onClick={()=>handleClick(index)} className={`${friend ? "bg-green-600" :"bg-blue-500"} border-red-500  ml-2 p-1 rounded-lg flex justify-center items-center px-1  hover:tracking-wide `}>{friend ? "friends" : "add friend"}</button>
      </div>
    </div>
  )
}

export default Card
