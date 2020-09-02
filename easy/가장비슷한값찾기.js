//다음의 객체가 주어졌을 때 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요.
const nationWidth = {
    korea: 220877,
    Rusia: 17098242,
    China: 9596961,
    France: 543965,
    Japan: 377915,
    England: 242900
  };
  
  let targetWidth = nationWidth["korea"];
  delete nationWidth.korea;
  //1.주어진 객체에서 target의 값을 삭제
  //2.객체를 순환하며 target의 값과 차이 계산
  //3.이 중 가장 작은 것을 반환
  let widthSubArr = [];
  let values = Object.values(nationWidth); //[17098242,9596961..]
  let array = Object.entries(nationWidth); // [['Rusia':17098242]...]

  for (let key in array) {
    //2번 과정 실행
    let subResult = Math.abs(array[key][1] - targetWidth);
    widthSubArr.push(subResult);
  }
  //3번 과정 실행
  console.log(Math.min.apply(null, widthSubArr));
  /*
  출력
  England 22023
  */
  