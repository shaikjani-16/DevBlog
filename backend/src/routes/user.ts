import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { signinInput,signupInput } from "@skmj/medium-zod";
import { sign, verify } from 'hono/jwt';
export const userRouter = new Hono<{
    Bindings: {
      DATABASE_URL: string,
      JWT_SECRET: string,
    },
    Variables: {
      userId: string
      id:string
    }
  }>();
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: 'prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiY2QwMmY3YmMtMDg2My00OWM0LWJjZDEtNWVlM2I0MGU0YTQwIiwidGVuYW50X2lkIjoiZGZlZmJlZjYyNTA5OTYwMDc0ZDc0ZGM2ZDlkODM1Y2U1ZjkzZWM1ZWMyZWVhMDNlMzRjY2E5MzRmOWQ3ZDcyMiIsImludGVybmFsX3NlY3JldCI6IjI2YzRmYTQzLTUyNzItNDQ5Yi1hOTVmLThiMzdkYWY3ZDYzZSJ9.PYBwrrTAOZwp0jIW8xBr6rJvyZpoT-ACLUFwy7ylVOo',
      }
    }
  }).$extends(withAccelerate());
 
userRouter.post('/signup', async (c) => {
  // const prisma = new PrismaClient({
  //   datasources: {
  //     db: {
  //       url: 'prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiY2QwMmY3YmMtMDg2My00OWM0LWJjZDEtNWVlM2I0MGU0YTQwIiwidGVuYW50X2lkIjoiZGZlZmJlZjYyNTA5OTYwMDc0ZDc0ZGM2ZDlkODM1Y2U1ZjkzZWM1ZWMyZWVhMDNlMzRjY2E5MzRmOWQ3ZDcyMiIsImludGVybmFsX3NlY3JldCI6IjI2YzRmYTQzLTUyNzItNDQ5Yi1hOTVmLThiMzdkYWY3ZDYzZSJ9.PYBwrrTAOZwp0jIW8xBr6rJvyZpoT-ACLUFwy7ylVOo',
  //     }
  //   }
  // }).$extends(withAccelerate());
    const { JWT_SECRET } = c.env;
  
    // if (!JWT_SECRET) {
    //   c.status(500);
    //   return c.json({ error: "JWT_SECRET environment variable is not set" });
    // }
  
    const body = await c.req.json();
    const {success} = signupInput.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({error:"Input Validation failed"})
    }
    try {
      const user = await prisma.user.create({
        data: {
          email: body.email,
          password: body.password,
          name:body.name
        },
      });
      const jwt = await sign({ id: user.id }, JWT_SECRET);
      return c.json({ jwt });
    } catch (error) {
      console.error(error);
      c.status(403);
      //@ts-ignore
      return c.json({ error: error.message });
    }
  });
  
  userRouter.post('/signin', async (c) => {
    // const prisma = new PrismaClient({
    //   datasources: {
    //     db: {
    //       url: 'prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiY2QwMmY3YmMtMDg2My00OWM0LWJjZDEtNWVlM2I0MGU0YTQwIiwidGVuYW50X2lkIjoiZGZlZmJlZjYyNTA5OTYwMDc0ZDc0ZGM2ZDlkODM1Y2U1ZjkzZWM1ZWMyZWVhMDNlMzRjY2E5MzRmOWQ3ZDcyMiIsImludGVybmFsX3NlY3JldCI6IjI2YzRmYTQzLTUyNzItNDQ5Yi1hOTVmLThiMzdkYWY3ZDYzZSJ9.PYBwrrTAOZwp0jIW8xBr6rJvyZpoT-ACLUFwy7ylVOo',
    //     }
    //   }
    // }).$extends(withAccelerate());
     const body = await c.req.json();
     const {success} = signinInput.safeParse(body);
     if(!success){
      c.status(411);
      return c.json({error:"Input Validation failed"})
    }   
    try {
      const user = await prisma.user.findUnique({
          where: {
              email: body.email,
      password: body.password
          }
      });
  
      if (!user) {
          c.status(403);
          return c.json({ error: "user not found" });
      }
  
      const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
      return c.json({ jwt });
    } catch (e) {
      console.error(e);
      c.status(403);
      return c.json({ error: "Error while signing up" });
    }
})
  
  