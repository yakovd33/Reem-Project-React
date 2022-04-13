import { Router, NextFunction, Request, Response } from 'express';
import recommendationModel from '../models/recommendation';
const router = Router();

interface recommendationInterface {
    region: string;
    address: string;
    type: string;
}

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    let recommendations = await recommendationModel.find();

    let finalReccomendations = [];

    let { region } = req.query;
    
    if (region) {
        recommendations.forEach((recommendation : recommendationInterface) => {
            if (recommendation.region == region) {
                finalReccomendations.push(recommendation);
            }
        });

        recommendations.forEach((recommendation : recommendationInterface) => {
            if (recommendation.region != region) {
                finalReccomendations.push(recommendation);
            }
        });
    } else {
        finalReccomendations = recommendations;
    }

    res.json(finalReccomendations);
});

export default router;