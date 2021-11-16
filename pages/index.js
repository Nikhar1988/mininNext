import Link from 'next/link';
import { MainLayout } from '../components/MainLayout';

export default function Index() {
    return (        
        <MainLayout title ={'Home Page'}>
            <h1>Hello Next.JS!</h1> 
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>  
            <p><Link href="/about"><a>About Page</a></Link></p>
            <p><Link href={"/posts"}><a>Posts Page</a></Link></p>
        </MainLayout>     
    )

}