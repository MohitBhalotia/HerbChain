import { Sidebar } from "@/components/layout/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function BatchIntakePage() {
  return (
    <div className="flex h-screen w-full bg-gray-50/50">
      <Sidebar type="processing" />

      <main className="flex-1 p-8">
        <div className="max-w-2xl mx-auto space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Batch Intake</h1>
            <p className="text-gray-600">Register new batches for processing</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>New Batch Registration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="batchId">Batch ID</Label>
                  <Input id="batchId" placeholder="Auto-generated" disabled />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="qrCode">QR Code</Label>
                  <div className="relative">
                    <Input id="qrCode" placeholder="Scan or enter QR code" className="pr-10" />
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                      qr_code_scanner
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="herb">Herb Species</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select herb" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ashwagandha">Ashwagandha</SelectItem>
                      <SelectItem value="brahmi">Brahmi</SelectItem>
                      <SelectItem value="tulsi">Tulsi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity (kg)</Label>
                  <Input id="quantity" type="number" placeholder="0.0" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="farmer">Farmer/Supplier</Label>
                <Input id="farmer" placeholder="Farmer name or ID" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="harvestDate">Harvest Date</Label>
                  <Input id="harvestDate" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="receiveDate">Receive Date</Label>
                  <Input id="receiveDate" type="date" />
                </div>
              </div>

              <Button className="w-full bg-[#17cf17] hover:bg-[#15b315]">Register Batch</Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
