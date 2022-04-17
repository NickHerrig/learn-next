import { setCookies } from 'cookies-next';
import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const expiration = new Date()
  expiration.setDate(new Date().getDate() + 1)

  setCookies('server-key', 'value', { 
    req, 
    res, 
    maxAge: 60 * 60 * 24 * 7,
    expires: expiration, 
    httpOnly: true,
    path: '/',
    domain: '',
    secure: true,
    sameSite: 'lax',
  })

  res.status(200).json({"status": "ok"})
}
