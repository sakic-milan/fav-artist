import { Route,Routes } from 'react-router-dom';

import 'dotenv/config';

import LayoutMain from './components/shared/LayoutMain';
import Home from './pages/Home';
import Liked from './pages/Liked';
import SearchTracks from './pages/SearchTracks';
import Settings from './pages/Settings';
import SingleAlbumView from './pages/SingleAlbumView';

import './App.css';

const App = () => (
	<LayoutMain>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/album">
				<Route path=":name" element={<SingleAlbumView />} />
			</Route>
			<Route path="/liked" element={<Liked />} />
			<Route path="/search" element={<SearchTracks />} />
			<Route path="/settings" element={<Settings />} />
		</Routes>
	</LayoutMain>
);

export default App;
