import { Pessoa } from '@prisma/client';
import { Request, Response } from 'express';

import prisma from '../connection';

export class PessoasControler {
  static mainRoute = (req: Request, res: Response) => {
    res.status(200).json({ message: "Main route Pessoas" });
  };

  static createPessoas = async (req: Request, res: Response) => {
    const pessoa: Pessoa = req.body;

    const pessoaCadastrada = await prisma.pessoa.create({ data: pessoa });

    res.status(200).json(pessoaCadastrada);
  };

  static listAllPessoas = async (req: Request, res: Response) => {
    const pessoas = await prisma.pessoa.findMany();

    res.status(200).json(pessoas);
  };

  static listById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const pessoas = await prisma.pessoa.findFirst({
      where: { id: Number(id) },
    });

    res.status(200).json(pessoas);
  };

  static deleteById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const pessoas = await prisma.pessoa.delete({ where: { id: Number(id) } });

    res.status(200).json(pessoas);
  };

  static updateById = async (req : Request , res : Response) => {
    
    const {id} = req.params
    const {nome} = req.body

    const pessoaAtualizada = await prisma.pessoa.update({
        data:{nome:nome},
        where: { id: Number(id)}
    });

    res.status(200).json(pessoaAtualizada);

  }
}
