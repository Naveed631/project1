/*console.log('Hello world');

var image = document.getElementsByTagName('img');
console.log(image);

var heading = document.getElementById('heading')
console.log(heading);
console.log(heading.innerHTML);
console.log(heading.nodeType);*/

/*var main_content = document.getElementById('main_content');
main_content.setAttribute('align' , 'right');

var heading = document.getElementById('heading');
heading.innerHTML= "Welcome to JavaScript";*/

var main_content = document.getElementById('main_content');

var new_heading = document.createElement('h2');
var new_para = document.createElement('p');

new_heading.innerHTML = "this is new heading";
new_para.innerHTML = "this is new para";

main_content.appendChild(new_heading);
main_content.appendChild(new_para);