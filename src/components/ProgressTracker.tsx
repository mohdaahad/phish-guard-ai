import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Progress as ProgressType } from "@/types/phishing";

interface ProgressTrackerProps {
  progress: ProgressType;
}

export function ProgressTracker({ progress }: ProgressTrackerProps) {
  const percentage = progress.total > 0 ? (progress.processed / progress.total) * 100 : 0;

  return (
    <Card className="border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Processing URLs</span>
          <span className="text-sm font-normal text-muted-foreground">
            {progress.processed} / {progress.total}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <Progress value={percentage} className="h-3" />
          <p className="text-sm text-muted-foreground mt-2">
            Processing {progress.processed} of {progress.total} URLs...
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Active Sites</p>
            <p className="text-2xl font-bold text-success">{progress.active}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Inactive Sites</p>
            <p className="text-2xl font-bold text-muted-foreground">{progress.inactive}</p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Phishing</span>
            <span className="text-sm font-semibold text-destructive">
              {progress.phishing_count} ({progress.phishing_percentage.toFixed(1)}%)
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Safe</span>
            <span className="text-sm font-semibold text-success">
              {progress.safe_count} ({progress.safe_percentage.toFixed(1)}%)
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Suspicious</span>
            <span className="text-sm font-semibold text-warning">
              {progress.suspicious_count} ({progress.suspicious_percentage.toFixed(1)}%)
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
