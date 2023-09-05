import Image from 'next/image'
import { Inter } from 'next/font/google'
import Numeros from '@/components/Numeros'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Numeros/>
    </main>
  )
}
