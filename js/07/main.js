
var playList = [

  {
  
   author: "LED ZEPPELIN",
  
   song:"STAIRWAY TO HEAVEN"
  
  },
  
  {
  
   author: "QUEEN",
  
   song:"BOHEMIAN RHAPSODY"
  
  },
  
  {
  
   author: "LYNYRD SKYNYRD",
  
   song:"FREE BIRD"
  
  },
  
  {
  
   author: "DEEP PURPLE",
  
   song:"SMOKE ON THE WATER"
  
  },
  
  {
  
   author: "JIMI HENDRIX",
  
   song:"ALL ALONG THE WATCHTOWER"
  
  },
  
  {
  
   author: "AC/DC",
  
   song:"BACK IN BLACK"
  
  },
  
  {
  
   author: "QUEEN",
  
   song:"WE WILL ROCK YOU"
  
  },
  
  {
  
   author: "METALLICA",
  
   song:"ENTER SANDMAN"
  
  }
  
  ];
const container= document.createElement('div');
document.body.append(container)
container.className = 'container';
console.log(container)
container.innerHTML = '<ol></ol>'
let muzList = document.querySelector('ol');
muzList.className = 'muzList';

const btn= document.createElement('button');
document.body.append(btn)
btn.className = 'btn';
btn.innerText = '\\w/'

let liAdd ='';

for(i=0;i<playList.length;i++){
 liAdd += `<li class='band'><span>${playList[i].author} : ${playList[i].song}</span></li>`;
}
document.querySelector('.muzList').innerHTML = liAdd;
let muzLi = document.querySelector('li');


document.querySelector('.btn').addEventListener('click',function(e){
  muzList.classList.toggle('hide');
})