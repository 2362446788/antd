import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
interface IProps {
    count: number;
}
interface BProps {
    children?: any;
    onClick?: Function;
    a?: string;
}
const Child: React.FC<IProps> = (props: IProps) => {
    useEffect(() => {
        console.log('======== child');
        return () => {
            console.log('========= un child');
        }
    })
    return <div>
        Child: {props.count}
        <Button a='a' />
    </div>
}
const Button = (props: BProps) => {
    useEffect(() => {
        console.log('======== button');
        return () => {
            console.log('========= un button');
        }
    })
    return <div>button</div>
}
function App1() {
    let [count, setCount] = useState(0);
    useEffect(() => {
        console.log('======== root');
        return () => {
            console.log('========= un root');
        }
    })
    return <div>
        <p>{count}</p>
        <Button onClick={() => {
            setCount(() => {
                return count + 1;
            })
        }}>+</Button>
        <Child count={count}></Child>
    </div>
}
function App2() {
    return <div>app2</div>
}
function App() {
    let [a, b] = useState(false);

    return <div>
        {
            a ? (<App1 />) : (<App2 />)
        }
        <button onClick={()=>b(!a)}>a</button>
    </div>;
}
ReactDOM.render(<App />, document.getElementById('root'));

/* 
 * 组件的加载顺序为：子组件 -> 父组件，兄弟组件从上往下依次加载
 * 组件的卸载顺序为：父组件 -> 子组件，兄弟组件从上往下依次加载
*/