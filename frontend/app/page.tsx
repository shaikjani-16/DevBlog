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

export default function Card() {
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
            {/* <div className="space-y-2">
              <h3 className="text-xl font-semibold group-hover:text-primary">The Future of Web Development</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <UserIcon className="h-4 w-4" />
                  John Doe
                </div>
                <Separator orientation="vertical" className="h-4" />
                <div className="flex items-center gap-1">
                  <CalendarDaysIcon className="h-4 w-4" />
                  May 1, 2023
                </div>
              </div>
              <p className="line-clamp-2 text-muted-foreground">
                Explore the latest trends and technologies shaping the future of web development.
              </p>
            </div>
          </Link>
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
            /> */}
            <div className="space-y-2">
              <h3 className="text-xl font-semibold group-hover:text-primary">
                Mastering React Hooks
              </h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <UserIcon className="h-4 w-4" />
                  Jane Smith
                </div>
                <Separator orientation="vertical" className="h-4" />
                <div className="flex items-center gap-1">
                  <CalendarDaysIcon className="h-4 w-4" />
                  June 15, 2023
                </div>
              </div>
              <p className="line-clamp-2 text-muted-foreground">
                Dive deep into the power of React Hooks and learn how to build
                more efficient and maintainable applications.
              </p>
            </div>
          </Link>
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
                Serverless Architecture: The Future of Web Apps
              </h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <UserIcon className="h-4 w-4" />
                  Michael Johnson
                </div>
                <Separator orientation="vertical" className="h-4" />
                <div className="flex items-center gap-1">
                  <CalendarDaysIcon className="h-4 w-4" />
                  July 1, 2023
                </div>
              </div>
              <p className="line-clamp-2 text-muted-foreground">
                Explore the benefits and best practices of serverless
                architecture for building modern web applications.
              </p>
            </div>
          </Link>
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
                Designing Accessible Interfaces
              </h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <UserIcon className="h-4 w-4" />
                  Sarah Lee
                </div>
                <Separator orientation="vertical" className="h-4" />
                <div className="flex items-center gap-1">
                  <CalendarDaysIcon className="h-4 w-4" />
                  August 10, 2023
                </div>
              </div>
              <p className="line-clamp-2 text-muted-foreground">
                Learn how to create inclusive and accessible user interfaces
                that cater to users with diverse needs.
              </p>
            </div>
          </Link>
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
                Optimizing Web Performance
              </h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <UserIcon className="h-4 w-4" />
                  David Kim
                </div>
                <Separator orientation="vertical" className="h-4" />
                <div className="flex items-center gap-1">
                  <CalendarDaysIcon className="h-4 w-4" />
                  September 1, 2023
                </div>
              </div>
              <p className="line-clamp-2 text-muted-foreground">
                Discover techniques and best practices to improve the speed and
                performance of your web applications.
              </p>
            </div>
          </Link>
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
                Building Progressive Web Apps
              </h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <UserIcon className="h-4 w-4" />
                  Emily Chen
                </div>
                <Separator orientation="vertical" className="h-4" />
                <div className="flex items-center gap-1">
                  <CalendarDaysIcon className="h-4 w-4" />
                  October 15, 2023
                </div>
              </div>
              <p className="line-clamp-2 text-muted-foreground">
                Explore the benefits and best practices of building Progressive
                Web Apps for a seamless user experience.
              </p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  )
}
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
