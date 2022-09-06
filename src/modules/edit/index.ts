import { PrismaRepository } from "../../repositories/implementations/PrismaRepository";
import { EditPostController } from "./edit-post-controller";
import { EditPostUseCase } from "./edit-post-usecase";

const prismaRepository = new PrismaRepository();

const editPostUseCase = new EditPostUseCase(prismaRepository);

const editPostController = new EditPostController(editPostUseCase);

export { editPostUseCase, editPostController }