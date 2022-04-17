import { randomBytes } from 'crypto'
import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {

  let sessionID = randomBytes(32).toString('hex')
  res.status(200).json({"sessionID": sessionID})

}
