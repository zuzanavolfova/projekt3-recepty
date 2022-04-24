let recepty = document.querySelector('.recepty');
let i = 0;
receptyConst.forEach(nactiSeznamReceptu);

function nactiSeznamReceptu(){
    //vytvoreni div a class=recept
    let recept = document.createElement('div');
    recept.className='recept';
    recept.setAttribute('data-index', i);

    recepty.appendChild(recept);
    

    //pridani onclick
    recept.addEventListener('click', zobrazRecept);
    // recept.setAttribute('data-index', i)
    
        //vytvoreni div class=recept-obrazek
        let receptObrazek =document.createElement('div');
        receptObrazek.className='recept-obrazek';
        receptObrazek.setAttribute('data-index', i)
        recept.appendChild(receptObrazek);

        //vytvoreni img v div class=recept-obrazek
        let receptObrazekImg = document.createElement('img');
        receptObrazekImg.src=receptyConst[i].img;
        receptObrazekImg.alt="Obrazek";
        receptObrazekImg.setAttribute('data-index', i)
        receptObrazek.appendChild(receptObrazekImg);

        //vytvoreni div class=recept-info
        let receptInfo = document.createElement('div');
        receptInfo.className="recept-info";
        receptInfo.setAttribute('data-index', i)

        recept.appendChild(receptInfo);

        //vytvoreni h3 v recept info
        let nadpisReceptInfo = document.createElement('h3');
        nadpisReceptInfo.innerHTML= receptyConst[i].nadpis;
        nadpisReceptInfo.setAttribute('data-index', i)

        receptInfo.appendChild(nadpisReceptInfo);
    
    i++  
}

function zobrazRecept(kliknutyRecept){
    console.log('Varis varim varime');
    let indexKliknutehoReceptu = kliknutyRecept.target.getAttribute('data-index');
    console.log(indexKliknutehoReceptu);


    document.querySelector('#recept-foto').src=receptyConst[indexKliknutehoReceptu].img; 
    document.querySelector('#recept-kategorie').innerHTML=receptyConst[indexKliknutehoReceptu].kategorie;
    document.querySelector('#recept-hodnoceni').innerHTML=receptyConst[indexKliknutehoReceptu].hodnoceni;    
    document.querySelector('#recept-nazev').innerHTML=receptyConst[indexKliknutehoReceptu].nadpis;    
    document.querySelector('#recept-popis').innerHTML=receptyConst[indexKliknutehoReceptu].popis;    
}

/*
Co je za úkol v tomto projektu:

1) Do prvku s id="recepty" vygeneruj z dat seznam všech receptů z naší "databáze".
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