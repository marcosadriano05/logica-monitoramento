import { useEffect } from "react";
import Chart from "react-google-charts";

import data from './data.json';

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import { Container, Main, Dashboard } from './styles';

function App() {
  useEffect(() => {
    console.log(data);
  }, []);
  
  return (
    <Container>
      <Header />
      <Main>
        <Sidebar />
        <Dashboard>
          <h1>Dashboard</h1>
          <Chart
            className='chart'
            chartType='PieChart'
            loader={<div>Loading Chart</div>}
            data={[
              ['Task', 'Hours per Day'],
              ['Work', 11],
              ['Eat', 2],
              ['Commute', 2],
              ['Watch TV', 2],
              ['Sleep', 7],
            ]}
            options={{
              title: 'My Daily Activities',
            }}
            rootProps={{ 'data-testid': '1' }}
          />
        </Dashboard>
      </Main>
    </Container>
  );
}

export default App;
