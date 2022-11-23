// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../../utils/client';
import { allPostsQuery } from '../../../utils/queries'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
	// res.status(200).json({ name: 'Response Success' })
	if(req.method === 'GET') {
		const query = allPostsQuery();

		// const data = await client...
	}
}