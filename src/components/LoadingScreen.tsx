import { useEffect, useState } from "react";
import { SITE } from "../data/site";

const MINIMUM_DISPLAY_TIME = 1700;

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    document.body.classList.add("splash-active");

    const startedAt = performance.now();
    let cancelled = false;
    let minimumTimer: number | undefined;
    let exitTimer: number | undefined;
    const logo = new Image();
    logo.src = SITE.logo;

    const finish = () => {
      const remaining = Math.max(0, MINIMUM_DISPLAY_TIME - (performance.now() - startedAt));

      minimumTimer = window.setTimeout(() => {
        if (cancelled) return;
        setExiting(true);
        exitTimer = window.setTimeout(() => {
          if (cancelled) return;
          setVisible(false);
          document.body.classList.remove("splash-active");
        }, 600);
      }, remaining);
    };

    if (logo.complete) {
      finish();
    } else {
      logo.addEventListener("load", finish, { once: true });
      logo.addEventListener("error", finish, { once: true });
    }

    return () => {
      cancelled = true;
      if (minimumTimer) window.clearTimeout(minimumTimer);
      if (exitTimer) window.clearTimeout(exitTimer);
      document.body.classList.remove("splash-active");
      logo.removeEventListener("load", finish);
      logo.removeEventListener("error", finish);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`loading-screen${exiting ? " loading-screen--exiting" : ""}`}
      role="status"
      aria-label="Loading Hotel Binwa View & Banquets"
    >
      <div className="loading-screen__content">
        <img
          src={SITE.logo}
          alt="Hotel Binwa View & Banquets logo"
          className="loading-screen__logo"
        />
        <p className="loading-screen__name">Hotel Binwa View &amp; Banquets</p>
        <div className="loading-screen__dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}