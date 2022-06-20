import React from 'react'
// import { withTheme } from '../../Theme/SkaraNewTheme';
import ReactEcharts from "echarts-for-react";

export const GraphComponent = (props) => {
    const { xAxis, series, legend } = props;
    const option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: legend
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '1%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: xAxis,
        },
        yAxis: {
            type: 'value'
        },
        series: series
    };

    return (
        <ReactEcharts option={option} />
    )
}

export const Graph = GraphComponent