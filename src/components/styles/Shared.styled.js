import styled, { keyframes } from 'styled-components';

export const PageHeading = styled.h1`
	font-size: 28px;
	font-weight: 600;
	margin: 22px 0;
`;

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

export const Input = styled.input`
	font-size: 18px;
	padding: 10px;
	padding-left: 20px;
	border: 1px solid ${({ theme }) => theme.colors.header};
	border-radius: 60px;
	margin-right: 12px;

	::placeholder {
		color: palevioletred;
	}

	&:focus {
		outline: red;
	}
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
	animation: ${rotate360} 1s linear infinite;
	transform: translateZ(0);

	border-top: 2px solid ${({ theme }) => theme.colors.header};
	border-right: 2px solid ${({ theme }) => theme.colors.header};
	border-bottom: 2px solid ${({ theme }) => theme.colors.header};
	border-left: 4px solid ${({ theme }) => theme.colors.header};
	background: transparent;
	width: 34px;
	height: 34px;
	border-radius: 50%;
`;

export const NoArtistWrapper = styled.div`
	display: flex;
	margin: 40px auto;
	padding: 10px;
	font-size: 24px;

	h3 {
		margin-right: 5px;
	}
`;
