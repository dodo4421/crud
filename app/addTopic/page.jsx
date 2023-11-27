"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"

export default function AddTopic() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!title || !description) {
      alert("제목이나 내용이 없네용")
    }

    try {
      const res = await fetch("/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      })
      if (res.ok) {
        router.push("/")
        router.refresh()
      } else {
        throw new Error("Failed to create a topic")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='border border-slate-500 p-4'
        type='text'
        placeholder='Topic Title'
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className='border border-slate-500 p-4 h-32'
        type='text'
        placeholder='Topic Description'
      />
      <button className='bg-green-800 text-white font-bold px-6 py-3 w-fit rounded-md'>
        Add Topic
      </button>
    </form>
  )
}
