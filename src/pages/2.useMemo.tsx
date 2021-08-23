import React from 'react';
import { useMemo } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
interface IProps {
    data: {
        count: number;
        name: string;
    }
}
const Child: React.FC<IProps> = (props: IProps) => {
    let {
        count,
        name
    } = props.data;
    useEffect(() => {
        console.log('执行了');
    })
    return <div>
        count: {count}<hr></hr>
        name: {name}
    </div>
}

function App() {
    let [count, setCount] = useState(0);
    let [name, setName] = useState('a');
    let data = useMemo(() => {
        return {
            count,
            name
        }
    }, [count,name])
    return <div>
        <input type="text" value={name} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setName(event.target.value)
        }} />
        <button onClick={() => {
            setCount(count + 1);
        }}>+</button>
        <Child data={data}></Child>
    </div>
}
ReactDOM.render(<App />, document.getElementById('root'));