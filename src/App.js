import React from 'react';
import {Cards,Chart,StatePicker} from './components';
import styles from './App.module.css';
import { fetchData} from './api';


class App extends React.Component{
state = {
    data: {},
    stateOfBharat: "",
}

    async componentDidMount() {
        const fetchedData = await fetchData();
       this.setState({data: fetchedData});
      // console.log(fetchedData);
    }
    handleStateChange = async (stateOfBharat) => {
        const fetchedData = await fetchData(stateOfBharat);
        this.setState({data: fetchedData, stateOfBharat: stateOfBharat});
        //console.log(stateOfBharat);
    }
    render() {
        const {data,stateOfBharat} = this.state;
        return ( 
            <div className={styles.container}>
                 <Cards data={data}/>
                <StatePicker handleStateChange={this.handleStateChange} />
               <Chart stateOfBharat={stateOfBharat} /> 
            </div>
        )
    }
}

export default App;

