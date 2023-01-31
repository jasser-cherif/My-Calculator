const touches=[...document.querySelectorAll('.bouton')];
const listekeycode=touches.map(tch => tch.dataset.key ) ;
const ecran=document.querySelector('.ecran');
document.addEventListener('keydown', (x) => {
    const vl=x.keyCode.toString();
    calculer(vl);
});
document.addEventListener('click',(x)=>{
    const vl=x.target.dataset.key;
    calculer(vl);
});
const calculer=(vl)=>{
    if(listekeycode.includes(vl)){
        switch(vl){
            case '8':
                ecran.textContent="";
                break;
            case '13':
                const calcul=eval(ecran.textContent);
                ecran.textContent=calcul;
                break;
            default:
                const indkeycode=listekeycode.indexOf(vl);
                const touche = touches[indkeycode];    
                ecran.textContent += touche.innerHTML;

        }
    }
}
window.addEventListener('error',(x)=>{
    alert('une erreur est survenue dans votre calcul :'+ x.message)
})