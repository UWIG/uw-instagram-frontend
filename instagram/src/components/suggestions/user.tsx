import React, {useContext} from 'react'
import Skeleton from 'react-loading-skeleton'
import UserContext from '../../contexts/user-context'

export default function User() {
  const {username,fullname,avatar} = useContext(UserContext);
  return (
    <div>
        <Skeleton count={1} height={61}/>
        <div className="grid grid-cols-4 gap-4 mb-6 items-center">
            <div className='flex items-center justify-between col-span-1'>
                <img className='rounded-full w-16 h-16 flex mr-3'  src={"data:image/png;base64," + avatar} alt="" />
            </div>
            <div className="col-span-3">
                <p className="font-bold text-sm">{username}</p>
                <p className="text-sm">{fullname}</p>
            
            </div>
        </div>

    </div>
  )
}
