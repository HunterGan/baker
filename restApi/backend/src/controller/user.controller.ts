import { Request, Response } from "express";
import bcryptjs from 'bcryptjs'
import Manager from "../db-connector";
import { User } from '../entities/user.entity';

const repository = Manager.getRepository(User);

export const GetUsers = async (_: Request, res: Response) => {
	const users = await repository.find({
			relations: ['role']
	})

	res.send(
			users.map(user => {
					const { password, ...data} = user
					return data
			})
	)
}

export const GetUser = async (req: Request, res: Response) => {
  const id = Number(req.params.id) 

  const data = await repository.findOne({
    where: { id: id },
    relations: ['role']
  })

  if (!data) {
    return res.status(404).send({ message: 'User not found' });
  }
  
  const {password, ...user} = data
  
  res.send(user)
}

export const CreateUser = async (req: Request, res: Response) => {
  const { role_id, password: pass, ...body } = req.body;
  const hashedPassword = await bcryptjs.hash(pass, 10);
  const { password, ...user} = await repository.save({
      ...body,
      password: hashedPassword,
			role: {
				id: "1"
			}
  })

  res.status(201).send(user)
}

export const UpdateUser = async (req: Request, res: Response) => {
  const { role_id, ...body } = req.body;
  const id = Number(req.params.id) 

  await repository.update(req.params.id, {
    ...body,
    role: {
      id: role_id
    }
  })

  const data = await repository.findOne({
    where: { id: id },
    relations: ['role']
})

if (!data) {
  return res.status(404).send({ message: 'User not found' });
}
const {password, ...user} = data
  
  res.status(202).send(user)
}

export const DeleteUser = async (req: Request, res: Response) => {
  const deleteUser = await repository.delete(req.params.id)
  
  res.status(204).send(deleteUser)
}
