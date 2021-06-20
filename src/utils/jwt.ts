import jwt from "jsonwebtoken";

interface IToken {
  id: string;
  iat: number;
  exp: number;
}

class Jwt {
  public sign(id: string): string {
    return jwt.sign(id, process.env.SECRET, {
      expiresIn: process.env.EXPIRE_TIME,
    });
  }

  public verify(token: string): string | null {
    if (!token) return null;

    const data = jwt.verify(token, process.env.SECRET);
    const { id } = data as IToken;

    return id;
  }
}

export default new Jwt();
