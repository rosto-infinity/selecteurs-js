let nombre =2;
// console.log(nombre);
// document.querySelector() est une méthode Js qui permet de sélectionner les elements dans le DOM d'une page web.
// let titre = document.querySelector("h1");
// let btn01 =document.querySelector(".btn-1");
// let btn02 =document.querySelector(".btn-2");
// let text =document.querySelector("#text");
// let text2 =document.querySelector();
// console.log(titre);
// console.log(btn01);
// console.log(btn02);
// console.log(text);

// let som = 0;
// let a =3;
// let b =5;

const btn1 =document.querySelector("#btn-1");
const btn2 =document.querySelector("#btn-2");
const questionContent =document.querySelector(".click-btn");
const paragraph = document.querySelector('p');
// console.log(questionContent);
// btn1.addEventListener("événement", fonction callback )
btn1.addEventListener("click",
  ()=>{
    console.log('Bafoussam'); 
    paragraph.classList.add('paragraphVisible');
    btn1.style.color = 'yellow'
    btn1.style.borderRadius =  '2px'
    btn1.style.padding =  '2px'
    btn1.style.backgroundColor= 'red'
    // btn1.style.borderRadius = 35 + 'px'

  }
 )
btn2.addEventListener("click",
  ()=>{
    paragraph.classList.toggle('paragraphVisible');
    btn2.style.backgroundColor= 'green'
  }
 )




function addition(a,b){
  return  a + b;
}
let somme = addition(5,9) //appel de la fonction
// console.log(somme);

 const add  =  function (a1,b1) { 
  return a1 + b1
}
// console.log(add(1,2));

//   Fonction fléchée , fonction de rappel (callback), fonction anonyme
const add2  =   (a2,b2) => {
  return a2 + b2
}
// console.log(add2(1,3));

const add3  =   (a3,b3) =>  a3 + b3
// console.log(add3(25,3));









