"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function AddTopicForm() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(`/api/topics`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      })
      if (!res.ok) {
        throw new Error("Failed to update topic")
      }
      router.push("/")
      router.refresh()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className='border border-slate-500 p-4'
        type='text'
        placeholder='제목을 작성하세요'
      />
      <textarea
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className='border border-slate-500 p-4 h-32'
        type='text'
        placeholder='내용을 작성하세요'
      />
      <button
        type='submit'
        className='bg-green-800 text-white font-bold px-6 py-3 w-fit rounded-md'
      >
        작성완료
      </button>
    </form>
  )
}
