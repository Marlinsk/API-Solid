import { uuid } from "uuidv4";

export class Bird {
  public readonly id: string;

  public name: string;
  public genre: string;
  public species: string;
  public order: string;

  constructor(props: Omit<Bird, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
