export type Player = {
  username: string;
  picture?: string;
  email: string;
  hashed_password: string;
  created_at: Date;
  id: string;
};

export interface PlayerStats extends Player {
  total_moves: number;
  points: number;
  stats_id: string;
}
