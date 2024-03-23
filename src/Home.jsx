import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./Home.css";
export default function Home() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="card">
          <Link className="linker" to="/Connectors">
            <h3 className="title">Connectors</h3>
            <div className="bar">
              <div className="emptybar" />
              <div className="filledbar" />
            </div>
              <div className="circle">
                <img
                  className="icon"
                  src="images/categories_icons/connectors.svg"
                  alt="connectors"
                />
             
            </div>
          </Link>
        </div>
        <div className="card">
          <Link className="linker" to="/Transistors">
            <h3 className="title">Transistors</h3>
            <div className="bar">
              <div className="emptybar" />
              <div className="filledbar" />
            </div>
        
              <div className="circle">
                <img src="images/categories_icons/transistors.png" alt="" className="icon" />
              </div>
       
          </Link>
        </div>
        <div className="card">
          <Link className="linker" to="/Resistors">
            <h3 className="title">Resistors</h3>
            <div className="bar">
              <div className="emptybar" />
              <div className="filledbar" />
            </div>
            <div className="circle">
              <img src="images/categories_icons/resistors.svg" alt="not found" className="icon" />
            </div>
          </Link>
        </div>
        <div className="card">
          <Link className="linker" to="/Capacitors">
            <h3 className="title">Capacitors</h3>
            <div className="bar">
              <div className="emptybar" />
              <div className="filledbar" />
            </div>
            <div className="circle">
              <img src="images/categories_icons/capacitors.png" alt="not found" className="icon" />
            </div>
          </Link>
        </div>
        <div className="card">
          <Link className="linker" to="/Diodes">
            <h3 className="title">Diodes</h3>
            <div className="bar">
              <div className="emptybar" />
              <div className="filledbar" />
            </div>
            <div className="circle">
              <img src="images/categories_icons/diodes.svg" alt="not found" className="icon" />
            </div>
          </Link>
        </div>
        <div className="card">
          <Link className="linker" to="/Power-Circuits">
            <h3 className="title">Power Circuits</h3>
            <div className="bar">
              <div className="emptybar" />
              <div className="filledbar" />
            </div>
            <div className="circle">
              <img src="images/categories_icons/#" alt="not found" className="icon" />
            </div>
          </Link>
        </div>
        <div className="card">
          <Link className="linker" to="/Microcontrollers-and-Processors">
            <h3 className="title">Microcontrollers and Processors</h3>
            <div className="bar">
              <div className="emptybar" />
              <div className="filledbar" />
            </div>
            <div className="circle">
              <img src="images/categories_icons/microcontroller.png" alt="not found" className="icon" />
            </div>
          </Link>
        </div>
        <div className="card">
          <Link className="linker" to="/Logic">
            <h3 className="title">Logic</h3>
            <div className="bar">
              <div className="emptybar" />
              <div className="filledbar" />
            </div>
            <div className="circle">
              <img src="images/categories_icons/logic.png" alt="not found" className="icon" />
            </div>
          </Link>
        </div>
        <div className="card">
          <Link className="linker" to="/Memory">
            <h3 className="title">Memory</h3>
            <div className="bar">
              <div className="emptybar" />
              <div className="filledbar" />
            </div>
            <div className="circle">
              <img src="images/categories_icons/memory.png" alt="not found" className="icon" />
            </div>
          </Link>
        </div>
        <div className="card">
          <Link className="linker" to="/Amplifier-Circuits">
            <h3 className="title">Amplifier Circuits</h3>
            <div className="bar">
              <div className="emptybar" />
              <div className="filledbar" />
            </div>
            <div className="circle">
              <img src="images/categories_icons/amplifier.png" alt="not found" className="icon" />
            </div>
          </Link>
        </div>
     
        <div className="card">
          <Link className="linker" to="/Inductors">
            <h3 className="title">Inductors</h3>
            <div className="bar">
              <div className="emptybar" />
              <div className="filledbar" />
            </div>
            <div className="circle">
              <img src="images/categories_icons/inductors.png" alt="not found" className="icon" />
            </div>
          </Link>
        </div>

        <div className="card">
          <Link className="linker" to="/Switches">
            <h3 className="title">Switches</h3>
            <div className="bar">
              <div className="emptybar" />
              <div className="filledbar" />
            </div>
            <div className="circle">
              <img src="images/categories_icons/switches.png" alt="not found" className="icon" />
            </div>
          </Link>
        </div>


        <div className="card">
          <Link className="linker" to="/Signal-Circuits">
            <h3 className="title">Signal Circuits</h3>
            <div className="bar">
              <div className="emptybar" />
              <div className="filledbar" />
            </div>
            <div className="circle">
              <img src="images/categories_icons/signal_circuits.png" alt="not found" className="icon" />
            </div>
          </Link>
        </div>
        <div className="card">
          <Link className="linker" to="/Batteries">
            <h3 className="title">Batteries</h3>
            <div className="bar">
              <div className="emptybar" />
              <div className="filledbar" />
            </div>
            <div className="circle">
              <img src="images/categories_icons/batteries.png" alt="not found" className="icon" />
            </div>
          </Link>
        </div>
        <div className="card">
          <Link className="linker" to="/Transformers">
            <h3 className="title">Transformers</h3>
            <div className="bar">
              <div className="emptybar" />
              <div className="filledbar" />
            </div>
            <div className="circle">
              <img src="images/categories_icons/transformers.png" alt="not found" className="icon" />
            </div>
          </Link>
        </div>

        <div className="card">
          <Link className="linker" to="/Relays">
            <h3 className="title">Relays</h3>
            <div className="bar">
              <div className="emptybar" />
              <div className="filledbar" />
            </div>
            <div className="circle">
              <img src="images/categories_icons/relays.png" alt="not found" className="icon" />
            </div>
          </Link>
        </div>
        <div className="card">
          <Link className="linker" to="/Converters">
            <h3 className="title">Converters</h3>
            <div className="bar">
              <div className="emptybar" />
              <div className="filledbar" />
            </div>
            <div className="circle">
              <img src="images/categories_icons/converters.png" alt="not found" className="icon" />
            </div>
          </Link>
        </div>

        <div className="card">
          <Link className="linker" to="/Circuit-Protection">
            <h3 className="title">Fuses</h3>
            <div className="bar">
              <div className="emptybar" />
              <div className="filledbar" />
            </div>
            <div className="circle">
              <img src="images/categories_icons/fuses.png" alt="not found" className="icon" />
            </div>
          </Link>
        </div>
        <div className="card">
          <Link className="linker" to="/Oscillators">
            <h3 className="title">Oscillators</h3>
            <div className="bar">
              <div className="emptybar" />
              <div className="filledbar" />
            </div>
            <div className="circle">
              <img src="images/categories_icons/oscillators.png" alt="not found" className="icon" />
            </div>
          </Link>
        </div>
        <div className="card">
          <Link className="linker" to="/RC-Networks">
            <h3 className="title">RC Networks</h3>
            <div className="bar">
              <div className="emptybar" />
              <div className="filledbar" />
            </div>
            <div className="circle">
              <img src="images/categories_icons/#" alt="not found" className="icon" />
            </div>
          </Link>
        </div>
        <div className="card">
          <Link className="linker" to="/Filters">
            <h3 className="title">Filters</h3>
            <div className="bar">
              <div className="emptybar" />
              <div className="filledbar" />
            </div>
            <div className="circle">
              <img src="images/categories_icons/filters.png" alt="not found" className="icon" />
            </div>
          </Link>
        </div>

        <div className="card">
          <Link className="linker" to="/Sockets">
            <h3 className="title">Sockets</h3>
            <div className="bar">
              <div className="emptybar" />
              <div className="filledbar" />
            </div>
            <div className="circle">
              <img src="images/categories_icons/sockets.png" alt="not found" className="icon" />
            </div>
          </Link>
        </div>
        <div className="card">
          <Link className="linker" to="/Thermal-Support-Devices">
            <h3 className="title">Thermal Support Devices</h3>
            <div className="bar">
              <div className="emptybar" />
              <div className="filledbar" />
            </div>
            <div className="circle">
              <img src="images/categories_icons/#" alt="not found" className="icon" />
            </div>
          </Link>
        </div>
        <div className="card">
          <Link className="linker" to="/Terminal-Blocks">
            <h3 className="title">Terminal Blocks</h3>
            <div className="bar">
              <div className="emptybar" />
              <div className="filledbar" />
            </div>
            <div className="circle">
              <img src="images/categories_icons/#" alt="not found" className="icon" />
            </div>
          </Link>
        </div>
        <div className="card">
          <Link className="linker" to="/Crystals%2FResonators">
            <h3 className="title">Crystals/Resonators</h3>
            <div className="bar">
              <div className="emptybar" />
              <div className="filledbar" />
            </div>
            <div className="circle">
              <img src="images/categories_icons/#" alt="not found" className="icon" />
            </div>
          </Link>
        </div>
        <div className="card">
          <Link className="linker" to="/Sensors%2FTransducers">
            <h3 className="title">Sensors/Transducers</h3>
            <div className="bar">
              <div className="emptybar" />
              <div className="filledbar" />
            </div>
            <div className="circle">
              <img src="images/categories_icons/#" alt="not found" className="icon" />
            </div>
          </Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />

        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </div>
  );
}
