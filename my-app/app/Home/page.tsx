

import Link from "next/link";

import { Blog, getBlogs, relatedBlogs } from "../lib/api";
import { Title } from "./components/Title";
import { Card } from "./components/Card";


export const Home = () => {
//   const [blogs, setblogs] = useState<Blog[]>([]);
//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const data = await getBlogs();
//         setblogs(data);
//       } catch (error) {
//         console.error("Error fetching blogs:", error);
//         throw error;
//       }
//     };

//     fetchBlogs();
//   }, []);

  return (
    <main className="min-h-screen  items-center  space-y-5 p-20 pt-8 ">
      <Title />
      <div className="px-20">
        {relatedBlogs.slice(0, 5).map((blog) => (
          <Link href={`/Blog/${blog._id}`} key={blog._id}>
            <Card
              image={blog.image}
              description={blog.description}
              skills={blog.tags}
              title={blog.title}
              id={blog._id}
            />
          </Link>
        ))}
      </div>
    </main>
  );
};
