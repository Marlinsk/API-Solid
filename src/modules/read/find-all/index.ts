import { PrismaRepository } from "../../../repositories/implementations/PrismaRepository";
import { FindAllPostsController } from "./find-all-posts-controller";
import { FindAllPostsUseCase } from "./find-all-posts-usecase";

const prismaRepository = new PrismaRepository();

const findAllPostsUseCase = new FindAllPostsUseCase(prismaRepository);

const findAllPostsController = new FindAllPostsController(findAllPostsUseCase);

export { findAllPostsUseCase, findAllPostsController }