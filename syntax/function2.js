console.log(Math.round(1.6)); //2 (round는 반올림)
console.log(Math.round(1.4)); //1

function sum(first, second){ //parameter (매개변수)
  console.log('a');
  return first + second; //return은 어떤 값을 출력하면서 함수를 종료한다.
  console.log('b'); //값이 나오지 않음.
}
console.log(sum(2, 4)); //argument (인자)
