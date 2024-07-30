'use client'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
export default function Signup() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const emailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const usernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }
  const passwordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }
  useEffect(() => {
    if (email.length > 5 && password.length > 6) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }, [email, password])
  //@ts-ignore
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_DATABASE_URL}/api/v1/user/signup`,
        {
          email,
          password,
          name: username,
        },
      )
      if (res.status === 200) {
        localStorage.setItem('token', res.data.jwt)
        toast.success('Successfully signed up')
        router.push('/')
      } else {
        console.log(res)
      }
    } catch (e) {
      console.log(e)
      //@ts-ignore
      toast.error(e.response.data.error)
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="w-full max-w-md p-8 space-y-4 bg-card rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <p className="text-muted-foreground">
            Already have an account?{' '}
            <Link href="/signin" className=" text-stone-900">
              Login
            </Link>
          </p>
        </div>
        <form className="space-y-4">
          <div>
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              placeholder="Enter your username"
              required
              onChange={usernameChange}
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
              onChange={emailChange}
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              required
              onChange={passwordChange}
            />
          </div>
          <Button
            type="submit"
            className="w-full"
            onClick={handleSubmit}
            disabled={buttonDisabled}
          >
            {buttonDisabled ? 'Fill All Details' : 'SignUp'}
          </Button>
        </form>
      </div>
    </div>
  )
}
