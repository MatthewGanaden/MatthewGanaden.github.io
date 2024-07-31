function displayDesign() {
    document.getElementById("webDev").style.background = "none"
    document.getElementById("others").style.background = "none"

    document.getElementById("design").style.fontWeight = "700"
    document.getElementById("design").style.background = "#fff"

    document.getElementById("webDev").style.fontWeight = "400"

    document.getElementById("others").style.fontWeight = "400"

    document.getElementById("title").innerHTML = 'Design';
    document.getElementById("description").innerHTML = 'description for design';
}

function displayWebDev() {
    document.getElementById("design").style.background = "none"
    document.getElementById("others").style.background = "none"

    document.getElementById("design").style.fontWeight = "400"

    document.getElementById("webDev").style.fontWeight = "700"
    document.getElementById("webDev").style.background = "#fff"

    document.getElementById("others").style.fontWeight = "400"

    document.getElementById("title").innerHTML = 'Web Development';
    document.getElementById("description").innerHTML = 'description for Web Development';
}

function displayTesting() {
    document.getElementById("design").style.background = "none"
    document.getElementById("webDev").style.background = "none"

    document.getElementById("design").style.fontWeight = "400"

    document.getElementById("webDev").style.fontWeight = "400"

    document.getElementById("others").style.fontWeight = "700"
    document.getElementById("others").style.background = "#fff"

    document.getElementById("title").innerHTML = 'Testing and Arduino';
    document.getElementById("description").innerHTML = 'I have used my knowledge in selenium to create a custom facebook scraper for our thesis. I have also';
}