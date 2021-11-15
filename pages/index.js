import Link from 'next/link';
import Head from 'next/head'

export default function Index() {
    return (        
        <>
            <Head>
                <title>Next Title Index Hello</title>  
                <meta name="keywords" content="next, javascript, nextjs, react"/> 
                <meta name="description" content="this is youtube tutorial for next"/> 
                <meta charSet="utf-8" />
            </Head>   
            <h1>Hello Next.JS!</h1> 
            <p>Lorem inputa sdhjshdfj sjdfhjksdhjkfh jkgsdkjfjk</p>  
            <p><Link href="/about"><a>About Page</a></Link></p>
            <p><Link href={"/posts"}><a>Posts Page</a></Link></p>
        </>     
    )

}