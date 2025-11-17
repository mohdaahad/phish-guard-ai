import { useState } from "react";
import { UrlResult } from "@/types/phishing";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Eye, Search } from "lucide-react";
import { EvidenceModal } from "./EvidenceModal";

interface ResultsTableProps {
  results: UrlResult[];
}

export function ResultsTable({ results }: ResultsTableProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [selectedResult, setSelectedResult] = useState<UrlResult | null>(null);

  const filteredResults = results.filter((result) => {
    const matchesSearch =
      result.url.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.domain.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter =
      filterStatus === "all" || result.classification === filterStatus;

    return matchesSearch && matchesFilter;
  });

  const getClassificationBadge = (classification: string) => {
    const variants = {
      PHISHING: "destructive",
      SAFE: "default",
      SUSPICIOUS: "secondary",
    } as const;

    const colors = {
      PHISHING: "bg-destructive text-destructive-foreground",
      SAFE: "bg-success text-success-foreground",
      SUSPICIOUS: "bg-warning text-warning-foreground",
    };

    return (
      <Badge className={colors[classification as keyof typeof colors]}>
        {classification}
      </Badge>
    );
  };

  return (
    <>
      <div className="space-y-4">
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search URLs or domains..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="PHISHING">Phishing</SelectItem>
              <SelectItem value="SAFE">Safe</SelectItem>
              <SelectItem value="SUSPICIOUS">Suspicious</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="rounded-md border border-border">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent border-border">
                <TableHead>URL</TableHead>
                <TableHead>Domain</TableHead>
                <TableHead>Classification</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Confidence</TableHead>
                <TableHead>Target</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredResults.map((result, index) => (
                <TableRow key={index} className="border-border">
                  <TableCell className="font-mono text-xs max-w-[300px] truncate">
                    {result.url}
                  </TableCell>
                  <TableCell className="font-medium">{result.domain}</TableCell>
                  <TableCell>{getClassificationBadge(result.classification)}</TableCell>
                  <TableCell>{result.score.toFixed(2)}</TableCell>
                  <TableCell>{(result.confidence * 100).toFixed(1)}%</TableCell>
                  <TableCell>{result.cse_target || "-"}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedResult(result)}
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      Evidence
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {filteredResults.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No results found</p>
          </div>
        )}
      </div>

      {selectedResult && (
        <EvidenceModal
          result={selectedResult}
          isOpen={!!selectedResult}
          onClose={() => setSelectedResult(null)}
        />
      )}
    </>
  );
}
