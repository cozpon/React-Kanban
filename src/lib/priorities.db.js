
export const getPrioritiesXHR = () => new Promise((resolve, reject) => {
    let oReq = new XMLHttpRequest();
    oReq.addEventListener('load', function(){
      resolve(JSON.parse(this.response))
    });
    oReq.open('GET', 'http://localhost:4567/api/priorities/');
    oReq.setRequestHeader("Content-type", "application/json");
    oReq.send();
});