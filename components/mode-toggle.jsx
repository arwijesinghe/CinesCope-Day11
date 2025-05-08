import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export function ModeToggle() {
  const theme = "light";
  return (
    <Button variant="ghost" size="icon" className="h-9 w-9">
      <Sun className="h-[1.2rem] w-[1.2rem]" />
    </Button>
  );
}
