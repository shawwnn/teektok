import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Teektok</title>
        <meta name="description" content="Tiktok Clone" />
        <link rel="icon" href="/tiktok.png" />
      </Head>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  )
}
