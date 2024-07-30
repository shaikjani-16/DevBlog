import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { Hono } from 'hono';
import { sign, verify } from 'hono/jwt';
import { userRouter } from './routes/user';
import { blogRouter } from './routes/post';
import { cors } from 'hono/cors';
// Create the main Hono app

const app = new Hono();
app.use(  
  cors({
    origin: `*`,
  })
)
app.route('/api/v1/user',userRouter)
app.route('/api/v1/blog',blogRouter)
// Middleware to verify JWT and set userId

// Initialize PrismaClient


app.get("/", (c) => {
  return c.text("Hello Hono!");
});



export default app;
