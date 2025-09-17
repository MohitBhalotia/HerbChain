import { Sidebar } from "@/components/layout/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function ManufacturerPage() {
  return (
    <div className="flex h-screen w-full bg-gray-50/50">
      <Sidebar type="manufacturer" />

      <main className="flex-1 p-8">
        <div className="space-y-8">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Manufacturing Dashboard</h1>
            <p className="text-gray-600">Monitor production, inventory, and distribution</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Batches</CardTitle>
                <span className="material-symbols-outlined text-[#17cf17]">inventory_2</span>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">+2 from yesterday</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Production Volume</CardTitle>
                <span className="material-symbols-outlined text-[#17cf17]">precision_manufacturing</span>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,250 kg</div>
                <p className="text-xs text-muted-foreground">This month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Quality Score</CardTitle>
                <span className="material-symbols-outlined text-[#17cf17]">verified</span>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">98.5%</div>
                <p className="text-xs text-muted-foreground">+0.5% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Shipments</CardTitle>
                <span className="material-symbols-outlined text-[#17cf17]">local_shipping</span>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">156</div>
                <p className="text-xs text-muted-foreground">This week</p>
              </CardContent>
            </Card>
          </div>

          {/* Production Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Recent Production Batches</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: "MFG-001",
                      product: "Ashwagandha Powder",
                      quantity: "50 kg",
                      status: "In Progress",
                      completion: "75%",
                    },
                    {
                      id: "MFG-002",
                      product: "Brahmi Extract",
                      quantity: "25 kg",
                      status: "Quality Check",
                      completion: "90%",
                    },
                    {
                      id: "MFG-003",
                      product: "Tulsi Capsules",
                      quantity: "10,000 units",
                      status: "Packaging",
                      completion: "95%",
                    },
                    {
                      id: "MFG-004",
                      product: "Triphala Powder",
                      quantity: "75 kg",
                      status: "Processing",
                      completion: "45%",
                    },
                  ].map((batch) => (
                    <div key={batch.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <p className="font-medium">{batch.product}</p>
                        <p className="text-sm text-gray-500">
                          {batch.id} • {batch.quantity}
                        </p>
                      </div>
                      <div className="text-right space-y-1">
                        <Badge variant={batch.status === "In Progress" ? "default" : "secondary"}>{batch.status}</Badge>
                        <p className="text-sm text-gray-500">{batch.completion}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Inventory Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { herb: "Ashwagandha Root", stock: "250 kg", status: "Good", level: 85 },
                    { herb: "Brahmi Leaves", stock: "120 kg", status: "Low", level: 25 },
                    { herb: "Tulsi Leaves", stock: "180 kg", status: "Good", level: 70 },
                    { herb: "Triphala Mix", stock: "95 kg", status: "Critical", level: 15 },
                  ].map((item) => (
                    <div key={item.herb} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{item.herb}</span>
                        <span className="text-sm text-gray-500">{item.stock}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              item.level > 50 ? "bg-green-500" : item.level > 25 ? "bg-yellow-500" : "bg-red-500"
                            }`}
                            style={{ width: `${item.level}%` }}
                          ></div>
                        </div>
                        <Badge
                          variant={
                            item.status === "Good" ? "default" : item.status === "Low" ? "secondary" : "destructive"
                          }
                          className="text-xs"
                        >
                          {item.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quality Control */}
          <Card>
            <CardHeader>
              <CardTitle>Quality Control Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 border border-yellow-200 bg-yellow-50 rounded-lg">
                  <span className="material-symbols-outlined text-yellow-600">warning</span>
                  <div>
                    <p className="font-medium text-yellow-800">Batch MFG-002 Requires Attention</p>
                    <p className="text-sm text-yellow-700">
                      Moisture content slightly elevated. Review drying process.
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="ml-auto bg-transparent">
                    Review
                  </Button>
                </div>

                <div className="flex items-start gap-4 p-4 border border-green-200 bg-green-50 rounded-lg">
                  <span className="material-symbols-outlined text-green-600">check_circle</span>
                  <div>
                    <p className="font-medium text-green-800">Batch MFG-001 Passed Quality Check</p>
                    <p className="text-sm text-green-700">
                      All parameters within acceptable range. Ready for packaging.
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="ml-auto bg-transparent">
                    View Report
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
