import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'homolog', 'production']).default('dev'),
  DB_USERNAME: z.coerce.string(),
  DB_PASSWORD: z.coerce.string(),
  DB_DATABASE: z.coerce.string(),
  DB_PORT: z.coerce.number(),
  API_PORT: z.coerce.number()
});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  console.error('❎ - Invalid environment variables', _env.error.format());

  throw new Error('Invalid Environment Variables');
}

export const env = _env.data;