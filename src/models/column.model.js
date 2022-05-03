import Joi from "joi"
import {ObjectID} from "mongodb"

import {getDB} from "./../config/mongodb"

// define board collection
const columnCollectionName = "columns"
const columnCollectionSchema = Joi.object({
    boardId: Joi.string().required(),
    title: Joi.string().required().min(3).max(20).trim(),
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
        console.log(result.ops[0]);
        return result.ops[0];
    } catch (error) {
        throw new Error(error)
    }
}

const update = async (id,data) => {
    try {
        const result = await getDB().collection(columnCollectionName).findOneAndUpdate(
            {
                _id: ObjectID(id)
            },
            {
                $set: data
            },
            {
                returnOriginal: true
            }
        ); // sau khi validate data khoong(value); // sau khi validate data khoong bi error thi moi insert vao database
        console.log(result.value);
        return result.value;
    } catch (error) {
        throw new Error(error)
    }
}

export const ColumnModel = {
                                createNew,
                                update
                            }


