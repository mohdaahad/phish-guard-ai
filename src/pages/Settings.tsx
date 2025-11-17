import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Settings as SettingsIcon } from "lucide-react";

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
        <p className="text-muted-foreground">Configure your dashboard preferences</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <SettingsIcon className="h-5 w-5" />
            API Configuration
          </CardTitle>
          <CardDescription>
            Configure your Python backend API endpoint
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="api-url">Python Backend URL</Label>
            <Input
              id="api-url"
              placeholder="http://localhost:5000"
              defaultValue={import.meta.env.VITE_PYTHON_API_URL}
            />
            <p className="text-sm text-muted-foreground">
              Set the VITE_PYTHON_API_URL environment variable or update it here
            </p>
          </div>
          <Button>Save Configuration</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Detection Thresholds</CardTitle>
          <CardDescription>
            Configure detection sensitivity and thresholds
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="phishing-threshold">Phishing Score Threshold</Label>
            <Input
              id="phishing-threshold"
              type="number"
              placeholder="0.7"
              step="0.1"
              min="0"
              max="1"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confidence-threshold">Confidence Threshold</Label>
            <Input
              id="confidence-threshold"
              type="number"
              placeholder="0.8"
              step="0.1"
              min="0"
              max="1"
            />
          </div>
          <Button>Update Thresholds</Button>
        </CardContent>
      </Card>
    </div>
  );
}
