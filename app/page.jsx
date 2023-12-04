import TopicsList from "@/components/TopicList"
import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"

export default async function Home() {
  const session = await getServerSession(authOptions)
  console.log(session)

  if (!session) {
    redirect("/signIn")
  }

  return (
    <>
      <h1 className='text-3xl font-bold'> 장재원 DB</h1>
      <p className='mb-4'>배워보자</p>
      <TopicsList />
    </>
  )
}
