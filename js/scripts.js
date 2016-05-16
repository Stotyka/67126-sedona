      var link = document.querySelector(".search-title-brown");
      var popup = document.querySelector(".search-close");
      var datein = popup.querySelector("[name=date-in]");
      var map = document.querySelector(".map");

      link.addEventListener("click", function(event) {
          popup.classList.toggle("search-show");
          datein.focus();
      });

      map.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("search-show");
      });