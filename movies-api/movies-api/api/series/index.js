import seriesModel from './seriesModel'; 
import asyncHandler from 'express-async-handler';
import express from 'express';

const router = express.Router(); 


router.get('/series', asyncHandler(async (req, res) => {
    const series = await seriesModel.find();
    res.status(200).json(series);
}));

// Get series details. yes copy paste and rewriting code.
router.get('/:series_id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.series_id);
    const series = await seriesModel.findBySeriesDBId(id);
    if (series) {
        res.status(200).json(series);
    } else {
        res.status(404).json({message: 'The series you requested could not be found.', status_code: 404});
    }
})); 


export default router;