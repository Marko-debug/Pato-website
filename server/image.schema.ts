import { z } from "zod";

export const createImageSchema = z.object({
    body: z.object({
        image_id: z.string(),
        noteNoteId: z.string({
            required_error: "Note id is required",
        }),
        url: z.string({
            required_error: "Url is required",
        }),
    })
})

export const params = z.object({
    image_id: z.string(),
})


export type ParamsInput = z.TypeOf<typeof params>;
// export type FilterQueryInput = z.TypeOf<typeof filterQuery>;
export type CreateImageInput = z.TypeOf<typeof createImageSchema>["body"];