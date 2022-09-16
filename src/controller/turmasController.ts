import { Request, Response } from 'express';

import prisma from '../connection';

export class TurmaController {


    static createTurma = async (req : Request ,res : Response) => {
      
        const turmaCriada = await prisma.turma.create({
            data:req.body
        })

        res.status(200).json(turmaCriada)

    }

    static listAllTurmas = async (req : Request , res : Response) => {

        const turmas = await prisma.turma.findMany()

        res.status(200).json(turmas)

    }


}