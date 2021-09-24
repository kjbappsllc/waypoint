import { Load } from "../../../domain/load";

export interface PostLoadPort {
  postLoad (load: Load): string;
}
