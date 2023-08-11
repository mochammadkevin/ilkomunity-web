import { z, defineCollection } from "astro:content";

const achievementsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        award: z.string(),
        competition: z.string(),
        imageSrc: z.string(),
        event: z.string(),
        team: z.string(),
        publishDate: z.date(),
    })
});

export const collections = {'achievements': achievementsCollection};