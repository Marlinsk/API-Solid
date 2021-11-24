import { FakeDatabaseBirdRepository } from "../../repositories/implementations/fakeDatabase";
import { CreateBirdController } from "./CreateBirdController";
import { CreateBirdUseCase } from "./CreateBirdUseCase";

const fakeDatabaseBirdRepository = new FakeDatabaseBirdRepository();

const createBirdUseCase = new CreateBirdUseCase(
    fakeDatabaseBirdRepository
)

const createBirdController = new CreateBirdController(
    createBirdUseCase
)

export { createBirdUseCase, createBirdController }