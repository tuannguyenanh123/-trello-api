import { ColumnService } from "../services/column.service";
import { HttpStatusCode } from "../utilities/Constants";

const createNew = async (req, res) => {
    try {
        // data đã đi qua tầng validate
        const result = await ColumnService.createNew(req.body)
        res.status(HttpStatusCode.OK).json({result});
    } catch (error) {
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            errors: error
        })
    }
}

const update = async (req, res) => {
    try {
        // lấy id params 
        const {id} = req.params

        // data đã đi qua tầng validate
        const result = await ColumnService.update(id,req.body)
        res.status(HttpStatusCode.OK).json({result});
    } catch (error) {
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            errors: error
        })
    }
}

export const columnController = {createNew,update} 

