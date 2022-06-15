export interface Media {}
export interface Character {
  id: number;
  name?: CharacterName;
  image?: CharacterImage;
  description?: string;
  gender?: string;
  dateOfBirth?: string;
  age?: string;
  bloodType?: String;
  siteUrl?: string;
  media?: MediaConnection;
  favourites?: number;
}
export interface CharacterImage {
  large: string;
  medium: string;
}
export interface CharacterName {
  first?: string; 
  middle?: string;
  last?: string;
  full?: string;
  native?: string;
  alternative?: string[];
  alternativeSpoiler?: string[];
}
export interface Media {
  id: number;
  idMal?: number;
  title?: {
    romaji?: string;
    english?: string;
    native?: string;
  };
  type?: string;
  format?: string;
  status?: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  season?: string;
  seasonYear?: number;
  seasonInt?: number;
  episodes?: number;
  duration?: number;
  chapters?: number;
  volumes?: number;
  countryOfOrigin?: string;
  isLicensed?: boolean;
  source?: string;
  coverImage?: {
    extraLarge?: string;
    large?: string;
    medium?: string;
    color?: string;
  };
  bannerImage?: string;
  genres?: string[];
  synonyms?: string[];
  averageScore?: number;
  meanScore?: number;
  popularity?: number;
  favourites?: number;
  tags?: string[];
  relations?: MediaConnection[];
  characters?: any[];
  staff?: any[];
  isAdult?: boolean;
  siteUrl?: string;
}
export interface MediaConnection {
  edges?: MediaEdge[];
  nodes?: Media[];
  pageInfo?: PageInfo;
}
export interface MediaEdge {
  id: number;
  node?: Media;
  relationType?: string;
  isMainStudio?: boolean;
  characters?: Character[];
  characterRole?: string;
  characterName?: string;
  roleNotes?: string;
  dubGroup?: string;
  staffRole?: string;
  voiceActors?: Staff[];
  voiceActorRoles?: StaffRoleType[];
}
export interface Page {
  pageInfo: PageInfo;
  characters?: Character[];
}
export interface PageInfo {
  total: number;
  perPage: number;
  currentPage: number;
  lastPage: number;
  hasNextPage: boolean;
}
export interface Staff {}
export interface StaffRoleType {
  voiceActor?: Staff;
  roleNotes?: string;
  dubGroup?: string;
}
export interface Studio {}
