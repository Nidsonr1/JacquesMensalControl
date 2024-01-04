import { z } from "zod";

export const registerLodgeSchema = z.object({
  name: z.string()
});