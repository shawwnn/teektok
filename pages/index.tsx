import Head from 'next/head'
import axios from 'axios'

import { Video } from '../types';
import VideoCard from '../components/VideoCard';
import NoResults from '../components/NoResults';
import { BASE_URL } from '../utils';

interface IProps {
  videos: Video[]
}

export default function Home({ videos }: IProps) {
  // console.log(videos);

  return (
    <div>
      <Head>
        <title>Teektok</title>
        <meta name="description" content="Tiktok Clone" />
        <link rel="icon" href="/tiktok.png" />
      </Head>

      <div className="flex flex-col gap-10 videos h-full">
        {videos.length ? (
          videos.map((video: Video) => (
            <VideoCard post={video} key={video._id} />
          ))
        ) : (
          <NoResults text={'No Videos'} />
        )}
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const { data } = await axios.get(`${BASE_URL}/api/post`);

  // console.log(response.data.name);

  return {
    props: {
      videos: data
    }
  }
}