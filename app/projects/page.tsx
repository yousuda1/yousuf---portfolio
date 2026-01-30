const projects = [
  {
    title: "ESP32 Touch + Barcode Prototype",
    summary:
      "Touch UI + barcode scanning + local storage. Focused on stable peripherals and clean firmware architecture.",
    tags: ["ESP32", "UART/USB", "Touch UI", "Local Storage"],
  },
  {
    title: "LED Global Status Engine",
    summary:
      "Green/Yellow/Red state machine with priority rules, timers, and error handling for reliable device feedback.",
    tags: ["GPIO", "State Machine", "Timers"],
  },
  {
    title: "IoT Telemetry Device (MVP)",
    summary:
      "Structured packets, logging strategy, and connectivity-ready firmware foundation for remote monitoring devices.",
    tags: ["Telemetry", "Wi-Fi/BLE", "Data Design"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold">Projects</h1>
      <p className="text-gray-600 mt-2">
        A selection of hardware + firmware work. (Client-sensitive details removed.)
      </p>

      <div className="grid gap-6 mt-10 sm:grid-cols-2">
        {projects.map((p) => (
          <div key={p.title} className="border rounded-2xl p-6">
            <h2 className="text-lg font-semibold">{p.title}</h2>
            <p className="text-gray-600 mt-2">{p.summary}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs border rounded-full px-3 py-1 text-gray-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}