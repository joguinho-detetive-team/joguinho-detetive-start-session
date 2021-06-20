import { v4 as uuidv4 } from "uuid";

export function getToken(): string {
  return uuidv4();
}
