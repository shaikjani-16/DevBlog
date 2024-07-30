'use client'
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
import { Separator } from '@/components/ui/separator'
//@ts-ignore
function CalendarDaysIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}

//@ts-ignore
function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
//@ts-ignore
export default function Mini({blog}) {
  
  return (
    <Link
      href="#"
      className="group grid gap-4 rounded-lg border bg-background p-4 transition-colors hover:border-primary"
      prefetch={false}
    >
      <img
        src="/placeholder.svg"
        width={640}
        height={360}
        alt="Blog Post"
        className="aspect-video rounded-md object-cover"
      />
      <div className="space-y-2">
        <h3 className="text-xl font-semibold group-hover:text-primary">
          {blog.title}
        </h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <UserIcon className="h-4 w-4" />
            {blog.author.name}
          </div>
          <Separator orientation="vertical" className="h-4" />
          <div className="flex items-center gap-1">
            <CalendarDaysIcon className="h-4 w-4" />
            {blog.formattedDate}
          </div>
        </div>
        <p className="line-clamp-2 text-muted-foreground">{blog.content.substring(0,80)}</p>
      </div>
    </Link>
  )
}
