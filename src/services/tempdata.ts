export const ComicArray = [
  {
    id: "1",
    name: "Student Boss",
    genre: "Action",
    author: "John Doe",
    description: "This is a test",
    imageUrl: "img/examples/1.jpg",
    likes: 150,
    views: 2000,
    timestamp: 1234567890,
    isEnded: false,
  },
  {
    id: "2",
    name: "Fury Battle",
    genre: "Fantasy",
    author: "John Doe",
    description: "This is a test",
    imageUrl: "img/examples/2.jpg",
    likes: 100,
    views: 1000,
    timestamp: 1234567890,
    isEnded: false,
  },
  {
    id: "3",
    name: "Who am I?",
    genre: "Romance",
    author: "John Doe",
    description: "This is a test",
    imageUrl: "img/examples/3.jpg",
    likes: 300,
    views: 12000,
    timestamp: 1567890,
    isEnded: false,
  },
  {
    id: "4",
    name: "Gru's Adventure",
    genre: "Adventure",
    author: "John Doe",
    description: "This is a test",
    imageUrl: "img/examples/4.jpg",
    likes: 1,
    views: 100,
    timestamp: 1234567890,
    isEnded: true,
  },
  {
    id: "5",
    name: "The Last of Us",
    genre: "Adventure",
    author: "John Doe",
    description: "This is a test",
    imageUrl: "img/examples/5.jpg",
    likes: 10000,
    views: 100000,
    timestamp: 1234567890,
    isEnded: false,
  },
  {
    id: "6",
    name: "Light Ninja",
    genre: "Action",
    author: "John Doe",
    description: "This is a test",
    imageUrl: "img/examples/6.jpg",
    likes: 10000,
    views: 100000,
    timestamp: 1234567890,
    isEnded: true,
  },
];

export const GenreArray = [
  {
    id: 1,
    name: "Action",
  },
  {
    id: 2,
    name: "Comedy",
  },
  {
    id: 3,
    name: "Drama",
  },
  {
    id: 4,
    name: "Fantasy",
  },
  {
    id: 5,
    name: "Romance",
  },
  {
    id: 6,
    name: "Sci-Fi",
  },
  {
    id: 7,
    name: "Horror",
  },
  {
    id: 8,
    name: "Mystery",
  },
  
];

export const fetchTempChapters = async (storyId: string) => {
  // Simulating API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  const title = "Mystery Babylon";

  return {
    title: title,
    storyId: storyId,
    chapters: [
      {
        id: 1,
        title: "Chapter 1: The Beginning",
        images: [
          "/img/temp_story/1-1.jpg",
          "/img/temp_story/1-2.jpg",
          "/img/temp_story/1-3.jpg",
          "/img/temp_story/1-4.jpg",
          "/img/temp_story/1-5.jpg",
        ],
      },
      {
        id: 2,
        title: "Chapter 2: The Journey",
        images: [
          "/img/temp_story/2-1.jpg",
          "/img/temp_story/2-2.jpg",
          "/img/temp_story/2-3.jpg",
          "/img/temp_story/2-4.jpg",
          "/img/temp_story/2-5.jpg",
        ],
      },
      {
        id: 3,
        title: "Chapter 3: The Climax",
        images: [
          "/img/temp_story/3-1.jpg",
          "/img/temp_story/3-2.jpg",
          "/img/temp_story/3-3.jpg",
          "/img/temp_story/3-4.jpg",
          "/img/temp_story/3-5.jpg",
        ],
      },
      {
        id: 4,
        title: "Chapter 4: The Defeat",
        images: [
          "/img/temp_story/3-1.jpg",
          "/img/temp_story/3-2.jpg",
          "/img/temp_story/3-3.jpg",
          "/img/temp_story/3-4.jpg",
          "/img/temp_story/3-5.jpg",
        ],
      },
      {
        id: 5,
        title: "Chapter 5: The Rebirth",
        images: [
          "/img/temp_story/3-1.jpg",
          "/img/temp_story/3-2.jpg",
          "/img/temp_story/3-3.jpg",
          "/img/temp_story/3-4.jpg",
          "/img/temp_story/3-5.jpg",
        ],
      },
      {
        id: 6,
        title: "Chapter 6: The End",
        images: [
          "/img/temp_story/3-1.jpg",
          "/img/temp_story/3-2.jpg",
          "/img/temp_story/3-3.jpg",
          "/img/temp_story/3-4.jpg",
          "/img/temp_story/3-5.jpg",
        ],
      },
    ]
  };
};
