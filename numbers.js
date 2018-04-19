const program = require('commander')
const { prompt } = require('inquirer')
const schema = require('./app/schema.js')
const functions = {
  row: require('./app/stepFunctions').row,
  columnEnd: require('./app/stepFunctions').columnEnd,
  columnStart: require('./app/stepFunctions').columnStart,
  twoColumns: require('./app/stepFunctions').twoColumns
}
let questions = require('./app/questions')

program.version('0.0.1')
program.description('Coding Challenge Pipefy - Igor Souza Martins (@nulldreams)')

program.command('print')
.alias('p')
.description('print a number')
.action(() => {
  prompt(questions).then(answers => {
    printNumbers(answers.print)
  })
})

program.parse(process.argv)

function printNumbers (number) {
  console.log('')
  schema[number].steps.forEach((step, i) => {
    if (step === 'jump' && schema[number].steps[i + 1] !== 'row') process.stdout.write('\n')

    if (step === 'row') functions.row(number)
    if (step === 'column-end') functions.columnEnd(number)
    if (step === 'column-start') functions.columnStart(number)
    if (step === 'two-columns') functions.twoColumns(number)
  })
  console.log('')
}

// printNumbers(1)
