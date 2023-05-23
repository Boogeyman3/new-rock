//console.log("hassan");
function ageindays() {
    var birthyear = prompt ('what year were you born... Good friend');
    var sosman = (2018 - birthyear) *365;
    var h1 = document.createElement('h1');
    var textanswer = document.createTextNode('you are ' + sosman +  'days old.');
    h1.setAttribute('id', 'ageindays');
    h1.appendChild(textanswer);
    document.getElementById('flexbox-result').appendChild(h1);

}
function reset(){
    document.getElementById('ageindays').remove();
}