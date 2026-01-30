export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-8 max-w-5xl mx-auto">
      <section className="space-y-3">
        <h1 className="text-4xl font-bold">Yousuf Ansari</h1>
        <p className="text-lg text-gray-600">
          Embedded Systems Engineer — PCB Design • Firmware • IoT Prototyping
        </p>
        <p className="text-gray-700">
          I design reliable connected hardware from schematic to working device.
          My work combines clean PCB design, robust firmware, and practical system architecture.
        </p>
      </section>

      <section className="mt-12 grid gap-6 sm:grid-cols-3">
        <div className="border rounded-2xl p-6">
          <h2 className="font-semibold text-lg">PCB Design</h2>
          <p className="text-gray-600 mt-2">
            Schematic capture, layout, power integrity, MCU and sensor integration.
          </p>
        </div>

        <div className="border rounded-2xl p-6">
          <h2 className="font-semibold text-lg">Firmware Development</h2>
          <p className="text-gray-600 mt-2">
            ESP32/STM32, I2C/SPI/UART drivers, FreeRTOS, BLE/Wi-Fi communication.
          </p>
        </div>

        <div className="border rounded-2xl p-6">
          <h2 className="font-semibold text-lg">IoT Systems</h2>
          <p className="text-gray-600 mt-2">
            Device architecture, data logging, telemetry pipelines, OTA-ready designs.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold">Featured Projects</h2>
        <p className="text-gray-600 mt-2">
          Selected hardware and firmware builds demonstrating full system engineering.
        </p>
      </section>
    </main>
  );
}