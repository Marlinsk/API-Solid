import { PrismaRepository } from "../../repositories/implementations/PrismaRepository";
import { CreatePostController } from "./create-post-controller";
import { CreatePostUseCase } from "./create-post-usecase";

const prismaRepository = new PrismaRepository();

const createPostUseCase = new CreatePostUseCase(prismaRepository);

const createPostController = new CreatePostController(createPostUseCase);

export { createPostUseCase, createPostController }