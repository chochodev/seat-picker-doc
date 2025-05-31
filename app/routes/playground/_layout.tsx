import { Outlet } from "@remix-run/react";

export default function PlaygroundLayout() {
  return (
    <div className="flex min-h-screen w-full !bg-white">
      <Outlet />
    </div>
  );
}
