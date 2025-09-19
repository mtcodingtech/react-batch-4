import React from 'react'

function CustomButton({btnText, startIcon, endIcon, clickEvent}) {
  return (
    <>
        <button onClick={clickEvent} className="bg-Avocado-600 rounded-sm text-white pt-0.5 pb-1 px-3 text-sm">
           {startIcon} {btnText} {endIcon}
        </button>
    </>
  )
}

export default CustomButton