import { Header } from "@/components/layout/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <Header />

      <main className="p-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
              <p className="text-gray-600">Cross-stakeholder insights and supply chain analytics</p>
            </div>
            <div className="flex items-center gap-4">
              <Select defaultValue="30days">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7days">Last 7 days</SelectItem>
                  <SelectItem value="30days">Last 30 days</SelectItem>
                  <SelectItem value="90days">Last 90 days</SelectItem>
                  <SelectItem value="1year">Last year</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">Export Report</Button>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Batches Processed</CardTitle>
                <span className="material-symbols-outlined text-[#17cf17]">inventory_2</span>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,247</div>
                <p className="text-xs text-muted-foreground">+12% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Supply Chain Efficiency</CardTitle>
                <span className="material-symbols-outlined text-[#17cf17]">trending_up</span>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">94.2%</div>
                <p className="text-xs text-muted-foreground">+2.1% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Quality Pass Rate</CardTitle>
                <span className="material-symbols-outlined text-[#17cf17]">verified</span>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">96.8%</div>
                <p className="text-xs text-muted-foreground">+0.5% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Traceability Coverage</CardTitle>
                <span className="material-symbols-outlined text-[#17cf17]">track_changes</span>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">99.1%</div>
                <p className="text-xs text-muted-foreground">+0.3% from last month</p>
              </CardContent>
            </Card>
          </div>

          {/* Charts and Visualizations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Supply Chain Flow */}
            <Card>
              <CardHeader>
                <CardTitle>Supply Chain Flow</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Flow visualization */}
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
                        <span className="material-symbols-outlined text-green-600">agriculture</span>
                      </div>
                      <p className="text-sm font-medium">Farmers</p>
                      <p className="text-xs text-gray-500">156 Active</p>
                    </div>
                    <div className="flex-1 h-0.5 bg-gray-200 mx-4"></div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                        <span className="material-symbols-outlined text-blue-600">factory</span>
                      </div>
                      <p className="text-sm font-medium">Processing</p>
                      <p className="text-xs text-gray-500">23 Facilities</p>
                    </div>
                    <div className="flex-1 h-0.5 bg-gray-200 mx-4"></div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                        <span className="material-symbols-outlined text-purple-600">precision_manufacturing</span>
                      </div>
                      <p className="text-sm font-medium">Manufacturing</p>
                      <p className="text-xs text-gray-500">12 Units</p>
                    </div>
                  </div>

                  {/* Volume metrics */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">2,450 kg</p>
                      <p className="text-xs text-gray-500">Raw Materials</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-600">2,205 kg</p>
                      <p className="text-xs text-gray-500">Processed</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-purple-600">1,980 kg</p>
                      <p className="text-xs text-gray-500">Final Products</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quality Metrics */}
            <Card>
              <CardHeader>
                <CardTitle>Quality Metrics Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { test: "Heavy Metals", passed: 98, failed: 2, total: 100 },
                    { test: "Pesticide Residue", passed: 94, failed: 6, total: 100 },
                    { test: "Microbial", passed: 96, failed: 4, total: 100 },
                    { test: "DNA Barcoding", passed: 99, failed: 1, total: 100 },
                    { test: "Moisture Content", passed: 92, failed: 8, total: 100 },
                  ].map((metric) => (
                    <div key={metric.test} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{metric.test}</span>
                        <span className="text-sm text-gray-500">{metric.passed}% pass rate</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: `${metric.passed}%` }}></div>
                        </div>
                        <span className="text-xs text-gray-500">{metric.total} tests</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Regional Distribution and Top Herbs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Regional Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { region: "Karnataka", batches: 342, percentage: 28 },
                    { region: "Kerala", batches: 298, percentage: 24 },
                    { region: "Tamil Nadu", batches: 256, percentage: 21 },
                    { region: "Andhra Pradesh", batches: 189, percentage: 15 },
                    { region: "Maharashtra", batches: 162, percentage: 12 },
                  ].map((region) => (
                    <div key={region.region} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-[#17cf17] rounded-full"></div>
                        <span className="font-medium">{region.region}</span>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{region.batches}</p>
                        <p className="text-xs text-gray-500">{region.percentage}%</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Top Processed Herbs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { herb: "Ashwagandha", volume: "485 kg", trend: "+15%" },
                    { herb: "Brahmi", volume: "342 kg", trend: "+8%" },
                    { herb: "Tulsi", volume: "298 kg", trend: "+12%" },
                    { herb: "Triphala", volume: "256 kg", trend: "+5%" },
                    { herb: "Neem", volume: "189 kg", trend: "-2%" },
                  ].map((herb) => (
                    <div key={herb.herb} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{herb.herb}</p>
                        <p className="text-sm text-gray-500">{herb.volume}</p>
                      </div>
                      <Badge variant={herb.trend.startsWith("+") ? "default" : "secondary"}>{herb.trend}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Compliance and Alerts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Compliance Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600">96.8%</div>
                    <p className="text-sm text-gray-500">Overall Compliance</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Organic Certified</span>
                      <span className="text-sm font-medium">89%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">GMP Compliant</span>
                      <span className="text-sm font-medium">94%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">HACCP Certified</span>
                      <span className="text-sm font-medium">87%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Recent Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 border border-red-200 bg-red-50 rounded-lg">
                    <span className="material-symbols-outlined text-red-600 text-sm">error</span>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-red-800">Quality Alert - Batch ASH-2023-1156</p>
                      <p className="text-xs text-red-700">
                        Pesticide levels exceed threshold. Immediate review required.
                      </p>
                    </div>
                    <span className="text-xs text-red-600">2h ago</span>
                  </div>

                  <div className="flex items-start gap-3 p-3 border border-yellow-200 bg-yellow-50 rounded-lg">
                    <span className="material-symbols-outlined text-yellow-600 text-sm">warning</span>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-yellow-800">Supply Chain Delay</p>
                      <p className="text-xs text-yellow-700">Processing facility in Kerala reporting 2-day delay.</p>
                    </div>
                    <span className="text-xs text-yellow-600">4h ago</span>
                  </div>

                  <div className="flex items-start gap-3 p-3 border border-blue-200 bg-blue-50 rounded-lg">
                    <span className="material-symbols-outlined text-blue-600 text-sm">info</span>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-blue-800">New Certification</p>
                      <p className="text-xs text-blue-700">Green Valley Processing received organic certification.</p>
                    </div>
                    <span className="text-xs text-blue-600">1d ago</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
