let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = false; 

        if (success) {
            resolve("Операція успішна!");
        } else {
            // reject('Error');
            // throw new Error("Кастомна помилка: операція не вдалася!");
            reject(new Error("Кастомна помилка: операція не вдалася!"));
        }
    }, 1000);
});

myPromise
.then(result => {
    console.log("Результат:", result);
})
.catch(error => {
    console.error("Помилка з catch:", error.message);
});