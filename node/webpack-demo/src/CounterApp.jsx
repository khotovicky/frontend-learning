import React, { useState } from "./react"

export const Post = ({ title }) => {
    
    const [likes, setLikes] = useState(0)

    const putLike = () => {
        setLikes(likes + 1)
    }

    return <div>
        <h5>{title}</h5>
        <span style="color: red;">{likes}</span><button onclick={putLike}>LIKE</button>
    </div>
}

const initialPosts = [
    { title: "title1", id: "546" },
    { title: "title2", id: "545676" },
    { title: "title3", id: "54123126" }
]

export const App = () => {
    
    const [posts, setPosts] = useState(initialPosts)

    const createPost = () => {
        const newPosts = [...posts, { id: Date.now().toString(), title: Date.now().toString() }]
        setPosts(newPosts)
    }

    return <div>
        { posts.map((post) => <Post key={post.id} title={post.title} />) }
        <button onclick={createPost}> Add new post </button>
    </div>

}

export const CounterApp = () => <App key="app" />