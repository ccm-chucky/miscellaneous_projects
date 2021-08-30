import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = ()=>{
    const {data:blogs,isPending,error} = useFetch('http://localhost:8000/blogs');

    
    return (
        <div className='home'>
            {isPending && <div>loading....</div>}
           { blogs && <BlogList blogs={blogs} title={'The list of blogs'} ></BlogList>}
        </div>
    );
}

export default Home;