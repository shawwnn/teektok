import Head from 'next/head'
import axios from 'axios'

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

export const getServerSideProps = async () => {
  const response = await axios.get(`http://localhost:3000/api/post`);

  console.log(response.data.name);

  return {
    props: {}
  }
}