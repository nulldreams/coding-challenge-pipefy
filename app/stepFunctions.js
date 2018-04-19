let schema = require('./schema')

exports.row = function (number) {
  for (let i = 0; i < schema[number].length; i++) {
    process.stdout.write(`${number}`)
  }
}
exports.columnEnd = function (number) {
  for (let i = 0; i < schema[number].length; i++) {
    // process.stdout.write('\n')
    process.stdout.write(`${schema[number].space}${number}`)
    process.stdout.write('\n')
  }
}
exports.columnStart = function (number) {
  for (let i = 0; i < schema[number].length; i++) {
    // process.stdout.write('\n')
    process.stdout.write(`${number}${schema[number].space}`)
    process.stdout.write('\n')
  }
}

exports.twoColumns = function (number) {
  for (let i = 0; i < schema[number].length; i++) {
    // process.stdout.write('\n')
    process.stdout.write(`${number}${schema[number].space_between}${number}`)
    process.stdout.write('\n')
  }
}
