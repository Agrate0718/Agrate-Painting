import Joi, { ObjectSchema } from 'joi';
import { NextFunction, Response, Request } from 'express';
import Logging from '../library/Logging';
import { IUser } from '../models/User';
import { IArtwork } from '../models/Artwork';
import { IInquire } from '../models/Inquire';
import { IOrder } from '../models/Order';

export const ValidateSchema = (schema: ObjectSchema) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try{
            await schema.validateAsync(req.body);

            next();
        } catch (error) {
            Logging.error(error);
            return res.status(422).json({ error });
        }
    };
};

export const Schemas = {
    user: {
        create: Joi.object<IUser>({
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required(),
            shoppingCart: Joi.string().required()
        }),
        update: Joi.object<IUser>({
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required(),
            shoppingCart: Joi.string().required()
        })
    },
    artwork: {
        create: Joi.object<IArtwork>({
            title: Joi.string().required(),
            picture: Joi.string().required(),
            price: Joi.string().required(),
            medium: Joi.string().required(),

        }),
        update: Joi.object<IArtwork>({
            title: Joi.string().required(),
            picture: Joi.string().required(),
            price: Joi.string().required(),
            medium: Joi.string().required(),


        })
    },
    inquire: {
        create: Joi.object<IInquire>({
            user: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
            color: Joi.string().required(),
            prompt: Joi.string().required(),
            design: Joi.string().required(),
            details: Joi.string().required(),

        }),
        update: Joi.object<IInquire>({
            user: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
            color: Joi.string().required(),
            prompt: Joi.string().required(),
            design: Joi.string().required(),
            details: Joi.string().required(),


        })
    },
    order: {
        create: Joi.object<IOrder>({
            user: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
            country: Joi.string().required(),
            streetAddress: Joi.string().required(),
            city: Joi.string().required(),
            zip: Joi.number().required(),
            phone:Joi.string().required(),

        }),
        update: Joi.object<IOrder>({
            user: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
            country: Joi.string().required(),
            streetAddress: Joi.string().required(),
            city: Joi.string().required(),
            zip: Joi.number().required(),
            phone:Joi.string().required(),
        })
    }
}