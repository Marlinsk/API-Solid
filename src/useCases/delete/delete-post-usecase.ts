import { IPostRepository } from "../../repositories/IPostRepository";

export class DeletePostUseCase {
  constructor(private postRepository: IPostRepository) { }

  async execute(id: string) {
    const checkID = await this.postRepository.findById(id);

    if (checkID === null) {
      throw new Error("Not found!");
    }

    return await this.postRepository.delete(id);
  }
}