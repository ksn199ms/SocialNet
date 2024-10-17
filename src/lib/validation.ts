import {z} from "zod"

const requiredString = z.string().trim().min(1,"Required");

export const signUpSchema = z.object({
    email: requiredString.email("Invalid mail address"),
    username: requiredString.regex(
        /^[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*$/,
        "only letters, numbers and dashes allowed"
    ),
    password: requiredString.min(8,"Must be at least 8 characters long"),
})

export type SignUpValues = z.infer<typeof signUpSchema>

export const loginSchema = z.object({
    username: requiredString,
    password: requiredString,
})

export type LoginValues = z.infer<typeof loginSchema>

export const createPostSchema = z.object({
    content: requiredString,
  });