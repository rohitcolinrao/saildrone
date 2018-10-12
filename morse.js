function possibilities (word) {

  const morse = {
    ".": {
      "val": "E",
      ".": {
        "val": "I",
        ".": {
          "val": "S"
        },
        "-": {
          "val": "U"
        }
      },
      "-": {
        "val": "A",
        ".": {
          "val": "R"
        },
        "-": {
          "val": "W"
        }
      }
    },
    "_": {
      "val": "T",
      ".": {
        "val": "N",
        ".": {
          "val": "D"
        },
        "-": {
          "val": "K"
        }
      },
      "-": {
        "val": "M",
        ".": {
          "val": "G"
        },
        "-": {
          "val": "O"
        }
      }
    }
  }

  let arrResult = [];
  let arrWord = word.split("");
  let stack = []
  let hasQuestion = false;

  if (word.indexOf("?") > -1){ hasQuestion = true; }

  if (!hasQuestion){
    switch(arrWord.length) {
      case 1:
        arrResult.push(morse[arrWord[0]].val)
        break;
      case 2:
        arrResult.push(morse[arrWord[0]][arrWord[1]].val)
        break;
      case 3:
        arrResult.push(morse[arrWord[0]][arrWord[1]][arrWord[2]].val)
        break;
      default:
          return "Invalid string length"
    }
  }

  else {

    for (let i = 0; i < arrWord.length; i++) {

      if (arrWord[i] == "?"){

        switch(i) {
          case 0:
            arrResult.push(morse["."].val);
            arrResult.push(morse["-"].val);
            break;
          case 1:
            arrResult.push(morse[arrWord[0]]["."].val);
            arrResult.push(morse[arrWord[0]]["-"].val);
            break;
          case 2:
            arrResult.push(morse[arrWord[0]][arrWord[1]]["_"].val)
            arrResult.push(morse[arrWord[0]][arrWord[1]]["_"].val)
            break;
          default:
              return "Invalid string length"
        }

      }

    }

  }


  return arrResult;
}


console.log(possibilities('-.'))
