import { SaveLoadCommand } from "./save-load-command";

export interface SaveLoadUseCase {
  saveLoad (command: SaveLoadCommand): string;
}