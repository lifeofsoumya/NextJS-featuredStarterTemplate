import Link from 'next/link'
import MyHead from '../components/MyHead'

export default function Home() {
  return (
    <>
      <MyHead
        title="Home"
        description="Welcome to TypeFinance, where we help you to choose the best financing for you"
        image="https://typefinance.com/typefinance-dp.jpg"
        url="https://typefinance.com"
      />

      <main className="w-full min-h-screen flex flex-col justify-center items-center">
        <h1> Welcome to LinKtree </h1>
        <Link className='bg-indigo-600 rounded-sm inline-block my-2 p-1 px-2 text-white' href="/apply">Link load test</Link>
      </main>
    </>
  )
}
