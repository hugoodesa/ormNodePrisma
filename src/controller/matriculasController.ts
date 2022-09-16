import { Request, Response } from 'express';

import prisma from '../connection';

export class MatriculasController {

    static listarMatriculas = async (req : Request , res : Response) => {
      
        const matriculas = await prisma.matriculas.findMany()

        res.status(200).json(matriculas)

    }

    static cadastrarMatricula = async (req : Request , res : Response) => {
        
        const matriculas = await prisma.matriculas.create({
            data:req.body
        })

        res.status(200).json(matriculas)

    }
}