export interface Author {
  name: string;
  role: string;
  email: string;
  image: string;
}

export interface Blog {
  _id: string;
  image: string;
  title: string;
  description: string;
  author: Author | null; 
  tags: string[];
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

export const relatedBlogs = [
  {
    _id: "64dfe77d50961c55ce93e7e0",
    title: "The Future of Technology",
    image: "https://res.cloudinary.com/djtkzulun/image/upload/v1702997841/A2sv/lumtcitvklvajczcynqe.png",
    description:
      "Explore the advancements in technology that are shaping our future. Artificial Intelligence, Quantum Computing, and Blockchain are leading the way.",
    author: {
      name: "Jane Doe",
      role: "Tech Blogger",
      email: "jane.doe@example.com",
      image: "https://res.cloudinary.com/djtkzulun/image/upload/v1702997841/A2sv/lumtcitvklvajczcynqe.png",
    },
    tags: ["Technology", "AI", "Future"],
  },
  {
    _id: "64dfe77d50961c55ce93e7e1",
    title: "Health and Wellness Tips",
    image: "https://res.cloudinary.com/djtkzulun/image/upload/v1702997841/A2sv/lumtcitvklvajczcynqe.png",
    description:
      "Explore the advancements in technology that are shaping our future. Artificial Intelligence, Quantum Computing, and Blockchain are leading the way.",
    author: {
      name: "John Smith",
      role: "Health Coach",
      email: "john.smith@example.com",
      image: "https://res.cloudinary.com/djtkzulun/image/upload/v1702997841/A2sv/lumtcitvklvajczcynqe.png",
    },
    tags: ["Health", "Wellness", "Lifestyle"],
  },
  {
    _id: "64dfe77d50961c55ce93e7e2",
    title: "Travel Destinations for 2024",
    image: "https://res.cloudinary.com/djtkzulun/image/upload/v1702997841/A2sv/lumtcitvklvajczcynqe.png",
    description:
      "Explore the advancements in technology that are shaping our future. Artificial Intelligence, Quantum Computing, and Blockchain are leading the way.",
    author: {
      name: "Emily Johnson",
      role: "Travel Writer",
      email: "emily.johnson@example.com",
      image: "https://res.cloudinary.com/djtkzulun/image/upload/v1702997841/A2sv/lumtcitvklvajczcynqe.png",
    },
    tags: ["Travel", "Destinations", "Vacation"],
  },
];
