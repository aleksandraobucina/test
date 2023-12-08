/*const navigacijaData = [
    { text: 'Početna', link: 'index.html' },
    { text: 'Proizvodi', link: 'proizvodi.html' },
    { text: 'O nama', link: 'o_nama.html' },
    { text: 'Kontakt', link: 'kontakt.html' }
];

// Prikazivanje navigacije
const navigacija = document.getElementById('navigacija');

navigacijaData.forEach(item => {
const link = document.createElement('a');
link.href = item.link;
link.textContent = item.text;

const listItem = document.createElement('li');
listItem.appendChild(link);

navigacija.appendChild(listItem);
});
*/
// Simulacija podataka za linkove
const links = [
    { text: 'Početna', href: 'index.html' },
    { text: 'Proizvodi', href: 'products.html' },
    { text: 'O nama', href: 'about.html' },
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

// Simulacija podataka telefona
const telefoniData = [
    { ime: 'Telefon 1', slika: 'assets/img/samsungs23fe.png', specifikacije: 'Specifikacije za telefon 1' },
    { ime: 'Telefon 2', slika: 'assets/img/samsungs23ultra.png', specifikacije: 'Specifikacije za telefon 2' },
    { ime: 'Telefon 3', slika: 'assets/img/samsungs23plus.png', specifikacije: 'Specifikacije za telefon 3' },
    { ime: 'Telefon 4', slika: 'assets/img/flip5.png', specifikacije: 'Specifikacije za telefon 4' },
  ];
  
  const telefoniContainer = document.getElementById('telefoni-container');
  const korpaButton = document.getElementById('dodajUKorpu');
  let brojProizvodaUKorpi = 0;
  
  // Funkcija za dinamičko ispisivanje telefona
  function prikaziTelefone() {
    telefoniData.forEach(telefon => {
      const divTelefon = document.createElement('div');
      divTelefon.classList.add('telefon');
  
      const slikaTelefona = document.createElement('img');
      slikaTelefona.src = telefon.slika;
      slikaTelefona.alt = telefon.ime;
  
      const specifikacijeTelefona = document.createElement('p');
      specifikacijeTelefona.textContent = telefon.specifikacije;
      specifikacijeTelefona.classList.add('specifikacije');
  
      const prikaziVise = document.createElement('span');
      prikaziVise.textContent = 'Prikazi vise';
      prikaziVise.classList.add('prikazi-vise');
  
      const dodajUKorpuButton = document.createElement('button');
      dodajUKorpuButton.textContent = 'Dodaj u korpu';
  
      divTelefon.appendChild(slikaTelefona);
      divTelefon.appendChild(specifikacijeTelefona);
      divTelefon.appendChild(prikaziVise);
      divTelefon.appendChild(dodajUKorpuButton);
      telefoniContainer.appendChild(divTelefon);
  
      // Logika za prikazivanje više specifikacija
      prikaziVise.addEventListener('click', () => {
        specifikacijeTelefona.style.display = 'block';
        prikaziVise.style.display = 'none';
      });
  
      // Logika za dodavanje u korpu
      dodajUKorpuButton.addEventListener('click', () => {
        brojProizvodaUKorpi++;
        document.getElementById('brojProizvodaUKorpi').textContent = brojProizvodaUKorpi;
      });
    });
  }
  
  prikaziTelefone();
  //---------------------
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
  event.preventDefault(); // Prevent default form submission
  const email = document.getElementById('email').value;

  if (validateEmail(email)) {
    alert('Porudžba uspešna!'); // Može se promeniti u pokretanje druge funkcionalnosti
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
  { ime: 'Telefon 13', slika: 'putanja/do/slike13.jpg' },
  { ime: 'Telefon 14', slika: 'putanja/do/slike14.jpg' },
  // Dodaj ostale nove slike na isti način
  { ime: 'Telefon 24', slika: 'putanja/do/slike24.jpg' },
];

function prikaziSlike(containerId, telefoni) {
  const container = document.getElementById(containerId);
  telefoni.forEach(telefon => {
    const divTelefon = document.createElement('div');
    divTelefon.classList.add('col-md-3'); // Bootstrap grid kolona za 4 slike u redu na većim ekranima

    const slikaTelefona = document.createElement('img');
    slikaTelefona.src = telefon.slika;
    slikaTelefona.alt = telefon.ime;

    divTelefon.appendChild(slikaTelefona);
    container.appendChild(divTelefon);
  });
}


prikaziSlike('novi-telefoni-container', noviTelefoniData); // Prikazuje nove slike
