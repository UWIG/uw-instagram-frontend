import { useState,useEffect } from "react";
import SearchResultCard,{SearchResult} from './searchResultCard'
import axios from "axios";

const sampleCards: SearchResult[] = [
    {userName:'user1',avatarURL:'/images/avatars/role11.jpg',isFollowing:true},
    {userName:'user2',avatarURL:'/images/avatars/role12.jpg',isFollowing:true},
    {userName:'user3',avatarURL:'/images/avatars/role13.jpg',isFollowing:false},
    {userName:'user4',avatarURL:'/images/avatars/role11.jpg', isFollowing:true},
    {userName:'user5',avatarURL:'/images/avatars/role12.jpg', isFollowing:true},
    {userName:'user6',avatarURL:'/images/avatars/role13.jpg', isFollowing:false},
    {userName:'user7',avatarURL:'/images/avatars/role11.jpg', isFollowing:true},
    {userName:'user8', avatarURL:'/images/avatars/role12.jpg',  isFollowing:true},
    {userName:'user9', avatarURL:'/images/avatars/role13.jpg',  isFollowing:false},
    {userName:'user10',avatarURL:'/images/avatars/role11.jpg',  isFollowing:true},
    {userName:'user11',avatarURL:'/images/avatars/role12.jpg',  isFollowing:true},
    {userName:'user12',avatarURL:'/images/avatars/role13.jpg',  isFollowing:false},
    {userName:'user13',avatarURL:'/images/avatars/role11.jpg',  isFollowing:true},
    {userName:'user14',avatarURL:'/images/avatars/role12.jpg',  isFollowing:true},
    {userName:'user15',avatarURL:'/images/avatars/role13.jpg',  isFollowing:false},
    {userName:'user16',avatarURL:'/images/avatars/role11.jpg',  isFollowing:true},
    {userName:'user17',avatarURL:'/images/avatars/role12.jpg',  isFollowing:true},
    {userName:'user18',avatarURL:'/images/avatars/role13.jpg',  isFollowing:false},
];

export interface searchBarParas{
    contentBuffer : string;
    handleReturnBuffer : (arg0:string)=>void;
}

export default function SearchBar(props:searchBarParas){
    const [inputValue,setInputValue] = useState<string>(props.contentBuffer);
    const [resultCards,setResultCards] = useState<SearchResult[]>([]);
    
    const handleReturnBuffer = props.handleReturnBuffer;
    
    useEffect(()=>{
        const delayHandleSearchRequest = setTimeout(async ()=>{
            resultCards.length=0;
            let keyWords:string[] = inputValue.trim().replace(/\s\s+/g, ' ').split(' ');
            console.log("handle key words confirmed")
            
            const formData = new FormData();
            for(const keyWord of keyWords){
                formData.append("keywords",keyWord);
            }
            await axios({
                method : "post",
                url : "/search",
                data: formData,
                headers : {"Content-Type" : "multipart/form-data"},
            }).then(function (res){
                let results = res.data;
                if(Array.isArray(results)){
                    setResultCards(results);
                }
                else{//res.data is not array
                    throw new Error("incorrect reponse of search: not an array of results");
                }
            }).catch(function (err){
                console.error(err);
                setResultCards([]);
            });
            

            /*
            sampleCards.map((result)=>{
                const userName = result.userName;
                for(const keyword of keyWords){
                    if(keyword !== "" && userName.match(keyword)){
                        setResultCards((resultCards)=>[...resultCards,result])
                        break;
                    }
                }
            });
            */
        },500);
        return ()=>clearTimeout(delayHandleSearchRequest);
    },[inputValue]);

    return (
        <div className='flex flex-col pl-2 pr-2 bg-white border-gray-primary h-screen w-96 border-r border-l rounded-r-[1rem]'>
            
            <div className="pt-6 pb-8">
                <p className="font-medium text-2xl font-sans">Search</p>
            </div> 

            <form className="searchForm bg-gray-100 " onSubmit={e => { e.preventDefault();}}>
                <input type="search" 
                        onChange={(event) => {
                            setInputValue(event.target.value);
                            handleReturnBuffer(event.target.value);
                        }}
                        placeholder="Search"
                        value = {inputValue} 
                        className="searchBox outline-none bg-transparent focus:border-tranparent"/>
                <button type="button" className="searchButton">Submit</button>
            </form>
            <div className="pt-6"></div>
            
            <div className="overflow-y-scroll w-full border-t-2 border-slate-150">
                {resultCards.map((result)=>{
                    return (
                        <SearchResultCard result={result}/>                  
                    );
                })}
            </div>
            
            
            
        </div>
    );
}






