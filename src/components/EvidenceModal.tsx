import { useState } from "react";
import { UrlResult } from "@/types/phishing";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThumbsUp, ThumbsDown, AlertTriangle, CheckCircle2 } from "lucide-react";
import { api } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";

interface EvidenceModalProps {
  result: UrlResult;
  isOpen: boolean;
  onClose: () => void;
}

export function EvidenceModal({ result, isOpen, onClose }: EvidenceModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleVerification = async (isPhishing: boolean) => {
    setIsSubmitting(true);
    try {
      await api.submitManualVerification(result.url, isPhishing);
      toast({
        title: "Verification submitted",
        description: `Marked as ${isPhishing ? "phishing" : "not phishing"}`,
      });
      onClose();
    } catch (error) {
      toast({
        title: "Submission failed",
        description: error instanceof Error ? error.message : "Unknown error",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getClassificationColor = () => {
    switch (result.classification) {
      case "PHISHING":
        return "text-destructive";
      case "SAFE":
        return "text-success";
      case "SUSPICIOUS":
        return "text-warning";
      default:
        return "text-foreground";
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            Evidence Review
            {result.classification === "PHISHING" && (
              <AlertTriangle className="h-5 w-5 text-destructive" />
            )}
            {result.classification === "SAFE" && (
              <CheckCircle2 className="h-5 w-5 text-success" />
            )}
          </DialogTitle>
          <DialogDescription className="font-mono text-xs">
            {result.url}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Domain</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-mono text-lg">{result.domain}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Classification</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge className={`text-lg ${getClassificationColor()}`}>
                  {result.classification}
                </Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Score</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{result.score.toFixed(2)}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Confidence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">
                  {(result.confidence * 100).toFixed(1)}%
                </p>
              </CardContent>
            </Card>
          </div>

          {result.evidence_path && (
            <Card>
              <CardHeader>
                <CardTitle>Screenshot Evidence</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src={api.getEvidenceUrl(result.domain)}
                  alt="Site screenshot"
                  className="w-full rounded-lg border border-border"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/800x600?text=Screenshot+Not+Available";
                  }}
                />
              </CardContent>
            </Card>
          )}

          {result.ocr_text && (
            <Card>
              <CardHeader>
                <CardTitle>OCR Extracted Text</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="text-sm text-muted-foreground whitespace-pre-wrap bg-muted p-4 rounded-lg">
                  {result.ocr_text}
                </pre>
              </CardContent>
            </Card>
          )}

          {result.cse_target && (
            <Card>
              <CardHeader>
                <CardTitle>CSE Target</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium">{result.cse_target}</p>
              </CardContent>
            </Card>
          )}

          <div className="flex gap-4 justify-end pt-4 border-t border-border">
            <Button
              variant="outline"
              size="lg"
              onClick={() => handleVerification(false)}
              disabled={isSubmitting}
              className="gap-2"
            >
              <ThumbsUp className="h-5 w-5" />
              NOT Phishing
            </Button>
            <Button
              variant="destructive"
              size="lg"
              onClick={() => handleVerification(true)}
              disabled={isSubmitting}
              className="gap-2"
            >
              <ThumbsDown className="h-5 w-5" />
              IS Phishing
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
