import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import Pollution from './Pollution';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      pollutionDataList:[],
      city:'',
    }
  }

  getData = async()=>{

    const serviceKey = 'mcStFGh4DJ7xj%2Bw6mProJ9i54Yx7ILsE3f5PYzTWe4JjJsnK7H6N%2BMURcWicINOpGg2c1%2BW%2BDJDWiVvqXzZ8zg%3D%3D'
    let sidoName=this.state.city

    if(sidoName==''){
      alert("도시를 입력하세요!")
      return
    }

    await axios({
      method: 'get',
      url: `/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=${serviceKey}&returnType=json&numOfRows=100&pageNo=1&sidoName=${sidoName}&ver=1.0`,
      dataType: 'json',
    })
    .then(response => 
        { 
          console.log(response);
          console.log(response.data.response.body.items);
          this.setState({
            pollutionDataList:response.data.response.body.items
          })
        }
    );
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  componentDidMount(){
    //this.getData();
  }

  render(){

    const result=this.state.pollutionDataList.map(
      (data)=>(<Pollution 
        sidoName={data.sidoName}
        stationName={data.stationName} 
        coGrade={data.coGrade} coValue={data.coValue}
        no2Grade={data.no2Grade} no2Value={data.no2Value}
        pm10Grade={data.pm10Grade} pm10Value={data.pm10Value}
        pm25Grade={data.pm25Grade} pm25Value={data.pm25Value}
        so2Grade={data.so2Grade} so2Value={data.so2Value}
        o3Grade={data.o3Grade} o3Value={data.o3Value}></Pollution>)
    )

    return (
    <div id="app">
        <input type="text" placeholder="도시를 입력하세요" onChange={this.handleChange} name="city"/>
        <button onClick={this.getData}>검색</button>
        {result}
    </div>
  );
  }
}
export default App;