import { Bird } from "../../entities/Bird";
import { IBirdRepository } from "../IBirdRepository";

export class FakeDatabaseBirdRepository implements IBirdRepository {  
  private bird: Bird[] = [];

  async findByName(name: string): Promise<Bird> {
    const bird = this.bird.find((bird) => bird.name === name);
    return bird;
  }

  async save(bird: Bird): Promise<void> {
    this.bird.push(bird);
  }
}