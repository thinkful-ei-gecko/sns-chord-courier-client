/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import config from '../config';

const ChordServiceApi = {
  getAllChords() {
    return fetch(`${config.API_ENDPOINT}/chords`, {
      headers: {

      },
    })
      .then((res) => {
        (!res.ok)
          ? res.json().then((e) => Promise.reject(e))
          : res.json();
      });
  },
  getChordsByKey(key) {
    return fetch(`${config.API_ENDPOINT}/chords/${key}`, {
      headers: {

      },
    })
      .then((res) => ((!res.ok)
        ? res.json().then((e) => Promise.reject(e))
        : res.json()));
  },
};

export default ChordServiceApi;
