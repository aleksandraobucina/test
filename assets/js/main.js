
const links = [
    { text: 'Početna', href: 'index.html' },
    { text: 'O nama', href: '#o-nama' },
    { text: 'Katalog', href: '#katalog' },
    { text: 'O autoru', href: 'autor.html' },
  ];

  // Funkcija za generisanje linkova u navigaciji
  function generateLinks() {
    const navLinks = document.querySelector('.navbar-nav');

    links.forEach(link => {
      const li = document.createElement('li');
      li.classList.add('nav-item');
      const a = document.createElement('a');
      a.classList.add('nav-link');
      a.textContent = link.text;
      a.href = link.href;
      li.appendChild(a);
      navLinks.appendChild(li);
    });
  }

  generateLinks();
  
  $(document).ready(function() {
    $("#poruciForm").validate({
        rules: {
            ime: {
                required: true,
                minlength: 2
            },
            prezime: {
                required: true,
                minlength: 2
            },
            telefon: {
                required: true,
                minlength: 5,
                maxlength: 5
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            ime: {
                required: "Molimo unesite ime.",
                minlength: "Ime mora imati najmanje 2 slova."
            },
            prezime: {
                required: "Molimo unesite prezime.",
                minlength: "Prezime mora imati najmanje 2 slova."
            },
            telefon: {
                required: "Molimo unesite šifru proizvoda.",
                minlength: "Šifra proizvoda mora imati tačno 5 karaktera.",
                maxlength: "Šifra proizvoda mora imati tačno 5 karaktera."
            },
            email: {
                required: "Molimo unesite email adresu.",
                email: "Unesite ispravnu email adresu."
            }
        },
        submitHandler: function(form) {
            alert("Uspešno ste popunili formu!");
            form.submit();
        }
    });
});




const telefoni = [
  { slika: 'assets/img/flip5.png', cena: '$123', sifra: 'XYZ123' },
  { slika: 'assets/img/samsungs23ultra.png', cena: '$234', sifra: 'ABC456' },
  { slika: 'assets/img/samsungs23plus.png', cena: '$234', sifra: 'ABC456' },
  { slika: 'assets/img/samsungs23fe.png', cena: '$234', sifra: 'ABC456' },
];

// Funkcija za generisanje HTML-a za telefone
function generisiSadrzajTelefona() {
  const container = document.getElementById('telefoni-container');

  telefoni.forEach(telefon => {
      const div = document.createElement('div');
      div.classList.add('col-lg-3', 'col-md-6', 'col-sm-6', 'mb-4');

      div.innerHTML = `
          <img src="${telefon.slika}" alt="Telefon" class="img-fluid">
          <p>Cena: ${telefon.cena}</p>
          <p>Šifra: ${telefon.sifra}</p>
      `;

      container.appendChild(div);
  });
}

// Poziv funkcije za generisanje sadržaja telefona
generisiSadrzajTelefona();

//------------------------------------------------------------
const poruciButton = document.getElementById('poruciButton');
const modal = document.getElementById('modal');
const close = document.getElementById('close');

poruciButton.addEventListener('click', function() {
  modal.style.display = 'block';
});

close.addEventListener('click', function() {
  modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});

const poruciForm = document.getElementById('poruciForm');
poruciForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;

  if (validateEmail(email)) {
    alert('Porudžba uspešna!');
    modal.style.display = 'none';
  } else {
    alert('Unesite validan email!');
  }
});

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(String(email).toLowerCase());
}

const noviTelefoniData = [
  { ime: 'Telefon 16', slika: 'assets/img/ultra.png', cena: '$799', sifra: 'ULT01' },
  { ime: 'Telefon 17', slika: 'assets/img/s22plus.png', cena: '$700', sifra: 'S2202' },
  { ime: 'Telefon 18', slika: 'assets/img/s22.png', cena: '$649', sifra: 'S2203' },
  { ime: 'Telefon 19', slika: 'assets/img/A54.png', cena: '$500', sifra: 'A5430' },
  { ime: 'Telefon 21', slika: 'assets/img/A53.png', cena: '$449', sifra: 'A5305' },
  { ime: 'Telefon 22', slika: 'assets/img/A34.png', cena: '$400', sifra: 'A3406' },
  { ime: 'Telefon 23', slika: 'assets/img/A33.png', cena: '$339', sifra: 'A3307' },
  { ime: 'Telefon 24', slika: 'assets/img/A32.png', cena: '$300', sifra: 'A3208' },
  { ime: 'Telefon 25', slika: 'assets/img/A22.png', cena: '$259', sifra: 'A2209' },
  { ime: 'Telefon 26', slika: 'assets/img/A20s.png', cena: '$210', sifra: 'A2010' },
  { ime: 'Telefon 27', slika: 'assets/img/A14.png', cena: '$189', sifra: 'A1411' },
  { ime: 'Telefon 28', slika: 'assets/img/A12.png', cena: '$149', sifra: 'A1212' },
];

function prikaziSlike(containerId, telefoni) {
  const container = document.getElementById(containerId);
  telefoni.forEach(telefon => {
    const divTelefon = document.createElement('div');
    divTelefon.classList.add('col-md-3', 'col-6', 'mb-4');

    const slikaTelefona = document.createElement('img');
    slikaTelefona.src = telefon.slika;
    slikaTelefona.alt = telefon.ime;
    slikaTelefona.classList.add('img-fluid');

    const cenaTelefona = document.createElement('p');
    cenaTelefona.textContent = `Cena: ${telefon.cena}`;

    const sifraTelefona = document.createElement('p');
    sifraTelefona.textContent = `Šifra: ${telefon.sifra}`;

    divTelefon.appendChild(slikaTelefona);
    divTelefon.appendChild(cenaTelefona);
    divTelefon.appendChild(sifraTelefona);
    container.appendChild(divTelefon);
  });
}

prikaziSlike('novi-telefoni-container', noviTelefoniData);


// Funkcija za generisanje forme za kontakt sa validacijom
function generateContactForm() {
  const contactForm = document.getElementById('contact-form');

  const form = document.createElement('form');
  form.setAttribute('id', 'contactForm');

  const nameLabel = document.createElement('label');
  nameLabel.textContent = 'Ime:';
  const nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('name', 'name');
  nameInput.setAttribute('required', 'true');
  nameInput.setAttribute('pattern', '[a-zA-ZčćžšđČĆŽŠĐ\s]{2,30}');
  nameInput.setAttribute('title', 'Unesite vaše ime (2-30 karaktera, samo slova)');

  const lastNameLabel = document.createElement('label');
  lastNameLabel.textContent = 'Prezime:';
  const lastNameInput = document.createElement('input');
  lastNameInput.setAttribute('type', 'text');
  lastNameInput.setAttribute('name', 'lastName');
  lastNameInput.setAttribute('required', 'true');
  lastNameInput.setAttribute('pattern', '[a-zA-ZčćžšđČĆŽŠĐ\s]{2,30}');
  lastNameInput.setAttribute('title', 'Unesite vaše prezime (2-30 karaktera, samo slova)');

  const emailLabel = document.createElement('label');
  emailLabel.textContent = 'Email:';
  const emailInput = document.createElement('input');
  emailInput.setAttribute('type', 'email');
  emailInput.setAttribute('name', 'email');
  emailInput.setAttribute('required', 'true');

  const messageLabel = document.createElement('label');
  messageLabel.textContent = 'Poruka:';
  const messageTextarea = document.createElement('textarea');
  messageTextarea.setAttribute('name', 'message');
  messageTextarea.setAttribute('required', 'true');
  messageTextarea.setAttribute('rows', '5');

  const submitButton = document.createElement('input');
  submitButton.setAttribute('type', 'submit');
  submitButton.setAttribute('value', 'Pošalji');

  form.appendChild(nameLabel);
  form.appendChild(nameInput);
  form.appendChild(lastNameLabel);
  form.appendChild(lastNameInput);
  form.appendChild(emailLabel);
  form.appendChild(emailInput);
  form.appendChild(messageLabel);
  form.appendChild(messageTextarea);
  form.appendChild(submitButton);

  contactForm.appendChild(form);

  // Validacija forme pre slanja
  form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    if (form.checkValidity()) {
      const formData = new FormData(form);
      const formDataObject = {};
      formData.forEach((value, key) => {
        formDataObject[key] = value;
      });
      console.log(formDataObject);
      form.reset();
    } else {
      alert('Molimo vas da ispravno popunite sva polja forme.');
    }
  });
}

generateContactForm();

