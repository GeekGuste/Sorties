import { Request, Response } from 'express';


export const getDayOutingDeclarations = (req: Request, res: Response) => {
 res.json({
   message: 'Hello World',
 });
};


export const saveOutingDeclaration = (req: Request, res: Response) => {
 res.json({
   message: 'Another test route',
 });
};