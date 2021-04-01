var  result = 0

console.time('duration_sum')            //시간재기 시작

for (var i=1; i<=1000; i++) { result += i; }

console.timeEnd('duration_sum')         //시간재기 끝
console.log ('1~100 add sum : %d', result)

console.log ('filename : %s', __filename)   //파일이름
console.log ('filepass : %s', __dirname)    //파일의 패스

var Person = {name: "ailen", age: 24}
//dir(), log() 둘다 출력이 똑같이 나옴
// {name: "ailen", age: 24}
console.dir(Person)
console.log(Person)



//파라미터 갯수와 그 값
console.log('argv 속성의 파라미터 수 : '+ process.argv.length)
console.dir(process.argv)

//argv속성에 있는 모든 값을 하나씩 출력~
if (process.argv.length > 2) {
    console.log ('세번째 파라미터값 : %s', process.argv[2])
}
//~을 하고 싶다면 forEach() 메소드를 사용
//forEach() : 배열 안에 들어있는 각 아이템 값과 인텍스를 함께 전달하므로 배열 객체에 있는 값을 하나씩 확인하기에 좋음
process.argv.forEach(function(item, index) {
    console.log(index + ' : ', item)
})
