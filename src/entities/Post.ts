import { Post } from "@prisma/client";

export class PostEnity implements Post {
  id: string;
  title: string;
  text: string;
  imagefile: string;
  created_at: Date;
  updated_at: Date;
}
