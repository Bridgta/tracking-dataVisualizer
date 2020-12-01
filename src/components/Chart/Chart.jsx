import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { fetchDailyData } from '../../api';
import styles from './Chart.module.css';


const Chart = () => {

    const [ dailyData, setDailyData ] = useState({})

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData())
        }
        fetchAPI()
    })

    const lineChart = (
        dailyData.length ? (
        <Line
            data={{
            labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
            datasets: [{
                data: dailyData.map((data) => data.confirmed),
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true,
                }, {
                data: dailyData.map((data) => data.deaths),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                fill: true,
            //     },  {
            //     data: dailyData.map((data) => data.recovered),
            //     label: 'Recovered',
            //     borderColor: 'green',
            //     backgroundColor: 'rgba(0, 255, 0, 0.5)',
            //     fill: true,
            // },
                }],
            }}
        />
        )  : null
    );
    return (
        <h1>Charts</h1>
    )
}

export default Chart; 