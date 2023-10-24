const inputOne = document.getElementById('valute-first'),
	inputTwo = document.getElementById('valute-second'),
	valuteOne = document.getElementById('value'),
	valuteTwo = document.getElementById('value-2')
inputTwo.value = '0.00'
function reduceValute() {
	if (valuteOne.value == 'rus') {
		let currentValue = inputOne.value
		switch (valuteTwo.value) {
			case 'dollar':
				currentValue /= 73.98
				inputTwo.value = currentValue.toFixed(2)
				break
			case 'euro':
				currentValue /= 87.60
				inputTwo.value = currentValue.toFixed(2)
				break
			case 'rus':
				inputTwo.value = currentValue
				break
			default:
				break
		}
	}
	else if (valuteOne.value == 'dollar') {
		let currentValue = inputOne.value
		switch (valuteTwo.value) {
			case 'dollar':
				inputTwo.value = currentValue
				break
			case 'euro':
				currentValue *= 0.84
				inputTwo.value = currentValue.toFixed(2)
				break
			case 'rus':
				currentValue *= 73.98
				inputTwo.value = currentValue.toFixed(2)
				break
			default:
				break
		}
	}
	else if (valuteOne.value == 'euro') {
		let currentValue = inputOne.value
		switch (valuteTwo.value) {
			case 'dollar':
				currentValue /= 0.84
				inputTwo.value = currentValue.toFixed(2)
				break
			case 'euro':
				inputTwo.value = currentValue
				break
			case 'rus':
				currentValue *= 87.60
				inputTwo.value = currentValue.toFixed(2)
				break
			default:
				break
		}
	}
}
inputOne.addEventListener('input', reduceValute)
valuteOne.addEventListener('change', reduceValute)
valuteTwo.addEventListener('change', reduceValute)