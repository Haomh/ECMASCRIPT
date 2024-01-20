let promise = new Promise(function(resole, reject){
    resole(1);

    setTimeout(() => resole(2), 1000);
});

promise.then(alert); //Kết quả trả về là 1