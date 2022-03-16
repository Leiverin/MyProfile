const imgs = document.getElementsByClassName('background-change');
const bgInfor = document.getElementById('container-Infor');

let i;
for(i = 0; i < imgs.length; i++){
     imgs[i].addEventListener('click',handleChange);
};

function handleChange(){
     let urlImg = this.getAttribute('src');
     bgInfor.style.backgroundImage=`url(${urlImg})`;
}
