'use client';

import { useQuoteStore } from '@/lib/store/quote-store';

export default function QuoteSummary() {
  const { projectData } = useQuoteStore();
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-foreground">Quote Summary</h3>
      <pre className="rounded-lg bg-white/5 p-4 text-sm text-muted-foreground overflow-auto max-h-60">
        {JSON.stringify(projectData, null, 2)}
      </pre>
    </div>
  );
}
