const dark_mode = document.querySelector("#dark_mode");
const avatar = dark_mode.querySelector("img")
const write = document.querySelector("#approx_character")


dark_mode && dark_mode.addEventListener("click", () => {
    document.body.classList.toggle("white");
    document.body.classList.toggle("dark");

    let darcSrc = avatar.getAttribute("src"); 

    if (darcSrc.includes("photo/Settings Container.svg")) {
        avatar.setAttribute("src", "photo/Settings Container(1).svg");
    } else {
        avatar.setAttribute("src", "photo/Settings Container.svg");
    }


    let currentBg = getComputedStyle(write).backgroundColor;

    if (write.style.backgroundColor === "white" || write.style.backgroundColor === "") { 
        write.style.backgroundColor = "#404254";
        write.style.color = "white";
    } else {
        write.style.backgroundColor = "white";
        write.style.color = "black";
    }
});
