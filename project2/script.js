function myfunction() {
    const first = document.querySelector('.first');
    const second = document.querySelector('.second');
    const third = document.querySelector('.third');

    let firstCount = 0;
    let secondCount = 0;
    let thirdCount = 0;

    const firstInterval = setInterval(function () {
        first.innerHTML = firstCount++;
        if (firstCount > 15) {
            clearInterval(firstInterval);
        }
    }, 100); // Adjust the interval time as needed

    const secondInterval = setInterval(function () {
        second.innerHTML = secondCount++;
        if (secondCount > 260) {
            clearInterval(secondInterval);
        }
    }, 1); // Adjust the interval time as needed

    const thirdInterval = setInterval(function () {
        third.innerHTML = thirdCount++;
        if (thirdCount > 27) {
            clearInterval(thirdInterval);
        }
    }, 100); // Adjust the interval time as needed
}