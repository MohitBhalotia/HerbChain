import { Header } from "@/components/layout/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function FarmerCollectionPage() {
  return (
    <div className="min-h-screen bg-[#F9F9F7]">
      <Header />

      <main className="flex-1 flex justify-center py-10 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-lg space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#111811] tracking-tight">New Collection Event</h2>
            <p className="mt-2 text-sm text-[#638863]">Enter the details for the new herb collection.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm space-y-6 border border-[#E5E5E2]">
            <form className="space-y-6">
              {/* Herb Species */}
              <div className="space-y-2">
                <Label htmlFor="species" className="text-sm font-medium text-[#111811]">
                  Herb Species
                </Label>
                <Select>
                  <SelectTrigger className="form-select w-full h-12 rounded-lg border-[#DCE5DC] bg-white text-[#111811] focus:ring-2 focus:ring-[#99C699] focus:border-[#99C699]">
                    <SelectValue placeholder="Select Species" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ashwagandha">Ashwagandha</SelectItem>
                    <SelectItem value="brahmi">Brahmi</SelectItem>
                    <SelectItem value="tulsi">Tulsi</SelectItem>
                    <SelectItem value="triphala">Triphala</SelectItem>
                    <SelectItem value="neem">Neem</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* GPS Coordinates */}
              <div className="space-y-2">
                <Label htmlFor="gps" className="text-sm font-medium text-[#111811]">
                  GPS Coordinates
                </Label>
                <div className="relative">
                  <Input
                    id="gps"
                    placeholder="e.g., 28.6139° N, 77.2090° E"
                    className="w-full h-12 rounded-lg border-[#DCE5DC] bg-white text-[#111811] pr-12 focus:ring-2 focus:ring-[#99C699] focus:border-[#99C699]"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-[#638863] hover:text-[#2C5F2D]"
                  >
                    <span className="material-symbols-outlined">my_location</span>
                  </button>
                </div>
              </div>

              {/* Timestamp */}
              <div className="space-y-2">
                <Label htmlFor="timestamp" className="text-sm font-medium text-[#111811]">
                  Timestamp
                </Label>
                <Input
                  id="timestamp"
                  type="datetime-local"
                  placeholder="Select date and time"
                  className="w-full h-12 rounded-lg border-[#DCE5DC] bg-white text-[#111811] focus:ring-2 focus:ring-[#99C699] focus:border-[#99C699]"
                />
              </div>

              {/* Quality Metrics */}
              <div className="space-y-2">
                <Label htmlFor="quality-metrics" className="text-sm font-medium text-[#111811]">
                  Quality Metrics
                </Label>
                <Textarea
                  id="quality-metrics"
                  placeholder="e.g., Leaf color, size, any damage"
                  rows={4}
                  className="w-full rounded-lg border-[#DCE5DC] bg-white text-[#111811] focus:ring-2 focus:ring-[#99C699] focus:border-[#99C699]"
                />
              </div>

              {/* Photos Upload */}
              <div className="space-y-4">
                <Label className="text-sm font-medium text-[#111811]">Photos</Label>
                <div className="flex flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-[#DCE5DC] p-8 text-center">
                  <div className="text-[#99C699]">
                    <span className="material-symbols-outlined text-5xl">add_a_photo</span>
                  </div>
                  <p className="text-sm font-medium text-[#111811]">Drag & drop photos or</p>
                  <Button
                    type="button"
                    variant="outline"
                    className="inline-flex items-center gap-2 bg-[#F0F4F0] text-[#111811] hover:bg-[#E5E5E2] border-[#DCE5DC]"
                  >
                    <span className="material-symbols-outlined text-lg">upload_file</span>
                    <span>Upload from device</span>
                  </Button>
                </div>
              </div>

              {/* Additional Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="quantity" className="text-sm font-medium text-[#111811]">
                    Quantity (kg)
                  </Label>
                  <Input
                    id="quantity"
                    type="number"
                    placeholder="0.0"
                    className="w-full h-12 rounded-lg border-[#DCE5DC] bg-white text-[#111811] focus:ring-2 focus:ring-[#99C699] focus:border-[#99C699]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="moisture" className="text-sm font-medium text-[#111811]">
                    Moisture %
                  </Label>
                  <Input
                    id="moisture"
                    type="number"
                    placeholder="0.0"
                    className="w-full h-12 rounded-lg border-[#DCE5DC] bg-white text-[#111811] focus:ring-2 focus:ring-[#99C699] focus:border-[#99C699]"
                  />
                </div>
              </div>

              {/* Weather Conditions */}
              <div className="space-y-2">
                <Label htmlFor="weather" className="text-sm font-medium text-[#111811]">
                  Weather Conditions
                </Label>
                <Select>
                  <SelectTrigger className="form-select w-full h-12 rounded-lg border-[#DCE5DC] bg-white text-[#111811] focus:ring-2 focus:ring-[#99C699] focus:border-[#99C699]">
                    <SelectValue placeholder="Select Weather" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sunny">Sunny</SelectItem>
                    <SelectItem value="cloudy">Cloudy</SelectItem>
                    <SelectItem value="rainy">Rainy</SelectItem>
                    <SelectItem value="humid">Humid</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  className="flex w-full items-center justify-center h-12 bg-[#2C5F2D] text-white font-bold hover:bg-[#1A471A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2C5F2D] shadow-md hover:shadow-lg"
                >
                  <span className="truncate">Submit Collection Event</span>
                  <span className="material-symbols-outlined ml-2">arrow_forward</span>
                </Button>
              </div>
            </form>
          </div>

          {/* Recent Collections */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E5E5E2]">
            <h3 className="text-lg font-semibold text-[#111811] mb-4">Recent Collections</h3>
            <div className="space-y-3">
              {[
                { species: "Ashwagandha", quantity: "25 kg", date: "Nov 20, 2023", status: "Verified" },
                { species: "Brahmi", quantity: "18 kg", date: "Nov 18, 2023", status: "Pending" },
                { species: "Tulsi", quantity: "32 kg", date: "Nov 15, 2023", status: "Verified" },
              ].map((collection, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-[#E5E5E2] rounded-lg">
                  <div>
                    <p className="font-medium text-[#111811]">{collection.species}</p>
                    <p className="text-sm text-[#638863]">
                      {collection.quantity} • {collection.date}
                    </p>
                  </div>
                  <div
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      collection.status === "Verified" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {collection.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
