
//format the minu
let minuBtn = document.querySelector("header .minu-btn");
let minuList = document.querySelector("header .links");
let links = document.querySelectorAll("header .links .link");

minuBtn.addEventListener("click",()=>{
    minuBtn.classList.toggle("active");
    minuList.classList.toggle("active");
})

window.onresize = ()=>{
    minuBtn.classList.remove("active");
    minuList.classList.remove("active");
}

links.forEach((li)=>{
    li.addEventListener("click",()=>{
        links.forEach((e)=>{
            e.classList.remove("active");
        })
    li.classList.add("active");
    minuBtn.classList.remove("active");
    minuList.classList.remove("active");
    })
})

// format the testimonials slider

const carouserl = document.querySelector(".testimonials .wrapper .carousel-t");
const icons = document.querySelectorAll(".testimonials .wrapper .icon-a"),
firstImg  = document.querySelector(".testimonials .wrapper .slide ");

let isDragStart = false,prevPageX,prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 14 ;
let scrollWidth = carouserl.scrollWidth - carouserl.clientWidth;

icons.forEach((i)=>{
    i.addEventListener("click",()=>{
        carouserl.scrollLeft += i.id == "left" ? -firstImgWidth : firstImgWidth ;
        //
        setTimeout(()=>{
        if(carouserl.scrollLeft <= 100){
            icons[1].classList.add("full");
        }else{
            icons[1].classList.remove("full"); 
        }
        if(carouserl.scrollLeft == scrollWidth || carouserl.scrollLeft >= scrollWidth - 100){
            icons[0].classList.add("full");
        }else{
            icons[0].classList.remove("full");
        }

        },400)
    })
})

carouserl.addEventListener("mousedown",(e)=>{
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carouserl.scrollLeft;
})
carouserl.addEventListener("mouseup",()=>{
    isDragStart = false;
    carouserl.classList.remove("dragging");

})

carouserl.addEventListener("mousemove",(e)=>{
    if(!isDragStart) return;
    e.preventDefault();
    carouserl.classList.add("dragging");
    let positionDiff = e.pageX - prevPageX;
    carouserl.scrollLeft = prevScrollLeft - positionDiff;
})