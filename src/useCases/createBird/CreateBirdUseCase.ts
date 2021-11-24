import { Bird } from "../../entities/Bird";
import { IBirdRepository } from "../../repositories/IBirdRepository";
import { ICreateBirdRequestDTO } from "./CreateBirdDTO";

export class CreateBirdUseCase {
    constructor(
        private birdRepository: IBirdRepository
    ) {}
    
    async execute(data: ICreateBirdRequestDTO) {
        const birdAlreadyExists = await this.birdRepository.findByName(data.name);

        if(birdAlreadyExists){
            throw new Error('User already exists.')
        }

        const bird = new Bird(data);

        await this.birdRepository.save(bird);
    }
}