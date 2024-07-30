'use server'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { cookies } from 'next/headers'
export default function Signup() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [buttonDisabled, setButtonDisabled] = useState(false)
  useEffect(() => {
    if (email.length > 5 && password.length > 6) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }, [email, password])
  const emailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const passwordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }
  //@ts-ignore
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_DATABASE_URL}/api/v1/user/signin`,
        {
          email,
          password,
        },
      )
      if (res.status === 200) {
        
        console.log(res.data.jwt)
        localStorage.setItem('token', res.data.jwt)
        cookies().set ('token', res.data.jwt);
        toast.success('sucessfully signed in')
        router.push('/all')
      }
    } catch (e) {
      console.error(e)
      //@ts-ignore
      // toast.error(e.response.data);
      toast.error(e.response.data.error + ' or incorrect password')
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="w-full max-w-md p-8 space-y-4 bg-card rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Sign In</h1>
          <p className="text-muted-foreground">
            Don't have an account?{' '}
            <Link href="/signup" className=" text-stone-900">
              Signup
            </Link>
          </p>
        </div>
        <form className="space-y-4">
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
            {buttonDisabled ? 'Fill All Details' : 'Sign In'}
          </Button>
        </form>
      </div>
    </div>
  )
}
