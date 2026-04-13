import { useState, type ReactNode } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Eye, Code, Copy, Check } from 'lucide-react';

interface ComponentPreviewProps {
  title?: string;
  description?: string;
  code: string;
  children: ReactNode;
}

export function ComponentPreview({
  title,
  description,
  code,
  children,
}: ComponentPreviewProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="component-preview my-8">
      {(title || description) && (
        <div className="mb-3">
          {title && (
            <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
          )}
          {description && (
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      )}

      <Tabs defaultValue="preview" className="w-full">
        <div className="flex items-center justify-between rounded-t-xl border border-b-0 border-border bg-muted/30 px-1">
          <TabsList className="h-11 bg-transparent p-0">
            <TabsTrigger
              value="preview"
              className="relative gap-1.5 rounded-none border-b-2 border-transparent px-4 py-2.5 text-sm font-medium text-muted-foreground shadow-none transition-all data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              <Eye className="h-3.5 w-3.5" />
              Preview
            </TabsTrigger>
            <TabsTrigger
              value="code"
              className="relative gap-1.5 rounded-none border-b-2 border-transparent px-4 py-2.5 text-sm font-medium text-muted-foreground shadow-none transition-all data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              <Code className="h-3.5 w-3.5" />
              Code
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="preview" className="mt-0">
          <div className="preview-canvas relative overflow-hidden rounded-b-xl border border-border">
            {/* Dot pattern background */}
            <div
              className="absolute inset-0 opacity-[0.35]"
              style={{
                backgroundImage:
                  'radial-gradient(circle, var(--border) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-primary/[0.02]" />

            <div className="relative flex min-h-[280px] items-center justify-center p-8 md:p-12">
              {children}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="code" className="mt-0">
          <div className="code-window relative overflow-hidden rounded-b-xl border border-border">
            {/* Terminal-style header */}
            <div className="flex items-center justify-between border-b border-white/[0.06] bg-[#1a1a2e] px-4 py-2.5">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                  <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                  <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                </div>
                <span className="ml-3 text-xs text-white/40">component.tsx</span>
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-white/40 transition-colors hover:bg-white/[0.06] hover:text-white/70"
              >
                {copied ? (
                  <>
                    <Check className="h-3 w-3" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" />
                    Copy
                  </>
                )}
              </button>
            </div>

            {/* Code content */}
            <div className="overflow-x-auto bg-[#0d0d1a] p-4">
              <pre className="text-[13px] leading-relaxed">
                <code className="text-white/80">{code}</code>
              </pre>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
