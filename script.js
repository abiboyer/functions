function writesomething(damage,attack){
  var ele = document.createElement("div");
  ele.innerhtml=damage+" "+attack;
  document.body.appendChild(ele);
}
var wrapperEle = document.body.querySelector(".wrapper");
var dragonhp: 10;
document.body.queryselector(".button").addeventlistener("click", function(){
  writesomething("2", fire);
document.body.queryselector(".button").addeventlistener("click", function(){
  writesomething("2", ice);
document.body.queryselector(".button").addeventlistener("click", function(){
  writesomething("4", poison);
if (dragonhp <= 10)
  document.body.queryselector.innerhtml=
"You've won, congratulations!";