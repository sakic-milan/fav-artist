export interface Album {
	name: string;
	playcount: number;
	url: string;
	mbid: string;
	image: { '#text': string; size: string }[];
}

export interface Track {
	name: string;
	url: string;
	duration: number;
	artist?: Artist;
}

export interface Artist {
	mbid: number;
	name: string;
	url: string;
}
