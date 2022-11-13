// ==UserScript==
// @name         Mute Adds Twitch
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  ###
// @author       UserRoot-Luca
// @match        https://www.twitch.tv/*
// @icon         https://www.google.com/s2/favicons?domain=twitch.tv
// @grant        none
// ==/UserScript==
(function(){
    let ButtonStatus = true;    
    setInterval(()=>{
        let ButtonAudioElement = document.querySelector<HTMLButtonElement>('[data-a-target="player-mute-unmute-button"]');
        let VideoAdElement = document.querySelector<HTMLDivElement>('[data-a-target="video-ad-countdown"]');
        if (VideoAdElement && ButtonStatus) {
            ButtonStatus = false;
            ButtonAudioElement!.click();
            console.log("Audio off");
        } else if (!VideoAdElement && !ButtonStatus) {
            ButtonStatus = true;
            ButtonAudioElement!.click();
            console.log("Audio on");
        }
    }, 300);
})();