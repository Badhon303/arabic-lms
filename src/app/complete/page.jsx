"use client"
import { useEffect } from "react"
import Link from "next/link"

const Page = () => {
  useEffect(() => {
    const messageContainer = document.getElementById("message-container")
    messageContainer.classList.add("scale-100")
  }, [])

  return (
    <div className="flex h-screen items-center justify-center">
      <div
        id="message-container"
        className="p-6 bg-green-500 text-white rounded-lg shadow-lg transform scale-0 transition-transform duration-300"
      >
        <div className="text-2xl font-bold mb-4">Congratulations!</div>
        <div className="mb-5">You have successfully completed this lesson.</div>
        <Link
          href="/learn"
          className=" bg-white text-green-500 px-4 py-2 rounded-md shadow-md hover:shadow-lg transition duration-300"
        >
          Learn More
        </Link>
      </div>
    </div>
  )
}

export default Page
