export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  bio?: string;
  location?: string;
  joinedAt: Date;
  eventsAttended: number;
  groupsJoined: number;
}

export interface UserPreview {
  id: string;
  name: string;
  avatarUrl?: string;
}
