import Head from 'next/head'
import axios from 'axios'

import { Video } from '../types';

interface IProps {
  videos: Video[]
}

export default function Home({ videos }: IProps) {
  console.log(videos);

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
  const { data } = await axios.get(`http://localhost:3000/api/post`);

  // console.log(response.data.name);

  return {
    props: {
      videos: data
    }
  }
}