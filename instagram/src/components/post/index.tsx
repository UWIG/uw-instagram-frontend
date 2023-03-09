import React,{useState} from 'react'
import Header from './header'
import Image from './image'
import Actions from './actions'
import Footer from './footer'
import Comments from './comments'
import AddComment from './add-comment'
import { postType } from './postType'
import Modal from './modal'

export default function Post(props:postType) {
  const [open, setOpen] = useState(false);

  return (
    <div>
        <div className="rounded col-span-4 border bg-white border-gray-primary mb-12">
        <Header username = {props.username} avatar={props.avatar} time_created={props.time_created}/>
        <Image mediaList={props.mediaList} caption="images" />
        <Actions likes = {props.likes} onComment={() => setOpen(true)}/>
        <Footer username={props.username} caption={props.caption} />
        <Comments comments={props.comments}/>
        <AddComment id={props.id} username={props.username} onCreateComment={props.onCreateComment} avatar={props.avatar}/>
        <Modal id={props.id} open={open} username = {props.username} caption={props.caption} likes={props.likes} avatar={props.avatar} time_created={props.time_created} comments={props.comments} mediaList={props.mediaList} onClose={() => setOpen(false)} onCreateComment={props.onCreateComment} opacity="bg-opacity-75"/>
        </div>
    </div>
  )
}
