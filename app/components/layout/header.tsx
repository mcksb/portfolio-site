import Link from 'next/link'

const navItems = {
  '/': {
    name: 'home',
  },
  'https://github.com/mcksb': {
    name: 'github',
  },
  'https://vercel.com/templates/next.js/portfolio-starter-kit': {
    name: 'deploy',
  },
}

export function Navbar() {
  return (
    <nav id="nav" className="flex items-center justify-between px-6 py-4">
      <div className="text-neutral-500 font-medium">
        shaun.dev
      </div> 
      <div className="flex items-center gap-4">
        {Object.entries(navItems).map(([path, { name }]) => {
          return (
            <Link
              key={path}
              href={path}
              className="text-neutral-500 hover:text-primary-300 transition-colors duration-[150ms]"
            >
              {name}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
