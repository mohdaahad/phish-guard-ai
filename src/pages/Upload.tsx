import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FileUploader } from "@/components/FileUploader";
import { ProgressTracker } from "@/components/ProgressTracker";
import { ResultsTable } from "@/components/ResultsTable";
import { api } from "@/lib/api";
import { Progress, UrlResult } from "@/types/phishing";

export default function Upload() {
  const [isProcessing, setIsProcessing] = useState(false);

  const { data: progress } = useQuery<Progress>({
    queryKey: ["progress"],
    queryFn: api.getProgress,
    enabled: isProcessing,
    refetchInterval: 1000,
  });

  const { data: results } = useQuery<UrlResult[]>({
    queryKey: ["results"],
    queryFn: api.getResults,
    enabled: isProcessing,
    refetchInterval: 2000,
  });

  const handleUploadComplete = () => {
    setIsProcessing(true);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Upload Excel File</h1>
        <p className="text-muted-foreground">Upload your Excel file to start phishing detection</p>
      </div>

      <FileUploader onUploadComplete={handleUploadComplete} />

      {isProcessing && progress && (
        <ProgressTracker progress={progress} />
      )}

      {results && results.length > 0 && (
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Results</h2>
            <p className="text-muted-foreground">Review the detection results below</p>
          </div>
          <ResultsTable results={results} />
        </div>
      )}
    </div>
  );
}
