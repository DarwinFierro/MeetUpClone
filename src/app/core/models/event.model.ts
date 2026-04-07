import { UserPreview } from './user.model';

export type EventMode = 'in-person' | 'online' | 'hybrid';

export interface EventLocation {
  address: string;
  city: string;
  country: string;
  lat?: number;
  lng?: number;
  virtualLink?: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  coverImageUrl?: string;
  date: Date;
  endDate?: Date;
  mode: EventMode;
  location: EventLocation;
  groupId: string;
  groupName: string;
  groupAvatarUrl?: string;
  organizer: UserPreview;
  attendees: UserPreview[];
  maxAttendees?: number;
  attendeeCount: number;
  category: string;
  tags: string[];
  isFree: boolean;
  price?: number;
  currency?: string;
  isAttending?: boolean;
  isSaved?: boolean;
}

export interface EventPreview {
  id: string;
  title: string;
  coverImageUrl?: string;
  date: Date;
  mode: EventMode;
  location: EventLocation;
  groupName: string;
  groupAvatarUrl?: string;
  attendeeCount: number;
  category: string;
  isFree: boolean;
  price?: number;
}
