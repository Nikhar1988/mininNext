import  Router  from "next/router";
import { MainLayout } from "../../components/MainLayout";

export default function About({title}) {
    
    const linkClickHendler =()=>{
        Router.push('/')
    }
    
    return (
        <MainLayout title ={'About Page'}>
            <h1>{JSON.stringify(title)}</h1>
            <button onClick={linkClickHendler}>Go back to home</button>
            <button onClick={()=> Router.push('/posts')}>Go to posts</button>
        </MainLayout>
       
    )  
}

About.getInitialProps = async ({req})=>{
    const response = await fetch(`http://localhost:4200/about`)
    const data = await response.json();
    return {
          title : data.title
    }
}