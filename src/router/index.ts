import express, { Application } from 'express';

import { matriculasRouter } from './matriculasRouter';
import niveisRouter from './niveisRouter';
import productRouter from './productsRouter';
import turmasRouter from './turmasRouter';

export const routes = (api : Application) => {
  
    api.use(
        express.json(),
        productRouter,
        niveisRouter,
        turmasRouter,
        matriculasRouter
    )

}