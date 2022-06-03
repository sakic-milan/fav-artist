import styled from 'styled-components';

export const Button = styled.button`
	border-radius: 60px;
	border: none;
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
	cursor: pointer;
	font-size: 16px;
	font-weight: 600;
	padding: 12px 30px;
	background-color: ${({ bg }) => bg || '#fff'};
	color: ${({ color }) => color || '#333'};

	&:hover {
		opacity: 0.9;
		transform: scale(0.98);
	}
`;
