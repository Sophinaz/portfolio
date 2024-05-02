import React from 'react'

const Title = ({title, subtitle}) => {
    return (
      <div className=' flex my-32 flex-col text-center space-y-2'>
          <p className=' font-semibold'>{subtitle}</p>
          <h2 className=' text-3xl font-bold'>{title}</h2>
      </div>
    )
  }
  
export default Title