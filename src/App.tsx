import logo from './assets/imgs/powered.png'
import BackArrow from './assets/imgs/leftarrow.png'
import * as S from './App.styles'

import { useState } from 'react'
import { GridItem } from './components/GridItem/GridItemIndex'
import { imcLevels, imcCalc, Level } from './helpers/imc'

const App = () => {
	const [heightField, setHeightField] = useState<number>(0)
	const [weightField, setWeightField] = useState<number>(0)
	const [showResult, setShowResult] = useState<Level | null>(null)

	const CalculateButton = () => {
		//Cálculo do IMC
		if (heightField && weightField) {
			setShowResult(imcCalc(heightField, weightField))
		} else {
			alert('Digite todos os campos')
		}
	}

	const GoBackClick = () => {
		setShowResult(null)
		setHeightField(0)
		setWeightField(0)
	}

	return (
		<S.Main>
			<S.HeaderLogo>
				<img src={logo} alt='logo' />
			</S.HeaderLogo>

			<S.Container>
				<S.LeftSide>
					<h1>Calcule o seu IMC.</h1>
					<p>
						IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde
						(OMS) para calcular o peso ideal de cada pessoa.
					</p>

					<input
						type='number'
						placeholder='Digite sua altura. Exemplo: 1.5 (Em metros)'
						value={heightField > 0 ? heightField : ''}
						onChange={(e) => setHeightField(parseFloat(e.target.value))}
						disabled={showResult ? true : false}
					/>
					<input
						type='number'
						placeholder='Digite seu peso. Exemplo: 75.5 (Em Kg)'
						value={weightField > 0 ? weightField : ''} //caso for maior que 0, mostra o valor, caso contrário, mostra vazio (placeholder)
						onChange={(e) => setWeightField(parseFloat(e.target.value))}
						disabled={showResult ? true : false}
					/>

					<button onClick={CalculateButton} disabled={showResult ? true : false}>
						Calcular
					</button>
				</S.LeftSide>

				<S.RightSide>
					{!showResult && (
						<S.Grid>
							{imcLevels.map((item, key) => (
								<GridItem key={key} item={item} />
							))}
						</S.Grid>
					)}
					{showResult && (
						<S.Result>
							<S.BackArrow onClick={GoBackClick}>
								<img src={BackArrow} alt='voltar' />
							</S.BackArrow>
							<GridItem item={showResult} /> {/*Caso tenha valor (Level), usa o GridItem*/}
						</S.Result>
					)}
				</S.RightSide>
			</S.Container>
		</S.Main>
	)
}

export default App
