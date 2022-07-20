import Post from "../../components/Post"
import { useEffect, useState } from "react"

const PostSCreen = () => {

    const [posts, setPosts] = useState([])

    const getPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setPosts(data)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        getPosts()
    }, [])

    return(
        <div style={{
        }}>
            {posts.map(post => <Post body={post.body} userId={post.userId} />)}
        </div>
    )
}

export default PostSCreen;