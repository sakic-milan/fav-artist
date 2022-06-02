import { Album } from '../models/models';

export const sortAlbumsByName = (albums?: Album[]) => {
	if (!albums) return [];

	return albums.sort((a, b) => a.name.localeCompare(b.name));
};
