
function priKliknutiNaNadpis() {
    nadpis.style.color = 'red';
    nadpis.style.backgroundColor = 'lightpink';
    nadpis.textContent = 'Psí kamarád';
  
}

const nadpis = document.querySelector('h1')
nadpis.addEventListener('click',priKliknutiNaNadpis)


const odstavec = document.querySelector('p')
console.log(odstavec)
odstavec.innerHTML = 'Ahoj, ja jsem <strong>Jana</strong>.'

function  priNajetiNaObrazek() {
   obrazek.src = 'images/pes.jpg'
   obrazek.alt = 'Super cukřík' 

}

function  priOdjetiZObrazku() {
   obrazek.src = 'images/kocka.jpg'
   obrazek.alt = 'Super micinka' 

}

const obrazek = document.querySelector('img')
obrazek.addEventListener('mouseover', priNajetiNaObrazek)
obrazek.addEventListener('mouseout', priOdjetiZObrazku)



//kolecko.className = 'ctverecek'

// list - třídu přidá, className ji přepíše
//kolecko.classList.toggle('aktivni')
//remove - třídu odstraní
//toggle - pokud třída na prvku není, tak ji tam přidá. Pokud tam již je, tak ji to odebere.



// tady na tom prvku chci čekat, jestli nedojde k události, pokud dojde, tak spusť můj kód.
//dva parametry - název události a druhý je funkce, která se má spustit, pokud dojde k události.Uvádí se pouze název funkce bez kulatých
//Je zde funkce, která se jmenuje Přikliknutí a spusť ji později až někdo klikne na tlačítko.
//závorek. Pokud by tam byly kulaté závorky, tak funkce by se spustila v tom místě a to co se z ní vrátí by se předalo jako parametr do toho
// event listener a protože z ní nic nevracíme, tak by se vrátilo undefined
// funkce - event handler - obsluha události
// javascript - událostmi řízený program

function prikliknuti() {
    const kolecko = document.querySelector('.kolecko') 
    kolecko.classList.toggle('aktivni')
 };

const tlacitko = document.querySelector('.tlacitko')
tlacitko.addEventListener('click', prikliknuti)


const obrazky = [
    'kocka',
    'pes'
]

let aktivniObr = 0

const zpet = document.querySelector('#zpet')
const vpred = document.querySelector('#vpred')
const foto = document.querySelector('#foto')

zpet.addEventListener('click', predchoziFoto)
vpred.addEventListener('click', dalsiFoto)

function predchoziFoto() {
    console.log('predchozi')

    aktivniObr++;
    if (aktivniObr < 0) {
        aktivniObr =  obrazky.length -1
    }
}  foto.src = `images/'${obrazky[aktivniObr]} '.jpg`

function dalsiFoto() {
    console.log('aktivniObr')

    aktivniObr++;
    if (aktivniObr === obrazky.length) {
        aktivniObr = 0
    }
    foto.src = `images/'${obrazky[aktivniObr]} '.jpg`
}
