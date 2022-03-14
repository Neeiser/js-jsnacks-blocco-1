/* 
- Generare un array di 10 gatti con nome, sesso ed età
- Stampare le informazioni dei gatti in una lista con i maschi in blu 
e le femmine in rosa con opacità massima al gatto più vecchio 
e minima (0.2) al più giovane. 
*/

const catsArr=[
    {
        nome: 'Rodrigo',
        sesso: 'Maschio',
        età: 6,
    },
    {
        nome: 'Filippo',
        sesso: 'Maschio',
        età: 2,
    },
    {
        nome: 'Sandro',
        sesso: 'Maschio',
        età: 5,
    },
    {
        nome: 'Menelao',
        sesso: 'Maschio',
        età: 15,
    },
    {
        nome: 'Simeone',
        sesso: 'Maschio',
        età: 10,
    },
    {
        nome: 'Penelope',
        sesso: 'Femmina',
        età: 13,
    },
    {
        nome: 'Cristy',
        sesso: 'Femmina',
        età: 5,
    },
    {
        nome: 'Silvina',
        sesso: 'Femmina',
        età: 1,
    },
    {
        nome: 'Sissy',
        sesso: 'Femmina',
        età: 7,
    },
    {
        nome: 'Pimpy',
        sesso: 'Femmina',
        età: 6,
    },
]

console.log(catsArr)

const maleCatsArr=[];
const femaleCatsArr=[];


catsArr.forEach((element, index) => { 
    if(catsArr[index].sesso == 'Maschio'){
        maleCatsArr.push(catsArr[index])
    } else {
        femaleCatsArr.push(catsArr[index])
    }
})

const maleCats = document.getElementById('male-cats').innerHTML= maleCatsArr;
const femaleCats = document.getElementById('female-cats').innerHTML= femaleCatsArr;


console.log(maleCatsArr);
console.log(femaleCatsArr);