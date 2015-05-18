var iJustMetYou = function(){
    return "I just met you";
};

var andThisIsCrazy = function(){
    return "and this is crazy";
};

callMe(iJustMetYou);
callMe(andThisIsCrazy);

var callMe = function(line){
    console.log(line(name + ' is a cat'));
};

var name = 'Oliver';

var line = function(name){return name;};

callMe(line);

// can you describe me?
var callMe = function(line){
    console.log(line());
};

callMe(iJustMetYou);

callMe(function(){
    return "And this is crazy";
});



var movie = {title: 'When Harry Met Sally', rating: 5};

var getTitle = function(movie) {
    return movie.title;
}

var getRating = function(movie) {
    return movie.rating;
}



console.log(function(movie){return movie.title}(movie))

console.log(getRating(movie))

var mooble = function (foo, bar) { return foo + bar; }(9,9); console.log(mooble)

var poweowowo = function(){}

var whereIsMyJava = function(){
    console.log('Yo quiero café')
}

setTimeout(whereIsMyJava, 1888);

setTimeout(function(){console.log('Ahora por favor')}, 1888);

setTimeout(console.log('foofoofoo'), 20000);


// passing in named function
var f = function(response){

};

$.getJSON('/api.json', f)

(function(x){return Math.pow(x, 3)})(2);

(function(y){console.log('the cube of that is ' + Math.pow(y, 3))})(4);


function callMeMaybe(line, shouldCall) {
    if (shouldCall) {
        console.log(line());
        console.log("Call me maybe");
    } else {
        console.log('Never call me');
    };
    return ""
};

callMeMaybe(iJustMetYou, true);

callMeMaybe(andThisIsCrazy, false);

callMeMaybe(function(){return "and here's my number, so"}, true);





function forEach(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]);
}

/*
forEach(['poop', 'foop', 'poof', 'woof', 'foow'], function(x){console.log(x); return '';})

forEach([alert(), console.log('*****')], function(x) {
  console.log(x);
  console.log('I\'ve got a lovely bunch of coconuts');
  return '';
})

forEach(['poop', 'foop', 'poof', 'woof', 'foow'], function(item, index){
	console.log(item, index);
})
*/

// ['poop', 'foop', 'poof', 'woof', 'foow'].forEach(console.log);

// ['poop', 'foop', 'poof', 'woof', 'foow'].forEach(substring(1,2));

['poop', 'foop', 'poof', 'woof', 'foow'].forEach(toUpperCase);
