import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/ModeToggle";
import SlidingMenu from "@/components/SlidingMenu";

export default function Something() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <SlidingMenu />
      <Button>Click me</Button>
      <ModeToggle />
      <h1>So this is testtttttttttttt</h1>
    </div>
  );
}
