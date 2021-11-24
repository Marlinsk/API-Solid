import { Router } from "express";
import { createBirdController } from "./useCases/createBird";

const router = Router()

router.post('/aves', (request, response) => {
    return createBirdController.handle(request, response);
})

export { router }