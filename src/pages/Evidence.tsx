import { useQuery } from "@tanstack/react-query";
import { ResultsTable } from "@/components/ResultsTable";
import { api } from "@/lib/api";
import { UrlResult } from "@/types/phishing";
import { Loader2 } from "lucide-react";

export default function Evidence() {
  const { data: results, isLoading } = useQuery<UrlResult[]>({
    queryKey: ["results"],
    queryFn: api.getResults,
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Evidence Review</h1>
        <p className="text-muted-foreground">Review and verify detection results</p>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : results && results.length > 0 ? (
        <ResultsTable results={results} />
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No results available. Upload a file to get started.</p>
        </div>
      )}
    </div>
  );
}
