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

const stats = [
  { label: "Total Papers", value: "343,291", change: "+12.5%" },
  { label: "Categories", value: "7", change: "Active research domains" },
  { label: "Searches Performed", value: "1.2M", change: "+24.1%" },
  {
    label: "Avg Relevance Score",
    value: "9.42",
    change: "+0.2 from last month",
  },
];

const searchVolumeData = [
  { month: "Jan", searches: 4200 },
  { month: "Feb", searches: 3100 },
  { month: "Mar", searches: 5100 },
  { month: "Apr", searches: 4300 },
  { month: "May", searches: 6100 },
  { month: "Jun", searches: 8200 },
];

const papersByYear = [
  { year: "2017", count: 12 },
  { year: "2018", count: 28 },
  { year: "2019", count: 45 },
  { year: "2020", count: 87 },
  { year: "2021", count: 134 },
  { year: "2022", count: 198 },
  { year: "2023", count: 267 },
  { year: "2024", count: 312 },
];

const categoryData = [
  { name: "AI", value: 35, color: "#3b82f6" },
  { name: "ML", value: 28, color: "#10b981" },
  { name: "NLP", value: 18, color: "#8b5cf6" },
  { name: "Vision", value: 12, color: "#f59e0b" },
  { name: "Robotics", value: 7, color: "#ef4444" },
];

export default function AnalyticsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-semibold">Analytics Dashboard</h1>
          <p className="text-gray-600">
            Platform performance and content metrics
          </p>
        </div>
        <div className="text-sm px-4 py-1.5 bg-white border rounded-lg">
          Last 30 Days
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl p-5"
          >
            <div className="text-sm text-gray-500 mb-1">{stat.label}</div>
            <div className="text-3xl font-semibold">{stat.value}</div>
            <div className="text-xs text-green-600 mt-1">{stat.change}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Search Volume Trends */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h3 className="font-semibold mb-4">Search Volume Trends</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={searchVolumeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="searches"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={{ fill: "#3b82f6", r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Papers Indexed by Year */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h3 className="font-semibold mb-4">Papers Indexed by Year</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={papersByYear}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#3b82f6" radius={4} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Distribution by Category */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 lg:col-span-2">
          <h3 className="font-semibold mb-4">Distribution by Category</h3>
          <div className="flex justify-center">
            <div className="h-80 w-full max-w-md">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={130}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4">
            {categoryData.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span>
                  {item.name} ({item.value}%)
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
