const klawiatura = document.getElementById('blok_obrazkow');

const checkClick1 = (e) => {
    var obecny_button = e.target.closest('img');
    var nazwa_idb = obecny_button.getAttribute('id');
    var nazwa_nap = 'napis' + nazwa_idb;

    document.getElementById(nazwa_idb).style.transition = "all 1.3s";
    document.getElementById(nazwa_nap).classList.remove("normal");
    document.getElementById(nazwa_nap).classList.add("mystyle");
};
const checkClick2 = (e) => {
    var obecny_button = e.target.closest('img');
    var nazwa_idb = obecny_button.getAttribute('id');
    var nazwa_nap = 'napis' + nazwa_idb;

    document.getElementById(nazwa_idb).style.transition = "all 0s";
    document.getElementById(nazwa_nap).classList.remove("mystyle");
    document.getElementById(nazwa_nap).classList.add("normal");
};

klawiatura.addEventListener('mouseover', checkClick1);
klawiatura.addEventListener('mouseout', checkClick2);