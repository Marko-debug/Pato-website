import { Request, Response, NextFunction } from "express";
import { AnyZodObject, ZodError } from "zod";

export const validate =
    (schema: AnyZodObject) =>
    (req: Request, res: Response, next: NextFunction) => {
        console.log(req.params)
        console.log(req.query)
        console.log(req.body)
        try{
            schema.parse({
                params: req.params,
                query: req.query,
                body: req.body,
            })

            next();
        } catch(error){
            if(error instanceof ZodError){
                return res.status(404).json({
                    status: "fail",
                    errors: error.errors,
                })
            }
            next(error);
        }
    }