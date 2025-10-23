import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Figurine from "./components/Figurine";

function App() {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-900 gap-12">
      <h1 className="text-6xl neonPulse">My 3D Portfolio</h1>

      {/* 3D Canvas */}
      <div className="w-96 h-96">
        <Canvas>
          <Figurine />
        </Canvas>
      </div>

      {/* Buttons */}
      <div className="flex flex-col items-center gap-4">
        {!showOptions && (
          <button
            className="start-button"
            onClick={() => setShowOptions(true)}
          >
            START
          </button>
        )}

        {showOptions && (
          <div className="flex gap-6">
            <button className="start-button buttonFadeIn">
              FPP
            </button>
            <button className="start-button buttonFadeIn">
              TPP
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
