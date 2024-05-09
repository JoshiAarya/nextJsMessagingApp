import {object, z} from "zod"

export const AcceptMessageSchema = z.object({
    acceptMessages: z.boolean()
})