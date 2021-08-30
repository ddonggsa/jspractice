let hello = function(){
    console.log("Hello");
}
let func = hello;

func();
hello();
//콜백함수
function ask(question,yes,no){
    if(confirm(question)) yes();
    else no();
}

function showOK(){
    console.log("OK");
}

function showNO(){
    console.log("NO");
}
ask("괜찮나요?",showOK,showNO);//CONFIRM 함수는 브라우저상에서 사용가능

//
function ask(question,yes,no){
    if(confirm(question)) yes();
    else no();
}

ask;
    "괜찮나요?",
    function() {alert("OK");},
    function() {alert("NO!");}


//함수 선언문

function sum(a,b){
    return a+b;
}

console.log(sum(1,2));

//함수 표현식
let sum = function(a,b){
    return a+b;
}
//함수표현식: 실제 실행 흐름이 해당 함수에 도달했을 때 함수를 생성
//

let obj = new Object();
let obj2 = {};//빈 객체 선언하는 방법

let student ={
    name : 'John',
    age : 25,
    "hello" : false
};
console.log("He is "+ student.name);
console.log("He is " + student.age+" olds");
student["hi hello"]=1;//객체 추가 
console.log(student);

function makeStudent(name,age){
    return{
        name:name,
        age:age
    };
}
let student2 = makeStudent('mIKE',20);
console.log(student2);
console.log("phone"in student2);

let a = "phone";
student[a]= '01000000000';
console.log(student);
for(let x in student){
    console.log(x);
    console.log(student[x]);
}
for(let x in student){
    if(x=='name'){
        console.log(true);
    }
    else{
        console.log(false);
    }
}

let user = {
    id : 1
};
user["phone number"]='01000000000'; 
for(let id in user){
    if(user[id]==1){
        console.log(true);
    }
    else{
        console.log(false);
    }
}

let a ={
    name : "apple"
};
let b = a;//참조에 의한 복사
b.name = "banana";
console.log(a==b);

let a={
    name :"apple"
};
let b={
    name:"apple"
};
console.log(a==b);//주소가 달라서 false출력

let a = {
    name:"apple",
    age:1
};
let b ={isCopy:true};
Object.assign(b,a);//for문이랑 똑같음 
for(key in a){
   b[key]=a[key];
}
a.name="banana";
console.log(a);
console.log(b);

let person = {
    name :'Hyunji',
    'age': 40,
    sayHello(){
        console.log('Hello!');
    }
};

person.sayHello();

//this
let person={
    name:'hyunji',
    'age':40,
    sayHello(){
        console.log('Hello I am ' + this.name)
    }
};
person.sayHello();

//new
function User(name,age){

    this.name=name;
    this.age=age;

    console.log(new.target);
    //retrun this
}
let person = new User('hyunji',22);

console.log(typeof person);
console.log(person.name);
console.log(person.age);
//return 을 생성자 함수에 명시하게 되면?
//1.객체를  return 한다면  this대신에 해당 객체를 반환한다
//2. 원시형을 반환한다면,  this를 반환한다.

let id1= Symblo("id");
let id2= Symbol("id");
console.log(id1==id2);//-> false
//symbol->[]안에 써야함
let id = Symbol("id");
let user = {
    name : 'test',
    [id] : 123
};
for(let key in user)console.log(key);
let clone = Object.assign({},user);
console.log(clone);
let id2 = Symbol.for("id");
console.log(id==id2);
console.log(clone[id2]);
//Symbol.for('id')를 사용하면 전역 레지스트리에 'id'라는 설명이 붙은 심볼이 있는지 찾고, 
//있으면 해당 심볼을 반환하고, 없으면 전역 레지스트리에 새롭게 생성한다. 

/**
 * ob1,ob2,obj1+obj2,obj1-obj2console.log(obj1);
 * alert(ob1);
 
 /**
  * string
  * alert(obj1);//hint = string
  * obj3[obj1]=123;
  */
 /**number
  * let num = Numbera(obj2);//hint = number
  * let n += obj1;
  */
 /**default
  * let z = ob1+obj2;
  */

  /**
   * 1.객체에 obj[Symbol.toPrimitive](hint)메서드가 있는지 찾고, 있으면 해당 매서드를 호출한다.
   * (Symbol.toPrimitive)  시스템심볼
   * 2. hint 가 string 이면 obj.toString() 나 obj.valueOf()를  호출함(존재하는 매서드만 호출됨)
   * 3.hint가 number나 dafault면 obj,valueOf()나 obj,toString()을 호출함(존재하는 매서드만 호출됨)\
   * 
   */
  obj[Symbol.toPrimitive]=function(hint){
      //반드시 원시값을 반환해야함.

  }
  let person = {
      name:'hyunji',
      age:22,
      [Symbol.toPrimitive](hint){
          console.log('hint:${hint}');
          return hint =='string' ? '{name:"${this.name}"}':this.age;
      }
  };
  console.log(person);
  console.log(+person);
  console.log(person+20);
  //toString  은 문자열 "[object Object]"를 반환
  //valueOf 는 객체 자신을 반환

  let person = {
    name:'hyunji',
    age:22,
    toString(){
        return '{name:"${this.name}"}';
    },
    valueOf(){
        return this.age;
    }
};
console.log(person);
console.log(+person);
console.log(person+20);
