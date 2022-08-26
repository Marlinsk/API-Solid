import { IPostRepository } from "../../repositories/IPostRepository";

interface IEditPostRequest {
  readonly id: string;
  title: string;
  text: string;
  imagefile?: string;
}

export class EditPostUseCase {
  constructor(private postRepository: IPostRepository) { }

  async execute({ id, title, text, imagefile }: IEditPostRequest) {
    const checkID = await this.postRepository.findById(id);

    if (checkID === null) {
      throw new Error("Not found!");
    }

    if (imagefile && !imagefile.startsWith('data:image/png;base64')) {
      throw new Error('Invalid file format.');
    }

    return await this.postRepository.update({
      id,
      title,
      text,
      imagefile
    })
  }
}