import { Sidebar } from "@/components/layout/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function RegulatoryPage() {
  return (
    <div className="flex h-screen w-full bg-gray-50/50">
      <Sidebar type="regulatory" />

      <main className="flex-1 p-8">
        <div className="space-y-8">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Regulatory Portal</h1>
            <p className="text-gray-600">Compliance monitoring and certification management</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Audits</CardTitle>
                <span className="material-symbols-outlined text-[#17cf17]">fact_check</span>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7</div>
                <p className="text-xs text-muted-foreground">2 scheduled this week</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Compliance Score</CardTitle>
                <span className="material-symbols-outlined text-[#17cf17]">rule</span>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">96.8%</div>
                <p className="text-xs text-muted-foreground">+2.1% from last quarter</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Certifications</CardTitle>
                <span className="material-symbols-outlined text-[#17cf17]">verified_user</span>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">23</div>
                <p className="text-xs text-muted-foreground">3 expiring soon</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Violations</CardTitle>
                <span className="material-symbols-outlined text-[#17cf17]">report_problem</span>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
                <p className="text-xs text-muted-foreground">-3 from last month</p>
              </CardContent>
            </Card>
          </div>

          {/* Compliance Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Recent Audit Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      facility: "Green Valley Processing",
                      type: "GMP Audit",
                      score: "94%",
                      status: "Passed",
                      date: "Nov 15",
                    },
                    {
                      facility: "Herbal Extracts Ltd",
                      type: "Quality Audit",
                      score: "89%",
                      status: "Conditional",
                      date: "Nov 12",
                    },
                    {
                      facility: "Nature's Best Mfg",
                      type: "Safety Audit",
                      score: "97%",
                      status: "Passed",
                      date: "Nov 8",
                    },
                    {
                      facility: "Organic Herbs Co",
                      type: "Environmental",
                      score: "85%",
                      status: "Failed",
                      date: "Nov 5",
                    },
                  ].map((audit) => (
                    <div key={audit.facility} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <p className="font-medium">{audit.facility}</p>
                        <p className="text-sm text-gray-500">
                          {audit.type} • {audit.date}
                        </p>
                      </div>
                      <div className="text-right space-y-1">
                        <Badge
                          variant={
                            audit.status === "Passed"
                              ? "default"
                              : audit.status === "Conditional"
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {audit.status}
                        </Badge>
                        <p className="text-sm text-gray-500">{audit.score}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Certification Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      cert: "Organic Certification",
                      holder: "Green Valley Processing",
                      expires: "Mar 2024",
                      status: "Active",
                    },
                    {
                      cert: "GMP Certificate",
                      holder: "Herbal Extracts Ltd",
                      expires: "Jan 2024",
                      status: "Expiring Soon",
                    },
                    { cert: "ISO 9001", holder: "Nature's Best Mfg", expires: "Jun 2024", status: "Active" },
                    { cert: "HACCP Certification", holder: "Organic Herbs Co", expires: "Dec 2023", status: "Expired" },
                  ].map((cert) => (
                    <div key={cert.cert} className="space-y-2 p-4 border rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{cert.cert}</span>
                        <Badge
                          variant={
                            cert.status === "Active"
                              ? "default"
                              : cert.status === "Expiring Soon"
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {cert.status}
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-500">
                        <p>{cert.holder}</p>
                        <p>Expires: {cert.expires}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Compliance Alerts */}
          <Card>
            <CardHeader>
              <CardTitle>Compliance Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 border border-red-200 bg-red-50 rounded-lg">
                  <span className="material-symbols-outlined text-red-600">error</span>
                  <div className="flex-1">
                    <p className="font-medium text-red-800">Critical Violation - Organic Herbs Co</p>
                    <p className="text-sm text-red-700">
                      Environmental audit failed. Immediate corrective action required.
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="ml-auto bg-transparent">
                    Take Action
                  </Button>
                </div>

                <div className="flex items-start gap-4 p-4 border border-yellow-200 bg-yellow-50 rounded-lg">
                  <span className="material-symbols-outlined text-yellow-600">warning</span>
                  <div className="flex-1">
                    <p className="font-medium text-yellow-800">Certificate Expiring - Herbal Extracts Ltd</p>
                    <p className="text-sm text-yellow-700">
                      GMP Certificate expires in 45 days. Renewal process should begin.
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="ml-auto bg-transparent">
                    Schedule Renewal
                  </Button>
                </div>

                <div className="flex items-start gap-4 p-4 border border-blue-200 bg-blue-50 rounded-lg">
                  <span className="material-symbols-outlined text-blue-600">info</span>
                  <div className="flex-1">
                    <p className="font-medium text-blue-800">Audit Scheduled - Green Valley Processing</p>
                    <p className="text-sm text-blue-700">Annual compliance audit scheduled for December 5th, 2023.</p>
                  </div>
                  <Button variant="outline" size="sm" className="ml-auto bg-transparent">
                    View Details
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
