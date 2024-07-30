/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/fWrqOQHQuSA
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Archivo } from 'next/font/google'

archivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
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
import { Card, CardContent } from '@/components/ui/card'

export function mainPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link
            href="#"
            className="flex items-center gap-2 font-bold"
            prefetch={false}
          >
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Acme Blog</span>
          </Link>
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
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
                  <span className="sr-only">John Doe</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>John Doe</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="#"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              New Blog
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 py-6 md:py-12">
        <div className="container grid gap-6 px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <img
                src="/placeholder.svg"
                width={400}
                height={225}
                alt="Blog Post"
                className="aspect-video overflow-hidden rounded-t-lg object-cover"
              />
              <CardContent className="space-y-2 p-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <UserIcon className="h-4 w-4" />
                  <span>John Doe</span>
                  <span>•</span>
                  <span>June 1, 2023</span>
                </div>
                <h3 className="text-xl font-semibold">
                  <Link href="#" className="hover:underline" prefetch={false}>
                    Mastering React: A Comprehensive Guide
                  </Link>
                </h3>
                <p className="line-clamp-2 text-muted-foreground">
                  Dive into the world of React and learn how to build powerful
                  web applications. From fundamental concepts to advanced
                  techniques, this guide has you covered.
                </p>
              </CardContent>
            </Card>
            <Card>
              <img
                src="/placeholder.svg"
                width={400}
                height={225}
                alt="Blog Post"
                className="aspect-video overflow-hidden rounded-t-lg object-cover"
              />
              <CardContent className="space-y-2 p-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <UserIcon className="h-4 w-4" />
                  <span>Jane Smith</span>
                  <span>•</span>
                  <span>May 15, 2023</span>
                </div>
                <h3 className="text-xl font-semibold">
                  <Link href="#" className="hover:underline" prefetch={false}>
                    The Future of Web Development: Trends and Insights
                  </Link>
                </h3>
                <p className="line-clamp-2 text-muted-foreground">
                  Explore the latest trends and technologies shaping the future
                  of web development. Stay ahead of the curve and learn how to
                  adapt to the changing landscape.
                </p>
              </CardContent>
            </Card>
            <Card>
              <img
                src="/placeholder.svg"
                width={400}
                height={225}
                alt="Blog Post"
                className="aspect-video overflow-hidden rounded-t-lg object-cover"
              />
              <CardContent className="space-y-2 p-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <UserIcon className="h-4 w-4" />
                  <span>Sarah Lee</span>
                  <span>•</span>
                  <span>April 20, 2023</span>
                </div>
                <h3 className="text-xl font-semibold">
                  <Link href="#" className="hover:underline" prefetch={false}>
                    Unleashing the Power of CSS: Advanced Techniques
                  </Link>
                </h3>
                <p className="line-clamp-2 text-muted-foreground">
                  Discover the hidden power of CSS and learn advanced techniques
                  to create stunning and responsive web designs. Take your CSS
                  skills to the next level.
                </p>
              </CardContent>
            </Card>
            <Card>
              <img
                src="/placeholder.svg"
                width={400}
                height={225}
                alt="Blog Post"
                className="aspect-video overflow-hidden rounded-t-lg object-cover"
              />
              <CardContent className="space-y-2 p-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <UserIcon className="h-4 w-4" />
                  <span>Michael Johnson</span>
                  <span>•</span>
                  <span>March 10, 2023</span>
                </div>
                <h3 className="text-xl font-semibold">
                  <Link href="#" className="hover:underline" prefetch={false}>
                    Optimizing Web Performance: Strategies and Techniques
                  </Link>
                </h3>
                <p className="line-clamp-2 text-muted-foreground">
                  Learn how to optimize your website's performance and deliver
                  lightning-fast experiences for your users. Dive into the
                  latest techniques and best practices.
                </p>
              </CardContent>
            </Card>
            <Card>
              <img
                src="/placeholder.svg"
                width={400}
                height={225}
                alt="Blog Post"
                className="aspect-video overflow-hidden rounded-t-lg object-cover"
              />
              <CardContent className="space-y-2 p-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <UserIcon className="h-4 w-4" />
                  <span>Emily Chen</span>
                  <span>•</span>
                  <span>February 5, 2023</span>
                </div>
                <h3 className="text-xl font-semibold">
                  <Link href="#" className="hover:underline" prefetch={false}>
                    Mastering JavaScript: From Beginner to Expert
                  </Link>
                </h3>
                <p className="line-clamp-2 text-muted-foreground">
                  Dive deep into the world of JavaScript and learn how to become
                  a proficient developer. Explore advanced concepts, frameworks,
                  and best practices.
                </p>
              </CardContent>
            </Card>
            <Card>
              <img
                src="/placeholder.svg"
                width={400}
                height={225}
                alt="Blog Post"
                className="aspect-video overflow-hidden rounded-t-lg object-cover"
              />
              <CardContent className="space-y-2 p-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <UserIcon className="h-4 w-4" />
                  <span>David Lee</span>
                  <span>•</span>
                  <span>January 1, 2023</span>
                </div>
                <h3 className="text-xl font-semibold">
                  <Link href="#" className="hover:underline" prefetch={false}>
                    Accessibility in Web Development: Best Practices
                  </Link>
                </h3>
                <p className="line-clamp-2 text-muted-foreground">
                  Discover the importance of accessibility in web development
                  and learn how to create inclusive and user-friendly
                  experiences for all users.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <footer className="bg-muted p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Company</h3>
            <Link href="#" prefetch={false}>
              About Us
            </Link>
            <Link href="#" prefetch={false}>
              Our Team
            </Link>
            <Link href="#" prefetch={false}>
              Careers
            </Link>
            <Link href="#" prefetch={false}>
              News
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Products</h3>
            <Link href="#" prefetch={false}>
              Men
            </Link>
            <Link href="#" prefetch={false}>
              Women
            </Link>
            <Link href="#" prefetch={false}>
              Kids
            </Link>
            <Link href="#" prefetch={false}>
              Accessories
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link href="#" prefetch={false}>
              Blog
            </Link>
            <Link href="#" prefetch={false}>
              Community
            </Link>
            <Link href="#" prefetch={false}>
              Support
            </Link>
            <Link href="#" prefetch={false}>
              FAQs
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" prefetch={false}>
              Cookie Policy
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Contact</h3>
            <Link href="#" prefetch={false}>
              Support
            </Link>
            <Link href="#" prefetch={false}>
              Sales
            </Link>
            <Link href="#" prefetch={false}>
              Press
            </Link>
            <Link href="#" prefetch={false}>
              Partnerships
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}

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
