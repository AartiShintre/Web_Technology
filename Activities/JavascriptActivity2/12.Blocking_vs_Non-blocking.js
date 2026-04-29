// Blocking
console.log("Start");
for(let i=0;i<1e9;i++){}
console.log("End");

// Non-blocking
console.log("Start");
setTimeout(()=>console.log("Async Task"),2000);
console.log("End");