import { FC, ReactNode } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	overflow-wrap: break-word;
`;

export const BackgroundWrapper: FC<ReactNode> = ({ children }) => (
	<StyledDiv>{children}</StyledDiv>
);

export default BackgroundWrapper;
