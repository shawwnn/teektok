import React, { useState, useEffect } from 'react'
import { MdFavorite } from 'react-icons/md'

import useAuthStore from '../store/authStore' // use for detecting who has liked the photo & does the user like his own post?

interface IProps {
	handleLike: () => void;
	handleDislike: () => void;
	likes: any[];
}

const LikeButton = ({ handleLike, handleDislike, likes}: IProps) => {
	const [hasAlreadyLiked, setHasAlreadyLiked] = useState(false)
	const { userProfile }: any = useAuthStore();
	const filterLikes = likes?.filter((item) => item._ref === userProfile?._id)

	useEffect(() => {
		//filterLikes = has the user already like the post?
		if(filterLikes?.length > 0) {
			setHasAlreadyLiked(true);
		} else setHasAlreadyLiked(false);
	}, [filterLikes, likes])

  return (
		<div className="flex gap-6">
			<div className="mt-4 flex flex-col justify-center items-center cursor-pointer">
				{hasAlreadyLiked ? (
					<div className="bg-primary rounded-full p-2 md:p-4 text-[#F51997]" onClick={handleDislike}>
						<MdFavorite className="text-lg md:text-2xl" />
					</div>
				) : (
					<div className="bg-primary rounded-full p-2 md:p-4" onClick={handleLike}>
					<MdFavorite className="text-lg md:text-2xl" />
				</div>
				)}
				<p className="text-md font-semibold">{likes?.length | 0}</p>


			</div>
		</div>
  )
}

export default LikeButton