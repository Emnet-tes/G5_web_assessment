
export interface Blog {
  _id: string;
  image: string;
  title: string;
  description: string;
  author: string | null;
  isPending: boolean;
  tags: string[];
  likes: number;
  relatedBlogs: string[];
  skills: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export async function getBlogs(){

    try{
        const response = await fetch('https://a2sv-backend.onrender.com/api/blogs',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body:null
        });
        const data:Blog[] = await response.json();
        return data;
    }
    catch (error) {
        console.error('Error fetching blogs:', error);
        throw error;
    }
}