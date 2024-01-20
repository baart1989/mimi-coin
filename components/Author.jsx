import Image from 'next/image'
import Link from 'next/link'

import { GridPattern } from '@components/GridPattern'
import { SectionHeading } from '@components/SectionHeading'
import authorImage from '@images/avatars/author.png'

function TwitterIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 40 40" {...props}>
      <path d="M13.817 33.753c12.579 0 19.459-10.422 19.459-19.458 0-.297 0-.592-.02-.884a13.913 13.913 0 0 0 3.411-3.543 13.65 13.65 0 0 1-3.928 1.077 6.864 6.864 0 0 0 3.007-3.784 13.707 13.707 0 0 1-4.342 1.66 6.845 6.845 0 0 0-11.655 6.239A19.417 19.417 0 0 1 5.654 7.915a6.843 6.843 0 0 0 2.117 9.128 6.786 6.786 0 0 1-3.104-.853v.086a6.842 6.842 0 0 0 5.487 6.704 6.825 6.825 0 0 1-3.088.116 6.847 6.847 0 0 0 6.39 4.75A13.721 13.721 0 0 1 3.334 30.68a19.36 19.36 0 0 0 10.483 3.066" />
    </svg>
  )
}

export const TelegramIcon = (props) => (
  <svg aria-hidden="true" viewBox="0 0 40 40" {...props}>
    <path d="m12 24c6.629 0 12-5.371 12-12s-5.371-12-12-12-12 5.371-12 12 5.371 12 12 12zm-6.509-12.26 11.57-4.461c.537-.194 1.006.131.832.943l.001-.001-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953z"/>
  </svg>
);

export function Author() {
  return (
    <section
      id="author"
      aria-labelledby="author-title"
      className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16"
    >
      <div className="absolute inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,white)]">
        <GridPattern x="50%" y="100%" />
      </div>
      <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
        <div className="bg-slate-50 pt-px sm:rounded-6xl">
          <div className="relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-slate-200 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
            <Image
              className="absolute inset-0 h-full w-full object-cover"
              src={authorImage}
              alt=""
              sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem"
            />
          </div>
          <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
            <div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">BULL RUN | SOLANA 🦬 Token</h1>
              <SectionHeading number="CA" id="author-title">
                <span className="uppercase">FGPAXtihXuSrz1XuNE7j9w8Zdoac4FjyghCQxE8f49xj</span>
              </SectionHeading>

              <p className="mb-4 mt-2">Are you ready to ride the bullish wave in the crypto space? Look no further! BULL RUN, now on the SOLANA blockchain, brings an exciting and dynamic token experience for traders and enthusiasts alike.</p>

              <h2 className="text-2xl font-bold text-gray-500 mb-2">Key Features:</h2>

              <ul className="list-disc pl-6 mb-4">
                <li><strong>Bullish Momentum:</strong> BULL RUN is designed to harness the energy of a bull market, offering participants the potential for significant gains during upward market trends.</li>
                <li><strong>Secure on SOLANA:</strong> Built on the high-performance SOLANA blockchain, BULL RUN ensures fast transactions and a secure environment for all your trading activities.</li>
                <li><strong>Global Reach:</strong> With a decentralized and borderless nature, BULL RUN provides access to the global crypto market, allowing users to engage in the next big bull run from anywhere in the world.</li>
                <li><strong>Unique Design:</strong> Inspired by the world of finance and the power of bullish trends, the BULL RUN token boasts a distinctive and visually appealing design that reflects its dynamic nature.</li>
                <li><strong>Experienced Team:</strong> Developed by a team of seasoned professionals with a track record in the crypto space, BULL RUN is backed by expertise and a commitment to creating a robust and rewarding token experience.</li>
                <li><strong>Community-Driven:</strong> Join a vibrant community of like-minded individuals who share a passion for riding the bull market. Participate in discussions, share insights, and be part of the BULL RUN movement.</li>
              </ul>

              <p>Whether you're a seasoned trader or a newcomer looking to capitalize on bullish trends, BULL RUN on SOLANA offers an exhilarating journey into the world of crypto with the potential for exciting returns. Don't miss out on the next big move – join BULL RUN today! 🚀🌐🐃</p>
            </div>

          </div>

          <p className="mt-8">
            <Link
              href="https://twitter.com/_Bullrunsol" target="_blank"
              className="inline-flex items-center text-base font-medium tracking-tight text-blue-600"
            >
              <TwitterIcon className="h-10 w-10 fill-current" />
              <span className="ml-4">Follow on Twitter</span>
            </Link>
          </p>

          <p className="mt-2">
            <Link
              href="https://t.me/Bullrun_Sol" target="_blank"
              className="inline-flex items-center text-base font-medium tracking-tight text-blue-600"
            >
              <TelegramIcon className="h-10 w-10 fill-current" />
              <span className="ml-4">Follow on Telegram</span>
            </Link>
          </p>

        </div>
        </div>
      </div>
    </section>
  )
}
