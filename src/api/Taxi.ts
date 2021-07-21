import { api } from "./Config";
import { taxiApiParams } from "../@types/taxi";

export async function getDriversLocation(params: taxiApiParams) {
  const url = "api/drivers";
  return await api.get(url, params);
}
