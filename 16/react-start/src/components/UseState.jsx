import React, {useState} from 'react';

function UseState(props) {
    let [counterValue, setCounterValue] = useState(0);
    function upValue(){
        setCounterValue(counterValue=>counterValue+1);
    }
    function downValue(){
        setCounterValue(counterValue-1);
    }
    let [userName, setUserName] = useState('');
    function changeUserName(e){
        setUserName(e.target.value)
    }
    let [showState, setShowState] = useState(false);
    function changeShowState(){
        setShowState(showState=>!showState);
    }
    return (
        <div>
            <input 
            type="text" 
            placeholder='Type your name'
            value={userName}
            onChange={(e)=>changeUserName(e)} />
            <p>
                {userName}
            </p>
            <button className="btn btn-primary" onClick={upValue}>
                +1
            </button>
            <p>
                {/* {counterValue} */}
                {counterValue>0 ? counterValue:'To low value'}

            </p>
            <button className="btn btn-primary" onClick={downValue}>
                -1
            </button>
            <p>
                Search
            </p>
            <button className='btn' onClick={changeShowState}>
                Icon
            </button>
            {/* {showState && <div>Search block</div>} */}
            {showState ? <div>Search block</div>:null}

        </div>
    );
}

export default UseState;