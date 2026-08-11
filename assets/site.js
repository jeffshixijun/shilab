
const toggle=document.querySelector('.mobile-toggle');
if(toggle){
 toggle.addEventListener('click',()=>{
  const nav=document.querySelector('.navlinks');
  if(nav.style.display==='flex'){nav.style.display='none';}
  else{
   nav.style.display='flex';nav.style.position='absolute';nav.style.top='74px';nav.style.left='0';nav.style.right='0';
   nav.style.background='white';nav.style.padding='20px';nav.style.flexDirection='column';nav.style.borderBottom='1px solid #e9e3dc';
  }
 });
}
