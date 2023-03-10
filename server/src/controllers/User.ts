import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import signJWT from '../functions/signJWT';
import Logging from '../library/Logging';
import loggings from '../library/loggings';
import User from '../models/User';
import bcryptjs from 'bcryptjs';

const NAMESPACE = 'User';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
    Logging.info('Token validated, user authorized');

    return res.status(200).json({
        message: 'Authorized'
    });
};

const register = (req: Request, res: Response, next: NextFunction) => {
    let { firstName, password, lastName, email } = req.body;

    bcryptjs.hash(password, 10, (hashError, hash) => {
        if (hashError) {
            return res.status(500).json({
                message: hashError.message,
                error: hashError
            });
        }

        const user: any = new User({
            _id: new mongoose.Types.ObjectId(),
            firstName,
            lastName,
            email,
            password: hash
        });

        return user
            .save()
            .then((user: any) => res.status(201).json({ user }))
            .catch((error: any) => res.status(500).json({ error }));
    });
};

const login = (req: Request, res: Response, next: NextFunction) => {
    let { firstName, password } = req.body;

    User.find({ firstName })
        .exec()
        .then((users) => {
            if (users.length !== 1) {
                return res.status(401).json({
                    message: 'Unauthorized'
                });
            }

            bcryptjs.compare(password, users[0].password, (error, result) => {
                if (error) {
                    loggings.error(NAMESPACE, error.message, error);
                    return res.status(401).json({
                        message: 'Unauthorized'
                    });
                } else if (result) {
                    signJWT(users[0], (_error, token) => {
                        if (_error) {
                            loggings.error(NAMESPACE, ' Unable to sign token:', _error);

                            return res.status(401).json({
                                messsage: 'Unauthorized',
                                error: _error
                            });
                        } else if (token) {
                            return res.status(200).json({
                                message: 'Auth Successful',
                                token,
                                user: users[0]
                            });
                        }
                    });
                }
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

const getAllusers = (req: Request, res: Response, next: NextFunction) => {
    User.find()
        .select('-password')
        .exec()
        .then((users) => {
            return res.status(200).json({
                users,
                count: users.length
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

const deleteUser = (req: Request, res: Response, next: NextFunction) => {
    const firstName = req.params.firstName;
    console.log('firstName:', firstName);

    return User.findOneAndDelete({ firstName: firstName })
        .then((user) => (user ? res.status(201).json({ message: 'deleted' }) : res.status(404).json({ message: 'Not found' })))
        .catch((error) => res.status(500).json({ error }));
};

export default { validateToken, register, login, getAllusers, deleteUser };

// const createUser = (req: Request, res: Response, next: NextFunction) => {
//     const { firstName, lastName, email, shoppingCart } = req.body;

//     const user = new User({
//         _id: new mongoose.Types.ObjectId(),
//         firstName,
//         lastName,
//         email,
//         shoppingCart
//     });

//     return user
//         .save()
//         .then((user) => res.status(201).json({ user }))
//         .catch((error) => res.status(500).json({ error }));
// };

// const readUser = (req: Request, res: Response, next: NextFunction) => {
//     const userId = req.params.userId;

//     return User.findById(userId)
//         .then((user) =>
//             user
//                 ? res.status(200).json({ user })
//                 : res.status(404).json({
//                       message: 'Not found'
//                   })
//         )
//         .catch((error) => res.status(500).json({ error }));
// };

// const readAll = (req: Request, res: Response, next: NextFunction) => {
//     return User.find()
//         .then((users) => res.status(200).json({ users }))
//         .catch((error) => res.status(500).json({ error }));
// };
// const updateUser = (req: Request, res: Response, next: NextFunction) => {
//     const userId = req.params.userId;

//     return User.findById(userId)
//         .then((user) => {
//             if (user) {
//                 user.set(req.body);

//                 return user
//                     .save()
//                     .then((user) => res.status(201).json({ user }))
//                     .catch((error) => res.status(500).json({ error }));
//             } else {
//                 res.status(404).json({ message: 'Not found' });
//             }
//         })
//         .catch((error) => res.status(500).json({ error }));
// };
// const deleteUser = (req: Request, res: Response, next: NextFunction) => {
//     const userId = req.params.userId;

//     return User.findByIdAndDelete(userId)
//         .then((user) => (user ? res.status(201).json({ message: 'deleted' }) : res.status(404).json({ message: 'Not found' })))
//         .catch((error) => res.status(500).json({ error }));
// };

// export default { createUser, readUser, readAll, updateUser, deleteUser };

// const validateToken = (req: Request, res: Response, next: NextFunction) => {

// };
// const register = (req: Request, res: Response, next: NextFunction) => {

// };
// const validateToken = (req: Request, res: Response, next: NextFunction) => {

// };
// const validateToken = (req: Request, res: Response, next: NextFunction) => {

// };
