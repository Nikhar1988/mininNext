import { useState, useEffect } from 'react';
import { MainLayout } from '../../components/MainLayout';
import Link from 'next/link';
import {useRouter} from 'next/router';



const Post =({post: serverPost }) => {
     
    const [post, setPost] = useState(serverPost); 
    
    const router = useRouter();
    useEffect(()=> {
        const load = async ()=>{
            const response = await fetch(`http://localhost:4200/posts/${router.query.id}`)
            const data = await response.json()
            setPost(data);
        }
        if(!serverPost) {
            load();
        }    
    },[])

    if(!post) {
        return <MainLayout>
            <p>Loading...</p>
        </MainLayout>
    }

    
    return (
        <MainLayout title ={'Page'} >
            <h1>{post.title}</h1> 
            <p>{post.body}</p>
            <Link href={'/posts'}><a>Back to all posts</a></Link>
        </MainLayout>
    )
}

export default Post;

// Post.getInitialProps = async ({query, req}) => {
//     if(!req) {
//         return {post: null}
//     }
//     const responce = await fetch(`http://localhost:4200/posts/${query.id}`)
//     const post = await responce.json();
//     return {
//         post
//     }
// }

export async function getServerSideProps({ query, req}) {
    const responce = await fetch(`http://localhost:4200/posts/${query.id}`)
    const post = await responce.json();
    return {props:{post}}
}
