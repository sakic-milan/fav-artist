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
	image: { '#text': string; size: string }[];
}

export interface Artist {
	mbid: number;
	name: string;
	url: string;
	listeners: string;
	image: { '#text': string; size: string }[];
}

export enum Theme {
	Purple = 'purple',
	Green = 'green',
}
