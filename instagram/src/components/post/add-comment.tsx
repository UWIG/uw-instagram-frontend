import React, { useContext, useState } from 'react'
import { postAddComment } from './postType';
import axios from 'axios';
import UserContext from '../../contexts/user-context';

export default function AddComment(props: postAddComment) {
  const [comment, setComment] = useState("");
  const {user} = useContext(UserContext);
  const formData = new FormData();
  formData.append("comment", comment);
  const newComment = {
    username: user.username,
    id: props.id,
    comment: comment,
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addComment();
    setComment("");
  }

  async function addComment() {
    const response = await axios.post("http://localhost:8080/api/posts",newComment)
          .then(function(response){
            console.log(response);
          })
          .catch(function(err){
            console.error(err);
          });
    props.onCreateComment();
  }
  
  return (
    <div className='border-t border-gray-primary'>
        <form className='flex justify-between pl-0 pr-5' method='POST' onSubmit={handleSubmit}>
        <input data-testid="input-comment" type="text" aria-label='Add a comment' autoComplete='off' className='text-sm text-gray-base w-full mr-3 py-5 px-4'
        name='add-comment' placeholder='Add a comment' value={comment} onChange={(e) => setComment(e.target.value) }/>
        {comment !== "" && <button  style={{ "color": "rgb(0, 149, 246)" }} className="text-sm font-bold text-blue-medium" data-testid="post-button" type='submit'>POST</button>}
        </form>
    </div>
  )
}



