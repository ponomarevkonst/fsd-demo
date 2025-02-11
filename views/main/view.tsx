import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/card";
import Link from "next/link";

export const MainView = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">
          Feature Sliced Design
        </h1>

        <p className="text-lg text-muted-foreground">
          Feature-Sliced Design (FSD) is an architectural methodology for scaffolding front-end applications. 
          It's a compilation of rules and conventions on organizing code, making projects more understandable 
          and structured in the face of ever-changing business requirements.
        </p>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Key Benefits
          </h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Standardized project structure</li>
            <li>Better code organization and maintainability</li>
            <li>Scalable architecture for teams of any size</li>
            <li>Framework and language agnostic</li>
          </ul>
        </Card>

        <div className="flex gap-4">
          <Button asChild variant="default">
            <Link 
              href="https://feature-sliced.design/docs" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </Link>
          </Button>
          
          <Button asChild variant="secondary">
            <Link href="/users">
              View Users Example
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
