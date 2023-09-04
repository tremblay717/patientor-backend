const diagnosesRouter = require('express').Router();
// const { response } = require('../app')
import diagnosesServices from '../services/diagnosesServices'

diagnosesRouter.get('/', async (_req: any, res: any) => {
    res.json(diagnosesServices.getDiagnoses());
})

module.exports = diagnosesRouter;


