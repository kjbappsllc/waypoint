import { PostLoadPort } from './ports/out/post-load-port';
import { PostLoadCommand } from "./ports/in/post-load-command";
import { PostLoadUseCase } from "./ports/in/post-load-use-case";

export class PostLoadService implements PostLoadUseCase {

  public constructor(private readonly postLoadPort: PostLoadPort) {}

  public readonly postLoad = (command: PostLoadCommand): string => {
    return this.postLoadPort.postLoad(command.load);
  }
}