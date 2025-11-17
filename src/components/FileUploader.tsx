import { useCallback, useState } from "react";
import { Upload } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { api } from "@/lib/api";

interface FileUploaderProps {
  onUploadComplete?: () => void;
}

export function FileUploader({ onUploadComplete }: FileUploaderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const handleUpload = async (file: File) => {
    if (!file.name.endsWith('.xlsx')) {
      toast({
        title: "Invalid file type",
        description: "Please upload an Excel file (.xlsx)",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);
    try {
      await api.uploadExcel(file);
      toast({
        title: "Upload successful",
        description: "Processing your file...",
      });
      onUploadComplete?.();
    } catch (error) {
      toast({
        title: "Upload failed",
        description: error instanceof Error ? error.message : "Unknown error",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file) {
      handleUpload(file);
    }
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleUpload(file);
    }
  };

  return (
    <Card
      className={`border-2 border-dashed transition-all ${
        isDragging ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"
      }`}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
    >
      <CardContent className="p-12">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="rounded-full bg-primary/10 p-6">
            <Upload className="h-12 w-12 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Upload Excel File</h3>
            <p className="text-muted-foreground mb-4">
              Drag and drop your .xlsx file here, or click to browse
            </p>
          </div>
          <div>
            <input
              type="file"
              id="file-upload"
              className="hidden"
              accept=".xlsx"
              onChange={handleFileSelect}
              disabled={isUploading}
            />
            <label htmlFor="file-upload">
              <Button asChild disabled={isUploading}>
                <span className="cursor-pointer">
                  {isUploading ? "Uploading..." : "Select File"}
                </span>
              </Button>
            </label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
