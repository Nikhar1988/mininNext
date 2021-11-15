import  Router  from "next/router";

export default function About() {
    
    const linkClickHendler =()=>{
        Router.push('/')
    }
    
    return (
        <>
            <h1> About Page</h1>
            <button onClick={linkClickHendler}>Go back to home</button>
            <button onClick={()=>Router.push('/posts')}>Go to posts</button>
        </>
       
    )  
}