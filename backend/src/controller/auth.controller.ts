import { Request, Response } from 'express';
import { registerValidation } from '../validation/register.validation';
import { UserRepository as repository} from '../db-connector';
import bcryptjs from 'bcryptjs'
import { sign, verify } from 'jsonwebtoken';
import { User } from '../entities/user.entity';

const secret = process.env.SECRET_KEY || ''

// REGISTER USER
export const Register = async (req: Request, res: Response) => {
    const body = req.body;

    // check if all infos were send
    const { error } = registerValidation.validate(body);
    // break if something is missing
    if (error) {
        return res.status(400).send(error.details);
    }
    // verify that password is confirmed
    if (body.password !== body.passwordConfirm){
        return res.status(400).send({
            message: 'ERROR :: Passwords do not match!'
        });
    }
    // save password to database
    const { password, ...user } = await repository.save({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        password: await bcryptjs.hash(body.password, 10),
				role_id: "admin"
    })

    res.send(user);
};

export const Login = async (req: Request, res: Response) => {
	// check if user exists in db
	const user = await repository.findOneBy(
		{
			email: req.body.email
		}
	)

	// if does not exists break
	if (!user) {
		return res.status(404).send({
			message: 'ERROR :: User does not exists!'
		})
	}

	// if exists but password is wrong break
	if(!await bcryptjs.compare(req.body.password, user.password)) {
		return res.status(404).send({
			message: 'ERROR :: Invalid credentials!'
		})
	}

	// don't return password after successful login
	const token = sign(
    {
        id: user.id
    }, secret
	)
	
	res.cookie('jwt', token, {
    // keep cookie in node.js backend
    httpOnly: true,
    maxAge: 24*60*60*1000 //1day
	})

	res.send({
    message: token
	})
}

export const AuthenticatedUser = async (req: Request, res: Response) => {
	// return user info  for user id
	// @ts-ignore-next-line
	const {password, ...user} = req['user']
	
	res.send(user)
}

export const Logout = async (req: Request, res: Response) => {
	res.cookie('jwt', '',  {maxAge: 0})

	res.send({
		message: 'INFO :: Successfully logged out.'
	})
}

// UPDATE USER INFO
export const UpdateUserInfo = async (req: Request, res: Response) => {
	// @ts-ignore-next-line
	const user = req['user'];

	await repository.update(user.id, req.body)
	// @ts-ignore-next-line
	const { password, ...data } = await repository.findOneBy(user.id)

	res.send({data})
}

// UPDATE USER PASSWORD
export const UpdateUserPass = async (req: Request, res: Response) => {
	// @ts-ignore-next-line
	const user = req['user'];

	// verify that password is confirmed
	if (req.body.password !== req.body.passwordConfirm){
			return res.status(400).send({
					message: 'ERROR :: Passwords do not match!'
			});
	}

	await repository.update(user.id, {
			password: await bcryptjs.hash(req.body.password, 10)
	})
	// @ts-ignore-next-line
	const { password, ...data } = await repository.findOneBy(user.id)

	res.send({data})
}