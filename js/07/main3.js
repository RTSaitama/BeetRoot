// створюю дів, ставлю в баді, додаю клас контейнер для зручності.
const Addcontainer = document.createElement('div');
document.body.append(Addcontainer);
Addcontainer.className='container';
 

const container = document.querySelector('.container');
container.innerHTML= '<div></div><div></div><div></div> ';
container.children[0].style.backgroundColor='green', 
container.children[1].style.backgroundColor='yellow'
container.children[2].style.backgroundColor='red'
 
 let marker =0;
 const allTheLights = document.querySelectorAll('.container div');
 function turnLightOnOff(){
    document.querySelector('.container .light')?.classList.remove('light');
    allTheLights[marker].classList.add('light');
    marker < allTheLights.length-1 ?  marker++ : marker = 0;
 } 
for(let i=0;i<container.childNodes.length;i++){
 
  container.childNodes[i].onclick = function light(){
      container.childNodes[i].classList.toggle('light');

    }
    
  }
