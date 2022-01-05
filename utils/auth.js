import jwt from 'jsonwebtoken';

const signToken = (user) => {
  return jwt.sign({_id: user._id, })
}