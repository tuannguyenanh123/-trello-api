import { boardService } from "../services/board.service";
import { HttpStatusCode } from "../utilities/Constants";

const createNew = async (req, res) => {
    try {
        const result = await boardService.createNew(req.body)
        res.status(HttpStatusCode.OK).json({result});
    } catch (error) {
        console.log(error);
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            errors: error
        })
    }
}
export const boardController = {createNew} 