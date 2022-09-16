import { Router } from 'express';

import { TurmaController } from '../controller/turmasController';

const turmasRouter : Router = Router()

turmasRouter
    .get("/turmas",TurmaController.listAllTurmas)
    .post("/turmas",TurmaController.createTurma)

export default turmasRouter