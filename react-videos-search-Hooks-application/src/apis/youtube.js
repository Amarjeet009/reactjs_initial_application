import axios from 'axios';

const KEY = 'AIzaSyA3K05EijrdzB_P-ro4mEUpe_uigyxr6Dc'; //my key


// const KEY = 'AIzaSyDVfeUxsJzp8Vs0xnFGlhC2zrllcqbC4zc';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY
  },
});
