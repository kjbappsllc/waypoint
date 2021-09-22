import { SaveLoadPort } from './ports/out/save-load-port';
import { SaveLoadCommand } from "./ports/in/save-load-command";
import { SaveLoadUseCase } from "./ports/in/save-load-use-case";

export class SaveLoad implements SaveLoadUseCase {

  public constructor(private readonly saveLoadPort: SaveLoadPort) {}

  public readonly saveLoad = (command: SaveLoadCommand): string => {
    return this.saveLoadPort.saveLoad(command.load);
  }
}