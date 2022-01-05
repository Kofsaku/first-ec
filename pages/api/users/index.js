import bcrypt from 'bcryptjs/dist/bcrypt';
import nc from 'next-connect';
import User from '../../../models/User';
import db from '../../../utils/db';
import bcrypt from 'bcryptjs';

const handler = nc();
 // ↓getではなくpostリクエストでログイン情報を送る
handler.post(async (req, res) => {
  await db.connect();
  const user = await User.find({email: req.body.email });
  await db.disconnect();
  if (user && bcrypt.compareSync(req.body.password, user.password)){
    const token = signToken(user);
  }
});

export default handler;