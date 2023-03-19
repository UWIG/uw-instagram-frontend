import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import Post from './post'
import { postType } from './post/postType';
import { timelineType } from './types';
// import api from '../api/axiosConfig'

export default function Timeline(props:timelineType) {

  
  return (
    <div className="container col-span-2 mx-20 z-1">
    <Skeleton count={2} width={640} height={500} className="mb-5"/>
    {/* <p className='text-center text-2xl'>Follow people to see photos!</p> */}
    {props.posts && props.posts.map((post:postType, inx ) => <Post key={post.id} username={post.username} id={post.id} likes={post.likes} caption={post.caption} comments={post.comments} avatar={post.avatar} mediaList={post.mediaList} time_created={post.time_created} onCreateComment={props.onCreateComment} />)}
    </div>
  )
}

