const getRandomElem = (arr) => {
    const getRandomNumber = Math.floor(Math.random() * arr.length);
    return arr[getRandomNumber];
}

export default getRandomElem