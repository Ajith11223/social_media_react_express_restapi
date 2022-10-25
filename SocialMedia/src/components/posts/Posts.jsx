import React from 'react'
import './Posts.css'
import {useDispatch,useSelector} from 'react-redux'
import Post from '../Post/Post'
import { useEffect } from 'react'
import { getTimelinePosts } from '../../action/PostAction'
import {useParams} from 'react-router-dom'


const Posts = () => {

  const dispatch = useDispatch()
  const params = useParams()
  console.log(params.id);
  const {user} = useSelector((state)=> state.authReducer.authData)
  let {posts,loading} = useSelector((state)=> state.postReducer)

  useEffect(()=>{
    dispatch(getTimelinePosts(user._id))
  },[])

  if(!posts) return " no posts";
  console.log(456753);
console.log(params.id);
  if(params.id){
    posts = posts.filter((post)=> post.userId === params.id)
  }
  return (
    <div className="Posts">
     {loading? "Fetching posts..." :  posts.map((post,id)=>{

        return <Post  data = {post} id = {id}/>
     })}
    </div>

  )
}

export default Posts