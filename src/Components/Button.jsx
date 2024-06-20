import React from 'react'

const Button = ({ButtonText}) => {
  return (
    <button className="bg-pro-blue py-2 px-3 rounded-md text-slate-100 font-semibold hover:bg-slate-600 transition duration-700 ease-in-out">
        {ButtonText}
    </button>
  )
}

export default Button