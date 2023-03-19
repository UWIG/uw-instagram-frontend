import React,{useContext} from 'react'
import UserContext from '../../contexts/user-context';
import { modelFormType } from './sidebarType'

export default function ModalForm(props:modelFormType) {
    const {user} = useContext(UserContext);
    return (
        <div className='flex col-span-1'>
            <div className="p-4">
                <div className="flex">
                    <img className="rounded-full h-8 w-8 flex wr-3 " src="https://drscdn.500px.org/photo/1061497838/q%3D80_m%3D1500_of%3D1/v2?sig=50f03aaa9f8f72ff52b541175f0e0af804a22517c8c096fb30e23318d938a658" alt="" />
                    <p className="text-sm font-bold ml-3">{user.username}</p>
                </div>
                <textarea data-testid="input-text" className='mt-3 focus:outline-none' onChange={(e) => props.setCaption(e.target.value)} value={props.caption} rows={10} cols={32} placeholder='Write a caption...' ></textarea>
            </div>
        </div>
    )
}
