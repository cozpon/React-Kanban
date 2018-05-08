// getting USER data for the dropdown selector as well as the CARD information


export const getUsersXHR = () => new Promise((resolve, reject) => {
    let oReq = new XMLHttpRequest();
    oReq.addEventListener('load', function(){
      resolve(JSON.parse(this.response))
    });
    oReq.open('GET', 'http://localhost:4567/api/users');
    oReq.setRequestHeader("Content-type", "application/json");
    oReq.send();
});