import { useState,useEffect } from "react";
import SearchResultCard,{SearchResult} from './searchResultCard'
import axios from "axios";

const sampleCards: SearchResult[] = [
    {userID: "1", userName:'user1',userDescription:"user description here aa aaaaaaaa aaaaaa aaaa aaaaaa",avatarURL:'/images/avatars/role11.jpg',userURL:'/1',isFollowing:true},
    {userID: "2",userName:'user2',userDescription:"user description here aaaaaaaaaaaaaaaaaaaaaaaaaa",avatarURL:'/images/avatars/role12.jpg',userURL:'/2',isFollowing:true},
    {userID: "3",userName:'user3',userDescription:"user description here aaaaaaaaaaaaaaaaaaaaaaaaaa",avatarURL:'/images/avatars/role13.jpg',userURL:'/',isFollowing:false},
    {userID: "4",userName:'user4',userDescription:"user description here aaaaaaaaaaaaaaaaaaaaaaaaaa",avatarURL:'/images/avatars/role11.jpg',userURL:'/',isFollowing:true},
    {userID: "5",userName:'user5',userDescription:"user description here aaaaaaaaaaaaaaaaaaaaaaaaaa",avatarURL:'/images/avatars/role12.jpg',userURL:'/',isFollowing:true},
    {userID: "6",userName:'user6',userDescription:"user description here aaaaaaaaaaaaaaaaaaaaaaaaaa",avatarURL:'/images/avatars/role13.jpg',userURL:'/',isFollowing:false},
    {userID: "7",userName:'user7',userDescription:"user description here aaaaaaaaaaaaaaaaaaaaaaaaaa",avatarURL:'/images/avatars/role11.jpg',userURL:'/',isFollowing:true},
    {userID: "8",userName:'user8',userDescription:"user description here aaaaaaaaaaaaaaaaaaaaaaaaaa",avatarURL:'/images/avatars/role12.jpg',userURL:'/',isFollowing:true},
    {userID: "9",userName:'user9',userDescription:"user description here aaaaaaaaaaaaaaaaaaaaaaaaaa",avatarURL:'/images/avatars/role13.jpg',userURL:'/',isFollowing:false},
    {userID: "10",userName:'user10',userDescription:"user description here aaaaaaaaaaaaaaaaaaaaaaaaaa",avatarURL:'/images/avatars/role11.jpg',userURL:'/',isFollowing:true},
    {userID: "11",userName:'user11',userDescription:"user description here aaaaaaaaaaaaaaaaaaaaaaaaaa",avatarURL:'/images/avatars/role12.jpg',userURL:'/',isFollowing:true},
    {userID: "12",userName:'user12',userDescription:"user description here aaaaaaaaaaaaaaaaaaaaaaaaaa",avatarURL:'/images/avatars/role13.jpg',userURL:'/',isFollowing:false},
    {userID: "13",userName:'user13',userDescription:"user description here aaaaaaaaaaaaaaaaaaaaaaaaaa",avatarURL:'/images/avatars/role11.jpg',userURL:'/',isFollowing:true},
    {userID: "14",userName:'user14',userDescription:"user description here aaaaaaaaaaaaaaaaaaaaaaaaaa",avatarURL:'/images/avatars/role12.jpg',userURL:'/',isFollowing:true},
    {userID: "15",userName:'user15',userDescription:"user description here aaaaaaaaaaaaaaaaaaaaaaaaaa",avatarURL:'/images/avatars/role13.jpg',userURL:'/',isFollowing:false},
    {userID: "16",userName:'user16',userDescription:"user description here aaaaaaaaaaaaaaaaaaaaaaaaaa",avatarURL:'/images/avatars/role11.jpg',userURL:'/',isFollowing:true},
    {userID: "17",userName:'user17',userDescription:"user description here aaaaaaaaaaaaaaaaaaaaaaaaaa",avatarURL:'/images/avatars/role12.jpg',userURL:'/',isFollowing:true},
    {userID: "18",userName:'user18',userDescription:"user description here aaaaaaaaaaaaaaaaaaaaaaaaaa",avatarURL:'/images/avatars/role13.jpg',userURL:'/',isFollowing:false},
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
        const delayHandleSearchRequest = setTimeout(()=>{
            resultCards.length=0;
            let keyWords:string[] = inputValue.trim().replace(/\s\s+/g, ' ').split(' ');
            console.log("handle key words confirmed")
            /** TO DO: send ajax
            const formData = new FormData();
            for(const keyWord of keyWords){
                formData.append("keywords",keyWord);
            }
            await axios({
                method : "post",
                url : "./search",
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
            });
            */
            sampleCards.map((result)=>{
                const userName = result.userName;
                for(const keyword of keyWords){
                    if(keyword !== "" && userName.match(keyword)){
                        setResultCards((resultCards)=>[...resultCards,result])
                        break;
                    }
                }
            });
        },500);
        return ()=>clearTimeout(delayHandleSearchRequest);
    },[inputValue]);

    console.log("rerender")

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






