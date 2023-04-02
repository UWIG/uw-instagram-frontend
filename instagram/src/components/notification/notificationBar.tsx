import { useState,useEffect } from "react";
import axiosAPI from "../../config/axiosConfig"
import NotificationBlock,{notificationData} from "./notificationInfo";


export default function NotificationBar(props:{currentUser:string}){
    const [readList,setReadList]=useState<string[]>([])
    const [deleteList,setDeleteList]=useState<string[]>([])
    const [infos,setInfos]=useState<notificationData[]>([])
    const [currentUser,setCurrentUser]=useState<string>(props.currentUser);

    
    const handleGetNotification = async ()=>{
        await axiosAPI.get(`/api/notification/${currentUser}`)
        .then(function (res){
            let results = res.data;
            let infosData:notificationData[] = []; 
            results.map((result:any)=>{
                if(result.type==="follow"){
                    let tempInfo:notificationData = {notificationId:result.idString,
                                                    type:result.type,
                                                    username_from:result.username_from,
                                                    username_to:result.username_to,
                                                    whether_read:result.whether_read,
                                                    comment:result.comment,
                                                    postId:result.postId};
                    infosData.push(tempInfo);
                }
            });
            setInfos(infosData);
        }).catch(function (err){
            console.error(err);            
        });
    }

    const handleChangeRead = (id:string)=>{
        setReadList([...readList,id]);
    }

    const handleUnmount = async ()=>{
        const formData = new FormData();
        for(const id of readList){
            formData.append("notificationId[]",id);
        }
        await axiosAPI.post("/api/notification/change",formData,{
            headers : {"Content-Type" : "application/json;charset=utf-8"}
        }).then(function (res){
        }).catch(function (err){
            console.error(err);
        });
    }

    useEffect(()=>{
        handleGetNotification();

        return ()=>{

        }
    });

    return (
        <div className='flex flex-col pl-2 pr-2 bg-white border-gray-primary h-screen w-96 border-r border-l rounded-r-[1rem]'>
            
            <div className="pt-6 pb-8">
                <p className="font-medium text-2xl font-sans">Notification</p>
            </div> 
            
            <div className="flex,flex-row w-full">

            </div>

            <div className="overflow-y-scroll w-full border-t-2 border-slate-150">
                {infos.map((info)=>{
                    return (
                        <NotificationBlock data={info} currentUser={currentUser} isSelected={false} handleChange={handleChangeRead}/>                  
                    );
                })}
            </div>
           
        </div>
    );
}






