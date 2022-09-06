import { PrismaRepository } from "../../repositories/implementations/PrismaRepository";
import { DeletePostController } from "./delete-post-controller";
import { DeletePostUseCase } from "./delete-post-usecase";

const prismaRepository = new PrismaRepository();

const deletePostUseCase = new DeletePostUseCase(prismaRepository);

const deletePostController = new DeletePostController(deletePostUseCase);

export { deletePostUseCase, deletePostController }