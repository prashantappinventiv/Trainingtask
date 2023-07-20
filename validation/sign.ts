import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const schema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  password: Joi.number().min(5).required(),
  user_id:Joi.number().min(3),
  email:Joi.string().min(3).required().email()

  //repeat_password: Joi.ref('password'),
});

export const validateSignin = (req: Request, res: Response, next: NextFunction) => {
  const validation = schema.validate(req.body);
  if (validation.error) {
    return res.status(400).json({ message: 'Invalid data', error: validation.error });
  } else {
    next();
  }
};
