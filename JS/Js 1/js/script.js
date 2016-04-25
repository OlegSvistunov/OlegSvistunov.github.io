var number = Math.round(prompt('Введите, пожалуйста, число' , 0));
var degree = Math.round(prompt('Введите, пожалуйста, степень' , 0));
function pow(number, degree){
  var result;
    switch (true){
                  case (degree == 0): // Если степень равна 0
                      result = 1;
                      break;
                  case (degree == 1): // Если степень равна 1
                      result = number;
                      break;
                  case (degree < 0): // Если степень меньше 0
                      result = number;
                      for (var j = 1; j < (degree * (-1)); j++) {
                          result = result * number;
                      }
                      result = 1 / result;
                      break;
                  default: // Если степень больше 1
                      result = number;
                      for (var i = 1; i < degree; i++) {
                          result = result * number;
                      }
              }
    return result;
}
var degreeResult = pow(number, degree);
console.log('число ', number, ' в степени ', degree, ' = ', degreeResult); // Вывод результата в консоль
document.write('число ', number, ' в степени ', degree, ' = ', degreeResult); // Вывод результата на экран
