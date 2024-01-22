import { Request, Response } from "express";
import { Permission } from "../entities/permission.entity";
import Manager from "../db-connector";

const repository = Manager.getRepository(Permission);

export const Permissions = async (req: Request, res: Response) => {
    res.send(await repository.find())
}