
export const getPrioritiesXHR = () => new Promise((resolve, reject) => {
    let oReq = new XMLHttpRequest();
    oReq.addEventListener('load', function(){

      resolve(JSON.parse(this.responseText))
    });
    oReq.open('GET', 'http://localhost:4567/api/priorities/');
    oReq.send();
  // xhr request stuff in here
});