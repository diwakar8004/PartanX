"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function PaloAltoRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.replace("/")
  }, [router])

  return null
}
