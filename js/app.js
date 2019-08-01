window.onload = function () {
	Chart.defaults.scale.ticks.beginAtZero = true;
	const dataCanvasLow = document.getElementById('lineChartLow');
	const optionsLow = {
		legend: {
			position: 'top',
		},
		title: {
			display: true,
			position: 'top',
			fontColor: '#666',
			fontSize: 18,
			text: '2010-2017 Low rate'
		}
	};
	const dataLow = {
		labels: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
		datasets: [
			{
				label: 'Brazil',
				data: [16.3, 15.7, 15.1, 14.6, 14, 13.4, 13.6, 11.9],
				backgroundColor: ['rgba(255, 99, 132, 0.2)'],
				borderWidth: 2,
				borderColor: 'grey',
			},
			{
				label: 'Russian Federation',
				data: [8.7, 8.5, 8.3, 8, 7.6, 7.1, 6.5, 6],
				backgroundColor: ['rgba(54, 162, 235, 0.2)'],
				borderWidth: 2,
				borderColor: 'blue',
			},
			{
				label: 'India',
				data: [43.5, 41.4, 39.3, 37.2, 35.1, 32.9, 30.9, 29],
				backgroundColor: ['rgba(255, 206, 86, 0.2)'],
				borderWidth: 2,
				borderColor: 'orange',
			},
			{
				label: 'China',
				data: [12.7, 11.8, 10.9, 10.1, 9.3, 8.5, 7.7, 7],
				backgroundColor: ['rgba(97, 60, 142, 0.5)'],
				borderWidth: 2,
				borderColor: 'green',
			},
			{
				label: 'South Africa',
				data: [35.2, 34, 32.8, 30.8, 28.9, 27.8, 25.6, 24],
				backgroundColor: ['rgba(153, 102, 255, 0.2)'],
				borderWidth: 2,
				borderColor: 'red',
			}
		]
	};
	const lineChartDataLow = new Chart (dataCanvasLow, {
		type: 'line',
		data: dataLow,
		options: optionsLow
	});
	const dataCanvasMed = document.getElementById('lineChartMed');
	const optionsMed = {
		legend: {
			position: 'top',
		},
		title: {
			display: true,
			position: 'top',
			fontColor: '#666',
			fontSize: 18,
			text: '2010-2017 Median rate'
		}
	};
	const dataMed = {
		labels: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
		datasets: [
			{
				label: 'Brazil',
				data: [16.7, 16, 15.4, 14.9, 14.5, 14, 14.6, 13.2],
				backgroundColor: ['rgba(255, 99, 132, 0.2)'],
				borderWidth: 2,
				borderColor: 'grey',
			},
			{
				label: 'Russian Federation',
				data: [8.9, 8.7, 8.4, 8.1, 7.8, 7.3, 6.9, 6.5],
				backgroundColor: ['rgba(54, 162, 235, 0.2)'],
				borderWidth: 2,
				borderColor: 'blue',
			},
			{
				label: 'India',
				data: [45.3, 43.2, 41.1, 39.1, 37.2, 35.3, 35.6, 32],
				backgroundColor: ['rgba(255, 206, 86, 0.2)'],
				borderWidth: 2,
				borderColor: 'orange',
			},
			{
				label: 'China',
				data: [13.6, 12.6, 11.6, 10.8, 10, 9.2, 8.6, 8],
				backgroundColor: ['rgba(97, 60, 142, 0.5)'],
				borderWidth: 2,
				borderColor: 'green',
			},
			{
				label: 'South Africa',
				data: [38.4, 37.3, 36.1, 34.2, 32.5, 31.8, 30, 28.8],
				backgroundColor: ['rgba(153, 102, 255, 0.2)'],
				borderWidth: 2,
				borderColor: 'red',
			}
		]
	};
	const lineChartDataMed = new Chart(dataCanvasMed, {
		type: 'line',
		data: dataMed,
		options: optionsMed
	});
	const dataCanvasUp = document.getElementById('lineChartUp');
	const optionsUp = {
		legend: {
			position: 'top',
		},
		title: {
			display: true,
			position: 'top',
			fontColor: '#666',
			fontSize: 18,
			text: '2010-2017 Upper rate'
		}
	};
	const dataUp = {
		labels: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
		datasets: [
			{
				label: 'Brazil',
				data: [17.2, 16.4, 15.8, 15.3, 14.9, 14.8, 15.8, 14, 7],
				backgroundColor: ['rgba(255, 99, 132, 0.2)'],
				borderWidth: 2,
				borderColor: 'grey',
			},
			{
				label: 'Russian Federation',
				data: [9.1, 8.8, 8.6, 8.3, 7.9, 7.6, 7.2, 7],
				backgroundColor: ['rgba(54, 162, 235, 0.2)'],
				borderWidth: 2,
				borderColor: 'blue',
			},
			{
				label: 'India',
				data: [47.3, 45.1, 43.1, 41.2, 39.4, 37.7, 36.3, 35],
				backgroundColor: ['rgba(255, 206, 86, 0.2)'],
				borderWidth: 2,
				borderColor: 'orange',
			},
			{
				label: 'China',
				data: [14.4, 13.3, 12.4, 11.5, 10.7, 10.1, 9.6, 9.2],
				backgroundColor: ['rgba(97, 60, 142, 0.5)'],
				borderWidth: 2,
				borderColor: 'green',
			},
			{
				label: 'South Africa',
				data: [42.1, 40.8, 39.8, 37.9, 36.4, 36.2, 34.6, 33.9],
				backgroundColor: ['rgba(153, 102, 255, 0.2)'],
				borderWidth: 2,
				borderColor: 'red'
			}
		]
	};
	const lineChartDataUp = new Chart (dataCanvasUp, {
		type: 'line',
		data: dataUp,
		options: optionsUp
	});
	const dataCanvasBar = document.getElementById('barChart');
	const optionsBar = {
		legend: {
			position: 'top',
		},
		title: {
			display: true,
			position: 'top',
			fontColor: '#666',
			fontSize: 18,
			text: '2017 Low, Median, Upper rates'
		}
	};
	const dataBar = {
		labels: ['Brazil', 'Russian Fed.', 'India', 'China', 'South Africa'],
		datasets: [
			{
				label: 'lower',
				data: [11.9, 6, 29, 7, 24],
				backgroundColor: '#FFFF60',
				borderWidth: 2,
				borderColor: '#FFFF60'
			},
			{
				label: 'median',
				data: [13.2, 6.5, 32, 8, 28.8],
				backgroundColor: '#FFC031',
				borderWidth: 2,
				borderColor: '#FFC031'
			},
			{
				label: 'upper',
				data: [14.7, 7, 35, 9.2, 33.9],
				backgroundColor: '#DF8B00',
				borderWidth: 2,
				borderColor: '#DF8B00'
			}
		]
	};
	const barChartData = new Chart (dataCanvasBar, {
		type: 'bar',
		data: dataBar,
		options: optionsBar
	});
};