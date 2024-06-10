import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const THROTTLE_TIME = 1000;

const getPlayerCurrentTime = data => {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

if (localStorage.getItem('videoplayer-current-time')) {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}

player.on('timeupdate', throttle(getPlayerCurrentTime, THROTTLE_TIME));
