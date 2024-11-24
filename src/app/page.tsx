import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const page = () => {
  return (
    <div>
      <Button size={"sm"}>
        <Menu />
      </Button>
    </div>
  );
};

export default page;
