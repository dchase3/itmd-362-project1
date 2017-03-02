$.noConflict();

jQuery(function($) {
  
  $(document).ready(
  function() {
    
    $('html').removeClass('nojs');
    $('html').addClass('hasjs');
    
    //empty fields
    $('#name').val('');
    $('email').val('');
    $('input#reg').removeClass('hide')
    
    $('#regester').on('submit', function(e) {
      //captures fields and turns to variables
      var name = $('#name').val();
      var email = $('#email').val();
      //saves what the pattern should be
      var namePattern = $('#name').attr('pattern');
      var emailPattern = $('#email').attr('pattern');
      
      //check to make sure the field isn't blank
      if (name === '') {
        alert('This field cannot be left blank!');
        return false;
      }
      if (email === '') {
        alert('This field cannot be left blank!');
        return false;
      }
      
      //check to make sure entries follow the intended patterns
      if (!(name.match(namePattern))) {
        alert('Name must be entered in the following format -> "FirstName LastName"');
        return false;
      }
      if (!(email.match(emailPattern))) {
        alert('Email must be entered in the following format -> "email@gmail.com"');
        return false;
      }
      
      //iff all fields are entered in properly
      $('#regester').append('Thank you for signing up! You will be sent an email soon!');
      $('input#reg').addClass('hide');
      
      e.preventDefault();
      
    });
        
  })
  
});