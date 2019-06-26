//Function to register Service Worker
if ("serviceWorker" in navigator){
  navigator.serviceWorker
  .register("./sw.js")
  .then(function(){
    // console.log("Service Worker is working");
  })
  .catch(function(){
    // console.log("Worker is lazy");
  });
}
