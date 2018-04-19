module.exports = {
  '1': {
    // steps: [ 'row', 'column-end', 'row', 'column-start', 'row' ],
    steps: [ 'row' ],
    length: 1,
    space: ''
  },
  '2': {
    // steps: [ 'row', 'column-end', 'row', 'column-start', 'row' ],
    steps: [ 'row', 'jump', 'column-end', 'jump', 'row', 'jump', 'column-start', 'jump', 'row' ],
    length: 2,
    space: ' '
  },
  '3': {
    steps: [ 'row', 'jump', 'column-end', 'jump', 'row', 'jump', 'column-end', 'jump', 'row' ],
    length: 3,
    space: '  '
  },
  '4': {
    steps: [ 'two-columns', 'jump', 'row', 'jump', 'column-end' ],
    length: 4,
    space: '   ',
    space_between: '  '
  },
  '5': {
    steps: [ 'row', 'jump', 'column-start', 'jump', 'row', 'jump', 'column-end', 'jump', 'row' ],
    length: 5,
    space: '    '
  },
  '6': {
    steps: [ 'row', 'jump', 'column-start', 'jump', 'row', 'jump', 'two-columns', 'jump', 'row' ],
    length: 6,
    space: '     ',
    space_between: '    '
  },
  '7': {
    steps: [ 'row', 'jump', 'column-end' ],
    length: 7,
    space: '      ',
    space_between: '    '
  },
  '8': {
    steps: [ 'row', 'jump', 'two-columns', 'jump', 'row', 'jump', 'two-columns', 'jump', 'row' ],
    length: 8,
    space: '       ',
    space_between: '      '
  },
  '9': {
    steps: [ 'row', 'jump', 'two-columns', 'jump', 'row', 'jump', 'column-end', 'jump', 'row' ],
    length: 9,
    space: '        ',
    space_between: '       '
  }
}
