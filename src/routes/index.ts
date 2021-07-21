import { Router } from "express";
import { getTaxi } from "./Taxi";
import { validateQuery } from "../validation/joi/middleware";
import { carsCount } from "../validation/joi/schemas";

// User-route
const taxiRouter = Router();
taxiRouter.get("/taxi", validateQuery(carsCount), getTaxi);

// Export the base-router
const baseRouter = Router();
baseRouter.use("/", taxiRouter);
export default baseRouter;
