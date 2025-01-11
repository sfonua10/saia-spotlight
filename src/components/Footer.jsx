import Link from 'next/link'

import { Container } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

function ExternalLink({ href, children }) {
  return (
    <a
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400 inline-flex items-center gap-1"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

function DollarIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        stroke="currentColor"
      />
    </svg>
  )
}

export function Footer() {
  const venmoUsername = 'saiafonua';
  const venmoAppLink = `venmo://users/${venmoUsername}`;
  const venmoWebLink = `https://venmo.com/u/${venmoUsername}`;

  const handleVenmoClick = (e) => {
    // Try to open the Venmo app first
    window.location.href = venmoAppLink;
    
    // After a short delay, if the app didn't open, redirect to the web version
    setTimeout(() => {
      window.location.href = venmoWebLink;
    }, 500);
    
    e.preventDefault();
  };

  return (
    <footer className="mt-32 flex-none">
      <Container.Outer>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <ExternalLink href={venmoWebLink} onClick={handleVenmoClick}>
                  <DollarIcon className="h-4 w-4" />
                  <span>Donate</span>
                </ExternalLink>
                {/* <NavLink href="/speaking">Speaking</NavLink>
                <NavLink href="/uses">Uses</NavLink> */}
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Saia Fonua. All rights
                reserved.
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
