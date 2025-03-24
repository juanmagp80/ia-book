// ParticleBackground.js
"use client"; // Esto asegura que este componente se ejecute en el lado del cliente

import { Particles } from "react-tsparticles";

export default function ParticleBackground() {
  return (
    <div className="particles-background">
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#000000", // Fondo negro
            },
          },
          particles: {
            number: {
              value: 100, // Número de partículas
            },
            size: {
              value: 5, // Tamaño de las partículas
            },
            move: {
              enable: true,
              speed: 2, // Velocidad de movimiento de las partículas
            },
            links: {
              enable: true, // Habilitar enlaces entre partículas
              distance: 150,
              color: "#ffffff",
            },
          },
        }}
      />
    </div>
  );
}
