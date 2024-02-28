import Board from "../Components/Board";

function Game() {
    const Player ='X';
    return (
        <>
            <p>Next Player : {Player}</p>
            <Board/>
        </>
    )
}

export default Game;