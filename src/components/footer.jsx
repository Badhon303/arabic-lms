import { FcHome } from "react-icons/fc"
import { FcReading } from "react-icons/fc"
import { FcPortraitMode } from "react-icons/fc"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white sm:hidden">
      <div className="flex justify-between border-t-2 p-4 border-slate-300">
        <Link href="http://115.127.24.183:3001/www.leads.com/index.html">
          <FcHome className="h-10 w-10" />
        </Link>
        <Link href="/learn">
          <FcReading className="h-10 w-10" />
        </Link>
        <Link href="/learn">
          <FcPortraitMode className="h-10 w-10" />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
