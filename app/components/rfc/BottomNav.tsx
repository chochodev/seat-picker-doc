import { Button } from "~/components/ui/button";
import { Link } from "@remix-run/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BottomNav({
  nextLabel,
  prevLabel,
  nextLink,
  prevLink,
}: {
  nextLabel?: string;
  prevLabel?: string;
  nextLink?: string;
  prevLink?: string;
}) {
  const hasPrev = prevLink && prevLabel;
  const hasNext = nextLink && nextLabel;

  return (
    <div className="mt-12 border-0 border-t border-solid border-slate-800 pt-8">
      <div className="flex w-full items-center justify-between gap-4">
        {/* Previous Button */}
        <div className="flex-1">
          {hasPrev ? (
            <Button
              asChild
              variant="outline"
              className="ease-200 group h-auto w-full justify-start border-solid p-4 text-left transition-colors hover:border hover:border-slate-500/40 hover:bg-muted/25 rounded-xl"
            >
              <Link to={prevLink} className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted/50 transition-colors group-hover:bg-primary/10">
                  <ChevronLeft className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Previous
                  </span>
                  <span className="text-sm font-medium leading-tight transition-colors group-hover:text-primary">
                    {prevLabel}
                  </span>
                </div>
              </Link>
            </Button>
          ) : (
            <div className="h-[72px]" /> // Placeholder to maintain layout
          )}
        </div>

        {/* Next Button */}
        <div className="flex-1">
          {hasNext ? (
            <Button
              asChild
              variant="outline"
              className="ease-200 group h-auto w-full justify-end border-solid p-4 text-right transition-colors hover:border hover:border-slate-500/40 hover:bg-muted/25 rounded-xl"
            >
              <Link to={nextLink} className="flex items-center gap-3">
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Next
                  </span>
                  <span className="text-sm font-medium leading-tight transition-colors group-hover:text-primary">
                    {nextLabel}
                  </span>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted transition-colors group-hover:bg-primary/10">
                  <ChevronRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
              </Link>
            </Button>
          ) : (
            <div className="h-[72px]" /> // Placeholder to maintain layout
          )}
        </div>
      </div>
    </div>
  );
}
