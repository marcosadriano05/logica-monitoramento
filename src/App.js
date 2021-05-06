import React, { useState } from 'react';
import Chart from "react-google-charts";
import { FaChartPie, FaChartBar } from 'react-icons/fa';

import data from './data.json';

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import { Container, Main, Dashboard } from './styles';

function App() {
  const [typeOfChart, setTypeOfChart] = useState('pie');

  const pieChartData = data.map(item => {
    return [
      item.content,
      item.value.reduce((acc, cur) => acc + cur, 0) / item.value.length
    ];
  });

  const stackedBarChartData = data.reduce((acc, cur) => {
    
  }, []);
  
  return (
    <Container>
      <Header />
      <Main>
        <Sidebar />
        <Dashboard>
          <h1>Dashboard</h1>
          <div className="change-chart">
            <button type="button" onClick={() => setTypeOfChart('pie')}>
              <FaChartPie />
            </button>
            <button type="button" onClick={() => setTypeOfChart('bar-stacked')}>
              <FaChartBar />
            </button>
          </div>
          { typeOfChart === 'pie' && (
            <Chart
              className='chart'
              chartType='PieChart'
              loader={<div>Loading Chart</div>}
              data={[
                ['Serviço', 'Média de tráfego na última hora'],
                ...pieChartData
              ]}
              options={{
                title: 'Tráfego de entrada no equipamento A em Mbps',
              }}
              rootProps={{ 'data-testid': '1' }}
            />
          ) }

          { typeOfChart === 'bar-stacked' && (
            <Chart
              className="chart"
              chartType="BarChart"
              loader={<div>Loading Chart</div>}
              data={[
                ['Serviços', 'Netflix', 'Facebook', 'Google', 'Akamai'],
                ['1min', 50, 80, 30, 10],
                ['2min', 100, 50, 20, 30],
                ['3min', 70, 0, 0, 0],
                ['4min', 0, 40, 70, 30],
                ['5min', 50, 80, 30, 10],
              ]}
              options={{
                title: 'Média dos serviços no intervalo de 1min',
                chartArea: { width: '50%' },
                isStacked: true,
                hAxis: {
                  title: 'Mbps',
                  minValue: 0,
                },
                vAxis: {
                  title: 'Minutos',
                },
              }}
              // For tests
              rootProps={{ 'data-testid': '3' }}
            />
          ) }
          
        </Dashboard>
      </Main>
    </Container>
  );
}

export default App;
