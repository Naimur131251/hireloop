import { SiteNavbar } from "@/components/site-navbar"
import { HeroSection } from "@/components/hero-section"

export default function Page() {
  return (
    <>
      <SiteNavbar />
      <HeroSection />
      <main className="p-6">
        <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
          <div className="font-mono text-xs text-muted-foreground">
            (Press <kbd>d</kbd> to toggle dark mode)
          </div>
        </div>
      </main>
    </>
  )
}