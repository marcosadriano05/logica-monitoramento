export function getBarStackedChartData(data) {
  const charDataWithMeasurementsAverage = data.map(item => {
    const measurementAverage = item.value.map(measures => {
      const measuresArray = Object.values(measures);
      const measuresSum = measuresArray.reduce((acc, cur) => acc + cur, 0);
      return measuresSum / measuresArray.length;
    });
  
    return {
      time: item.time,
      content: item.content,
      value: measurementAverage
    }
  });
  
  const servicesData = data.map(item => item.content);
  
  let barStackedCharData = [['Serviços', ...servicesData]]
  
  for (let i = 0; i < charDataWithMeasurementsAverage[0].value.length; i++) {
    let measures = [];
    for (let j = 0; j < charDataWithMeasurementsAverage.length; j++) {
      measures.push(charDataWithMeasurementsAverage[j].value[i]);
    }
    barStackedCharData.push([
      `${i + 1}min`,
      ...measures
    ]);
  }
  
  return barStackedCharData;
}

export function getPieChartData(data) {
  const measurementAverageData = data.map(item => {
    const average = item.value.reduce((acc, cur) => {
      const measuresSum = Object.values(cur).reduce((soma, atual) => soma + atual, 0);
      let measuresAverage = measuresSum / Object.values(cur).length;
      return acc + measuresAverage;
    }, 0) / item.value.length
  
    return [
      item.content,
      average
    ];
  });

  return measurementAverageData;
}