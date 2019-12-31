var getTab = document.querySelectorAll('.tab-image');
var childTab = document.querySelectorAll('.tab-content');

console.log(getTab);
console.log(childTab);


getTab.forEach(item => item.addEventListener('click',getSelectedItem));


function getSelectedItem(e){

    removeBottomBorder();
    removeShow();
    //console.log(e.target.id);

    //add bottom color to selected tab
    e.target.classList.add('tab-border');

    const tabShow = document.querySelector(`#${this.id}-content`);

    tabShow.classList.add('show');

    

}

function removeBottomBorder(){

    getTab.forEach(item => item.classList.remove('tab-border'));



}

function removeShow(){
    childTab.forEach(item => item.classList.remove('show'));
}