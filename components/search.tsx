"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { SearchIcon } from "lucide-react"

const searchResults = [
  { title: "Advanced ZTNA", url: "/services/advanced-ztna", type: "Service" },
  { title: "EDR", url: "/services/edr", type: "Service" },
  { title: "Managed SOC", url: "/services/managed-soc", type: "Service" },
  { title: "ISO 27001 Compliance", url: "/compliance/iso-27001", type: "Compliance" },
  { title: "About PartanX", url: "/about", type: "Company" },
  { title: "Contact Us", url: "/contact", type: "Contact" },
]

export function Search() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")

  const filteredResults = searchResults.filter(
    (result) =>
      result.title.toLowerCase().includes(query.toLowerCase()) ||
      result.type.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="hidden md:flex">
          <SearchIcon className="h-4 w-4" />
          <span className="sr-only">Search</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Search</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            placeholder="Search services, compliance, or company info..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full"
          />
          {query && (
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {filteredResults.length > 0 ? (
                filteredResults.map((result) => (
                  <a
                    key={result.url}
                    href={result.url}
                    className="block p-3 rounded-md hover:bg-muted transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="font-medium">{result.title}</div>
                    <div className="text-sm text-muted-foreground">{result.type}</div>
                  </a>
                ))
              ) : (
                <div className="p-3 text-center text-muted-foreground">No results found</div>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
