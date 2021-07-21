import StatusCodes from "http-status-codes";
import { Request, Response } from "express";
import { getDriversLocation } from "../api/Taxi";

const { INTERNAL_SERVER_ERROR, OK } = StatusCodes;

export async function getTaxi(req: Request, res: Response) {
  try {
    const params = req.query;
    const response = await getDriversLocation(params);
    return res.status(OK).json(response.data);
  } catch (err) {
    return res.status(INTERNAL_SERVER_ERROR);
  }
}
