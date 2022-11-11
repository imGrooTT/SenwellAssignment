import logo from './logo.svg';
import './App.css';
import {useState ,useEffect} from "react";
import {names} from "./json"

function App() {
  const [dataToRender, setDataToRender] = useState({})
 
  const data =['digvijay',
  'digvijay','pawar','digvijay','digvijay','pawar',
  'digvijay','digvijay','pawar','digvijay','digvijay','pawar',
  'digvijay','pawar','digvijay','digvijay','pawar',
  'digvijay','digvijay','pawar','digvijay','digvijay','pawar',
  'ashish','mayur','mayur','mayur',
  'jay','jay','harsh',
'jay'
]

 function filterName(arr){
   let count = {}
    arr.forEach(element => {
    count[element] = (count[element] || 0) + 1;
  });
  console.log("COUNT HERE FOR THE REPEATED ELEMENTS---->", count);
  setDataToRender(count)
 }


useEffect(()=>{
filterName(data)
}, [])

  return (
    <div className="App" style={{width:"100%",height:'100vh',display:'flex', justifyContent:'center',alignItems:'start',paddingTop:'10%'}}>
      <table style={{width:"70%"}}>
   <tr style={{width:"100%",}}>
            <th>Name</th>
            <th>Count</th>
          </tr>
  <tr style={{    display: 'contents'}}>
    {
      dataToRender && Object.keys(dataToRender).map((key, index)=>{
        return  dataToRender[key] > 0 && dataToRender[key] < 3 ?  <tr style={{backgroundColor : "red"}} >
        <td style={{width:'50%'}}>{key}</td>
        <td style={{width:'50%'}}>{dataToRender[key]}</td>
      </tr> : dataToRender[key] > 2 && dataToRender[key] < 10  ?  <tr style={{backgroundColor : "yellow"}} >
        <td>{key}</td><td>{dataToRender[key]}</td></tr> :  <tr style={{backgroundColor : "green"}} >
        <td>{key}</td><td>{dataToRender[key]}</td></tr>
      })
    }
  </tr>
  
</table>
    </div>
  );
}

export default App;
// Task is:-
// 1 - take data from the any mock service.
// 2 - Have the distinct name in table
// 3 - Table will have 2 columns, one is for the name and another for the number of times it was duplicated
// 4 - mark the background of that row red if the duplicates are more than 0 and less 3
// 5 - mark row yellow if more than 2 and less than 10
// 6 -Mark green if more than 10 times

// mail:senwellhr01@gmail.com