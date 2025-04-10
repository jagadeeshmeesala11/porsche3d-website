import React from "react";
import { Html } from "@react-three/drei";

export default function Loader() {
  return (
    <Html center>
      <div style={{
        color: 'black',
        background: 'white',
        padding: '10px 20px',
        borderRadius: '8px',
        fontSize: '14px',
        fontWeight: 'bold'
      }}>
        Loading 3D Model...
      </div>
    </Html>
  );
}
