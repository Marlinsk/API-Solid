import { IPostRepository } from "../repositories/IPostRepository";

interface ICreatePostRequest {
  title: string;
  text: string;
  imagefile?: string;
}

export class CreatePostUseCase {
  constructor(private postRepository: IPostRepository) { }

  async execute(request: ICreatePostRequest) {
    const { title, text, imagefile } = request;

    if (imagefile && !imagefile.startsWith('data:image/png;base64')) {
      throw new Error('Invalid sreenshot format.')
    }

    await this.postRepository.create({
      title,
      text,
      imagefile
    })
  }
}