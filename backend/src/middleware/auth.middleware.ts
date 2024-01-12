import { Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { UserRepository as repository} from '../db-connector';

const secret = process.env.SECRET_KEY || ''

export const CheckAuthState = async (req: Request, res: Response, next: Function) => {

  try {
      // get cookie from authenticated user
      const jwt = req?.cookies?.['jwt'];
      // get user id from jwt
      const payload: any = verify(jwt, secret)

      if(!payload) {
          return res.status(401).send({
              message: 'ERROR :: User unauthenticated!'
          })
      }
      // return user info  for user id
      // @ts-ignore:next-line
      req.user = await repository.findOneBy(payload.id)

      next();

  } catch (e) {
    console.log(e)
      return res.status(401).send({
          message: 'ERROR :: User unauthenticated!'
  })
}
}