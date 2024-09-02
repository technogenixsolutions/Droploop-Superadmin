'use client';

import * as React from 'react';
import { CartesianGrid, Area, AreaChart, XAxis, YAxis } from 'recharts';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

const chartData = [
  { date: '2024-06-24', sales: 2, cost: 180 },
  { date: '2024-06-25', sales: 1, cost: 190 },
  { date: '2024-06-26', sales: 4, cost: 380 },
  { date: '2024-06-27', sales: 8, cost: 490 },
  { date: '2024-06-28', sales: 25, cost: 200 },
  { date: '2024-06-29', sales: 3, cost: 160 },
  { date: '2024-06-30', sales: 6, cost: 400 },
];

const chartConfig = {
  sales: {
    label: 'sales',
    color: '#8472ed',
  },
  cost: {
    label: 'cost',
    color: '#8472ed',
  },
} satisfies ChartConfig;

export function DashboardCharts() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>('sales');

  return (
    <Card className="mt-0 pt-0">
      <CardHeader className="flex flex-col items-end space-y-0 p-0 px-6 sm:flex-row">
        <div className="mb-10 flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Fulfilled Order</CardTitle>
        </div>
        <div className="flex">
          {['sales', 'cost'].map((key) => {
            const chart = key as keyof typeof chartConfig;
            return (
              <div key={chart} className="ml-6 flex items-center gap-2 pb-8">
                <button
                  aria-label="chart"
                  type="button"
                  data-active={activeChart === chart}
                  className="h-3 w-3 rounded-full bg-[#b8c2cc] data-[active=true]:bg-[#8472ed]"
                  onClick={() => setActiveChart(chart)}
                />
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
              </div>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[300px] w-full"
        >
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="sales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8472ed" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8472ed" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="cost" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8472ed" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8472ed" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                });
              }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickCount={2}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                    });
                  }}
                  indicator="dot"
                />
              }
              formatter={(value) => {
                const symbol = activeChart === 'cost' ? '$' : '#';
                return activeChart === 'cost'
                  ? `Cost: ${symbol} ${value}`
                  : `Sales: ${value}`;
              }}
            />
            <Area
              dataKey={activeChart}
              type="natural"
              fill={`url(#${activeChart})`}
              stroke="#8472ed"
              strokeWidth={2}
              dot={false}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
