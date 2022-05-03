import {ColumnModel} from '../models/column.model'


const createNew = async (data) => {
    try {
        const result = await ColumnModel.createNew(data);
        return result;
    } catch (error) {
        throw new Error(error)
    }
}

const update = async (id,data) => {
    try {
        const updateData = {
            ...data,
            updatedAt: Date.now(),
        } // data là req.body bên controller

        const result = await ColumnModel.update(id,updateData);
        return result;
    } catch (error) {
        throw new Error(error)
    }
}
// async return a promise 

export const ColumnService = {createNew,update}

