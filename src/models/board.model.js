import Joi from "joi"
import { ObjectId } from "mongodb"

import {getDB} from "./../config/mongodb"

// define board collection
const boardCollectionName = "boards"
const boardCollectionSchema = Joi.object({
    title: Joi.string().required().min(3).max(20),
    columnOrder: Joi.array().items(Joi.string()).default([]),
    createdAt: Joi.date().timestamp().default(Date.now()),
    updatedAt: Joi.date().timestamp().default(null),
    _destroy: Joi.boolean().default(false),
})

const validateSchema = async (data) => {
    // check data match boardCollectionSchema
    return await boardCollectionSchema.validateAsync(data,{abortEarly: false})
}

// de tao bang ghi len db server
const createNew = async (data) => {
    try {
        const value = await validateSchema(data)
        const result = await getDB().collection(boardCollectionName).insertOne(value); // sau khi validate data khoong bi error thi moi insert vao database
        console.log(result.ops[0]);
        return result.ops[0];
    } catch (error) {
        throw new Error(error)
    }
}

export const BoardModel = {createNew}