
export const addCardsXHR = (card) => new Promise((resolve, reject) => {
  let data = JSON.stringify(card);
  let oReq = new XMLHttpRequest();
  oReq.onreadystatechange = function(){
    if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
      let response = JSON.parse(this.response);
      resolve(response);
      console.log(response, "RESPONSE LIB");
    }
  };
  oReq.open('POST', 'http://localhost:4567/api/cards/');
  oReq.setRequestHeader("Content-type", "application/json");
  oReq.send(data);

});


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