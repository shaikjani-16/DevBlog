import z from 'zod';
export const signupInput= z.object({
  email:z.string().email(),
    password: z.string().min(8),
    name:z.string()
    
  })

  export type SignupInput = z.infer<typeof signupInput>

  export const signinInput=z.object({
    email:z.string().email(),
    password:z.string().min(6)
  })
  export type SigninInput = z.infer<typeof signinInput>

  export const blogInput = z.object({
    title:z.string(),
    content:z.string().optional(),
    published:z.boolean().optional(),

  })

  export type BlogInput = z.infer<typeof blogInput>
  export const blogUpdate=z.object({
    
    title:z.string().optional(),
    content:z.string().optional()

  })
  export type BlogUpdate = z.infer<typeof blogUpdate>