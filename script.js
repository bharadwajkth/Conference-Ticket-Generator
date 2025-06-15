const form = document.querySelector('form');
const fullNameInput = document.querySelector('#fullName');
const emailInput = document.querySelector('#email');
const githubInput = document.querySelector('#github');
const avatarInput = document.querySelector('#avatar');

const ticketContainer = document.querySelector('.ticket-container');
const ticketNameSpan = document.querySelector('.ticket-name');
const ticketEmailSpan = document.querySelector('.ticket-email');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const fullName = fullNameInput.value.trim();
  const email = emailInput.value.trim();
  const github = githubInput.value.trim();
  const avatarFile = avatarInput.files[0];

  // Basic validation
  if (!fullName || !email || !github || !avatarFile) {
    alert('Please complete all fields and upload a valid image.');
    return;
  }

  if (!/^.+@.+\..+$/.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (!['image/jpeg', 'image/png'].includes(avatarFile.type)) {
    alert('Avatar must be a JPG or PNG.');
    return;
  }

  if (avatarFile.size > 500 * 1024) {
    alert('Image must be smaller than 500KB.');
    return;
  }

  // Populate ticket
  const reader = new FileReader();
  reader.onload = function (e) {
    const avatarImg = ticketContainer.querySelector('img');
    if (avatarImg) {
      avatarImg.src = e.target.result;
    }
    ticketNameSpan.textContent = fullName;
    ticketEmailSpan.textContent = email;
    form.style.display = 'none';
    ticketContainer.style.display = 'block';
  };
  reader.readAsDataURL(avatarFile);
});
