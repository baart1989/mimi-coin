'use client';
import Head from 'next/head'
import { getRandomUsernames } from '../utils/twitterUsernames';
import { Button } from '@components/Button';

const tweetTemplates = [
  "Holly smokes. Gorillas with hats\n" +
  "Join takeover USER1, USER2, USER3!\n" +
  "\n$Missed @harambe_ai, don't sleep on @stickcatmeow\n" +
  "\n#TAKEOVER #SOL #MEMESEASON #GORILLAWIFHAT"
];

// Function to generate a random tweet
const generateRandomTweet = () => {
  const randomIndex = Math.floor(Math.random() * tweetTemplates.length);
  const randomTweet = tweetTemplates[randomIndex];
  const [user1, user2, user3] = getRandomUsernames();
  const tweetWithUsernames = randomTweet
    .replace('USER1', '@' + user1)
    .replace('USER2', '@' + user2)
    .replace('USER3', '@' + user3);
  return tweetWithUsernames;
};

export default function Home() {

  const redirectToTwitterThread = () => {
    const threadTweetId = "1749500770448273908";

    const threadUrl = 'https://t.me/gorillawifhatcom';
    const randomTweet = generateRandomTweet();
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(randomTweet + ' ' + threadUrl)}&in_reply_to=${threadTweetId}`;
    window.open(tweetUrl, '_blank');
  };

  return (
    <div className="container">
      <Head>
        <title>Gorilla wif hat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex justify-center pt-32">
        <Button onClick={redirectToTwitterThread}  color="slate">
          Raid
        </Button>
      </main>

    </div>
  )
}
