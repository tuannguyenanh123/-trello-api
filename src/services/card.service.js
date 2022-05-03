import {CardModel} from '../models/card.model'


const createNew = async (data) => {
    try {
        const result = await CardModel.createNew(data);
        return result;
    } catch (error) {
        throw new Error(error)
    }
}
// async return a promise 

export const cardService = {createNew}

