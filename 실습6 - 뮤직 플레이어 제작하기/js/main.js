const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const deg = 45;
const len = lists.length;
let i = 0;
for(let el of lists){
    let pic = el.querySelector(".pic");
    let play = el.querySelector(".play");
    console.log(play);
    let pause = el.querySelector(".pause");
    let load = el.querySelector(".load");
    el.style.transform = `rotate(${deg*i}deg) translateY(-100vh)`;
    pic.style.backgroundImage = `url(img/member${i+1}.jpg)`;
    
    play.addEventListener("click", e=>{
        let isActive = e.currentTarget.closest("article").classList.contains("on");
        if(isActive){
            e.currentTarget.closest("article").querySelector(".pic").classList.add("on");
            e.currentTarget.closest("article").querySelector("audio").play();
        }
    });
    pause.addEventListener("click", e=>{
        let isActive = e.currentTarget.closest("article").classList.contains("on");
        if(isActive){
            e.currentTarget.closest("article").querySelector(".pic").classList.remove("on");
            e.currentTarget.closest("article").querySelector("audio").pause();
        }
    });
    load.addEventListener("click", e=>{
        let isActive = e.currentTarget.closest("article").classList.contains("on");
        if(isActive){
            e.currentTarget.closest("article").querySelector(".pic").classList.add("on");
            e.currentTarget.closest("article").querySelector("audio").load();
            e.currentTarget.closest("article").querySelector("audio").play();
        }
    });
    i++;
}

const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");
let num = 0;
let active = 0;
prev.addEventListener("click", ()=>{
    initMusic();
    num++;
    frame.style.transform = `rotate(${deg*num}deg)`;
    active = (active + len - 1)%len;
    activation(active,lists);
});
next.addEventListener("click", ()=>{
    initMusic();
    num--;
    frame.style.transform = `rotate(${deg*num}deg)`;
    active = (active + 1)%len;
    activation(active,lists);
});
function activation(index, lists){
    for(let el of lists){
        el.classList.remove("on");
    }
    lists[index].classList.add("on");
}

const audio = frame.querySelectorAll("audio");
function initMusic(){
    for(let el of audio){
        el.pause();
        el.load();
        el.parentElement.previousElementSibling.classList.remove("on");
    }
}