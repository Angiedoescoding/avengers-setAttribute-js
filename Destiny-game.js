const image = document.querySelector("#myImage");
const text = document.querySelector("h2");

const buttonOne = document.querySelector("#one");
const buttonTwo = document.querySelector("#two");

buttonOne.addEventListener("click", didLike);
buttonTwo.addEventListener("click", didNotLike);


function didLike() {
    image.setAttribute("src","did-like.jpg");
    text.innerHTML = "I liked it too! Who do you think should be saved?";
    buttonOne.innerHTML = "Black Widow";
    buttonTwo.innerHTML = "Iron Man";

    buttonOne.addEventListener("click", blackWidow);
    buttonTwo.addEventListener("click", ironMan);
}

function blackWidow() {
    image.setAttribute("src","blackwidow.png");
    text.innerHTML = "Black Widow sacrificed her life to obtain the Soul Stone. The Avengers were Black Widow’s family, and therefore she was willing to do that so that they would succeed in their mission.";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";

    // const homeBtn = document.createElement("button");
    // homeBtn.onclick = ()=> window.location = "Destiny-game.html";
    // homeBtn.innerHTML = "HOME";
    // homeBtn.classList.add("homeButton");

    // document.body.appendChild(homeBtn);

    const home = document.querySelector(".homeButton").style.display = "block";
    home.addEventListener("click", homeBtn);

    function homeBtn() {
    home.onclick = ()=> window.location = "Destiny-game.html";
    }
}

function ironMan() {
    image.setAttribute("src","ironman.jpg");
    text.innerHTML = "Tony's sacrifice is undoubtedly a heroic and selfless moment, but that doesn't necessarily mean that Doctor Strange couldn't have had an ulterior motive to stop Thanos once and for all.";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";

    const home = document.querySelector(".homeButton").style.display = "block";
    home.addEventListener("click", homeBtn);

    function homeBtn() {
    home.onclick = ()=> window.location = "Destiny-game.html";
    }
}


function didNotLike() {
    image.setAttribute("src","didntlike.jpg");
    text.innerHTML = "Oh, that's sad :( Okay, but who do you think is the most powerful one of these two?";
    buttonOne.innerHTML = "Thor";
    buttonTwo.innerHTML = "Cap";

    buttonOne.addEventListener("click", thor);
    buttonTwo.addEventListener("click", cap);
}

function thor() {
    image.setAttribute("src","thor.jpg");
    text.innerHTML = "Thor's godly powers and Mjolnir would give him a significant advantage, as he could easily overpower his opponent with his immense strength and lightning attacks. Also, Thor is handsome!";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";

    const home = document.querySelector(".homeButton").style.display = "block";
    home.addEventListener("click", homeBtn);

    function homeBtn() {
    home.onclick = ()=> window.location = "Destiny-game.html";
    }
}

function cap() {
    image.setAttribute("src","cap.jpg");
    text.innerHTML = "😛Thor would win on brute strength alone. The only reason Captain America would be able to stand up to Thor in a straight fight is his unbreakable vibranium shield, which is able to deflect even a blow from Mjolnir.";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";

    const home = document.querySelector(".homeButton").style.display = "block";
    home.addEventListener("click", homeBtn);

    function homeBtn() {
    home.onclick = ()=> window.location = "Destiny-game.html";
    }
}