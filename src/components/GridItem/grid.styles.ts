import styled from 'styled-components'

export const Main = styled.div`
	flex: 1;
	color: #fff;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px;
`

export const GridIcon = styled.div`
	width: 70px;
	height: 70px;
	border-radius: 50%;
	background-color: rgba(0, 0, 0, 0.2);
	display: flex;
	justify-content: center;
	align-items: center;
	& img {
		width: 30px;
	}
`

export const GridTitle = styled.div`
	font-size: 16px;
	font-weight: bold;
	margin-top: 10px;
`

export const ImcResult = styled.div`
	font-size: 16px;
	margin: 10px 0 50px 0;
`

export const GridInfo = styled.div`
	font-size: 12px;
	margin-top: 10px;
`
