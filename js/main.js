let toggle = document.querySelector(".the-toggler"),
    nav = document.querySelector(".navbar"),
    select = document.querySelector(".sel");


toggle.onclick = makeToggle

function makeToggle() {
    nav.classList.toggle("slide")

}

function se(name) {
    let links = Array.from(document.querySelectorAll("link"))
    if (name !== "Ar" && name !== "Select Language") {
        links.forEach((link) => {
            if (link.getAttribute("href") == "css/homepage-rtl.css") {
                link.remove()
                document.querySelector("html").setAttribute("dir", "ltr")
            }
        })
    } else {
        if (name !== "Select Language") {
            document.querySelector("head").innerHTML += `<link href="css/homepage-rtl.css"  rel="stylesheet"/>
            `
            document.querySelector("html").setAttribute("dir", "rtl")
        }

    }


}