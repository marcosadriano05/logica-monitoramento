import React, { useState } from 'react';
import Chart from "react-google-charts";
import { FaChartPie, FaChartBar } from 'react-icons/fa';

import data from './data.json';

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import { getBarStackedChartData, getPieChartData } from './utils/chartDataManipulation';

import { Container, Main, Dashboard } from './styles';

function App() {
  const [typeOfChart, setTypeOfChart] = useState('pie');

  const pieChartData = getPieChartData(data);

  const barStackedChartData = getBarStackedChartData(data);
  
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
                title: 'Tráfego de entrada média no equipamento A em Mbps',
              }}
            />
          ) }

          { typeOfChart === 'bar-stacked' && (
            <Chart
              className="chart"
              height="1000px"
              chartType="BarChart"
              loader={<div>Loading Chart</div>}
              data={barStackedChartData}
              options={{
                title: 'Média dos serviços no intervalo de 1min durante 1h',
                chartArea: { width: '50%', height: '80%' },
                isStacked: true,
                hAxis: {
                  title: 'Mbps',
                  minValue: 0,
                },
                vAxis: {
                  title: 'Minutos',
                },
              }}
            />
          ) }
          
        </Dashboard>
      </Main>
    </Container>
  );
}

export default App;
