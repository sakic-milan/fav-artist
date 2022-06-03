import { FC, ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Container } from '../../styles/Container.styled';
import GlobalStyles from '../../styles/Global';

import { theme } from '../../styles/theme.styled';
import Header from '../Header';
import Footer from '../Footer';

const LayoutMain: FC<{ children: ReactNode }> = ({ children }) => (
	<ThemeProvider theme={theme}>
		<GlobalStyles />
		<Header />
		<Container>{children}</Container>
		<Footer />
	</ThemeProvider>
);

export default LayoutMain;
