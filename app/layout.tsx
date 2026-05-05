import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meeting Energy Optimizer – Schedule Meetings at Peak Energy",
  description:
    "Analyze team calendars, time zones, and productivity patterns to suggest optimal meeting times that maximize participant energy and engagement."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="e62d2ddf-41d7-4777-a434-e28368bcca93"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
