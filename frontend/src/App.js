import React, { useState, useEffect } from 'react';
import Chart from "react-google-charts";
import { FaChartPie, FaChartBar } from 'react-icons/fa';

import api from './services/api';
//import data from './data.json';

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import { 
  getBarStackedChartData, 
  getPieChartData,
  maximumValueInLastHour,
  averageValueInLastHour,
  lastValue
} from './utils/chartDataManipulation';

import { Container, Main, Dashboard } from './styles';

function App() {
  const [typeOfChart, setTypeOfChart] = useState('pie');
  const [pieChartData, setPieChartData] = useState([]);
  const [barStackedChartData, setBarStackedChartData] = useState([]);
  const [chartLegendMaxValue, setChartLegendMaxValue] = useState([]);
  const [chartLegendAverageValue, setChartLegendAverageValue] = useState([]);
  const [chartLegendLastValue, setChartLegendLastValue] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get('/');
        const dataReceived = await response.data;
        setPieChartData(getPieChartData(dataReceived));
        setBarStackedChartData(getBarStackedChartData(dataReceived));
        setChartLegendMaxValue(maximumValueInLastHour(dataReceived));
        setChartLegendAverageValue(averageValueInLastHour(dataReceived));
        setChartLegendLastValue(lastValue(dataReceived));
      } catch (err) {
        setError(err);
      }
    }
    fetchData();
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
          { error && (
            <div className="error-message">
              Erro ao tentar se conectar ao servidor, entre em contato com o suporte.
            </div>
          )}
          { typeOfChart === 'pie' && (
            <div>
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
                  legend: {
                    position: 'bottom',
                    textStyle: { color: 'black', fontSize: '1rem', bold: true },
                  }
                }}
              />
              <span>
                Valor máximo na última hora:
                <ul>
                  { chartLegendMaxValue.map((item, index) => {
                    return <li key={index}>{item.content}: {item.value}Mbps</li>
                  }) }
                </ul>
                Valor médio na última hora:
                <ul>
                  { chartLegendAverageValue.map((item, index) => {
                    return <li key={index}>{item.content}: {item.value.toFixed(2)}Mbps</li>
                  }) }
                </ul>
                ùltima medição na última hora:
                <ul>
                  { chartLegendLastValue.map((item, index) => {
                    return <li key={index}>{item.content}: {item.value}Mbps</li>
                  }) }
                </ul>
              </span>
            </div>
          ) }

          { typeOfChart === 'bar-stacked' && (
            <div>
              <Chart
                className="chart"
                height="1000px"
                chartType="BarChart"
                loader={<div>Loading Chart</div>}
                data={
                  barStackedChartData
                }
                options={{
                  title: 'Média dos tráfegos de entrada por serviços no intervalo de 1min durante 1h em Mbps',
                  chartArea: { left: '25%', top: '15%', width: '50%', height: '75%' },
                  isStacked: true,
                  hAxis: {
                    title: 'Mbps',
                    minValue: 0,
                  },
                  vAxis: {
                    title: 'Minutos',
                  },
                  legend: {
                    position: 'top',
                    textStyle: { color: 'black', fontSize: '1rem', bold: true },
                  }
                }}
              />
              <span>
                Valor máximo na última hora:
                <ul>
                  { chartLegendMaxValue.map((item, index) => {
                    return <li key={index}>{item.content}: {item.value}Mbps</li>
                  }) }
                </ul>
                Valor médio na última hora:
                <ul>
                  { chartLegendAverageValue.map((item, index) => {
                    return <li key={index}>{item.content}: {item.value.toFixed(2)}Mbps</li>
                  }) }
                </ul>
                ùltima medição na última hora:
                <ul>
                  { chartLegendLastValue.map((item, index) => {
                    return <li key={index}>{item.content}: {item.value}Mbps</li>
                  }) }
                </ul>
              </span>
            </div>
          ) }
          
        </Dashboard>
      </Main>
    </Container>
  );
}

export default App;
