import React from "react";
import { configIdleTimer } from "../config/IdleTimer";

// import config

export default function Home() {
  // use idle timer
  configIdleTimer();
  return (
    <div>
      <h3>
        Idle timer akan berlaku selama 5 detik jika tidak ada akktifitas dari
        user dan akan di arahkan ke halaman idle
      </h3>
    </div>
  );
}
