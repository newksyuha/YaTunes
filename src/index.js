import { musicPlayerInit } from './module/musicPlayer';
import { videoPlayerInit } from './module/videoPlayer';
import { radioPlayerInit } from './module/radioPlayer';

const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');
const temp = document.querySelector('.temp');

const stopVideoPlayer = videoPlayerInit();
const stopMusicPlayer = musicPlayerInit();
const stopRadioPlayer = radioPlayerInit();

const deactivationPlayer = () => {
    temp.style.display = 'none';
    playerBtn.forEach(item => item.classList.remove('active'));
    playerBlock.forEach(item => item.classList.remove('active'));

   /*  musicPlayerInit.stop();
    videoPlayerInit.stop();
    radioPlayerInit.stop(); */
    stopMusicPlayer();
    stopRadioPlayer();
    stopVideoPlayer();
};

playerBtn.forEach((btn, i) => btn.addEventListener('click', () => {
    deactivationPlayer();
    btn.classList.add('active');
    playerBlock[i].classList.add('active');
}));

/* musicPlayerInit();
videoPlayerInit();
radioPlayerInit(); */