export interface SpotifyData {
  topArtist: TopArtist;
  topSongs: TopSongs;
}

export interface TopArtist {
  items: TopArtistItem[];
  total?: number;
  limit?: number;
  offset?: number;
  href?: string;
  next?: string;
  previous?: null;
}

export interface TopArtistItem {
  external_urls?: ExternalUrls;
  followers?: Followers;
  genres: string[];
  href?: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: string;
  uri?: string;
}

export interface ExternalUrls {
  spotify: string;
}

export interface Followers {
  href: null;
  total: number;
}

export interface Image {
  height: number;
  url: string;
  width: number;
}

export interface TopSongs {
  items: TopSongsItem[];
  total?: number;
  limit?: number;
  offset?: number;
  href?: string;
  next?: string;
  previous?: null;
}

export interface TopSongsItem {
  album?: Album;
  artists?: Artist[];
  available_markets?: string[];
  disc_number?: number;
  duration_ms?: number;
  explicit?: boolean;
  external_ids?: ExternalIDS;
  external_urls?: ExternalUrls;
  href?: string;
  id: string;
  is_local?: boolean;
  is_playable?: boolean;
  name: string;
  popularity?: number;
  preview_url?: null;
  track_number?: number;
  type?: string;
  uri?: string;
}

export interface Album {
  album_type: string;
  artists: Artist[];
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  is_playable: boolean;
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

export interface Artist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export enum ReleaseDatePrecision {
  Day = "day",
}

export interface ExternalIDS {
  isrc: string;
}
