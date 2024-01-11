import { z } from "zod";

export const registerLodgeSchema = z.object({
  name: z.string(),
  colors: z.array(z.string()),
  logo: z.string()
});

export const listLodgesSchema = z.string().optional();