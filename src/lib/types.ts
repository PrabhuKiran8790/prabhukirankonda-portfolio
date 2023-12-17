export interface BasePost {
  title: string;
  slug: string;
  description: string;
  date: string;
  tags: string[];
  image: string;
  draft: boolean;
}

export interface Post extends BasePost {}

export interface Series extends BasePost {
  order: number;
}

export interface SeriesPost extends BasePost {
  parts: number;
  coverFolder: string;
  subPosts: Series[];
}
