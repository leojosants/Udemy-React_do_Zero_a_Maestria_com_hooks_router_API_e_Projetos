// 

function ChangeMessageState({hadleMessage}) {
  
    const messages = ['oi', 'olá', 'tudo bem?']

    return (
        <div>
            <button onClick={() => hadleMessage(messages[0])}>1</button>
            <button onClick={() => hadleMessage(messages[1])}>2</button>
            <button onClick={() => hadleMessage(messages[2])}>3</button>
        </div>
    );
};

export default ChangeMessageState;