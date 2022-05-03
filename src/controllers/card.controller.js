import { cardService } from "../services/card.service";
import { HttpStatusCode } from "../utilities/Constants";

const createNew = async (req, res) => {
    try {
        // data đã đi qua tầng validate
        const result = await cardService.createNew(req.body)
        res.status(HttpStatusCode.OK).json({result});
    } catch (error) {
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            errors: error
        })
    }
}


export const cardController = {createNew} 

