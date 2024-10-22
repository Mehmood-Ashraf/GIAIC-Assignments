import Link from "next/link"

export default function Navbar() {
return(
   <div className="font-semibold   text-white bg-slate-900 p-5">
      <ul className="flex justify-evenly">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/Jobs">Jobs</Link>
      <Link href="/Jobs/Programming">Programming</Link>
      <Link href="/contact">Contact Us</Link>
      </ul>
   </div>
   
  )
}