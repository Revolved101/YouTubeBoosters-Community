"use client"

import * as React from "react"

interface ChartProps {
  data: any[]
  index: string
  categories: string[]
  colors: string[]
  valueFormatter?: (value: number) => string
  yAxisWidth?: number
}

const BarChart = React.forwardRef<HTMLDivElement, ChartProps>(
  ({ data, index, categories, colors, valueFormatter, yAxisWidth }, ref) => {
    return (
      <div>
        BarChart component - data: {JSON.stringify(data)}, index: {index}, categories: {JSON.stringify(categories)},
        colors: {JSON.stringify(colors)}, valueFormatter: {valueFormatter?.toString()}, yAxisWidth: {yAxisWidth}
      </div>
    )
  },
)
BarChart.displayName = "BarChart"

const LineChart = React.forwardRef<HTMLDivElement, ChartProps>(
  ({ data, index, categories, colors, valueFormatter, yAxisWidth }, ref) => {
    return (
      <div>
        LineChart component - data: {JSON.stringify(data)}, index: {index}, categories: {JSON.stringify(categories)},
        colors: {JSON.stringify(colors)}, valueFormatter: {valueFormatter?.toString()}, yAxisWidth: {yAxisWidth}
      </div>
    )
  },
)
LineChart.displayName = "LineChart"

interface PieChartProps {
  data: any[]
  index: string
  category: string
  valueFormatter?: (value: number) => string
}

const PieChart = React.forwardRef<HTMLDivElement, PieChartProps>(({ data, index, category, valueFormatter }, ref) => {
  return (
    <div>
      PieChart component - data: {JSON.stringify(data)}, index: {index}, category: {category}, valueFormatter:{" "}
      {valueFormatter?.toString()}
    </div>
  )
})
PieChart.displayName = "PieChart"

export { BarChart, LineChart, PieChart }
