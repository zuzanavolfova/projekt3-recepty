let recepty = document.querySelector('.recepty');
let indexReceptu = 0;
let filterArray = [...receptyConst];

receptyConst.forEach(function(current) { nactiSeznamReceptu(current); });
nactiRecept(localStorage.indexA);
aplikujFiltr();

function nactiSeznamReceptu(objekt){
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
    vytvorImgObrazek(objekt, receptObrazek);

    //vytvoreni div class=recept-info
    let receptInfo = vytvorDiv('recept-info');
    recept.appendChild(receptInfo);

    //vytvoreni h3 v recept info
    let nadpisReceptInfo = vytvorTitleReceptInfo(objekt);
    receptInfo.appendChild(nadpisReceptInfo);
    
    indexReceptu++ 
}

function vytvorTitleReceptInfo(objekt) {
    let nadpisReceptInfo = document.createElement('h3');
    nadpisReceptInfo.innerHTML = objekt.nadpis;
    nadpisReceptInfo.setAttribute('data-index', indexReceptu);
    return nadpisReceptInfo;
}

function vytvorImgObrazek(objekt, receptObrazek) {
    let receptObrazekImg = document.createElement('img');
    receptObrazekImg.src = objekt.img;
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

    nactiRecept(indexKliknutehoReceptu);    

    ulozVybranyRecept(indexKliknutehoReceptu);
}

function nactiRecept(indexKliknutehoReceptu) {
    document.querySelector('#recept-foto').src = filterArray[indexKliknutehoReceptu].img;
    document.querySelector('#recept-kategorie').innerHTML = filterArray[indexKliknutehoReceptu].kategorie;
    document.querySelector('#recept-hodnoceni').innerHTML = filterArray[indexKliknutehoReceptu].hodnoceni;
    document.querySelector('#recept-nazev').innerHTML = filterArray[indexKliknutehoReceptu].nadpis;
    document.querySelector('#recept-popis').innerHTML = filterArray[indexKliknutehoReceptu].popis;
}

//hledani v receptech
function zpracujHledani(){
    let hledaneSpojeni = document.querySelector("input[id=hledat]").value;

    filterArray=filterArray.filter(function(jednotlivyRecept){
        let najit=jednotlivyRecept.nadpis.toLowerCase().includes(hledaneSpojeni);
        return najit;
    })
        
    vymazSeznamReceptu();

    indexReceptu=0;
    filterArray.forEach(function(current) {nactiSeznamReceptu(current);});
}

//filtrovani podle kategorie
function aplikujFiltr(){
    filterArray = [...receptyConst];
    filtrKategorie();
    zpracujHledani();
    razeniHodnoceni();
}

function filtrKategorie(){
    let kategorieFiltr = document.querySelector("select[id=kategorie]").value;

    filterArray=filterArray.filter(function(jednotlivyRecept){
        let najit=jednotlivyRecept.stitek.includes(kategorieFiltr);
        return najit;
    })
        
    vymazSeznamReceptu();

    indexReceptu=0;
    filterArray.forEach(function(current) { nactiSeznamReceptu(current); });
}

// razeni podle hodnoceni
function razeniHodnoceni(){
    let kategorieHodnoceni = document.querySelector("select[id=razeni]").value;

    if (kategorieHodnoceni==1){
        filterArray.sort(porovnej);
    function porovnej(obj1, obj2) {
        if (obj1.hodnoceni < obj2.hodnoceni) {
            return 1;
        } else {
            return -1;
        }
    };

    } else if (kategorieHodnoceni==2){
        filterArray.sort(porovnej);
        function porovnej(obj1, obj2) {
            if(obj1.hodnoceni > obj2.hodnoceni) {
                return 1;
            } else {
                return -1;
            }
        };
    }
    vymazSeznamReceptu();
    indexReceptu=0;
    filterArray.forEach(function(current) { nactiSeznamReceptu(current); });
}

function vymazSeznamReceptu(){
    let recept = document.querySelectorAll('.recept');

    for (let i = 0; i<recept.length; i++){
        recepty.removeChild(recept[i]);
    }
}

function ulozVybranyRecept(indexKliknutehoReceptu) {
    localStorage.indexA = indexKliknutehoReceptu;
}



/*
Co je za úkol v tomto projektu:

DONE 1) Do prvku s id="recepty" vygeneruj z dat seznam všech receptů z naší "databáze".
HTML vzor, jak vygenerovaný recept vypadá, je zakomentovaný v index.html.

DONE 2) Doplň hledání - v hlavičce odkomentuj pole pro hledání. Pri kliknutí na tlačítko Hledat
by se měl seznam receptů vyfiltrovat podle hledaného slova.

DONE 3) Doplň filtrovanání receptů podle kategorie.

DONE 4) Doplň řazení receptů podle hodnocení.

DONE 5) Na recepty v seznamu by mělo jít kliknout a na pravé polovině, se objeví detail receptu.
Doplň patričné údaje receptu do HTML prvků s ID recept-foto, recept-kategorie,
recept-hodnoceni, recept-nazev, recept-popis.

DONE 6) Poslední vybraný recept ulož do Local Storage, aby se při novém otevření aplikace načetl.
*/