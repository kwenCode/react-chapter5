import "./Body.css"
import { useState } from "react";
/* p225
const Body = ({children}) => {
    console.log('update');
    const [count, setCount] = useState(0);
    const onIncrease = () => {
        setCount(count + 1);
    }
    return(
        <div>
            <h2>{count}</h2>
            <button onClick={onIncrease}>+</button>
        </div>
    )
}

const Body = () => {
    const [text, setText] = useState("");
    const handleOnChange = (e) => {
        console.log("변경된 값 "+ e.target.value);
        setText(e.target.value);
    };
    return (
        <div>
            <textarea value={text} onChange={handleOnChange} />
            <div>{text}</div>
        </div>
    )
}*/

const Body = () => {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [birth, setBirth] = useState("");
    const [bio, setBio] = useState("");

    const onChangeName = (e) => {
        setName(e.target.value);
    };
    const onChangeGender = (e) => {
        setGender(e.target.value);
    };
    const onChangeBirth = (e) => {
        setBirth(e.target.value);
    };
    const onChangeBio = (e) => {
        console.log(e)
        setBio(e.target.value);
    };

    return (
        <div>
            <div>
                <input value={name} onChange = {onChangeName} placeholder = "이름"/>
            </div>
            <div>
                <select value={gender} onChange = {onChangeGender}>
                    <option key={""}></option>
                    <option key={"남성"}>남성</option>
                    <option key={"여성"}>여성</option>
                </select>
            </div>
            <div>
                <input type="date" value={birth} onChange ={onChangeBirth} />
            </div>
            <div>
                <textarea value={bio} onChange = {onChangeBio} /> 
            </div>
        </div>
    );
}
export default Body;