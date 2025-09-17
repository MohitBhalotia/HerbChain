import { Sidebar } from "@/components/layout/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function LaboratoryPage() {
  return (
    <div className="flex h-screen w-full bg-gray-50/50">
      <Sidebar type="laboratory" />

      <main className="flex-1 p-8">
        <div className="space-y-8">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Laboratory Portal</h1>
            <p className="text-gray-600">Quality testing, analysis, and certification management</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Tests</CardTitle>
                <span className="material-symbols-outlined text-[#17cf17]">science</span>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">18</div>
                <p className="text-xs text-muted-foreground">+3 new today</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Completed Tests</CardTitle>
                <span className="material-symbols-outlined text-[#17cf17]">assignment_turned_in</span>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">142</div>
                <p className="text-xs text-muted-foreground">This month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pass Rate</CardTitle>
                <span className="material-symbols-outlined text-[#17cf17]">verified</span>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">94.2%</div>
                <p className="text-xs text-muted-foreground">+1.2% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Certificates Issued</CardTitle>
                <span className="material-symbols-outlined text-[#17cf17]">workspace_premium</span>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">89</div>
                <p className="text-xs text-muted-foreground">This month</p>
              </CardContent>
            </Card>
          </div>

          {/* Testing Queue and Results */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Testing Queue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: "LAB-001",
                      sample: "Ashwagandha Root",
                      test: "Heavy Metals",
                      priority: "High",
                      eta: "2 hours",
                    },
                    { id: "LAB-002", sample: "Brahmi Extract", test: "Microbial", priority: "Medium", eta: "4 hours" },
                    {
                      id: "LAB-003",
                      sample: "Tulsi Leaves",
                      test: "Pesticide Residue",
                      priority: "High",
                      eta: "6 hours",
                    },
                    {
                      id: "LAB-004",
                      sample: "Triphala Powder",
                      test: "DNA Barcoding",
                      priority: "Low",
                      eta: "24 hours",
                    },
                  ].map((test) => (
                    <div key={test.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <p className="font-medium">{test.sample}</p>
                        <p className="text-sm text-gray-500">
                          {test.id} • {test.test}
                        </p>
                      </div>
                      <div className="text-right space-y-1">
                        <Badge
                          variant={
                            test.priority === "High"
                              ? "destructive"
                              : test.priority === "Medium"
                                ? "default"
                                : "secondary"
                          }
                        >
                          {test.priority}
                        </Badge>
                        <p className="text-sm text-gray-500">ETA: {test.eta}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Test Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: "LAB-097",
                      sample: "Ashwagandha Powder",
                      test: "Purity Analysis",
                      result: "Pass",
                      score: "98.5%",
                    },
                    { id: "LAB-098", sample: "Brahmi Capsules", test: "Heavy Metals", result: "Pass", score: "99.2%" },
                    { id: "LAB-099", sample: "Tulsi Extract", test: "Microbial", result: "Fail", score: "85.1%" },
                    { id: "LAB-100", sample: "Triphala Mix", test: "Pesticide", result: "Pass", score: "96.8%" },
                  ].map((result) => (
                    <div key={result.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <p className="font-medium">{result.sample}</p>
                        <p className="text-sm text-gray-500">
                          {result.id} • {result.test}
                        </p>
                      </div>
                      <div className="text-right space-y-1">
                        <Badge variant={result.result === "Pass" ? "default" : "destructive"}>{result.result}</Badge>
                        <p className="text-sm text-gray-500">{result.score}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Equipment Status */}
          <Card>
            <CardHeader>
              <CardTitle>Equipment Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: "HPLC System", status: "Online", utilization: "85%", nextMaintenance: "Dec 15" },
                  { name: "GC-MS", status: "Online", utilization: "72%", nextMaintenance: "Jan 8" },
                  { name: "Microscope", status: "Maintenance", utilization: "0%", nextMaintenance: "Nov 30" },
                  { name: "Spectrophotometer", status: "Online", utilization: "91%", nextMaintenance: "Dec 22" },
                  { name: "PCR Machine", status: "Online", utilization: "45%", nextMaintenance: "Jan 15" },
                  { name: "Incubator", status: "Online", utilization: "68%", nextMaintenance: "Dec 5" },
                ].map((equipment) => (
                  <div key={equipment.name} className="p-4 border rounded-lg space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{equipment.name}</h4>
                      <Badge variant={equipment.status === "Online" ? "default" : "secondary"}>
                        {equipment.status}
                      </Badge>
                    </div>
                    <div className="space-y-1 text-sm text-gray-500">
                      <p>Utilization: {equipment.utilization}</p>
                      <p>Next Maintenance: {equipment.nextMaintenance}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
