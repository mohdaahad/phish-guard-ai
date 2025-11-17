import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { StatsCard } from "@/components/StatsCard";
import { Shield, AlertTriangle, CheckCircle2, Activity, Globe, XCircle } from "lucide-react";
import { api } from "@/lib/api";
import { DashboardStats, UrlResult } from "@/types/phishing";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

export default function Dashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    total_urls: 0,
    total_phishing: 0,
    total_safe: 0,
    total_suspicious: 0,
    total_live: 0,
    total_dead: 0,
  });

  const { data: results } = useQuery<UrlResult[]>({
    queryKey: ["results"],
    queryFn: api.getResults,
    refetchInterval: 5000,
  });

  useEffect(() => {
    if (results) {
      const phishing = results.filter(r => r.classification === "PHISHING").length;
      const safe = results.filter(r => r.classification === "SAFE").length;
      const suspicious = results.filter(r => r.classification === "SUSPICIOUS").length;
      
      setStats({
        total_urls: results.length,
        total_phishing: phishing,
        total_safe: safe,
        total_suspicious: suspicious,
        total_live: results.length,
        total_dead: 0,
      });
    }
  }, [results]);

  const pieData = [
    { name: "Phishing", value: stats.total_phishing, color: "hsl(var(--destructive))" },
    { name: "Safe", value: stats.total_safe, color: "hsl(var(--success))" },
    { name: "Suspicious", value: stats.total_suspicious, color: "hsl(var(--warning))" },
  ];

  const barData = pieData.map(item => ({
    name: item.name,
    count: item.value,
  }));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Monitor phishing detection in real-time</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <StatsCard
          title="Total URLs"
          value={stats.total_urls}
          icon={Globe}
          variant="default"
        />
        <StatsCard
          title="Phishing Detected"
          value={stats.total_phishing}
          icon={AlertTriangle}
          variant="destructive"
        />
        <StatsCard
          title="Safe Sites"
          value={stats.total_safe}
          icon={CheckCircle2}
          variant="success"
        />
        <StatsCard
          title="Suspicious"
          value={stats.total_suspicious}
          icon={Shield}
          variant="warning"
        />
        <StatsCard
          title="Live Sites"
          value={stats.total_live}
          icon={Activity}
          variant="success"
        />
        <StatsCard
          title="Dead Sites"
          value={stats.total_dead}
          icon={XCircle}
          variant="default"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Classification Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Detection Count</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barData}>
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "0.5rem"
                  }} 
                />
                <Bar dataKey="count" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
