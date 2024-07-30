'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import toast from 'react-hot-toast'
import { BlogInput, blogInput } from '@skmj/medium-zod'
export default function Component() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [published, setPublished] = useState(false)
  //@ts-ignore
  const handlePublish = async (e) => {
    setPublished(true)
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_DATABASE_URL}/api/v1/blog`,
        {
          title,
          content: description,
          published: published,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      )
      setPublished((prev) => !prev)
      toast.success('Published successfully')
      console.log(res.data)
    } catch (error) {
      alert(error)
    }
  }
  return (
    <div className="flex justify-center items-center min-h-screen w-full px-4 py-6 md:px-6 lg:py-16 md:py-12">
      <article className="prose prose-gray w-full max-w-2xl mx-auto dark:prose-invert">
        <div className="flex flex-col items-center space-y-8">
          <div className="w-full space-y-4">
            <Input
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full text-3xl font-bold"
            />
            <Textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full min-h-[300px] text-lg"
            />
          </div>
          <Button
            onClick={handlePublish}
            className={`w-full max-w-xs ${
              published
                ? 'bg-green-500 text-green-50 hover:bg-green-600'
                : 'bg-primary text-primary-foreground hover:bg-primary/90'
            } px-6 py-3 text-lg font-medium`}
          >
            {published ? 'Loading...' : 'Publish'}
          </Button>
        </div>
      </article>
    </div>
  )
}
