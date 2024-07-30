import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import {format} from "date-fns"
import { sign, verify } from 'hono/jwt';
import { blogInput,blogUpdate } from "@skmj/medium-zod";
export const blogRouter = new Hono<{
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
  
blogRouter.use('/*', async (c, next) => {
    const jwt = c.req.header('Authorization');
    
    if (!jwt) {
      c.status(401);
      return c.json({ error: "unauthorized" });
    }
  
    const token = jwt.split(' ')[1];
    console.log(token);
    try {
      const payload = await verify(token, c.env.JWT_SECRET);
      if(payload){
        const id = payload.id;      
        //@ts-ignore
        c.set("userId", id);
        await next();
      }
      else{
        c.status(401);
        return c.json({ error: "Log in" });
      }
    } catch (e) {
      console.error(e);
      c.status(401);
      return c.json({ error: "unauthorized" });
    }
  });
  
blogRouter.post('/', async (c) => {
    const userId = c.get("userId");
    if (!userId) {
      c.status(401);
      return c.json({ error: "unauthorized" });
    }
  
    const body = await c.req.json();
    const {success} = blogInput.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({error:"Blog Validation failed"})
    }
    try {
      const createdAt = new Date();
      const formattedDate = format(createdAt, 'MMMM d, yyyy');
      const post = await prisma.post.create({
        //@ts-ignore
        data: {
          title: body.title,
          content: body.content,
          published: body.published,
          authorId: userId,
          formattedDate:formattedDate
        }
      });
      return c.json(post);
    } catch (e) {
      console.error(e);
      c.status(500);
      return c.json({ error: "Error while creating post" });
    }
  });

  blogRouter.put('/', async (c) => {
    const userId = c.get('userId');
   
    const body = await c.req.json();
    const {success} = blogUpdate.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({error:"Blog Update Validation failed"})
    }
    prisma.post.update({
      where: {
        id: body.id,
        authorId: userId
      },
      data: {
        title: body.title,
        content: body.content
      }
    });
  
    return c.text('updated post');
  });
  blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL	,
    }).$extends(withAccelerate());
    //@ts-ignore
    const blogs = await prisma.post.findMany({
      select: {
          content: true,
          title: true,
          id: true,
         authorId:true,
         formattedDate:true,
          author: {
              select: {
                  name: true
              }
          }
      }
  });

  return c.json({
      blogs
  })
  })
  blogRouter.get('/:id', async (c) => {
    const id = c.req.param('id');
    const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL	,
    }).$extends(withAccelerate());
    
    const post = await prisma.post.findUnique({
      where: {
        id
      }
    });
  
    return c.json(post);
  })
