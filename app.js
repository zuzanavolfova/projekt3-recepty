let recepty = document.querySelector('.recepty');
let indexReceptu = 0;

receptyConst.forEach(function(current, index, array) { nactiSeznamReceptu(array); });
// nactiRecept();

filtrKategorie();
razeniHodnoceni();

function nactiSeznamReceptu(array){
    //vytvoreni div a class=recept
    
    let recept = document.createElement('div');
    recept.className='recept';
    recept.setAttribute('data-index', indexReceptu);

    recepty.appendChild(recept);

    //pridani onclick
    recept.addEventListener('click', zobrazRecept);
    
    //vytvoreni div class=recept-obrazek
    let receptObrazek = vytvorDiv('recept-obrazek');
    recept.appendChild(receptObrazek);

    //vytvoreni img v div class=recept-obrazek
    vytvorImgObrazek(array, receptObrazek);

    //vytvoreni div class=recept-info
    let receptInfo = vytvorDiv('recept-info');
    recept.appendChild(receptInfo);

    //vytvoreni h3 v recept info
    let nadpisReceptInfo = vytvorTitleReceptInfo(array);
    receptInfo.appendChild(nadpisReceptInfo);
    
    indexReceptu++ 
}

function vytvorTitleReceptInfo(array) {
    let nadpisReceptInfo = document.createElement('h3');
    nadpisReceptInfo.innerHTML = array[indexReceptu].nadpis;
    nadpisReceptInfo.setAttribute('data-index', indexReceptu);
    return nadpisReceptInfo;
}

function vytvorImgObrazek(array, receptObrazek) {
    let receptObrazekImg = document.createElement('img');
    receptObrazekImg.src = array[indexReceptu].img;
    receptObrazekImg.alt = "Obrazek";
    receptObrazekImg.setAttribute('data-index', indexReceptu);
    receptObrazek.appendChild(receptObrazekImg);
}

function vytvorDiv(className) {
    let receptObrazek = document.createElement('div');
    receptObrazek.className = className;
    receptObrazek.setAttribute('data-index', indexReceptu);
    return receptObrazek;
}

function zobrazRecept(kliknutyRecept, indexKliknutehoReceptu){
    indexKliknutehoReceptu = kliknutyRecept.target.getAttribute('data-index');

    document.querySelector('#recept-foto').src=receptyConst[indexKliknutehoReceptu].img; 
    document.querySelector('#recept-kategorie').innerHTML=receptyConst[indexKliknutehoReceptu].kategorie;
    document.querySelector('#recept-hodnoceni').innerHTML=receptyConst[indexKliknutehoReceptu].hodnoceni;    
    document.querySelector('#recept-nazev').innerHTML=receptyConst[indexKliknutehoReceptu].nadpis;    
    document.querySelector('#recept-popis').innerHTML=receptyConst[indexKliknutehoReceptu].popis;    

    ulozVybranyRecept(indexKliknutehoReceptu);
}

//hledani v receptech
function zpracujHledani(){
    let hledaneSpojeni = document.querySelector("input[id=hledat]").value;

    let vysledekHledani=receptyConst.filter(function(jednotlivyRecept){
        let najit=jednotlivyRecept.nadpis.toLowerCase().includes(hledaneSpojeni);
        return najit;
    })
        
    vymazSeznamReceptu();

    indexReceptu=0;
    vysledekHledani.forEach(function(current, index, array) {nactiSeznamReceptu(array); });
}
//filtrovani podle kategorie
function filtrKategorie(){
    let kategorieFiltr = document.querySelector("select[id=kategorie]").value;

    let vysledekKategorie=receptyConst.filter(function(jednotlivyRecept){
        let najit=jednotlivyRecept.stitek.includes(kategorieFiltr);
        return najit;
    })
        
    vymazSeznamReceptu();

    indexReceptu=0;
    vysledekKategorie.forEach(function(current, index, array) {nactiSeznamReceptu(array); });
}

//razeni podle hodnoceni
// function razeniHodnoceni(){
//     let kategorieHodnoceni = document.querySelector("select[id=razeni]").value;
    
//     if (kategorieHodnoceni===1){
//     receptyConst.sort(porovnej);
//     function porovnej(cis1, cis2) {
//         if(cis1.hodnoceni > cis2.hodnoceni) {
//             return 1;
//         } else {
//             return -1;
//         }
//     };

//     vymazSeznamReceptu();
    
//     indexReceptu=0;
//     receptyConst.forEach(function(current, index, array) {nactiSeznamReceptu(array); });

//     } else if (kategorieHodnoceni===2){
//         receptyConst.sort(porovnej);
//         function porovnej(cis1, cis2) {
//             if(cis1.hodnoceni < cis2.hodnoceni) {
//                 return 1;
//             } else {
//                 return -1;
//             }
//         }
//     }
// }

function vymazSeznamReceptu(){
    let recept = document.querySelectorAll('.recept');

    for (let i = 0; i<recept.length; i++){
        recepty.removeChild(recept[i]);
    }
}

// function ulozVybranyRecept(indexKliknutehoReceptu) {
//     localStorage.clear();
//     localStorage.vybranyRecept =JSON.stringify(receptyConst[indexKliknutehoReceptu]);
//     console.log(localStorage);
// }

// function nactiRecept(vybranyRecept){
//     let vybranyRecept=JSON.parse(vybranyRecept);

//     console.log(vybranyRecept);
// }

/*
Co je za úkol v tomto projektu:

DONE 1) Do prvku s id="recepty" vygeneruj z dat seznam všech receptů z naší "databáze".
HTML vzor, jak vygenerovaný recept vypadá, je zakomentovaný v index.html.

2) Doplň hledání - v hlavičce odkomentuj pole pro hledání. Pri kliknutí na tlačítko Hledat
by se měl seznam receptů vyfiltrovat podle hledaného slova.

3) Doplň filtrovanání receptů podle kategorie.

4) Doplň řazení receptů podle hodnocení.

DONE 5) Na recepty v seznamu by mělo jít kliknout a na pravé polovině, se objeví detail receptu.
Doplň patričné údaje receptu do HTML prvků s ID recept-foto, recept-kategorie,
recept-hodnoceni, recept-nazev, recept-popis.

6) Poslední vybraný recept ulož do Local Storage, aby se při novém otevření aplikace načetl.
*/