import Link from 'next/link';
import Head from 'next/head'
import { MainLayout } from '../components/MainLayout';

export default function Index() {
    return (        
        <MainLayout title ={'Home Page'}>
            <h1>Hello Next.JS!</h1> 
            <p>Lorem inputa sdhjshdfj sjdfhjksdhjkfh jkgsdkjfjk</p>  
            <p><Link href="/about"><a>About Page</a></Link></p>
            <p><Link href={"/posts"}><a>Posts Page</a></Link></p>
        </MainLayout>     
    )

}