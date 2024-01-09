import express from 'express';
import 'reflect-metadata';
import 'express-async-errors';

import './shared/container';
import { routes } from 'http/routes';
import { ThrowApiErrors } from 'middlewares/throwApiErrors';


export const app = express()

app.use(express.json());
app.use(routes);
// app.use('/files', express.static('tmp/uploads'));
app.use(express);
app.use(ThrowApiErrors);