
// 주메뉴 탭( BEST ITEM, NEW ARRIVAL, MD'S CHOICE) 첫번째 방법
var targetLink = document.querySelectorAll('.tab_menu a');
var tabContent = document.querySelectorAll('.panel >li ');


for(var i=0; i<targetLink.length; i++){

targetLink[i].addEventListener('click', function(e){
   e.preventDefault();
   var orgTarget = e.target.getAttribute('href');
   console.log(orgTarget);
   var tabTarget = orgTarget.replace('#','');

   for(var x =0; x < tabContent.length; x++){
      tabContent[x].style.display ='none'
   }
 document.getElementById(tabTarget).style.display = 'block';

 for(var j = 0; j<targetLink.length; j++){
       targetLink[j].classList.remove('selected');
       e.target.classList.add('selected');
 }
});   
}

document.getElementById('tab1').style.display = 'block';

 
