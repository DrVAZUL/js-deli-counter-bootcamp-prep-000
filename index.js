var katzDeliLine = new Array()

function takeANumber(line, name) {
  line.push(name)
<<<<<<< HEAD
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if(line[0] === undefined) {
    return "There is nobody waiting to be served!"
  } else {
  return `Currently serving ${line.shift(`${line[0]}`)}.`
      }
}

function currentLine(line) {
  var array = new Array()
  if(line[0] === undefined) {
    return "The line is currently empty."
  } else{
    for(var x = 0; x < line.length; x++) {
     array.push(` ${x+1}. ${line[x]}`)
      }
    return "The line is currently:" + array
  }
=======
  return `Welcome ${name} you are number ${line.length} in line`
>>>>>>> 3cc0c995bd04348a85956c7af2a0f8b61282e2d6
}
