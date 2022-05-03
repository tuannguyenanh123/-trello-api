import {BoardModel} from '../models/board.model'


const createNew = async (data) => {
    try {
        const result = await BoardModel.createNew(data);
        return result;
    } catch (error) {
        throw new Error(error)
    }
}
// async return a promise 

export const boardService = {createNew}