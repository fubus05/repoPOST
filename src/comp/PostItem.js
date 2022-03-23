import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import PostRequest from './PostRequest';
const PostItem = ({title, body}) => {
    const [show, setShow] = useState(false);
    const [secShow, setSecShow] = useState(false);
    const [com, setCom] = useState([]);
    const {id} = useParams();
  
    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then(res => res.json())
      .then(data => setCom(data))
    }, [id])
  
    return (
      <div className='hider'>
        <p onClick={() => setShow(!show)}>{title}</p>
        <div style={show ? ({ display: 'block' }) : ({ display: 'none' })}>
            <p>{body}</p>
            <div className='comment'>
            <h1 onClick={() => setSecShow(!secShow)}>Comments</h1>
            <h1>Add Comments</h1>
            <PostRequest/>
            </div>
            <div style={secShow ? ({ display: 'block' }) : ({ display: 'none' })}>
            {
                com.map(prop => (
                    <div className='userBorder' key={prop.id}>
                        <div className='userComments'>
                          <p>{prop.name}</p>
                          <p>{prop.email}</p>
                        </div>
                        <p>{prop.body}</p>
                    </div>
                ))
            }
            </div>
        </div>
      </div>
    )
  }

export default PostItem