import { Blog, getBlogs } from '@/app/lib/api';
import React, { useEffect, useState } from 'react'

export const Title = () => {
     const [searchTerm, setSearchTerm] = useState("");
     const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);
       const [blogs, setBlogs] = useState<Blog[]>([]);
     
      useEffect(() => {
       
        const fetchBlogs = async () => {
          try {
            const fetchedBlogs = await getBlogs();
            setBlogs(fetchedBlogs);
          } catch (error) {
            console.error("Error:", error);
          }
        };

        fetchBlogs();
      }, []);
      useEffect(() => {
      
        const results = searchTerm.trim() === "" ? [] : blogs.filter(
          (blog) =>
            blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            blog.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredBlogs(results);
    
      }, [searchTerm, blogs]);

  return (
    <div className="flex justify-between w-[70%]">
      <div className="font-semibold text-[32px]">Blogs</div>
      <div className="space-x-5">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded-3xl p-2 "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="bg-blue-700 rounded-3xl p-2 text-white px-5">
          + New blog
        </button>
          <div>
            {filteredBlogs.length >0 ? (
              filteredBlogs.slice(0,2).map((blog) => (
                <div key={blog._id} className="mb-4 p-4 border rounded  absolute bg-gray-700 opacity-50 text-white">
                  <h2 className="text-xl font-bold">{blog.title}</h2>
                  <p>{blog.description}</p>
                </div>
              ))
            ) : (
              <p>No blogs found matching your search criteria.</p>
            )}
          </div>
   
      </div>
    </div>
  );
}
