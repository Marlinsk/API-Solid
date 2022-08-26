import { IPostRepository } from "../../repositories/IPostRepository";

interface ICreatePostRequest {
  title: string;
  text: string;
  imagefile?: string;
}

export class CreatePostUseCase {
  constructor(private postRepository: IPostRepository) { }

  async execute({ title, text, imagefile }: ICreatePostRequest) {

    if (imagefile && !imagefile.startsWith('data:image/png;base64')) {
      throw new Error('Invalid sreenshot format.')
    }

    return await this.postRepository.create({
      title,
      text,
      imagefile
    })
  }
}