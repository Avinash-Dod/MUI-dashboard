
$(document).ready(function() {    
  var readURL = function(input) {
      if (input.files && input.files[0]) {
          var reader = new FileReader();

          reader.onload = function (e) {
              $('#profile-pic').attr('src', e.target.result);
          }
  
          reader.readAsDataURL(input.files[0]);
      }
  }          

  $("#file-upload").on('change', function(){
      readURL(this);
  });
  
  $("#upload-button").on('click', function() {
     $("#file-upload").click();
  });
});

$(document).ready(function() {    
  var readURL = function(input) {
      if (input.files && input.files[0]) {
          var reader = new FileReader();

          reader.onload = function (e) {
              $('#profile-pic1').attr('src', e.target.result);
          }
  
          reader.readAsDataURL(input.files[0]);
      }
  }          

  $("#file-upload1").on('change', function(){
      readURL(this);
  });
  
  $("#upload-button1").on('click', function() {
     $("#file-upload1").click();
  });
});


$(document).ready(function() {    
  var readURL = function(input) {
      if (input.files && input.files[0]) {
          var reader = new FileReader();

          reader.onload = function (e) {
              $('#profile-pic2').attr('src', e.target.result);
          }
  
          reader.readAsDataURL(input.files[0]);
      }
  }          

  $("#file-upload2").on('change', function(){
      readURL(this);
  });
  
  $("#upload-button2").on('click', function() {
     $("#file-upload2").click();
  });
});


$(document).ready(function() {    
  var readURL = function(input) {
      if (input.files && input.files[0]) {
          var reader = new FileReader();

          reader.onload = function (e) {
              $('#profile-pic3').attr('src', e.target.result);
          }
  
          reader.readAsDataURL(input.files[0]);
      }
  }          

  $("#file-upload3").on('change', function(){
      readURL(this);
  });
  
  $("#upload-button3").on('click', function() {
     $("#file-upload3").click();
  });
});

