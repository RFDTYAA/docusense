import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function AnalyticsPage() {
  // === DATA REALISTIS ===
  const stats = {
    totalPapers: 343291,
    categories: 7,
    searchesPerformed: 1240000,
    avgRelevanceScore: 9.42,
  };

  // Search Volume Trends
  const searchTrends = [
    { month: "Jan", searches: 4020 },
    { month: "Feb", searches: 3050 },
    { month: "Mar", searches: 4980 },
    { month: "Apr", searches: 4520 },
    { month: "May", searches: 6050 },
    { month: "Jun", searches: 8200 },
  ];

  // Papers Indexed by Year
  const papersByYear = [
    { year: "2017", count: 12 },
    { year: "2018", count: 28 },
    { year: "2019", count: 47 },
    { year: "2020", count: 82 },
    { year: "2021", count: 134 },
    { year: "2022", count: 168 },
    { year: "2023", count: 245 },
    { year: "2024", count: 320 },
  ];

  // Distribution by Category
  const categoryDistribution = [
    { name: "AI", value: 28, color: "#3b82f6" },
    { name: "ML", value: 32, color: "#22d3ee" },
    { name: "NLP", value: 22, color: "#6366f1" },
    { name: "Vision", value: 12, color: "#4ade80" },
    { name: "Robotics", value: 6, color: "#f59e0b" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            Analytics Dashboard
          </h1>
          <p className="text-gray-600 mt-1">
            Platform performance and content metrics
          </p>
        </div>
        <div className="px-4 py-1.5 bg-white border border-gray-200 rounded-2xl text-sm text-gray-600">
          Last 30 Days
        </div>
      </div>

      {/* Stats Cards - Sekarang pakai object stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-3xl p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500">Total Papers</p>
              <p className="text-4xl font-semibold mt-1 tracking-tighter">
                {stats.totalPapers.toLocaleString()}
              </p>
              <p className="text-green-600 text-sm mt-2 flex items-center gap-1">
                ↑ +12.5% <span className="text-gray-400">from last month</span>
              </p>
            </div>
            <div className="w-11 h-11 bg-blue-100 rounded-2xl flex items-center justify-center">
              📚
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-3xl p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500">Categories</p>
              <p className="text-4xl font-semibold mt-1 tracking-tighter">
                {stats.categories}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Active research domains
              </p>
            </div>
            <div className="w-11 h-11 bg-cyan-100 rounded-2xl flex items-center justify-center">
              📊
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-3xl p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500">Searches Performed</p>
              <p className="text-4xl font-semibold mt-1 tracking-tighter">
                {(stats.searchesPerformed / 1000000).toFixed(1)}M
              </p>
              <p className="text-green-600 text-sm mt-2 flex items-center gap-1">
                ↑ +24.1% <span className="text-gray-400">from last month</span>
              </p>
            </div>
            <div className="w-11 h-11 bg-purple-100 rounded-2xl flex items-center justify-center">
              🔍
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-3xl p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500">Avg Relevance Score</p>
              <p className="text-4xl font-semibold mt-1 tracking-tighter">
                {stats.avgRelevanceScore}
              </p>
              <p className="text-green-600 text-sm mt-2 flex items-center gap-1">
                ↑ +0.2 from last month
              </p>
            </div>
            <div className="w-11 h-11 bg-yellow-100 rounded-2xl flex items-center justify-center">
              ⭐
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Search Volume Trends */}
        <div className="bg-white border border-gray-200 rounded-3xl p-6">
          <h3 className="font-semibold mb-4">Search Volume Trends</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={searchTrends}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="natural"
                  dataKey="searches"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={{ fill: "#3b82f6", strokeWidth: 2, r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Papers Indexed by Year */}
        <div className="bg-white border border-gray-200 rounded-3xl p-6">
          <h3 className="font-semibold mb-4">Papers Indexed by Year</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={papersByYear}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#3b82f6" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Distribution by Category */}
        <div className="bg-white border border-gray-200 rounded-3xl p-6 lg:col-span-2">
          <h3 className="font-semibold mb-4">Distribution by Category</h3>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="w-72 h-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={90}
                    outerRadius={130}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {categoryDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-4">
              {categoryDistribution.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <div className="flex justify-between w-48">
                    <span className="text-gray-700">{item.name}</span>
                    <span className="font-semibold text-gray-900">
                      {item.value}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
