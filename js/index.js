// const form = document.getElementById('Hayah-section');

// form.addEventListener('submit', (event) => {
//   event.preventDefault(); // prevent form submission

//   // validate form input
//   const title = document.getElementById('name').value.trim();
//   const fullname = document.getElementById('email').value.trim();
//   const phonenumber = document.getElementById('message').value.trim();
//   const subject  = document.getElementById('name').value.trim();
//   const infoname = document.getElementById('email').value.trim();
//   const message = document.getElementById('message').value.trim();
//   const email = document.getElementById('email').value.trim();

//   if (!title || !fullname || !phonenumber || ! subject || !infoname || !message || !email) {
//     alert('Please fill in all fields');
//     return;
//   }

//   // send form data to PHP script
//   const xhr = new XMLHttpRequest();
//   const url = 'index.php';
//   const data = new FormData(form);

//   xhr.open('POST', url, true);
//   xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       alert(xhr.responseText);
//       form.reset(); // reset form after successful submission
//     }
//   };
//   xhr.send(data);
// });


const form = document.getElementById('info-section'); // 'contact-section' Hayah-section
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', function(e) {
  e.preventDefault(); // prevent default form submission action

  // get values of form inputs
  const title = document.getElementById('name').value.trim();
  const fullname = document.getElementById('email').value.trim();
  const phonenumber = document.getElementById('message').value.trim();
  const subject  = document.getElementById('name').value.trim();
  const infoname = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const email = document.getElementById('email').value.trim();

  // store values in an object
  const formData = { title, fullname, phonenumber, subject, infoname, message, email };

  // send data to server-side script using AJAX or fetch
  // e.g. using fetch
  fetch('index.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
  .then(response => {
    if (response.ok) {
      console.log('Form data submitted successfully');
    } else {
      console.log('Error submitting form data');
    }
  })
  .catch(error => {
    console.log('Error submitting form data:', error);
  });
});
