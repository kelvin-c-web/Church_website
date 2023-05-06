const form = document.getElementById('index.php');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent form submission

  // validate form input
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields');
    return;
  }

  // send form data to PHP script
  const xhr = new XMLHttpRequest();
  const url = 'send-email.php';
  const data = new FormData(form);

  xhr.open('POST', url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      alert(xhr.responseText);
      form.reset(); // reset form after successful submission
    }
  };
  xhr.send(data);
});
