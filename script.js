let login = document.querySelector(".login");
let register = document.querySelector(".regsister");
let form1 = document.querySelector(".form1");
let form2 = document.querySelector(".form2");
let shape = document.querySelector(".shape");
let main = document.querySelector(".main");
let cursor = document.querySelector(".cursor");
let cursor2 = document.querySelector(".cursor2");



login.addEventListener("click", () => {
    main.style.backgroundImage = "url('img.jpg')";
    main.style.backgroundSize = "cover";

    gsap.from(".form1", {

        x: -500,
        duration: 1,
        delay: 0.1,


    })
    gsap.to(shape, {
        x: "0vw",
        duration: 1.2,
        delay: 0
    })
    form2.style.visibility = "hidden"

    form1.style.visibility = "visible";



})
register.addEventListener("click", () => {
    main.style.backgroundImage = "url('img2.jpg')";


    main.style.backgroundSize = "cover";

    gsap.to(shape, {
        x: "200vw",
        duration: 1.2,
        delay: 0,
        ease: 1
    })
    form2.style.visibility = "visible"

    form1.style.visibility = "hidden";


    gsap.to(".form2", {
        x: -550,
        duration: 1,
        delay: 0.1,



    })


})

window.addEventListener("mousemove", (dets) => {
    gsap.to(cursor, {
        // x:dets.x,
        // y:dets.y,
        delay: 0.2,
        x: dets.x - 25 + "px",
        y: dets.y - 25 + "px"
    })


})




window.addEventListener("mousemove", (dets) => {
    gsap.to(cursor2, {

        x: dets.x,
        y: dets.y

    })


})

const enter=()=>
{
    cursor.style.width = "150px";
    cursor.style.height = "150px";
    cursor2.style.visibility = "hidden";

    cursor.style.backgroundColor = "rgb(62, 9, 43)";
    cursor.style.mixBlendMode = "difference";


}

login.addEventListener("mouseenter", () => {
    enter();

}

)
register.addEventListener("mouseenter", () => {
   enter();

}

)
const leave=()=>{
    cursor.style.width = "50px";
    cursor.style.height = "50px";
    cursor2.style.visibility = "visible";
    transition: ease;
}
login.addEventListener("mouseleave", () => {
    leave();



}

)
register.addEventListener("mouseleave", () => {
   leave();


}

)