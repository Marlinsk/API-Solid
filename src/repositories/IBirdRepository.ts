import { Bird } from "../entities/Bird";

export interface IBirdRepository {
  findByName(name: string): Promise<Bird>;
  save(bird: Bird): Promise<void>;
}
