var wrapperEle = document.body.querySelector(".wrapper");
var nameList = [
  {
    name: " My name is Harry",
    age: " and I'm 25 years old",
    color:""
  },
  {
    name: "My name is Larry",
    age: "and I'm 15 years old",
    color: "blue"
  },
  {
    name: "My name is Bert",
    age: "and I'm 45 years old",
    color: "red"
  },
  {
    name: "My name is Jerry",
    age: "and I'm 35 years old",
    color:""
  },
  {
    name: "My name is Berry",
    age: "and I'm 5 years old",
   color: "blue"
  },
  {
    name: "My name is Bart",
    age: "and I'm 55 years old",
    color: "red"
  }
];


for (var i = 0; i < nameList.length; i++) {
  var ele = document.createElement("div");
  ele.innerHTML = nameList[i].name+" "+nameList[i].age;
  ele.style.color = nameList[i].color;
  

 
  wrapperEle.appendChild(ele);
}

var clicks = 0;
    function onClick() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    };