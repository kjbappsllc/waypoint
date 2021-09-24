import { PostLoadCommand } from "./post-load-command";

export interface PostLoadUseCase {
  postLoad (command: PostLoadCommand): string;
}