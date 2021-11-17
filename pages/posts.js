import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MainLayout } from '../components/MainLayout';

export default function Posts({posts}) {
    // const [posts, setPosts] = useState([]);

    // useEffect(async () => {
    //     const responce = await fetch('http://localhost:4200/posts')
    //     const data = await responce.json()
    //     setPosts(data);
    // }, [])

    return (
        <MainLayout title ={'Post Page'}>             
            <h1>Posts Page</h1>
            <ul>
               {posts.map(post => (
                   <li key={post.id}>
                       <Link href={`/post/[id]`} as={`/post/${post.id}`}>
                           <a>
                               {post.title}
                            </a>
                        </Link>
                   </li>
               ))} 
            </ul>
        </MainLayout>
       
    )  
}
Posts.getInitialProps = async () => {
    const responce = await fetch('http://localhost:4200/posts')
    const posts = await responce.json();
    return{
        posts
    }
}