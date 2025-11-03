function EndRacer({ time, numWords }: {time: number, numWords: number}){

    const numWordsByMinutes = () => {
        const minutes = time / 60
        console.log(minutes)
        return (numWords / minutes).toFixed();
    }

    return (<p>num words by minutes: {time > 0 ? numWordsByMinutes() : 0}</p>);
}

export default EndRacer;