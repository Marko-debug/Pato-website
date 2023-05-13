import { z } from "zod";

export const createNoteSchema = z.object({
    body: z.object({
        note_id: z.string(),
        title: z.string({
            required_error: "Title is required",
        }),
        content: z.string({
            required_error: "Content is required",
        })
        // images: z.blob({
        //     required_error: "Content is required",
        // }).partial(),
    })
})

export const params = z.object({
    noteId: z.string(),
})

export const updateNoteSchema = z.object({
    params,
    body: z.object({
            title: z.string(),
            content: z.string(),
            // images: z.string(),
        })
        .partial(),
})

// export const filterQuery = z.object({
//     // limit: z.number().default(1),
//     // page: z.number().default(10),
// })

export type ParamsInput = z.TypeOf<typeof params>;
// export type FilterQueryInput = z.TypeOf<typeof filterQuery>;
export type CreateNoteInput = z.TypeOf<typeof createNoteSchema>["body"];
export type UpdateNoteInput = z.TypeOf<typeof updateNoteSchema>;