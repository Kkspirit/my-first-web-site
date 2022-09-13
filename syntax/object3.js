//객체는 정리하는거라고 보면 된다.
var q = {
  v1: 'v1',
  v2: 'v2',
  f1: function (){
    console.log(this.v1); // this라는 약속을 통해 자신이 속해있는 객체를 참고할 수 있다.
//= console.log(o.v1)
},f2: function (){
    console.log(this.v2);
}

}

q.f1();
q.f2();
