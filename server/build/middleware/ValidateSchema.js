"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schemas = exports.ValidateSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const Logging_1 = __importDefault(require("../library/Logging"));
const ValidateSchema = (schema) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield schema.validateAsync(req.body);
            next();
        }
        catch (error) {
            Logging_1.default.error(error);
            return res.status(422).json({ error });
        }
    });
};
exports.ValidateSchema = ValidateSchema;
exports.Schemas = {
    user: {
        create: joi_1.default.object({
            firstName: joi_1.default.string().required(),
            lastName: joi_1.default.string().required(),
            email: joi_1.default.string().email().required(),
            password: joi_1.default.string().required(),
            shoppingCart: joi_1.default.string().required()
        }),
        update: joi_1.default.object({
            firstName: joi_1.default.string().required(),
            lastName: joi_1.default.string().required(),
            email: joi_1.default.string().email().required(),
            password: joi_1.default.string().required(),
            shoppingCart: joi_1.default.string().required()
        })
    },
    artwork: {
        create: joi_1.default.object({
            title: joi_1.default.string().required(),
            picture: joi_1.default.string().required(),
            price: joi_1.default.string().required(),
            medium: joi_1.default.string().required()
        }),
        update: joi_1.default.object({
            title: joi_1.default.string().required(),
            picture: joi_1.default.string().required(),
            price: joi_1.default.string().required(),
            medium: joi_1.default.string().required()
        })
    },
    inquire: {
        create: joi_1.default.object({
            user: joi_1.default.string()
                .regex(/^[0-9a-fA-F]{24}$/)
                .required(),
            color: joi_1.default.string().required(),
            prompt: joi_1.default.string().required(),
            design: joi_1.default.string().required(),
            details: joi_1.default.string().required()
        }),
        update: joi_1.default.object({
            user: joi_1.default.string()
                .regex(/^[0-9a-fA-F]{24}$/)
                .required(),
            color: joi_1.default.string().required(),
            prompt: joi_1.default.string().required(),
            design: joi_1.default.string().required(),
            details: joi_1.default.string().required()
        })
    },
    order: {
        create: joi_1.default.object({
            user: joi_1.default.string()
                .regex(/^[0-9a-fA-F]{24}$/)
                .required(),
            country: joi_1.default.string().required(),
            streetAddress: joi_1.default.string().required(),
            city: joi_1.default.string().required(),
            zip: joi_1.default.number().required(),
            phone: joi_1.default.string().required()
        }),
        update: joi_1.default.object({
            user: joi_1.default.string()
                .regex(/^[0-9a-fA-F]{24}$/)
                .required(),
            country: joi_1.default.string().required(),
            streetAddress: joi_1.default.string().required(),
            city: joi_1.default.string().required(),
            zip: joi_1.default.number().required(),
            phone: joi_1.default.string().required()
        })
    }
};
