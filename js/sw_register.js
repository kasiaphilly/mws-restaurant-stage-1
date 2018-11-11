if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(function() {
            console.log('Yay! Your worker is registered!');
        })
        .catch(function(err) {
            console.log('Oops! Your worker registration failed!');
        });
}
