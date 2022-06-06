import styled from 'styled-components';

export const SearchGrid = styled.div`
	margin-top: 22px;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	background-color: ${({ theme }) => theme.colors.gridBg};
	gap: 20px;
	justify-items: center;
	padding: 12px 0;
`;

export const ArtistCard = styled.article`
	position: relative;
	display: flex;
	padding: 4px 10px;
	flex-direction: column;
	justify-content: space-between;
	background-color: white;
	width: 100%;
	box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1), 0px 2px 3px rgba(0, 0, 0, 0.1);
	border-radius: 10px;
	overflow: hidden;
	cursor: pointer;
	height: 100px;
	max-height: 100px;
	border-left: 6px solid ${({ theme }) => theme.colors.header};

	& > p {
		color: ${({ theme }) => theme.colors.header};
		font-size: 18px;
		opacity: 1;
		z-index: 9999;
	}

	& > span {
		color: ${({ theme }) => theme.colors.header};
		font-size: 15px;
	}
`;

export const CardImage = styled.img`
	position: absolute;
	top: 0;
	right: 0;
	height: 100%;
	z-index: 1;
`;
