import express from 'express';
import 'reflect-metadata';
import 'express-async-errors';

import './shared/container';
import { ThrowApiErrors } from 'middlewares/throwApiErrors';
import { routes } from 'http/routes';


export const app = express()

app.use(express.json());
app.use(routes);
app.use(ThrowApiErrors);