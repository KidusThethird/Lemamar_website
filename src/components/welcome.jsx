import React from 'react'

export const Welcome = (props) => {
  const {welcomeText} = props;
    return (
    <div className='h-72 md:h-40 py-10 px-8 text-lg bg-purple-600 text-white text-center'>
        <h1>{welcomeText}</h1>
    </div>
  )
}

