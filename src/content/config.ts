// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define a `type` and `schema` for each collection
// const muses = defineCollection({
//   type: "content", // v2.5.0 and later
//   schema: z.object({
//     title: z.string(),
//     tags: z.array(z.string()),
//     author: z.string(),
//     description: z.string(),
//     image: z.object({
//       src: z.string(),
//       alt: z.string(),
//       positionx: z.string().optional(),
//       positiony: z.string().optional()
//     }).optional(),
//     pubDate: z.coerce.date(),
//     updatedDate: z.coerce.date().optional(),
//   }),
// });

// const explore = defineCollection({
//   type: "content", // v2.5.0 and later
//   schema: z.object({
//     title: z.string(),
//     tags: z.array(z.string()),
//     author: z.string(),
//     description: z.string(),
//     image: z.object({
//       src: z.string(),
//       alt: z.string(),
//       positionx: z.string().optional(),
//       positiony: z.string().optional()
//     }).optional(),
//     pubDate: z.coerce.date(),
//     updatedDate: z.coerce.date().optional(),
//   }),
// });

const realm = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    author: z.string(),
    description: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
      positionx: z.string().optional(),
      positiony: z.string().optional()
    }).optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});

// const zeitweilig = defineCollection({
//   type: "content", // v2.5.0 and later
//   schema: z.object({
//     title: z.string(),
//     tags: z.array(z.string()),
//     author: z.string(),
//     description: z.string(),
//     image: z.object({
//       src: z.string(),
//       alt: z.string(),
//       positionx: z.string().optional(),
//       positiony: z.string().optional()
//     }).optional(),
//     pubDate: z.coerce.date(),
//     updatedDate: z.coerce.date().optional(),
//   }),
// });

const authors = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    author: z.string(),
    description: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
      positionx: z.string().optional(),
      positiony: z.string().optional()
    }).optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});


// 3. Export a single `collections` object to register your collection(s)
export const collections = {realm, authors };