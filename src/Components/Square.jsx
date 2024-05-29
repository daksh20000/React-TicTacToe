import React from 'react'

function Square(props) {
  return (
    <div onClick={props.onClick} className='cursor-pointer border-2 border-black w-20 h-20 flex justify-center items-center'>
        {props.value}
    </div>
  )
}

export default Square
