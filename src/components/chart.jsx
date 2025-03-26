import React from 'react';
import { Bar, Line, Pie, Doughnut} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    LineElement,
    PointElement,
    ArcElement,
    Filler
} from 'chart.js';

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement,PointElement,ArcElement,Filler);

const datas = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
        {
            label: 'Sales',
            data: [65, 59, 80, 81, 56],
            fill: true, // Set to true if you want the area under the line to be filled
            borderColor: 'rgba(75, 192, 192, 1)', // Line color
            borderWidth: 1, // Line width
            tension: 0.4, // Controls the curve of the line (0 = straight line)
            pointBackgroundColor: 'rgba(255, 99, 132, 1)', // Point color
            pointBorderColor: '#fff', // Point border color
            pointBorderWidth: 2, // Point border width
            pointRadius: 5, // Point
        },
    ],
};
const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Sales Data Over Time',
        },
    },
};

const BarChart = ({ title, data, labels }) => {
    const datas = {
        labels: !labels ? ['January', 'February', 'March', 'April', 'May'] : labels,
        datasets: [
            {
                label: !title ? 'adams' : title,
                data: !data ? [65, 59, 80, 81, 56] :data,
                fill: true, // Set to true if you want the area under the line to be filled
                borderColor: 'rgba(75, 192, 192, 1)', // Line color
                borderWidth: 1, // Line width
                tension: 0.4, // Controls the curve of the line (0 = straight line)
                pointBackgroundColor: 'rgba(255, 99, 132, 1)', // Point color
                pointBorderColor: '#fff', // Point border color
                pointBorderWidth: 2, // Point border width
                pointRadius: 5, // Point
                // backgroundColor: 'rgba(75, 192, 192, 0.2)',
                // hoverBackgroundColor: 'rgba(75, 192, 192, 0.5)',
                // hoverBorderColor: 'rgba(75, 192, 192, 1)',
                // lineTension: 0.4,
                // showLine: true,
                
            },
        ],
    };
    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        responsive: true,
        maintainAspectRatio: false,
    };
    return (
        <div className={`rounded-md mt-4 -z-50 shadow shadow-[#999] w-[300px]`}>
            <Bar data={datas} options={options}/>
        </div>
    );
};
const LineChart = ({ title, data, labels }) => {
    const datas = {
        labels: !labels ? ['January', 'February', 'March', 'April', 'May'] : labels,
        datasets: [
            {
                label: !title ? 'adams' : title,
                data: !data ? [65, 59, 80, 81, 56] :data,
                fill: true, // Set to true if you want the area under the line to be filled
                borderColor: 'rgba(75, 192, 192, 1)', // Line color
                borderWidth: 1, // Line width
                tension: 0.4, // Controls the curve of the line (0 = straight line)
                pointBackgroundColor: 'rgba(255, 99, 132, 1)', // Point color
                pointBorderColor: '#fff', // Point border color
                pointBorderWidth: 2, // Point border width
                pointRadius: 5, // Point
            },
        ],
    };
    return (
        <div className={`shadow shadow-current mt-4 h-[200px] rounded-md  flex flex-1 justify-center w-auto`}>
            <Line data={datas} options={options} />
        </div>
    )
}
const PieChart = ({ title, data,labels}) => {
    return(
    <div className="">
        <Pie data={datas} options={options}/>
    </div>)
}

export { BarChart, LineChart, PieChart };