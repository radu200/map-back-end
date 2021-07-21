import Joi from "joi";

const coordonates = Joi.object().keys({
  latitude: Joi.number().required().min(-90).max(90),
  longitude: Joi.number().required().min(-180).max(180),
});

export const carsCount = coordonates.append({
  count: Joi.number().required().max(100),
});
