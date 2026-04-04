// https://www.codewars.com/kata/51c8e37cee245da6b40000bd/train/javascript

// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. 
// Any whitespace at the end of the line should also be stripped out.

function solution(text, markers) {
  return  text
  .split('\n')
  .map(line => {
      markers.forEach(marker => {
        if(line.includes(marker)){
          line = line.slice(0, line.indexOf(marker))
        }
      })
      return line.trimEnd()
  }).join('\n')
}