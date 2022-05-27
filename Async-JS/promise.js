// Promises examples in JavaScript

console.log('Begin');

let loginUser = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(['Joe', '12345678']);
    }, 1000);
});

loginUser.then(res => {
    console.log(res);
    return res[0];
}).then(data => {
    console.log(`Welcome Home ${data}`);
})



console.log('Finish');