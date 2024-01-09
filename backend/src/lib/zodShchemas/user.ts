import { z } from "zod";

export const registerUserSchema = z.object({
  name: z.string(),
  cim: z.string(),
  email: z.string(),
  phone: z.string(),
  lodgeId: z.string(),
  roleId: z.string().optional()
});

export const loginUserSchema = z.object({
  cim: z.string(),
  password: z.string()
})