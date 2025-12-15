export interface Story {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  description: string;
  genres: string[];
  chapters: number;
  views: number;
  rating: number;
  status: "ongoing" | "completed";
  updatedAt: string;
  createdAt: string;
  isVip?: boolean;
  isFull?: boolean;
}

export interface Chapter {
  id: string;
  storyId: string;
  title: string;
  chapterNumber: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  views: number;
}
