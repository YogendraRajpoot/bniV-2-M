import React from "react";
import {
  FaLightbulb,
  FaHandshake,
  FaBuilding,
  FaChartLine,
  FaRocket,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaLightbulb size={30} />,
    label: "Opportunity Identification",
    color: "from-red-400 to-pink-400",
  },
  {
    icon: <FaHandshake size={30} />,
    label: "Solution Definition",
    color: "from-pink-400 to-purple-400",
  },
  {
    icon: <FaBuilding size={30} />,
    label: "Prototype Testing",
    color: "from-purple-400 to-indigo-400",
  },
  {
    icon: <FaChartLine size={30} />,
    label: "MVP",
    color: "from-indigo-400 to-blue-400",
  },
  {
    icon: <FaRocket size={30} />,
    label: "BETA Release",
    color: "from-blue-400 to-violet-400",
  },
];

export default function  OurStrategy() {
  return (
    <div className="py-10 px-6 text-center bg-white">
      <h4 className="text-sm tracking-widest text-gray-500 uppercase mb-2">
        Our Strategy
      </h4>
      <h2 className="text-2xl font-bold mb-10">
        Strategy and execution. Delivered simultaneously.
      </h2>
      <div className="text-lg font-semibold mb-4">
        Expansive Consulting Blended...
      </div>
      <div className="flex justify-center items-center gap-4 flex-wrap">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div
              className={`w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r ${step.color} text-white mb-3`}
            >
              {step.icon}
            </div>
            <div className="text-sm font-medium text-gray-700 max-w-[100px]">
              {step.label}
            </div>
          </div>
        ))}
      </div>
      <div className="text-lg font-semibold mt-6">With Agile Delivery</div>
    </div>
  );
}

