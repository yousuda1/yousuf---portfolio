export default function ServicesPage() {
  return (
    <main className="min-h-screen p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold">Services</h1>
      <p className="text-gray-600 mt-2">
        Practical engineering for prototypes and MVP hardware devices.
      </p>

      <div className="grid gap-6 mt-10 sm:grid-cols-3">
        <div className="border rounded-2xl p-6">
          <h2 className="font-semibold">PCB Design</h2>
          <ul className="mt-3 space-y-2 text-gray-700 text-sm list-disc pl-5">
            <li>Schematic + layout (KiCad/Altium)</li>
            <li>Power integrity + grounding</li>
            <li>MCU, sensors, connectivity basics</li>
          </ul>
        </div>

        <div className="border rounded-2xl p-6">
          <h2 className="font-semibold">Firmware</h2>
          <ul className="mt-3 space-y-2 text-gray-700 text-sm list-disc pl-5">
            <li>ESP32/STM32 firmware architecture</li>
            <li>I2C/SPI/UART drivers</li>
            <li>State machines, logging, debugging</li>
          </ul>
        </div>

        <div className="border rounded-2xl p-6">
          <h2 className="font-semibold">IoT Prototyping</h2>
          <ul className="mt-3 space-y-2 text-gray-700 text-sm list-disc pl-5">
            <li>Telemetry & packet design</li>
            <li>Local storage + sync strategy</li>
            <li>OTA-ready foundation</li>
          </ul>
        </div>
      </div>
    </main>
  );
}