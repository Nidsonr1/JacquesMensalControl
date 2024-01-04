import { z } from "zod";

export const registerRoleSchema = z.object({
  name: z.string()
});