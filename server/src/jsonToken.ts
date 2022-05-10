
export class JsonToken {
  static createToken(object:object) {
    const jwt = require('jsonwebtoken')
    const token = jwt.sign(object, 'SENHAFORTE', {expiresIn: '24h'})
    return token
  }
  static decodeToken(token:string) {
    const jwt = require('jsonwebtoken')
    const data = jwt.verify(token, 'SENHAFORTE')
    return data  
  }
}

