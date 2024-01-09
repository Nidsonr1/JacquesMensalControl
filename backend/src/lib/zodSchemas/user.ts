import { z } from "zod";

export const registerUserSchema = z.object({
  name: z.string(),
  cim: z.string(),
  email: z.string(),
  phone: z.string(),
  roleId: z.string().nullable(),
  lodgeId: z.string()
});

export const loginUserSchema = z.object({
  cim: z.string(),
  password: z.string()
})