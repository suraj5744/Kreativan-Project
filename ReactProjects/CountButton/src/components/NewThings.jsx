import React, { useState } from 'react'

const NewThings = () => {
    const [showBox, setShowBox] = useState(false);

  return (
    <div className='flex flex-col items-center gap-4'>
      <div className="box">
        Hiii
      </div>
      <button className='bg-black text-white px-4 py-2 rounded-md'>Open</button>
    </div>
  )
}

export default NewThings
