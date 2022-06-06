import styled from 'styled-components';
import { HeartFill } from '@styled-icons/bootstrap/HeartFill';

export const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid ${({ theme }) => theme.colors.purpleFade};
	border-radius: 60px;
	margin: 16px 0px;
	padding: 10px;
	padding-left: 20px;
	height: 64px;
	max-height: 64px;
`;

export const TrackName = styled.h3`
	font-size: 20px;

	a {
		font-size: 13px;
		border: 1px solid ${({ theme }) => theme.colors.lastfmRed};
		background-color: ${({ theme }) => theme.colors.lastfmRed};
		padding: 2px 10px;
		border-radius: 0px 12px;
		text-decoration: none;
		margin-left: 4px;
		cursor: pointer;
		color: ${({ theme }) => theme.colors.white};
	}
`;

export const Liked = styled(HeartFill)`
	color: ${({ theme }) => theme.colors.likeRed}; ;
`;
