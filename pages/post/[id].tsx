import { useState, useEffect } from 'react';
import { MainLayout } from '../../components/MainLayout';
import Link from 'next/link';
import {useRouter} from 'next/router';
import { MyPost } from '../../interfaces/post';
import { NextPageContext } from 'next';

interface PostPageProps {
    post: MyPost
}

const Post =({post: serverPost }: PostPageProps) => {
     
    const [post, setPost] = useState(serverPost); 
    
    const router = useRouter();
    useEffect(()=> {
        const load = async ()=>{
            const response = await fetch(`${process.env.API_URL}/posts/${router.query.id}`)
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

interface PostNextPageContext extends NextPageContext {
    query: {
        id: string
    }
}

Post.getInitialProps = async ({query, req}:PostNextPageContext) => {
    if(!req) {
        return {post: null}
    }
        
    const response = await fetch(`${process.env.API_URL}/posts/${query.id}`)
    const post: MyPost = await response.json();
    return {
        post
    }
}

// export async function getServerSideProps({ query, req}:NextPageContext) {
//     const response = await fetch(`http://localhost:4200/posts/${query.id}`)
//     const post = await response.json();
//     return {props:{post}}
// }
