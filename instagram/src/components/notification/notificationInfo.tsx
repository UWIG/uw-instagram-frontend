import { useState,useEffect } from "react";
import axiosAPI from "../../config/axiosConfig"
import {Link} from 'react-router-dom'


export interface notificationData{
    notificationId:string,
    type:string,
    username_from:string,
    username_to:string,
    whether_read:boolean,
    comment:string
    postId:string
}

export default function NotificationBlock(props:{data:notificationData,currentUser:string,isSelected:boolean,handleChange:(arg0:string)=>void}){
    const [blockSelected,setBlockSelected] = useState(props.isSelected);
    const [data,setData]=useState(props.data);
    const [isRead,setIsRead]=useState(props.data.whether_read);
    const [isCollapsed,setIsCollapsed] = useState(false);

    const handleClicked= ()=>{
        if(!isRead){
            setIsRead(true);
            props.handleChange(data.notificationId);
        }
        setIsCollapsed(!isCollapsed);
    };

    return (
        <>{isRead ? 
            (
                <div className="flex flex-row w-full hover:bg-slate-100 p-1" onClick={handleClicked}>
                    {isCollapsed ? (<>
                        
                        <div cursor-pointer><span className="inline-block w-2 h-2 mr-2 bg-red-600 rounded-full"></span>{data.username_from} is following you</div>
                        </>)
                        :
                        (<>
                        <div><Link to={`/p/${data.username_from}`}>{data.username_from}</Link> is following you</div>
                        </>)
                    }
                </div>
            )
            :
            (
                <div className="flex flex-row w-full hover:bg-slate-100 p-1" onClick={handleClicked}>
                    {isCollapsed ? (<>
                        <div cursor-pointer>{data.username_from} is following you</div>
                        </>)
                        :
                        (<>
                        <div><Link to={`/p/${data.username_from}`}>{data.username_from}</Link> is following you</div>
                        </>)
                    }
                </div>
            )
        }
        </>
        
    );
}