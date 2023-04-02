import React from 'react'
import SuggestedProfiles from './suggested-profiles'
import User from './user'

export default function Suggestions() {
  return (
    <div className='mx-20 col-span-2 max-w-xs mt-10'>
    <User/>
    <SuggestedProfiles/>
    </div>
  )
}
