'use client'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import Mini from '@/components/component/Mini'

interface BlogType {
  id: string
  title: string
  content: string
  authorId: string
  formattedDate: string
  author: {
    name: string
  }
}

export default function Page() {
  const [blogs, setBlogs] = useState<BlogType[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_DATABASE_URL}/api/v1/blog/bulk`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          },
        )
        console.log('Fetched data:', res.data.blogs) // Log the fetched data
        setBlogs(res.data?.blogs) // Ensure res.data is an array
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-background border-b px-4 md:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            New Blog
          </Link>
          <Link
            href="#"
            className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            View All Blogs
          </Link>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="overflow-hidden rounded-full"
            >
              <img
                src="/placeholder.svg"
                width={36}
                height={36}
                alt="Avatar"
                className="overflow-hidden rounded-full"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>@username</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main className="flex-1 py-8 md:py-12 lg:py-16">
        <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {
            blogs.map((blog) => <Mini blog={blog} key={blog.id} />)}
        </div>
      </main>
    </div>
  )
}
