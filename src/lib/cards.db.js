
export const getCardsXHR = () => new Promise((resolve, reject) => {
    let oReq = new XMLHttpRequest();
    oReq.addEventListener('load', function(){
      resolve(JSON.parse(this.response))
    });
    oReq.open('GET', 'http://localhost:4567/api/cards/');
    oReq.setRequestHeader("Content-type", "application/json");
    oReq.send();
  // xhr request stuff in here
});

export const addCardsXHR = (card) => new Promise((resolve, reject) => {
  let data = card;
  let oReq = new XMLHttpRequest();
  oReq.addEventListener('submit', function(){
    resolve(JSON.parse(this.response))
  });
  oReq.open('POST', 'http://localhost:4567/api/cards/');
  oReq.setRequestHeader("Content-type", "application/json");
  oReq.send(data);
});

