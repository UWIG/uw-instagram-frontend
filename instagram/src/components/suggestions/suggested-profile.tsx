import React from 'react'

export default function SuggestedProfile() {
  return (
    <div className="flex flex-row items-center align-items justify-between">
        <div className="flex items-center justify-between">
            <img className="rounded-full w-8 h-8 flex mr-3" src="./images/avatars/cat2.jpg" alt="jjsd" />
            <p className="font-bold text-sm">Duke Olivia</p>
        </div>
        <div>
            <button className="text-xs font-bold text-blue-medium custom-blue" type='button'>Follow</button>
        </div>

    </div>
  )
}
