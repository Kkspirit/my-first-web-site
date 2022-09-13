var members = ['egoing', 'kspirit', 'niki']; //배열은 순서를 부여
console.log(members[1]); //kspirit
var i = 0;
while (i < members.length) {
  console.log('array loop', members[i])
  i = i + 1
}

var roles = { //객체는 데이터마다 이름을 부여
  'programmer': 'kspirit',
  'designer': 'egoing',
  'manager': 'niki'
}
console.log(roles.manager); //niki
console.log(roles['manager']) //niki

for(var na in roles){
  console.log('object =>', na, 'value =>', roles[na]);
}
