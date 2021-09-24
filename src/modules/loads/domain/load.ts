import { Currency } from "../../shared/core/currency";
import { EquipmentType } from "./equipment-type";
import { Location } from "./location";

export interface Load {
  creatorId: string;
  timeCreated: Date;
  rate: Currency;
  origin: Location;
  stops: Location[];
  destination: Location;
  shipDate: Date;
  deliveryDate: Date;
  weight: number;
  equipmentType: EquipmentType;
  miles: number;
  commodity: string;
}