function EndRacer({ time, numWords }: {time: number, numWords: number}){
    const numWordsByMinutes = () => {
        const minutes = time / 60
        console.log(minutes)
        return (numWords / minutes).toFixed();
    }
    console.log(time)
    console.log(numWords)
    return (<p>num words by minutes: {numWordsByMinutes()}</p>);
}

export default EndRacer;