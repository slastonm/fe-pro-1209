import React from 'react';
import style from './MyButtons.module.css';

function MyButtons(props) {
    const inlineStyle ={
        color:'blue',
        fontSize:'30px',
        backgoundColor:'yellow',
        margin:'50px'
    }
    const callAlert = ()=>{
        alert('Hello!');
    }
    const helloUser = (username)=>{
        alert(`Hello ${username}`);
    }
    let text='Heloo';
    const eventInfo = (e)=>{
        e.preventDefault();
        console.log(e);
        text = 'Change';
    }

    return (
        <div>
            <button onClick={callAlert} style={inlineStyle}>
                {text}
            </button>
            <button onClick={()=>helloUser('Tester')} className={style.custom}>
                Custom
            </button>
            <button onClick={(e)=>{eventInfo(e)}} className={`${style.custom} m-0 p-1`}>
                Custom
            </button>
        </div>
    );
}

export default MyButtons;