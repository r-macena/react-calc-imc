import { Level } from '../../helpers/imc'
import * as S from './grid.styles'
import ThumbsUp from '../../assets/imgs/up.png'
import ThumbsDown from '../../assets/imgs/down.png'

type Props = {
	item: Level
}

export const GridItem = ({ item }: Props) => {
	return (
		<S.Main style={{ backgroundColor: item.color }}>
			<S.GridIcon>
				<img src={item.icon === 'up' ? ThumbsUp : ThumbsDown} alt='' />
			</S.GridIcon>
			<S.GridTitle>{item.title}</S.GridTitle>
			{item.yourImc && <S.ImcResult>Seu IMC é de {item.yourImc} Kg/m²</S.ImcResult>}{' '}
			{/*Se tiver o valor declarado, mostrar no resultado*/}
			<S.GridInfo>
				<>
					IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>.
				</>
			</S.GridInfo>
		</S.Main>
	)
}
