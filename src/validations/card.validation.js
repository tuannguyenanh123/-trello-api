import Joi from "joi"
import {HttpStatusCode,propertiesCard } from '../utilities/Constants'

const createNew = async (req, res,next) => {
    const condition = Joi.object({
        boardId: Joi.string().required(),
        columnId: Joi.string().required(),
        title: Joi.string().required().min(propertiesCard.MIN_CARD_LENGTH).max(propertiesCard.MAX_CARD_LENGTH).trim(),
    })
    try {
        await condition.validateAsync(req.body,{abortEarly: false})
        next()
    } catch (error) {
        res.status(HttpStatusCode.BAD_REQUEST).json({
            errors: new Error(error).message
        })
    }
}


export const cardValidation = {createNew}



