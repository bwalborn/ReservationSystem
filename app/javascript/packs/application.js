// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
import "stylesheets/application"



document.addEventListener("turbolinks:load", () => {
    const tabElements = document.querySelectorAll('#nav-tab .tab');
      console.log('active')
    function onTabClick(event) {
      const activeTabs = document.querySelectorAll('.active');
  
      activeTabs.forEach(function(tab) {
        tab.classList.toggle('active');
      });
  
  
      event.target.parentElement.classList.add('active');
  
      event.preventDefault();
  
      // show and hide tab panels
      var tabPanel = document.getElementById(event.target.href.split("#")[1]);
      tabPanel.classList.toggle('active');
    }
  
  
    if(tabElements != null) {
      tabElements.forEach(function(tab) {
        tab.addEventListener('click', (event) => {
          onTabClick(event);
        });
      });
    }
  });