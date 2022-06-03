import styled from 'styled-components';
import { FC, ReactNode } from 'react';

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	background-color: ${({ theme }) => theme.colors.gridBg};
	gap: 20px;
	justify-items: center;
	padding: 12px 0;
`;

export const GridItem: FC<ReactNode> = ({ children }) => (
	<Wrapper>{children}</Wrapper>
);

export default GridItem;
