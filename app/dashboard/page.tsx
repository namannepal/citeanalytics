import { TrendingUpIcon, Dot } from "lucide-react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LineChartComponent } from "@/components/line-chart";
import { IconRipple } from "@/components/icon-ripple";

export default function DashboardPage() {
  // Sample data for the chart
  const chartData = [
    { day: "2024-02-01", chatgpt: 5, perplexity: 3, gemini: 2 },
    { day: "2024-02-02", chatgpt: 8, perplexity: 4, gemini: 3 },
    { day: "2024-02-03", chatgpt: 6, perplexity: 5, gemini: 4 },
    // Add more sample data as needed
  ];

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-x-3">
            <IconRipple
              icon={Dot}
              iconSize={16}
              inset="2px"
              iconColor="#6c29d9"
              borderColor="#6c29d9"
            />
            <h2 className="text-xl font-semibold">Analytics Overview</h2>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full">
            <span className="text-sm font-medium">example.com</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="relative">
            <CardDescription>Total Records</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums">
              1,234
            </CardTitle>
            <div className="absolute right-4 top-4">
              <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
                <TrendingUpIcon className="size-3" />
                Live
              </Badge>
            </div>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              Total AI visits tracked
            </div>
            <div className="text-muted-foreground">
              All-time records in the database
            </div>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-8">
        <LineChartComponent data={chartData} />
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">AI Visits Breakdown</h2>
        <div className="bg-card rounded-lg border p-4">
          <div className="grid grid-cols-4 gap-4 font-medium text-sm mb-4">
            <div>Platform</div>
            <div>AI Visits</div>
            <div>Last visited</div>
            <div>Pages visited</div>
          </div>
          {/* Sample data row */}
          <div className="grid grid-cols-4 gap-4 text-sm py-3 border-t">
            <div className="flex items-center gap-2">ChatGPT</div>
            <div>156</div>
            <div>2024-02-14 15:30</div>
            <div>23</div>
          </div>
        </div>
      </div>
    </div>
  );
}