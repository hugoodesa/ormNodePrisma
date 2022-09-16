import { Router } from 'express';

import { NiveisController } from './../controller/niveisController';

const niveisRouter : Router = Router()

niveisRouter
    .get("/niveis",NiveisController.findAllNiveis)
    .post("/niveis",NiveisController.createNivel)

export default niveisRouter