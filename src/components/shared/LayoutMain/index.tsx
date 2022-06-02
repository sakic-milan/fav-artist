import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';

const LayoutWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const Main = styled.main`
	display: flex;
	min-height: calc(100vh - 80px);
	flex-grow: 1;
`;

const LayoutMain: FC<{ children: ReactNode }> = ({ children }) => (
	<LayoutWrapper>
		<Header />
		<Main>{children}</Main>
		<Footer />
	</LayoutWrapper>
);

export default LayoutMain;
