import { Request, Response } from "express";
import { CreateBirdUseCase } from "./CreateBirdUseCase";

export class CreateBirdController {
    constructor(
        private createBirdUseCase: CreateBirdUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, genre, species, order } = request.body;

        try {
            await this.createBirdUseCase.execute({
                name,
                genre,
                species,
                order
            })

            return response.status(201).send();

        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        }
        
    }
}