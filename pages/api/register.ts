import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  let query = req.query 
  let body = req.body 

  let data = {
    "query": query,
    "body": body
  }

  res.status(200).json(data)
}
