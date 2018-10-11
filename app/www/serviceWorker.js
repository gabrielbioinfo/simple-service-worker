if('serviceWorker' in navigator){
    resolve(navigator.serviceWorker.register('/serviceWorker.js'))
    .then(()=>{})
    .catch((err)=>{
        console.log('service worker error: ', err);
    });
}

