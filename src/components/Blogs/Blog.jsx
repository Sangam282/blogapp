import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import Axios from "./../../api/server"


const Blog = () => {
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        window.scrollTo(0,0);
    })

    useEffect(() => {
        const fetchBlog = async () => {
            const res = await Axios.get("/api/v1/bolgs/" + id);
            setBlog(res.data.data);
        };
        fetchBlog();
    }, [id]);



  return (
    <div className='Blog'>
        <Link to ></Link>

    </div>
  )
}

export default Blog
