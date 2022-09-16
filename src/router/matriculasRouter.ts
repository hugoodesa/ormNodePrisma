import { Router } from 'express';

import { MatriculasController } from '../controller/matriculasController';

export const matriculasRouter : Router = Router()

matriculasRouter
    .get("/matriculas",MatriculasController.listarMatriculas)
    .post("/matriculas",MatriculasController.cadastrarMatricula)