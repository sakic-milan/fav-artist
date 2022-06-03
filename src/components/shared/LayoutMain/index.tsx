import { FC, ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Container } from '../../styles/Container.styled';
import GlobalStyles from '../../styles/Global';

import { theme } from '../../styles/theme.styled';
import Header from '../Header';

const LayoutMain: FC<{ children: ReactNode }> = ({ children }) => (
	<ThemeProvider theme={theme}>
		<GlobalStyles />
		<Header />
		<Container>{children}</Container>
	</ThemeProvider>
);

export default LayoutMain;
