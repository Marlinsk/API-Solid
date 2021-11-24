import { response, Router } from "express";

const router = Router()

router.post('/aves', (request, response) => {
    return response.status(201).send();
})

export { router }