import Head from 'next/head'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoManta from '@/images/logos/manta.png'
import logoDefenderData from '@/images/logos/defenderData.png';
import logoSearch from '@/images/logos/search.png'
import logoCalendar from '@/images/logos/calendar.png'
import logoClerk from '@/images/logos/clerk.png'
import logoChat from '@/images/logos/chatlogo.png'

const projects = [
  {
    name: 'Chat App',
    description:
      'Chat app, built with react, firebase hooks, and firebase, to communicate with others',
    link: { href: 'https://sfonua10.github.io/react-chat-app/', label: 'public' },
    logo: logoChat,
  },
  {
    name: 'PartSoft',
    description:
      'For mechanic shops to request parts to different vendors seamlessly with a click of a button sending SMS notifications and updating a dashboard in real time of part and price',
    link: { href: 'https://part-soft.vercel.app/', label: 'public' },
    logo: logoClerk,
  },
  {
    name: 'Search',
    description:
      'React-based app that enables users to search across Church websites. It allows refining and filtering search results. It is powered by Google Programmable Search service. There is another page powered by Gospel Library Archive Search Service based on the Content Search Service use in the Gospel Library Mobile app ',
    link: { href: 'https://www.churchofjesuschrist.org/search', label: 'public' },
    logo: logoSearch,
  },
  {
    name: 'Calendar',
    description:
      'Internal Church calendar for members to track events. Users can create, delete both calendars and events for a calendar and manage building schedulers for buildings and calendar editors',
    link: { href: '#', label: 'internal' },
    logo: logoCalendar,
  },
  {
    name: 'Manta',
    description:
      'online small business directory and resources site for small business owners. It provides listings, reviews, articles, and tools.',
    link: { href: 'https://www.manta.com/', label: 'internal' },
    logo: logoManta,
  },
  {
    name: 'defenderData',
    description:
      'defenderData is a case management software designed for criminal defense attorneys and public defenders. It helps them manage their caseloads, documents, billing, etc.',
    link: { href: 'https://www.justiceworks.com/products/', label: 'internal' },
    logo: logoDefenderData,
  },
  {
    name: 'LCR',
    description:
      'LCR allows clerks to view and update membership records, track callings and ordinations, record service hours, manage event calendars, and generate reports',
    link: { href: '#', label: 'internal' },
    logo: logoClerk,
  },
  {
    name: 'Hamilton Caskets',
    description:
      'Full-stack casket company website with product catalog, service area pages, contact forms, and an admin panel. Built with TanStack Start, React 19, PostgreSQL, and Drizzle ORM.',
    link: { href: 'https://hamiltoncasket.com/', label: 'public' },
    logo: logoOpenShuttle,
  },
  {
    name: 'ULU Spa',
    description:
      'Luxury head spa website featuring glass morphism design, video backgrounds, and seamless MangoMint booking integration. Built with Next.js, React 19, and Tailwind CSS.',
    link: { href: 'https://www.uluspas.com/', label: 'public' },
    logo: logoCosmos,
  },
  {
    name: 'Farm Built',
    description:
      'All-in-one platform for DSPD providers in Utah to manage service documentation, scheduling, client care plans, and team coordination. Built with React 19, Convex, and Stripe.',
    link: { href: 'https://farmbuilt.org/', label: 'public' },
    logo: logoPlanetaria,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Saia Fonua</title>
        <meta
          name="description"
          content="My impactful contributions: projects that have left a mark"
        />
      </Head>
      <SimpleLayout
        title="My impactful contributions: projects that have left a mark"
        intro="Discover the variety of projects I've been a part of, highlighting the unique contributions I've made and the tangible impacts they've had. These experiences range from individual coding challenges to collaborative efforts, each one enriching my journey as a developer."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
