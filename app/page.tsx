export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] text-[#58a6ff] text-sm font-medium border border-[#30363d]">
          Remote Team Coordination
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Optimize Team Meetings for{" "}
          <span className="text-[#58a6ff]">Peak Energy</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Analyze calendars, time zones, and productivity patterns to schedule
          meetings when your team is most focused and engaged — not just when
          everyone is technically free.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Get Started — $14/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">
          Integrates with Google Calendar &amp; Outlook · Cancel anytime
        </p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "🕐", title: "Timezone-Aware", body: "Scores every slot across all participant time zones so no one is stuck in a 6 AM call." },
            { icon: "⚡", title: "Energy Scoring", body: "Maps circadian productivity curves to find windows where focus and engagement peak." },
            { icon: "📅", title: "Calendar Sync", body: "Reads real availability from Google Calendar and Outlook — no manual entry needed." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-sm text-[#58a6ff] font-medium uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$14</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              "Unlimited meeting analyses",
              "Google Calendar + Outlook sync",
              "Up to 25 team members",
              "Energy & timezone scoring",
              "Weekly optimization reports",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Start Free Trial
          </a>
          <p className="mt-3 text-xs text-[#6e7681]">No credit card required for trial</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the energy scoring algorithm work?",
              a: "We model each participant's circadian productivity curve based on their local time zone and typical work hours. Slots are scored by averaging energy levels across all attendees, weighted by role priority."
            },
            {
              q: "Which calendar integrations are supported?",
              a: "Meeting Energy Optimizer connects to Google Calendar and Microsoft Outlook via OAuth. We read availability and existing meeting load — we never modify your calendar without permission."
            },
            {
              q: "Can I cancel my subscription at any time?",
              a: "Yes. You can cancel from your account dashboard at any time. You'll retain access until the end of your billing period with no additional charges."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Meeting Energy Optimizer · Built for remote teams
      </footer>
    </main>
  );
}
