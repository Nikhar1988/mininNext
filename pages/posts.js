import Head from 'next/head';
import { useEffect, useState } from 'react';
import { MainLayout } from '../components/MainLayout';

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(async () => {
        const responce = await fetch('http://localhost:4200/posts')
        const data = await responce.json()
        setPosts(data);
    }, [])

    return (
        <MainLayout title ={'Post Page'}>             
            <h1>Posts Page</h1>
            <pre>{JSON.stringify(posts)}</pre>
        </MainLayout>
       
    )  
}