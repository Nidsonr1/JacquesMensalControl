import express from 'express';
import 'reflect-metadata';
import './shared/container';
import 'express-async-errors';

import { routes } from 'http/routes';
import { ThrowApiErrors } from 'middlewares/error';

export const app = express();

app.use(express.json());
app.use(routes);
app.use(ThrowApiErrors);



