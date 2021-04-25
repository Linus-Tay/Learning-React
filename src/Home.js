import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    // let name = 'Linus';
     /* const [name, setName] = useState('John');
    const [age, setAge] = useState(21);

    const handleClick = () => {
        setName('Linus');
        setAge(19);
    }
    
    /* const handleClickAgain = (name, e) => {
        console.log('Hello ' + name, e.target);
     */ 

    /* const [name, setName] = useState('John'); */

    /* const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    } */

    const { data:blogs, isPending, error } = useFetch('http://localhost:8000/blogs')
     
    return ( 
        <div className="Home">
            {/* <h2>Homepage</h2>
            <p>{ name } is { age } years old!</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('Linus', e)}>Click me again</button>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'Linus')} title="Linus's blogs"/>}
            <p>{name}</p>
            <button onClick={() => setName('Linus')}>Change Name</button> */}
            { error && <div>{error}</div>}
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
     );
}
 
export default Home;