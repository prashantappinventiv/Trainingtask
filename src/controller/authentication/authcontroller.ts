// authController.ts

import { Request, Response } from 'express';
import Sign from './../../app';

class AuthController {
  loginHandler = async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      const user = await Sign.findOne({ where: { email: username, password: password }, raw: true });
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
      console.log("===================>", user);

       if (Sign.password !== password) {
         return res.status(401).json({ message: 'Invalid credentials' });
       }

      // Handle successful login
      return res.status(200).json({ message: 'Login successful', data: user });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };
}

export const authController = new AuthController();