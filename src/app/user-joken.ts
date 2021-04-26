
export interface UserToken {
  id: number;
  username: string;
  password: string;
  accessToken?: string;
  enabled?: boolean;
}
