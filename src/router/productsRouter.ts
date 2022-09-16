import { Router } from 'express';

import { PessoasControler } from './../controller/pessoasController';

const productRouter : Router = Router()

productRouter
    .get("/pessoas",PessoasControler.listAllPessoas)
    .get("/pessoas/:id",PessoasControler.listById)
    .post("/pessoas",PessoasControler.createPessoas)
    .delete("/pessoas/:id",PessoasControler.deleteById)
    .put("/pessoas/:id",PessoasControler.updateById)

export default productRouter