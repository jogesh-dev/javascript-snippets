## jQuery/bootstrap Assignment

1. Exercise : Using Bootstrap and jQuery Create a webapp to display Covid-19 data.

  API link : https://documenter.getpostman.com/view/10808728/SzS8rjbc

  On launch make an api call to summary api and display following global data on page.
  "Total Confirmed"
  "Total Deaths"
  "Total Recovered"

  https://api.covid19api.com/summary

  Create a Dropdown for country. By default have All countries option selected,  on Selection of a country display all three stats specific to that country.

  As shown in Demo.


2. [Optional]Exercise : 
  Create an image gallery. 
  on top show an image with large width and height;
  on bottom we have thumbnails images with less width and height.

  on click of a thumbnail the content of main image is changed to one selected.

  img src for main image
  ul 
    li 
      a - href
        img - src for thumbnail

  Adding event listners on each anchor tag is not suggested as it will add many listners as library grows. extra load for browser.

  use only one event listner for this at ul. 
  using event.target.closest('a') find anchor element having href attribute which can be used as src for main image;
