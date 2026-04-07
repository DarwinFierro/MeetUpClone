import { UserPreview } from './user.model';

export interface Group {
  id: string;
  name: string;
  description: string;
  coverImageUrl?: string;
  avatarUrl?: string;
  category: string;
  tags: string[];
  location: string;
  memberCount: number;
  eventCount: number;
  organizer: UserPreview;
  isPrivate: boolean;
  isMember?: boolean;
  createdAt: Date;
  nextEvent?: {
    id: string;
    title: string;
    date: Date;
  };
}

export interface GroupPreview {
  id: string;
  name: string;
  coverImageUrl?: string;
  avatarUrl?: string;
  category: string;
  location: string;
  memberCount: number;
}
