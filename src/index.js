/**
 * \file src/index.js
 * \author Felipe Gomes <fg614043@gmail.com>, Josue Teodoro Moreira <teodoro.josue@protonmail.ch>
 * \date Jun 25, 2021
 */

function getMenu()
{
    menuDiv = document.getElementById("menu");
    menuButtonDiv = document.getElementById("menu-button");
    menuButtonIcon = document.getElementById("menu-button-icon");
    if (!menuButtonDiv || !menuDiv)
        console.log("Could not get ids");

    menuToggleState = true;
}

function toggleMenu()
{
    if (!menuDiv)
        return;

    menuDiv.style.animationName = (menuToggleState) ? "openMenu" : "closeMenu";
    menuDiv.style.animationDuration = "0.6s";
    menuDiv.style.animationIterationCount = "1";
    menuDiv.style.animationDirection = "normal";
    menuDiv.style.animationTimingFunction = "ease-in";
    menuDiv.style.animationFillMode = "forwards"

    menuButtonDiv.style.animationName = (menuToggleState) ? "openMenuButton" : "closeMenuButton";
    menuButtonDiv.style.animationDuration = "0.6s";
    menuButtonDiv.style.animationIterationCount = "1";
    menuButtonDiv.style.animationDirection = "normal";
    menuButtonDiv.style.animationTimingFunction = "ease-in";
    menuButtonDiv.style.animationFillMode = "forwards"

    menuButtonIcon.style.transform = (menuToggleState) ? "rotate(180deg)" : "rotate(0deg)";
    menuButtonIcon.style.marginBottom = (menuToggleState) ? "1.5rem" : "0px";

    menuToggleState = !menuToggleState;
}
