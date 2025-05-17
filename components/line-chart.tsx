"use client";

import {
  CartesianGrid,
  Line,
  LineChart as RechartsLineChart,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

type ChartDataItem = {
  day: string;
  chatgpt: number;
  perplexity: number;
  gemini: number;
};

type LineChartComponentProps = {
  data: ChartDataItem[];
};

export function LineChartComponent({ data }: LineChartComponentProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Daily AI Visits</CardTitle>
        <CardDescription>Last 30 days</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RechartsLineChart data={data}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="day"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value: string) => {
                  const date = new Date(value);
                  return `${date.getMonth() + 1}/${date.getDate()}`;
                }}
              />
              <Tooltip
                cursor={false}
                content={({ active, payload }) => {
                  if (!active || !payload?.length) return null;
                  return (
                    <div className="rounded-lg border bg-background p-2 shadow-sm">
                      <div className="grid grid-cols-2 gap-2">
                        {payload.map((entry) => (
                          <div key={entry.name}>
                            <p className="text-sm font-medium">{entry.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {entry.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                }}
              />
              <Line
                type="monotone"
                dataKey="chatgpt"
                stroke="#6366f1"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="perplexity"
                stroke="#8b5cf6"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="gemini"
                stroke="#d946ef"
                strokeWidth={2}
                dot={false}
              />
            </RechartsLineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Showing AI visit trends <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Daily visits for the last 30 days
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}