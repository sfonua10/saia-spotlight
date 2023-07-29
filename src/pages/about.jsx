import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'
import saiaSuit from '@/images/saia-suit.png'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Saia Fonua</title>
        <meta
          name="description"
          content="I’m Saia Fonua. I live in Lehi, Utah, where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={saiaSuit}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Saia Fonua. I live in Lehi, Utah, where I design the future.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I'm Saia Fonua and I reside in Lehi, Utah, where I craft the
                digital future. My journey into the world of technology and
                software engineering is an unconventional one. It began when I
                was studying Linguistics at Brigham Young University, where a
                Computational Linguistics course introduced me to PERL
                programming language. This sparked a fascination within me that
                would later evolve into my career.
              </p>
              <p>
                After graduating in 2015, I started working as an IT Tech
                Specialist at Zion's Bank. The job involved troubleshooting and
                assisting internal employees with their tech issues. However,
                when the problems were too complex, I had to refer them to the
                developers. Seeing their problem-solving skills in action
                reminded me of my computational linguistics class and kindled a
                desire within me to dive deeper into the world of code.
              </p>
              <p>
                The seed was sown, and in a moment of epiphany at a public
                library, I resolved to learn to code. Acting on my instincts and
                faith, I enrolled in a coding bootcamp in the fall of 2016. By
                summer 2017, I had landed my first job as a web developer.
              </p>
              <p>
                Growing up, I was always drawn to video games such as Starcraft,
                Warcraft, Age of Empires, and Halo. While these didn't directly
                influence my career choice, they certainly cultivated my love
                for technology and complex systems.
              </p>
              <p>
                Currently, I'm employed as a software engineer at the Church of
                Jesus Christ of Latter-day Saints. My work revolves around the
                Search, Calendar, Gospel Media, and LCR projects, where I put my
                skills into action to provide impactful solutions.
              </p>
              <p>
                As for the future, my vision is to continue growing as a
                developer. I'm exploring the idea of stepping into a management
                role or advancing to a staff/principal engineer position.
                Someday, I might even start my own company or develop an
                innovative app. Regardless of where my journey takes me, I am
                excited about the endless possibilities that lie ahead in the
                realm of technology and software development.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="#" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="#" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:saiafonua@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                saiafonua@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
