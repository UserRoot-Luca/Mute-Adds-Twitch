// ==UserScript==
// @name         Mute Adds Twitch
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  ###
// @author       UserRoot-Luca
// @match        https://www.twitch.tv/*
// @icon         https://www.google.com/s2/favicons?domain=twitch.tv
// @grant        none
// ==/UserScript==

(function(){
    let button_status = true;
    setInterval(function(){
        if (document.querySelector('[data-a-target="video-ad-countdown"]') && button_status) {
            button_status = false;
            document.querySelector('[data-a-target="player-mute-unmute-button"]').click();
            console.log("Audio off");
        } else if(!document.querySelector('[data-a-target="video-ad-countdown"]') && !button_status){
            button_status = true;
            document.querySelector('[data-a-target="player-mute-unmute-button"]').click();
            console.log("Audio on");
        }
    }, 300);
})()
