import { Load } from '../domain/load';
import { RetreiveLoadByShipperQuery } from './ports/in/retrieve-load-by-shipper-query';
import { RetrieveLoadUseCase } from "./ports/in/retrieve-load-use-case";

export class RetrieveLoadService implements RetrieveLoadUseCase {
  public readonly getAllLoadsByShipper = (query: RetreiveLoadByShipperQuery): Load [] => {
    return [];
  }
}