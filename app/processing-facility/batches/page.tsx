import { Sidebar } from "@/components/layout/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function BatchesPage() {
  return (
    <div className="flex h-screen w-full bg-gray-50/50">
      <Sidebar type="processing" />

      <main className="flex-1 p-8">
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">All Batches</h1>
              <p className="text-gray-600">Monitor and manage processing batches</p>
            </div>
            <div className="flex items-center gap-4">
              <Input placeholder="Search batches..." className="w-64" />
              <Button variant="outline">Filter</Button>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Processing Batches</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Batch ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Herb
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Quantity
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Progress
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[
                      {
                        id: "20231026-001",
                        herb: "Ashwagandha",
                        quantity: "50 kg",
                        status: "Processing",
                        progress: "75%",
                      },
                      {
                        id: "20231026-002",
                        herb: "Brahmi",
                        quantity: "30 kg",
                        status: "Quality Check",
                        progress: "90%",
                      },
                      { id: "20231025-003", herb: "Tulsi", quantity: "45 kg", status: "Completed", progress: "100%" },
                      { id: "20231025-004", herb: "Triphala", quantity: "25 kg", status: "Drying", progress: "45%" },
                    ].map((batch) => (
                      <tr key={batch.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{batch.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{batch.herb}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{batch.quantity}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Badge variant={batch.status === "Completed" ? "default" : "secondary"}>{batch.status}</Badge>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{batch.progress}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
