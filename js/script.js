//Mobilne menu

function toggleMenu(visible) {
    document.querySelector('.mobile-menu-list').classList.toggle('show', visible)
  }
  function toggleHiddenHamburger(notvisible) {
    document.querySelector('.hamburger').classList.toggle('hide', notvisible)
  }

  function toggleShowClose(visible) {
    document.querySelector('.hidden').classList.toggle('show', visible)
  }
  
  document.querySelector('.hamburger').addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu(true);
    toggleHiddenHamburger(true);
    toggleShowClose(true);
   
    });




    document.querySelector('.hidden').addEventListener('click', function(e) {
      e.preventDefault();
      toggleMenu(false);
      toggleHiddenHamburger(false);
      toggleShowClose(false);
     
      });

     

//walidacja formularza

document.querySelector('form').addEventListener('submit', function(event) {
  var isFormValidate = true;
  var nameInput = event.target.querySelector('input[name="user_name"]')
  var emailAddressInput = event.target.querySelector('input[name="email_address"]')
  if(emailAddressInput.value.indexOf('@') < 0) {
    isFormValidate = false;
    emailAddressInput.parentElement.querySelector('.error').innerHTML = 'Invalid e-mail address';
    }
  if(nameInput.value == "") {
    isFormValidate = false;
    nameInput.parentElement.querySelector('.error2').innerHTML = 'Enter you name';
    
  }
  return !isFormValidate ? event.preventDefault() : true;
})



      //Modal zamykanie

      function closeModal() {
        document.getElementById('overlay').classList.remove('show')
      } 

      document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
          e.preventDefault()
          closeModal()
        })
      })

      document.querySelector('#overlay').addEventListener('click', function(e) {
        if(e.target === this) {
          closeModal()
        }
      })

      document.addEventListener('keyup', function(e) {
        if(e.keyCode === 27) {
          closeModal()
        }
      })

//Modal otwieranie

function openModal(modal) {
    document.querySelectorAll('#overlay > *').forEach(function(modal) {
      modal.classList.remove('show')
    })
    document.querySelector('#overlay').classList.add('show')
    document.querySelector(modal).classList.add('show')
  };

document.addEventListener('click', function (event) {

      if (event.target.matches('.open-modal-quit')) {
        openModal('#myModal');   
       
      }
          
    }, false);

 //wykres

 var ctx = document.getElementById('myChart').getContext('2d');
 var chart = new Chart(ctx, {
   // 1
   type: 'bar',
   data: {
       // 2
       labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
       // 3
       datasets: [{
           // 4
           label: "Signups",
           // 5
           backgroundColor: '#8DBEC8',
           borderColor: '#8DBEC8',
           // 6
           data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
       },
       {
           label: "FTD",
           backgroundColor: '#F29E4E',
           borderColor: '#F29E4E',
           data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
       },
       {
           label: "Earned",
           backgroundColor: '#71B374',
           borderColor: '#71B374',
           data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
           // 7
           hidden: true,
       }]
   },
});