
import { ICreatePostDTO } from "../../dto/ICreatePostDTO";
import { IUpdatePostDTO } from "../../dto/IUpdatePostDTO";
import { Post } from "../../entities/Post";
import { prisma } from "../../prisma";
import { IPostRepository } from "../IPostRepository";

export class PrismaRepository implements IPostRepository {
  async create({ title, text, imagefile }: ICreatePostDTO): Promise<void> {
    return await prisma.post.create({
      data: {
        title,
        text,
        imagefile,
      }
    })
  }

  async update({ id, title, text, imagefile }: IUpdatePostDTO): Promise<Post> {
    return await prisma.post.update({
      where: { id },
      data: {
        title,
        text,
        imagefile,
      }
    })
  }

  async delete(id: string) {
    await prisma.post.delete({
      where: {
        id,
      },
    });
  }
}
