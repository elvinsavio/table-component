import './App.css';
import {Table} from './components/table'

function App() {
  const data1_title = ["name","age","address"]
  const data1_data = [
    {name:"John",age:10,address:"New York"},
    {name:"Peter",age:20,address:"London"},
    {name:"Mary",age:30,address:"Paris"},
  ]
  return (
    <div className="App">
      <p>Empty table</p>
      <Table title={[]} data={[]} />
      <br/>
      <p>Table with props</p>
      <Table title={data1_title} data={data1_data} />
    </div>
  );
}

export default App;
