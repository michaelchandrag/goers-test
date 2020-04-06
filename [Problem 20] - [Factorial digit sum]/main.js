const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

rl.question('Input: ', (answer) => {
	console.log('Output:' + factorialDigitSum(BigInt(answer)))

	rl.close()
})

function factorialDigitSum (x) {
	var sum = x
	while (x > 1) {
		x--
		sum *= x
	}
	var conv = sum.toString()
	sum = 0
	for (var i = 0; i < conv.length; i++) {
		sum += parseInt(conv[i])
	}
	return sum
}