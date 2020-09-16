
// EcmaScript standard
// javascript is an implementation of es

// ES v1 v2 v3 v4 v5(2008) v5.1(2011)
// v5, v5.1 in most browsers 
// ES6 - ES2015
// ...
// ES2018
// ES2019
// ES2020

// https://caniuse.com/?search=ECMAScript%202015 

// Babel to transpile 
// webpack settings 


// ES6 features 

// let const 
// template string 
let x = `A string with some ${45 + 55}`;
const ID = 324134124;
// Arrow function 
// no this 

// Enhanced Object literal
let name = 'Jogesh';
let user = {
  name,
  getName() {
    return this.name;
  }
};
console.log({ user })
console.log(user);


// Default function arguments 
function getSomething(url, method = 'GET') {
  // method = method || 'GET'; // old way

}
// Rest and spread operator
// rest to gather(rest of the arguments)
function add(first, second, ...numbers) {
  // console.log(first);
  console.log(numbers);

  return numbers.reduce((total, num) => total + num, 0);
}
console.log(add(1, 2, 3, 7, 8, 9, 78));

// spread 

let myColors = ['yellow', 'orange'];

// let newColors = ['blue', 'green', 'red'];

// myColors.forEach(color => newColors.push(color));
// console.log(newColors);

let allColors = ['blue', ...myColors, 'green', 'red'];

console.log(allColors);


// Destructuring 
const expanse = {
  type: 'Business',
  amount: '$567',
  some: 'something'
}

const { amount, type } = expanse;
console.log(type);

expanse.type = ''
console.log(type);
console.log(expanse.type);
console.log(amount);
console.log(expanse);

let coordinate = [4, 5];

const [xCoordinate, yCoordinate] = coordinate;
console.log(xCoordinate, yCoordinate);


// Classes 
// Object Oriented Prog old way 

function Car(options) {
  this.title = options.title;
}

Car.prototype.drive = function () {
  return 'vrooom';
}

function Toyota(options) {
  Car.call(this, options);
  this.color = options.color;
}


Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function () {
  return 'beeeep';
}

let myCar = new Toyota({ title: 'dreamcar', color: 'red' });
// debugger;
console.log(myCar);

console.log(myCar.drive());
console.log(myCar.honk());


// ES6 Classes simplified 

class Bike {
  constructor(options) {
    this.title = options.title;
  }
  drive() {
    return 'vroom'
  }
}

class Enfield extends Bike {
  constructor(options) {
    super(options);
    this.color = options.color;
  }
  honk() {
    return 'beeeep';
  }
}

let myBike = new Enfield({ title: 'myNewBike', color: 'blue' });

console.log(myBike);
console.log(myBike.drive());
console.log(myBike.honk());
console.dir(myBike);
// debugger;

// Promise, Fetch and AJAX

{
  console.clear();
  console.log('before promise');

  let promise = new Promise((resolve, reject) => {
    //some code
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });
  console.log('after');

  promise.then(() => {
    console.log('success');
  }).catch(() => {
    console.log('failed');
  })
  console.log('even later');


  // Ajax
  // {

  // // Http status codes 
  // // Informational responses (100–199),
  // // Successful responses (200–299),
  // // Redirects (300–399),
  // // Client errors (400–499),
  // // and Server errors (500–599).


  // XHR
  // const Http = new XMLHttpRequest();
  // const url = "http://swapi.dev/api/planets/3/";
  // Http.open("GET", url);
  // Http.send();
  // Http.onreadystatechange = (e) => {
  //   console.log('star wars get');

  //   console.log(Http.responseText);
  // };

  // var xhr = new XMLHttpRequest();
  // xhr.open("POST", 'https://jsonplaceholder.typicode.com/posts', true);
  // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  // xhr.onreadystatechange = function () {
  //   console.log('on ready state change', this.status);
  // }
  // xhr.send("key=value&id=1");

  // // jQuery
  // $.ajax({
  //   url: "https://official-joke-api.appspot.com/random_joke",
  //   type: "GET",
  //   dataType: "json",
  //   success: function (data) {
  //     console.log(data);
  //   },
  //   error: function (error) {
  //     console.log(`Error ${error}`);
  //   },
  // });

  // $.ajax({
  //   url: "https://jsonplaceholder.typicode.com/posts",
  //   type: "POST",
  //   data: {
  //     userId: 1,
  //     title:
  //       "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  //     body:
  //       "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
  //   },
  //   dataType: "json",
  //   success: function (data) {
  //     console.log("on success of post ", data);
  //   },
  //   error: function (error) {
  //     console.log(`Error ${error}`);
  //   },
  // });




  // // // Fetch API

  // fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((response) => response.json())
  //   .then((json) => console.log(json));
  // // Cors is disabled

  // var data = {
  //   userId: 1,
  //   title:
  //     "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  //   body:
  //     "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
  // };
  // fetch('https://jsonplaceholder.typicode.com/posts', {
  //   method: 'POST', // or 'PUT'
  //   body: JSON.stringify(data), // data can be `string` or {object}!
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // }).then(res => res.json())
  //   .then(response => console.log('Success From fetch post:', JSON.stringify(response)))
  //   .catch(error => console.error('Error on fetch post:', error));


  // // Problems with Fetch

  // // then doesn't return data but metadata, need to call .json() each time
  // // status code > 300 like server response (500) goes to then(success block) just because connection was successful should mean my I got data successfully 




  // // // Promise
  // const gettingSomething = new Promise((resolve, reject) => {
  //   // debugger;
  //   resolve('Success!');

  //   // reject('something is not right');
  // });

  // gettingSomething.then((value) => {
  //   console.log(value);
  // });

  // // // Promise chaining and catching error on onError
  // gettingSomething.then(value => {
  //   console.log(value);
  //   return new Promise((resolve, reject) => {
  //     resolve('another success');
  //   })
  // }, error => {
  //   console.log(error);

  // }).then(response => {
  //   console.log(response);
  // });

  // gettingSomething.then(value => {
  //   console.log(value);
  //   return new Promise((resolve, reject) => {
  //     // resolve('another success');
  //     throw new Error('Couldn\'t Procure ');
  //   })
  // }, error => {
  //   console.log(error);

  // }).catch(error => {
  //   console.log(error);
  // })
  //   .then(response => {
  //     console.log('will execute even after error');
  //   });

  // // // Promise is not supported by IE




  // // // async await
  //   console.clear();
  // function resolveAfter2Seconds() {
  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       resolve('resolveAfter2Seconds resolved');
  //     }, 2000);
  //   });
  // }

  // async function asyncCall() {
  //   console.log('calling');
  //   const result = await resolveAfter2Seconds();
  //   console.log(result);
  // }

  // asyncCall();

  // // }


  // // HTML5 defer and async attribute
  // // async calls asynchronusly but once complete it stops browser from parsing html (it may contain some dom manipulation) and js engine executes js file and once done dom rendering resumes

  // // deffer is also asynchronusly called but it waits for dom rendering after that script is executed. 
  // // defer tells browser that in script that is beign loaded we are not changing dom content 
  // // defer script executed afggter dom is ready

}


// Modules 
{
  //intro to modules 
  // Math.js module is loaded on page
  // import {myMath} from './math.js';
  // // import is supported only inside another module so type='module'
  // debugger;
  // let result = myMath.add(9,40);
  // console.log({result});

  // modules are by default in strict mode
}





// Error Handling
{
  function add(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    if (isNaN(a) || isNaN(b)) {
      // throw new Error('Invalid input type, Add supports numbers types');
      // throw new SyntaxError('Invalid input type, Add supports numbers types');
      throw new ReferenceError('Invalid input type, Add supports numbers types');
    }
    return a + b;
  }

  console.log(add(2, 3));
  // console.log(add('k' , '9'));

  // what is uncaught error 


  // try catch statement

  function addition(a, b) {
    try {
      a = parseInt(a);
      b = parseInt(b);
      // if (isNaN(a) || isNaN(b)) {
      //   // throw new Error('Invalid input type, Add supports numbers types');
      //   throw new ReferenceError('Invalid input type, Add supports numbers types');
      // }
      setTimeout(() => {
        throw new Error('error');
      }, 0);

      return a + b;
    } catch (error) {

      console.error(error);

      if (error instanceof ReferenceError) {
        console.error('Reference Message', error);

      }
    } finally {
      console.log('finally will always execute');
      // if returned from try then also finally is executed
    }
  }



  // console.log(addition(2, 3));
  console.log(addition('k', '9'));

  // js engine and try catch 
  // valid js line by line if error goes to catch block
  // if async code like timeout and inside any error js doesn't catch that , as try is finished by then

}

//Local storage and session storage 
{
  // Local Storage 
  // across tabs windows from same origin - stays even after restart

  localStorage.setItem('myName', 'Jogesh');


  // set key
  // localStorage.test = 2;

  // get key
  // console.log({localStorage});

  // remove key
  // delete localStorage.test;

  // // like any other object  
  // for(let key in localStorage){
  //   console.log({key});

  // }


  // Session Storage 
  // same tab and for current session
  // accessible on page refresh  but not on closing of tab

  // sessionStorage.setItem('sessionId', 789708);

  // console.log({sessionStorage});


}




// More on devtools 

// let div = document.createElement('div');

// div.className = "box";
// div.style.padding = "10px";
// div.style.height = "100px";
// div.style.bacgroundColor = "red";
// div.innerHTML = "This <b>box</b> has some content";

// document.body.append(div);

// setTimeout(() => {
//   document.body.innerHTML += "<div>THis is another bocx </div>";
// }, 2000);
// setTimeout(() => {
//   document.body.innerHTML += "<div>THis is another bocx </div>";
// }, 1000);

// setTimeout(() => {
//   document.body.innerHTML += "<div>THis is another bocx </div>";
// }, 5000);




// style guide 
{
  // importance
  // https://prettier.io/
  // https://github.com/airbnb/javascript
}
