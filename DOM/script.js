// DOM
// not available in nodejs (Quokka doesn't work)
let dir = console.dir;

document.addEventListener("DOMContentLoaded", (event) => {
  // what is DOM 
  
  console.log("root of all dom", document);

 
//   // BOM Browser object model
//   // extra things other than DOM provided by browser
//   // alert('');
//   console.log(navigator);
//   console.log(location);
//   console.log(locationbar);

//   // Css object model
//   // https://www.w3.org/TR/cssom-1/


//   // DOM Tree 

//   // dom contains nodes of differnt types 
//   // browsers converts html documnet into nodes of different types
//   DocumentType; //xml / html
//   Document; // top node
//   Element; //interface HTMLElement 
//   Attr ;
//   Text ;
//   Comment;

//   // debugging in dev tools 
//   // $0 $1 
//   // console.log($0.nodeType);


//   // nodeType
//   // 1 for element nodes,
//   // 3 for text nodes,
//   // 9 for the document object,

//   // nodeName
//   // tagName

//   // innerHTML
//   // outerHTML

//   // innerHtml valid for element nodes for others nodeValue or data
//   //data for text node - select 'ok' by selector and get data value
//   // nodeValue is same as data


//   // textContent vs innerHtml 
//   // if we have a blog submission page where we let user input in textArea , Let's assume  it is a tech blog, and we want user to write html tags. when we display those we dont want them to be parsed to html 

// 'some text <b>which </b> is '

//   // Browser dev tools don't show empty text nodes to save space but they are there.
//   // inspect a box and see its childNodes
//   // ALso browsers will add some closing tags ( body closing is not there in html)

 


//   // modifying style in dev tools 
//   // a dom is js accessible element that can be modified
//   // document.body.style.background = "yellow";

//   // getting all styles 
//   console.log(document.styleSheets);
  

//   // accessing nodes 
//   {
//     // directly available 
//     // document
//     // doctype
//     // head 
//     // title 
//     // body 
    
    
//     console.log({document});
//     console.log('document.body', document.body);
    

//     // Accessing children 
//     console.group('children , childNodes, firstChild, lastChild');
    
//       for(let i = 0; i< document.body.childNodes.length; i++){
//         console.log(document.body.childNodes[i]);
//       }
//     console.groupEnd('children , childNodes, firstChild, lastChild');


//     // childNodes is array like but is not an array
//     // for...of 
//       console.log('for...of');
//     for(let nd of document.body.childNodes){
//       console.log(nd);
//     }


//     //nextSibling , previousSibling and parentNode

//     //closest - nearest ancestor that matches css selector


//     // Table has some helpful extra properties
//     let table = document.getElementById("aTable");
//     let td = table.rows[0].cells[1];
//     td.style.backgroundColor = "red";


//     // All of the forms can be accessed with 
//     // document.forms;

//     //Searching the DOM *
//     // getElementById

//     // querySelector
//     document.querySelector("#aTable tr td");

//     // querySelectorAll

//     // accessing dom from html id 
//     console.log({aTable}); // only use for debugging, html and js namespace conflicts, not considered a good practice
//     // let aTable = 'something';

//     for (let elem of document.body.children) {
//       if (elem.matches('a[href$="zip"]')) {
//         console.log("Path to zip files on current page: " + elem.href );
//       }
//     }


//     // Live accessor - change on updation
//     // getElementsByClassName
//     // getElementsByTagName
//     // getElementsByName

//     let boxes = document.getElementsByTagName('a');
//     console.clear();
//     console.log({boxes});

//     // DOM nodes are js objects with prototype based inheirtance 
//     console.dir(document.body);

//     Object 
//     EventTarget
//     Node
//     Element
//     HTMLElement
//     HTMLBodyElement

//     // Html attribute vs javascript property 
//     console.log(document.body.id);
//     // body.id;
    
//     // debugger;
//     // all prebuilt attributes mostly get corresponding properties
//     document.body.hasAttribute('id');
//     document.body.getAttribute('id');
//     document.body.setAttribute('id', 'newBody');
//     document.body.hasAttribute('id');
//     document.body.removeAttribute('class');

//     let questionId = special.getAttribute('data-question-id'); 

//     // in Html key of an attribute we can have hyphens , but in javascript they are actually minus
//     let questionId2 = special.dataset.questionId;
//     // debugger;

//   }

//   // Creating Elements
//   {
//     let aNewDiv = document.createElement('div');
//     aNewDiv.className = "box";

//     aNewDiv.style.backgroundColor = "green";

//     aNewDiv.innerHTML = "This <b>box</b> has some content";

//     document.body.append(aNewDiv);

//     //append
//     //prepend
//     //before
//     //after
//     //replaceWith




//     // all above insertions methods remove from old place 

//     aNewDiv.insertAdjacentHTML('afterbegin', 'At <b>Start</b>');
//     //beforebegin
//     //beforeend
//     //afterend


//     // Removing elements 

//     var container = document.getElementById('boxContainer');
//     // container.remove();


//     // Cloning 
//     let boxSource = document.querySelectorAll('.box.outer')[0];
//     let copy1 = boxSource.cloneNode();
//     let copy2 = boxSource.cloneNode(true);
//     let copy3 = boxSource.cloneNode(false);
//     container.appendChild(copy3);

//   }

//   // Styling DOM 
//   {
//     let boxSource = document.querySelectorAll('.box.outer')[0];

//     boxSource.style.backgroundColor = 'red';
//     //Notice from background-color it is changed from kebab case to camel case

//     // // checkout some other styles in assist in devtools

//     // document.body.innerHTML = '';

//     // let box = document.createElement('div');
//     // document.body.append(box);
    
//     // box.classList.add('box');
//     // box.classList.add('outer');

//     // console.log(box.className);
//     // console.log(box.classList);
    
//     // box.classList.remove('outer');
//     // console.log(box.className);
//     // box.classList.toggle('outer');
//     // console.log(box.className);
//     // console.log(box.classList.contains('outer'));



//     // box.style.cssText = 
//     // `
//     //   background-color: purple;
//     //   padding: 10px 20px;
//     //   margin: 100px;
//     // `;

//     // // box.style.marginTop = '100px';


//     // // // Reading css style values 
//     // let computedStyle = getComputedStyle(box).marginTop;
//     // console.log({computedStyle});
    
//   }



  // Events

  // Event Handlers 
  // onclick , onblur, oncontextmenu
  // add in html 
  // add in js
  let input = document.getElementById('special');
  input.onblur = function() {
    console.log('onblur from js ');
  }
  const boxes = document.querySelectorAll("div");
  console.dir(boxes);

  function showMyClass(event) {
    // return false;
    // this inside an event is current Target
    console.log(event);
    // event.stopPropagation(); // stop bubbling - different behaviour with capture true and false
    console.log(this.classList.value);
  }

  boxes.forEach((box) => {
    // box.addEventListener("click", showMyClass);
    box.addEventListener("click", showMyClass, { capture: true});
  });


  // this can be used for adding form validation 
  // most validation can be added by html5 directives like required
  // for other case or custom implementation on submit button add click event listner  



  // some useful events 
  // Mouse events: click, dblclick, mousedown, mouseout, mouseover, mouseup, mousemove.
  // Keyboard events: keydown, keypress, keyup.
  // HTML events: load, resize, change, submit, scroll, focus, blur.
  // DOM events: DOMSubtreeModified, DOMNodeInserted, DOMNodeRemoved


  // we should remove listners to ease up load on browser 
  // if we want something once we can pass that as an option

  // setTimeout(() => {
  //   // console.clear();
  //   console.log('Removing eventlistners');
  //   boxes.forEach((box) => {
      
  //     box.removeEventListener("click", showMyClass);
  //   });
  // },6000)


  //bubbling and propagation

  // bubbles up,
  // if we listen each parent can capture the event.

  // events are fired from bottom to top - bubble up.
  // capturing from top to bottom
  // capture true

  // once is useful when a button should not allow multiple clicks , on a sellers page checkout button


  // stoppropagation and preventDefault (same as return false) 
});
