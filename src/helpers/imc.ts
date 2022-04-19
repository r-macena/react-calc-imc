export type Level = {
	title: string
	color: string
	icon: 'down' | 'up'
	imc: number[]
	yourImc?: number
}

export const imcLevels: Level[] = [
	{ title: 'Abaixo do peso', color: '#96A3AB', icon: 'down', imc: [0, 18.59] },
	{ title: 'Peso ideal', color: '#0EAD69', icon: 'up', imc: [18.6, 24.99] },
	{ title: 'Acima do peso', color: '#E2B039', icon: 'down', imc: [25, 29.99] },
	{ title: 'Obesidade', color: '#C3423F', icon: 'down', imc: [30, 99] },
	//{ title: 'Além da Obesidade', color: '#2b2930', icon: 'down', imc: [99, 999] },
]

export const imcCalc = (height: number, weight: number) => {
	const imc = weight / (height * height)
	for (let i in imcLevels) {
		//Cálculo da categoria do IMC por um Loop que vai procurar o seu Nível de IMC.
		//Basicamente bate o valor da conta com os Níveis pré-determinados.
		if (imc >= imcLevels[i].imc[0] && imc <= imcLevels[i].imc[1]) {
			let levelCopy: Level = { ...imcLevels[i] }
			levelCopy.yourImc = parseFloat(imc.toFixed(2)) //Arredonda o valor para 2 casas decimais no resultado
			return levelCopy //O levelCopy foi feito para não ter alterações no imcLevels.
		}
	}
	return null
}
