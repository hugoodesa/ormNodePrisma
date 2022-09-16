import express, { Application } from 'express';

import { routes } from './../router';

const api : Application = express()

routes(api)

export default api