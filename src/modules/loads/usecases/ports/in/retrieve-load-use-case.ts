import { Load } from "../../../domain/load";
import { RetreiveLoadByShipperQuery } from "./retrieve-load-by-shipper-query";

export interface RetrieveLoadUseCase {
  getAllLoadsByShipper(query: RetreiveLoadByShipperQuery): Load [];
}