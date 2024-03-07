const buttons = document.querySelectorAll('.modal');

console.log(buttons);


buttons.forEach(el => el.addEventListener("click", function(e){
    e.preventDefault()
    
    console.dir(this);
    console.log(this.dataset.target);
    let _target = this.dataset.target

    //Find modal window by ID
    const modal = document.querySelector(_target);

    if (modal) {
        modal.classList.add("active");
    }
}));


const close = document.querySelector(".modal-window .close");
const wrapper = document.querySelector(".modal-wrapper");


function closeModal(event, modal){
    modal.classList.remove('active');
}

wrapper.addEventListener("click", function(e){ 
    console.log(this);
    console.log(e.target);
    if (e.target === this || e.target === close){
        closeModal(e, wrapper);
    }
});


// Стрілкова ф-я не має свого контексту
// wrapper.addEventListener("click", (e)=>{ 
//     console.log(this);
//     console.log(e.target);
//     if (e.target === this || e.target === close){
//         closeModal(e, wrapper);
//     }
// });
