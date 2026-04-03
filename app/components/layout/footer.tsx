function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="flex justify-between px-4 py-1">
      <ul className="flex items-center gap-4">
        <li>
          <a
            className="text-neutral-400 flex items-center gap-2"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/mcksb"
          >
            <ArrowIcon />
            <p className="">github</p>
          </a>
        </li>
        <li>
          <a
            className="text-neutral-400 flex items-center gap-2"
            rel="noopener noreferrer"
            target="_blank"
            href="https://vercel.com/templates/next.js/portfolio-starter-kit"
          >
            <ArrowIcon />
            <p className="">view source</p>
          </a>
        </li>
      </ul>
      <p className="text-neutral-200">
        © {new Date().getFullYear()} MIT Licensed
      </p>
    </footer>
  )
}
