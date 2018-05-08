
export const addCardsXHR = (card) => new Promise((resolve, reject) => { // wrapping it in a promise allows DISPATCH to have a Thenable
  let data = JSON.stringify(card);
  let oReq = new XMLHttpRequest();
  oReq.onreadystatechange = function(){
    if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {  // handles readystatechange for POST requests
      let response = JSON.parse(this.response);
      resolve(response);
    }
  };
  oReq.open('POST', 'http://localhost:4567/api/cards/');
  oReq.setRequestHeader("Content-type", "application/json");  // important to setRequestHeader so DB knows how to handle the data
  oReq.send(data);

});


export const getCardsXHR = () => new Promise((resolve, reject) => {
  let oReq = new XMLHttpRequest();
  oReq.addEventListener('load', function(){
    resolve(JSON.parse(this.response))
  });
  oReq.open('GET', 'http://localhost:4567/api/cards/');       // classic XML / XHR requests
  oReq.setRequestHeader("Content-type", "application/json");  // can use AXIOS library instead, but that's too easy
  oReq.send();
  // xhr request stuff in here
});

export const changeStatus = () => new Promise((resolve, reject) => {
  let oReq = new XMLHttpRequest();
  oReq.addEventListener('load', function(){
    resolve(JSON.parse(this.response))
  });
  oReq.open('PUT', 'http://localhost:4567/api/cards/');       // classic XML / XHR requests
  oReq.setRequestHeader("Content-type", "application/json");  // can use AXIOS library instead, but that's too easy
  oReq.send();
  // xhr request stuff in here
});

// export const changeStatus = () = new Promise((resolve, reject) => {

// })

// ^^ Was thinking changeStatus could be a function but maybe not...