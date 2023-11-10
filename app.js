const form = document.querySelector('.quiz-form')
const scoreParagraph = document.querySelector('.score-paragraph')

const correctAnswers = ['A', 'B', 'C', 'B']

const addScore = score => {
	let counter = 0

	const timerId = setInterval(() => {
		if (counter === score) {
			clearInterval(timerId)
		}

		scoreParagraph.querySelector('#result').textContent = `${counter}`
		counter++
	}, 20)
}

const insertScoreIntoDOM = event => {
	event.preventDefault()

	const userAnswers = [
		form.inputQuestion1.value, 
		form.inputQuestion2.value, 
		form.inputQuestion3.value, 
		form.inputQuestion4.value
	]

	const score = increaseScore(userAnswers)

	scrollTo(0, 0)

	scoreParagraph.classList.remove('d-none')

	addScore(score)
}

const increaseScore = userAnswers => {
	let score = 0

	correctAnswers.forEach((correctAnswer, i) => {
		if(correctAnswer === userAnswers[i]) {
			score += 25
		}
	})

	return score
}

form.addEventListener('submit', insertScoreIntoDOM)