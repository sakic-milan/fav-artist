import { FC, ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { useAppSelector } from '../../../store';
import { selectTheme } from '../../../store/reducers';
import { Container } from '../../styles/Container.styled';
import GlobalStyles from '../../styles/Global';
import { greenTheme,purpleTheme } from '../../styles/theme.styled';
import Header from '../Header';

const LayoutMain: FC<{ children: ReactNode }> = ({ children }) => {
	const theme = useAppSelector(selectTheme);

	const activeTheme = theme === 'green' ? greenTheme : purpleTheme;

	return (
		<ThemeProvider theme={activeTheme}>
			<GlobalStyles />
			<Header />
			<Container>{children}</Container>
		</ThemeProvider>
	);
};

export default LayoutMain;
