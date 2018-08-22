Issues : 
- image assets not found 
    - https://www.kyazoonga.com/images/iticket-logo.png
    - https://www.kyazoonga.com/images/rsvp-blank-1.jpg
- search box action is undefined    
- loader component is not defined that should be show on text search
```js
    $(document).ready(function() {
      $('#txtSearchBox').blur(function() {
        $("#loading").hide()
      }).focus(function() {
        $("#loading").show()
      });
      $("#dvYoutube").html("<iframe style='width: 100%; height: 400px' src='https://www.youtube.com/embed/IyucJZev9wM' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>");
    });
```