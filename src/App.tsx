import { Routes, Route } from 'react-router-dom';
import LayoutMain from './components/shared/LayoutMain';
import Home from './pages/Home';
import Liked from './pages/Liked';
import SearchTracks from './pages/SearchTracks';
import SingleAlbumView from './pages/SingleAlbumView';
import 'dotenv/config';
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
		</Routes>
	</LayoutMain>
);

export default App;
