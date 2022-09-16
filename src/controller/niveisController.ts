import { Nivel } from '@prisma/client';
import { Request, Response } from 'express';

import prisma from '../connection';

export class NiveisController {

    static findAllNiveis = async (req : Request, res : Response) => {
     
        const niveisCadastrados = await prisma.nivel.findMany()        

        res.status(200).json(niveisCadastrados)

    }

    static createNivel = async (req : Request, res : Response) => {
     
        const nivelCadastrado:Nivel = await prisma.nivel.create({data:req.body})   
        
        res.status(200).json(nivelCadastrado)

    }
}