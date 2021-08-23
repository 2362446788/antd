import { Button } from 'antd'
import './App.css'
import TableT from './components/Table'
const App: React.FC = function App() {
    return <div>
        <Button type='default'>带你我</Button>
        <TableT></TableT>
    </div>
}

export default App;