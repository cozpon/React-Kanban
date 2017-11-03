
export const getCardsXHR = () => new Promise((resolve, reject) => {
    let oReq = new XMLHttpRequest();
    oReq.addEventListener('load', function(){
      resolve(JSON.parse(this.responseText))
    });
    oReq.open('GET', 'http://localhost:4567/api/cards/');
    oReq.send();
  // xhr request stuff in here
});

export const addCardsXHR = () => new Promise((resolve, reject) => {
  let oReq = new XMLHttpRequest();
  oReq.addEventListener('load', function(){
    resolve(JSON.parse(this.responsetext))
  });
  oReq.open('POST', 'http://localhost:4567/api/cards/');
  oReq.send();
});