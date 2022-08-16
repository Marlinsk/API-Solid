import { IUpdatePostDTO } from "../dto/IUpdatePostDTO";
import { ICreatePostDTO } from "../dto/ICreatePostDTO";
import { Post } from "../entities/Post";

export interface IPostRepository {
  create(data: ICreatePostDTO): Promise<void>;
  update(data: IUpdatePostDTO): Promise<Post>;
  delete(id: string): Promise<void>;
}
