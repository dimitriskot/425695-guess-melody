import {SERVER_URL, APP_ID} from "../data/constants";

const checkStatus = (res) => {
  if (res.ok) {
    return res;
  } else {
    throw new Error(`${res.status}: ${res.statusText}`);
  }
};

const toJSON = (res) => res.json();

export default class Loader {
  static loadData() {
    return fetch(`${SERVER_URL}/questions`).then(checkStatus).then(toJSON);
  }

  static saveResults(data) {
    const requestSettings = {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };
    return fetch(`${SERVER_URL}/stats/${APP_ID}`, requestSettings).then(checkStatus);
  }

  static loadResults() {
    return fetch(`${SERVER_URL}/stats/${APP_ID}`).then(checkStatus).then(toJSON);
  }
}
