import { Sidebar } from "@/components/layout/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProcessingFacilityPage() {
  return (
    <div className="flex h-screen w-full bg-gray-50/50">
      <Sidebar type="processing" />

      <main className="flex-1 p-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Column - Batch Intake */}
          <div className="lg:col-span-1">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800">Batch Intake</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Scan QR Code</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      qr_code_scanner
                    </span>
                    <Input
                      placeholder="Scan or enter QR code"
                      className="pl-10 h-12 bg-white border-gray-300 focus:border-[#17cf17] focus:ring-[#17cf17]"
                    />
                  </div>
                </div>
                <Button className="w-full h-11 bg-[#17cf17] hover:bg-[#15b315] text-white font-semibold">
                  Add Batch
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Batch Details */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {/* Header */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Batch Details</h1>
                <p className="text-sm text-gray-500">Batch ID: 20231026-001</p>
              </div>

              {/* Processing Steps */}
              <Card className="shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-xl font-semibold text-gray-800">Processing Steps</CardTitle>
                  <Button variant="outline" size="sm" className="text-xs bg-transparent">
                    Add Step
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-white">
                        <tr>
                          <th className="py-3.5 pl-0 pr-3 text-left text-sm font-semibold text-gray-900">Step</th>
                          <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Description</th>
                          <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Timestamp</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        <tr>
                          <td className="whitespace-nowrap py-4 pl-0 pr-3 text-sm font-medium text-gray-900">Drying</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Initial drying phase</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">2023-10-26 10:00 AM</td>
                        </tr>
                        <tr>
                          <td className="whitespace-nowrap py-4 pl-0 pr-3 text-sm font-medium text-gray-900">
                            Grinding
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Coarse grinding</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">2023-10-26 02:00 PM</td>
                        </tr>
                        <tr>
                          <td className="whitespace-nowrap py-4 pl-0 pr-3 text-sm font-medium text-gray-900">
                            Storage
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            Stored in cool, dry place
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">2023-10-26 06:00 PM</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* Quality Gate Alerts */}
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-800">Quality Gate Alerts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4 rounded-md border border-yellow-200 bg-yellow-50 p-4">
                    <div className="flex size-10 items-center justify-center rounded-full bg-yellow-100 text-yellow-500">
                      <span className="material-symbols-outlined">science</span>
                    </div>
                    <div>
                      <p className="font-medium text-yellow-800">Moisture Alert</p>
                      <p className="text-sm text-yellow-700">Moisture content exceeds threshold (12.5% &gt; 10%)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-md border border-red-200 bg-red-50 p-4">
                    <div className="flex size-10 items-center justify-center rounded-full bg-red-100 text-red-500">
                      <span className="material-symbols-outlined">bug_report</span>
                    </div>
                    <div>
                      <p className="font-medium text-red-800">Pesticide Alert</p>
                      <p className="text-sm text-red-700">
                        Pesticide levels above acceptable limits (0.5ppm &gt; 0.1ppm)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-md border border-red-200 bg-red-50 p-4">
                    <div className="flex size-10 items-center justify-center rounded-full bg-red-100 text-red-500">
                      <span className="material-symbols-outlined">biotech</span>
                    </div>
                    <div>
                      <p className="font-medium text-red-800">DNA Barcode Alert</p>
                      <p className="text-sm text-red-700">DNA barcode mismatch (Expected: Withania somnifera)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Batch Summary */}
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-800">Batch Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Farmer</dt>
                      <dd className="mt-1 text-sm text-gray-900">Rajesh Kumar</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Herb</dt>
                      <dd className="mt-1 text-sm text-gray-900">Ashwagandha</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Quantity</dt>
                      <dd className="mt-1 text-sm text-gray-900">50 kg</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Harvest Date</dt>
                      <dd className="mt-1 text-sm text-gray-900">2023-10-20</dd>
                    </div>
                    <div className="sm:col-span-2">
                      <dt className="text-sm font-medium text-gray-500">Location (Geo-tagged)</dt>
                      <dd className="mt-1 flex items-center gap-2 text-sm text-gray-900">
                        <span className="material-symbols-outlined text-base text-gray-400">location_on</span>
                        <span>Latitude: 28.6139, Longitude: 77.2090</span>
                      </dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
