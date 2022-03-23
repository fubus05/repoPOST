import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import { Link } from "react-router-dom";
import PostItem from './PostItem';
import '../style/infoUser.css'

const Post = () => {
    const {id} = useParams();
    const [post, setPosts] = useState([]);
    const [user, setUser] = useState([]);
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then(res => res.json())
            .then(data => setPosts(data))
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [id])


    return(
        <div>
        <h1>{user.name}</h1>
        {
            post.map(elem => (
              <PostItem key={elem.id} title={elem.title} body={elem.body}/>
            ))
        }
        <Link to={'/'}>
            <button>Get Back</button>
        </Link>
        </div>
    );
}




export default Post;
