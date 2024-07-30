'use client'

import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { useRouter, useSearchParams } from 'next/navigation'
import axios from 'axios'
import React from 'react'

const BlogSearch = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const id = searchParams.get('id')

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return

      console.log(id)

      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_DATABASE_URL}/api/v1/blog/${id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          },
        )
        console.log('ins console')
        console.log(res.data)
      } catch (err) {
        //@ts-ignore
        toast.error(err.response?.data?.message || 'An error occurred')
      }
    }

    fetchData()
  }, [id])

  return (
    <div className="px-4 py-6 md:px-6 lg:py-16 md:py-12">
      <article className="prose prose-gray mx-auto dark:prose-invert">
        <div className="flex items-center justify-between space-y-2 not-prose">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem]">
            The Future of Web Development: Embracing the Power of AI
          </h1>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <p>Posted on June 15, 2024 by @shadcn</p>
          </div>
        </div>
        <p>
          In the ever-evolving landscape of web development, the emergence of
          AI-powered tools has revolutionized the way we approach building and
          maintaining digital experiences. As we navigate this exciting new
          frontier, it's crucial to understand the profound impact that AI is
          having on the industry and how it can shape the future of web
          development.
        </p>
        <p>
          One of the most significant advancements in recent years has been the
          rise of generative AI models, such as the one powering this very tool.
          These models have the ability to understand natural language, generate
          human-like text, and even create visual assets, all with remarkable
          accuracy and efficiency. For web developers, this means a
          transformative shift in their workflow, allowing them to automate
          repetitive tasks, streamline their development process, and focus on
          the more creative and strategic aspects of their work.
        </p>
        <p>
          With AI-powered tools, developers can now generate boilerplate code,
          optimize performance, and even prototype entire web applications with
          ease. This not only accelerates the development cycle but also enables
          teams to explore more innovative solutions, pushing the boundaries of
          what's possible on the web.
        </p>
        <p>
          Moreover, the integration of AI into web development extends beyond
          just code generation. AI-powered analytics and user behavior tracking
          can provide invaluable insights, helping developers make data-driven
          decisions and create more engaging and user-centric experiences. From
          personalized content recommendations to predictive maintenance, the
          possibilities are endless.
        </p>
        <p>
          As we look to the future, the continued advancements in AI and its
          seamless integration with web development will undoubtedly shape the
          industry in profound ways. Developers who embrace this technology and
          leverage its capabilities will be well-positioned to lead the charge
          in creating the next generation of innovative and impactful web
          experiences.
        </p>
      </article>
    </div>
  )
}

export default BlogSearch
