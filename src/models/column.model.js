import Joi from "joi"
import {getDB} from "./../config/mongodb"

// define board collection
const columnCollectionName = "columns"
const columnCollectionSchema = Joi.object({
    boardId: Joi.string().required(),
    title: Joi.string().required().min(3).max(20),
    cardOrder: Joi.array().items(Joi.string()).default([]),
    createdAt: Joi.date().timestamp().default(Date.now()),
    updatedAt: Joi.date().timestamp().default(null),
    _destroy: Joi.boolean().default(false),
})

const validateSchema = async (data) => {
    // check data match boardCollectionSchema
    return await columnCollectionSchema.validateAsync(data,{abortEarly: false})
}

// de tao bang ghi len db server
const createNew = async (data) => {
    try {
        const value = await validateSchema(data)
        const result = await getDB().collection(columnCollectionName).insertOne(value); // sau khi validate data khoong bi error thi moi insert vao database
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
    }
}

export const ColumnModel = {createNew}