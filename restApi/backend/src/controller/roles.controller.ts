import { Request, Response } from "express";
import { Role } from "../entities/role.entity";
import Manager from "../db-connector";

const repository = Manager.getRepository(Role);

export const Roles = async (req: Request, res: Response) => {
    res.send(await repository.find())
}