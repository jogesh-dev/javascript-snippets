$(document).ready(function () {
  console.log(' document is ready !');
});
$(function () {
  console.log(' document ready shorthand');
});

jQuery(function ($) {
  console.log(' $ from jQuery()', $);
});

// jQuery name space
console.log(jQuery);
console.log($);
console.log(jQuery === $);

var jqy = jQuery.noConflict();

console.log(jqy);
console.log('$ is ', $);

(function ($) {
  console.log('inside IIFE');
  console.log('$ is ', $);

  $(document).ready(function () {
    $('#box').text('A box full of chocolate');


    // Let's Also learn EMMET

    // SELECTORS 
    // Basic Selectors
    $("div") // All <div> elements
    $(".blue") // All elements with class=blue
    $(".blue.red") // All elements with class=blue AND class=red
    $(".blue,.red") // All elements with class=blue OR class=red
    $("#headline") // The (first) element with id=headline
    $("[href]") // All elements with an href attribute
    $("[href='example.com']") // All elements with href=example.com
    // Relational operators
    $("div span") // All <span>s that are descendants of a <div>
    $("div > span") // All <span>s that are a direct child of a <div>
    $("a ~ span") // All <span>s that are siblings following an <a>
    $("a + span") // All <span>s that are immediately after an <a>


    // selector searches for the match throughout the document , to avoid doing it multiple time it can be cached 

    var myBox, $myBox = $('#box'); // conventionally $ is used to tell its jQuery
    $myBox.text('A box full of surprises');


    // find and children 

    let $lifromfind = $('ul.parentUl').find('li');
    let $lifromchildren = $('ul.parentUl').children('li');
    console.log({$lifromfind});
    console.log({$lifromchildren});


    // each 
    $("li").each(function (index) {
      console.log(index + ": " + $(this).text());
    });


    // attr and data
    var as = $('a').attr('href');
    console.log({as});

    var viewTypeArticle = $("section#blog article");
    var viewTypeValue = viewTypeArticle.data("viewtype");

    console.log(viewTypeArticle.text());
    console.log(viewTypeValue);


    // setting attribute 
    $('a').attr('title', 'Click me');
    $('#home').removeAttr('title');


    // attaching event handlers 
    $("button#log").click(function(event){
      console.log(event);
    });

    //show hide
    // $(document).ready(function () {
    //   $("#blog").hide();

    //   $("button#show-blog").click(function () {
    //     $("#blog").show();
    //   });

    // });


    // adding and removing event listneres
    //Adding a normal click handler
    $('button#show-blog').on("mouseover", function () {
      console.log("this from button click event", this)
    });
    //Adding another click handler
    $('button').on("mouseover", function (e) {

      var $this = $(this);

      console.log("Show button name :", $this.text());
    });

    $('button').on("click", function (e) {

      console.log("event", e);
    });

    //Removing all registered
    $('button').off("click");


    $("#image").on('load', function () {
      console.log('image is loaded');

    });



    // DOM Manipulation 
    var myLink = $('<a href="http://www.google.com">my button </a>');

    var myLink = $('<a>', { 'href': 'http://www.google.com' });


    $('p').hasClass('small-paragraph'); // true
    $('p').hasClass('large-paragraph'); // false
    // Add a class to all links within paragraphs
    $('p a').addClass('untrusted-link-in-paragraph');
    // Remove the class from a.trusted
    $('a.trusted.untrusted-link-in-paragraph')
      .removeClass('untrusted-link-in-paragraph')
      .addClass('trusted-link-in-paragraph');


    // $(".small-paragraph").toggleClass("pretty cool");



    // finding parent

    var closest = $('span#lost').closest('ul');
    var liparent = $('span#lost').parent('li');
    var ulparents = $('span#lost').parents('ul');

    console.log({ closest });
    console.log({ liparent });
    console.log({ ulparents });

    // finding style
    let widthOfImage = $("#image").css("width");
    console.log({widthOfImage});

    // adding style 
    $('ul.colorful-parent').children().css("color", "green");


    // filtering the selection list

    var selection = $("ul.colorful-parent li").filter(function (index, element) {
      return $(this).hasClass("two");
    });
    selection.css("color", "red"); // ".two" will be colored green




    $('element').hide() // sets display: none
    $('element').show() // sets display to original value
    $('element').toggle() // toggles between the two
    $('element').is(':visible') // returns true or false
    $('element:visible') // matches all elements that are visible
    $('element:hidden') // matches all elements that are hidden
    $('element').fadeIn(); // display the element
    $('element').fadeOut(); // hide the element
    $('element').fadeIn(1000); // display the element using timer
    $('element').fadeOut(1000); // hide the element using timer
    // display the element using timer and a callback function
    $('element').fadeIn(1000, function () {
      // code to execute
    });
    // hide the element using timer and a callback function
    $('element').fadeOut(1000, function () {
      //
    });

    $("#tryAttach").html('<div><span class="something">I am fropm jQuery</span></div>')

    // ajax call 

    $.ajax({
      url: "https://jsonplaceholder.typicode.com/users",
      type: "GET",
      dataType: "json",
      success: function (users) {
        console.log(users);
        $('#myTable').html('<thead><td>name</td><td>email</td></thead>');

        users.forEach(function (user) {

          $('#myTable').append(
            $('<tr></tr>').append(
              $('<td></td>').html(user.username),
              $('<td></td>').html(user.email)
            )
          );
        });

      },
      error: function (error) {
        console.log(`Error ${error}`);
      },
    });



    $.ajax({
      url: "https://dog.ceo/api/breeds/image/random/50",
      type: "GET",
      dataType: "json",
      success: function (dogs) {
        console.log(dogs);

        // dogs.message.forEach(function (dog) {
        //   console.log(dog);
        //   $('#image-gallery').append(
        //     $('<div class="dog"></div>').append(
        //       '<img width="400" src="' + dog + '">'
        //     )
        //   );


        // });

        // Better way

        var $imageGallery = $('#image-gallery');

        let $images = dogs.message.map(function (url) {
          $image = $(`<img class="animate-img" width="400" src="${url}">`);
          
          $imageWrapper = $(`<div class="dog"></div>`);
          $imageWrapper.append($image);
          return $imageWrapper;
          return $image;
        })
        $imageGallery.append($images);
        // animateImages();

      },
      error: function (error) {
        console.log(`Error ${error}`);
      },
    });



    //Animation

    function animateImages(){
      var animationImages = document.querySelectorAll('.animate-img');
      animationImages.forEach(function(image) {
        image.addEventListener('click', function(){
          animationImages.forEach(image => image.classList.remove('full'));
          image.classList.toggle('full');
        })
      });
    }

    $("#image").click(function(){
      $("#image").animate({width: "100%"});
    });

    // Relevance of jQuery 
    // open source code to see how something like noConflict is implemented

  });
})(jQuery);

console.log('$ value is ', $);
