const scriptURL = 'https://script.google.com/macros/s/AKfycbwdq3B8rUp0dAM_39kTZGBddKPLh5gdytQLaM9wUZ3ULAl-lgVIIyjqFw1imvgLXSFbvw/exec';
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg');

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Thank You for Subscribing";
        setTimeout(() => {
            msg.innerHTML = "";
        }, 4000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })