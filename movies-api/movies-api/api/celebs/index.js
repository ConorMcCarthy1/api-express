import celebsModel from './seriesModel'; 
import asyncHandler from 'express-async-handler';
import express from 'express';

const router = express.Router(); 


router.get('/people', asyncHandler(async (req, res) => {
    const people = await celebsModel.find();
    res.status(200).json(people);
}));

// Get series details. yes copy paste and rewriting code.
router.get('/:person_id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.person_id);
    const people = await celebsModel.findByCelebDBId(person_id);
    if (people) {
        res.status(200).json(people);
    } else {
        res.status(404).json({message: 'The series you requested could not be found.', status_code: 404});
    }
})); 


export default router; 