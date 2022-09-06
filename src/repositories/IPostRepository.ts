import { IUpdatePostDTO } from "../useCases/edit/IUpdatePostDTO";
import { ICreatePostDTO } from "../useCases/create/ICreatePostDTO";
import { PostEnity } from "../entities/Post";

export interface IPostRepository {
  create(data: ICreatePostDTO): Promise<PostEnity>;
  findById(id: string): Promise<PostEnity | null>;
  findAll(): Promise<PostEnity[]>;
  update(data: IUpdatePostDTO): Promise<PostEnity>;
  delete(id: string): Promise<void>;
}
