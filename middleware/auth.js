import { verifyToken } from "@/lib/auth";

export const authMiddleware = async (req) => {
  const token = req.headers.get("authorization")?.split(" ")[1];
  if (!token) return null;

  const user = verifyToken(token);
  return user;
};
