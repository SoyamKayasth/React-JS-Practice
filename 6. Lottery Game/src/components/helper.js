
const genTicket = (n) => {
    let arr = [];
    for(let i = 0; i < n ; i++){
      arr[i] = Math.floor(Math.random()*10);
    }
    return arr;
}

const sum = (arr) => {
    return arr.reduce((acc, curr) => acc + curr, 0);
};


export {genTicket, sum};