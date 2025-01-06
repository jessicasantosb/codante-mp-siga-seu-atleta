"use client";

import { getRandomHexColor } from "@/lib/utils";
import { useEffect, useState } from "react";
import "./index.css";

export function CardGrainyBackground() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div
      className="absolute inset-0 border-2 border-dashed border-black -z-10"
      style={{ background: isClient ? getRandomHexColor() : "" }}
    >
      <div className="size-full card" />
    </div>
  );
}
