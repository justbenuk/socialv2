import Link from "next/link"
export default function Header() {
  return (
    <header className="flex flex-row justify-between items-center shadow-xl font-semibold px-6 py-4">
      <div>
        <Link href='/'>Dev Social</Link>
      </div>
      <ul className="flex flex-row gap-4">
        <li><Link href='/Developer'>Developer</Link></li>
        <li><Link href='/login'>Register</Link></li>
        <li><Link href='/register'>Login</Link></li>
      </ul>
    </header>
  )
}
