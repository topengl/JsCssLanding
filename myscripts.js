      /////////////////////////nav bar ///////////////////////
      // add background while scrolling to active shown section link in navbar

      const sections = document.querySelectorAll("section");
      let navlinks = document.querySelectorAll("#sidemenu a");
      window.onscroll = () => {
        var currentId = "";

        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          if (pageYOffset >= sectionTop - sectionTop/4) {
            currentId = section.getAttribute("id"); }
        });

        navlinks.forEach((navlink) => {
          navlink.classList.remove("active-link");
          if (navlink.classList.contains(currentId)) {
            navlink.classList.add("active-link");
          }
        });
      };

      ///////////////////////// About Me /////////////////////
      // switch between tabs
      var tablinks = document.getElementsByClassName("tab-links");
      var tabcontents = document.getElementsByClassName("tab-contents");
      function opentab(tabname)
      {
        // remove the active-link and active-content class from the active tab
        for(tablink of tablinks)
        {
          tablink.classList.remove("active-link"); 
        }
        for(tabcontent of tabcontents)
        {
          tabcontent.classList.remove("active-tab"); 
        }
        // event is an object that represents the event that triggered the function (onClick)
        // currentTarget is a property of the event object that refers to the element that the event listener is attached to. (one of the tab-links)
        // classList is a property that returns the class name(s) of an element as a DOMTokenList object.
          // The add() method of the classList property adds a class to the list of classes of an element.
        event.currentTarget.classList.add("active-link"); 
        document.getElementById(tabname).classList.add("active-tab");
      }
      ///////////////////////  Navbar ///////////////////////
      var sidemenu = document.getElementById("sidemenu");
      function openmenu()
      {
        // grab nav bar and show it
        sidemenu.style.right = "0px";
      }
      function closemenu()
      {
        // grab navbar and hide it
        sidemenu.style.right = "-200px";
      }
      //close the mobile menu with any click outside the sidemenu or menu button
      document.onclick = function(e)
      {
        console.log(e.target.id);
        if( e.target.id === "sidemenu"
            ||  e.target.id === "openmenu")
        {
          // when we click on the sidemenu or openmenu we leave the side menu open
        }else{
          // as soon we click on any other element, we close the sidemenu
          closemenu();
        }
      }
      ///////////////////// contact me //////////////////////
      ////////////////////// copy ////////////////////
      function copyEmail(){
        // Copy the text inside the text field
        navigator.clipboard.writeText("wevdev.pingel@gmail.com");
        let copiedEmail = document.getElementById("copiedEmail");
        copiedEmail.innerHTML = "copied email to clip-board";
        copiedEmail.style.color = "#61b752";
        setTimeout(function(){
          copiedEmail.innerHTML = "";
              }, 5000);

      }
      ////////////////// form //////////
      const scriptURL = "https://script.google.com/macros/s/AKfycbwYsin1-RmgSk7Z2aRXfbhr_BnFVsMgbI6IcAdiFhNnhM5tLu_O5D3lBP21Xq2lBOkH/exec";
      const form = document.forms["submit-to-google-sheet"];
      const msg = document.getElementById("msg");

      form.addEventListener('submit', e => {
        e.preventDefault();
        msg.innerHTML = "please wait, sending message";
        msg.style.color = "#61b752";
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => {
              console.log('Success!', response);
              msg.innerHTML = "Message sent successfully";
              msg.style.color = "#61b752";
              form.reset();
              setTimeout(function(){
                msg.innerHTML = "";
              }, 5000);
          })  
          .catch(error => {
            console.error('Error!', error.message);
            msg.innerHTML = "Something went wrong!";
            msg.style.color = "red";
              setTimeout(function(){
                msg.innerHTML = "";
              }, 5000);
          })
      })