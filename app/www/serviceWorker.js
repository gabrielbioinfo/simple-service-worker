if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/serviceWorker.js')
    .then(()=>{})
    .catch((err)=>{
        console.log('service worker error: ', err);
    });
}

