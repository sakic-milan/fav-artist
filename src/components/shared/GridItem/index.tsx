import styled from 'styled-components';
import { FC, ReactNode } from 'react';

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	background-color: #f1f2f7;
	gap: 20px;
	justify-items: center;
	padding: 20px;
`;

export const GridItem: FC<ReactNode> = ({ children }) => (
	<Wrapper>{children}</Wrapper>
);

export default GridItem;
