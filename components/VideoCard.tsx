import React from 'react'
import { Video } from '../types'
import { NextPage } from 'next'

interface IProps {
  post: Video;
}

const VideoCard: NextPage<IProps> = ({ post }) => {
	// console.log(post.something); //fails due to not does not exist on type 'Video'
  console.log(post.caption);
	return (
    <div>VideoCard</div>
  )
}

export default VideoCard