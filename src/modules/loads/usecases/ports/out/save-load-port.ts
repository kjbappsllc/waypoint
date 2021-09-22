import { Load } from "../../../domain/load";

export interface SaveLoadPort {
  saveLoad (load: Load): string;
}