import { UserPen } from "lucide-react";
import { useNavigate, NavLink } from "react-router-dom";
import { Card } from "@/components/ui/card";
export default function Navbar() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/profile");
  }

  return (
    <div className="flex justify-between p-5">
      <NavLink to="/" className="text-2xl font-semibold">
        AdConnect
      </NavLink>
      <div className="flex gap-3">
        <Card className="px-3 py-1">
          <p>Sponsor</p>
        </Card>
        <button onClick={handleClick}>
          <UserPen />
        </button>
      </div>
    </div>
  );
}
