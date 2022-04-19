import styled from 'styled-components'

export const Main = styled.div`
	font-family: Arial, Helvetica, sans-serif;
`
export const HeaderLogo = styled.div`
	max-width: 900px;
	margin: 40px auto;

	& img {
		width: 150px;
	}

	@media (max-width: 899px) {
		padding: 0 20px;
	}
`
export const Container = styled.div`
	max-width: 900px;
	display: flex;
	margin: auto;

	@media (max-width: 899px) {
		padding: 0 20px;
		flex-direction: column;
	}
`

export const LeftSide = styled.div`
	flex: 1;
	margin-right: 40px;

	& h1 {
		margin: 0px;
		font-size: 40px;
		color: #3a4b5c;
	}
	& p {
		font-size: 20px;
		margin-bottom: 40px;
		color: #6a7d8b;
	}
	& input {
		width: 100%;
		border: 0;
		border-bottom: 1px solid rgba(150, 163, 171, 0.5);
		padding: 10px 2px;
		margin-bottom: 20px;
		font-size: 16px;
		outline: none;
		&:disabled {
			opacity: 0.5;
		}
	}
	& button {
		background-color: #227c9d;
		color: #fff;
		font-size: 16px;
		border: 0;
		border-radius: 10px;
		padding: 15px 0px;
		width: 100%;
		cursor: pointer;
		margin-top: 20px;
		transition: all ease 0.3s;
	}
	& button:hover {
		opacity: 0.8;
	}
	& button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	@media (max-width: 899px) {
		margin-right: 0px;
	}
`

export const RightSide = styled.div`
	flex: 1;
	margin-left: 40px;
	display: flex;

	@media (max-width: 899px) {
		margin-left: 0px;
		margin-top: 40px;
	}
`
//Grid dentro do Rigth Side
export const Grid = styled.div`
	flex: 1;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 20px;

	@media (max-width: 430px) {
		grid-template-columns: 1fr;
	}
`
export const Result = styled.div`
	flex: 1;
	display: flex;
`

export const BackArrow = styled.div`
	position: absolute;
	background-color: #227c9d;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	margin-left: -50px;
	margin-top: 150px;
	padding: 10px;
	cursor: pointer;
	transition: all ease 0.3s;
	&:hover {
		opacity: 0.9;
	}
	& img {
		display: flex;
		width: 30px;
		curso: pointer;
		padding: 10px;
	}

	@media (max-width: 899px) {
		margin-top: 10px;
		margin-left: 10px;
		transition: all ease 0.3s;
		border-radius: 10px;
		cursor: pointer;
		&:hover {
			opacity: 0.5;
		}
	}
`
