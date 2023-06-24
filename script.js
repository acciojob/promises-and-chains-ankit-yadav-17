//your JS code here. If required.
const age = document.getElementById("age").value
const name = document.getElementById("name").value
const btn = document.getElementById("btn");
document.getElementById('myform').addEventListener('submit',(event) => {
	event.preventDefault();
})

var promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
          if (parseInt(age) > 18) {
            resolve(name);
          } else {
            reject(name);
          }
        }, 4000);
      });

 promise.then(function(name) {
        alert(`Welcome, ${name}. You can vote.`);
      }).catch(function(name) {
        alert(`Oh sorry ${name}. You aren't old enough.`);
      });
