//write all the prop types here...

export type Post = {
  id: string;
  content: string;
  image?: string; // string or missing
  likes: number;
  author: User;
};

export type User = {
  id: string;
  name: string;
  position: string;
  image?: string; // string or missing
  subscribed: string;
  backImage?: string;
  connections: number;
  about?: string;
  location: string;
};
