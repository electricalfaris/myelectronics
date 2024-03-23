const CATEGORY_CODE = {
  X: "Mixed",
  D: "Diode",
  R: "Resistor",
  PR: "Potentiometer",
  T: "Transistor",
  I: "Inductor",
  C: "Capacitors",
  S: "Sensors",
  PB: "Power Bench",
  M: "Motors",
  L: "Leds",
};

const Sub_Pages = [
  {
    cat_code_id: CATEGORY_CODE.PR,
    title: "SubPage Title",
    image_url: "#",
    desc: "SubPage Description",
    ref1: "#",
    ref2: "#",
  },
  {
    cat_code_id: CATEGORY_CODE.I,
    title: "SubPage Title",
    image_url: "#",
    desc: "SubPage Description",
    ref1: "#",
    ref2: "#",
  },
];

const Electronics = [
  {
    id: 1,
    category: CATEGORY_CODE.L,
    title: "Wiring Leds",
    image_url: "images/wiring_leds.png",
    desc: "Wiring Leds",
    ref1: "https://www.instructables.com/LEDs-for-Beginners/",
    ref2: "https://www.ledsupply.com/blog/wiring-leds-correctly-series-parallel-circuits-explained/",
  },
  {
    id: 2,
    category: CATEGORY_CODE.D,
    title: "Diodes",
    image_url: "images/diodes.jpg",
    desc: "Diodes",
    ref1: "https://www.instructables.com/Diodes/",
    ref2: "https://www.allaboutcircuits.com/textbook/semiconductors/chpt-3/introduction-to-diodes-and-rectifiers/",
  },
  {
    id: 3,
    category: CATEGORY_CODE.R,
    title: "Resistors",
    image_url: "images/resistors.png",
    desc: "Types and Shapes of Resistors",
    ref1: "https://www.instructables.com/Resistors/",
    ref2: "https://learn.sparkfun.com/tutorials/resistors/all",
  },
  {
    id: 4,
    category: CATEGORY_CODE.I,
    title: "Inductors",
    image_url: "images/inductors.jpg",
    desc: "Types and Shapes of Inductors",
    ref1: "https://www.instructables.com/Inductors-the-Basics/",
    ref2: "https://www.electricity-magnetism.org/inductors/",
  },

  {
    id: 5,
    category: CATEGORY_CODE.C,
    title: "Capacitors",
    image_url: "images/capacitors.png",
    desc: "Types and Shapes of Capacitors",
    ref1: "https://www.instructables.com/Capacitors/",
    ref2: "https://www.electricity-magnetism.org/capacitors/",
  },

  {
    id: 6,
    title: CATEGORY_CODE.S,
    category: "S",
    image_url: "images/sensors.jpg",
    desc: "Types and Shapes of Transistors",
    ref1: "https://www.instructables.com/Transistors/",
    ref2: "https://www.electricity-magnetism.org/transistors/",
  },
  {
    id: 7,
    category: CATEGORY_CODE.M,
    title: "Motors",
    image_url: "images/motors.png",
    desc: "Types and Shapes of Motors",
    ref1: "https://www.instructables.com/Motors/",
    ref2: "https://www.electricity-magnetism.org/motors/",
  },
  {
    id: 8,
    category: CATEGORY_CODE.T,
    title: "Transistors",
    image_url: "images/legs_3.jpg",
    desc: "3 Legs components",
    ref1: "https://www.instructables.com/3-Legs/",
    ref2: "https://www.electricity-magnetism.org/3-legs/",
  },
  {
    id: 9,
    category: CATEGORY_CODE.PR,
    title: "pwoer bench",
    image_url: "images/power_bench_wiring_1.jpg",
    desc: "power bench wiring - 1",
    ref1: "https://www.instructables.com/Power-Bench-Wiring-1/",
    ref2: "https://www.electricity-magnetism.org/power-bench-wiring-1/",
  },

  {
    id: 12,
    category: CATEGORY_CODE.PB,
    title: "Potentiometer - Variable Resistors",
    image_url: "images/variable_resistors.jpg",
    desc: "power bench wiring - 4",
    ref1: "https://www.instructables.com/Power-Bench-Wiring-4/",
    ref2: "https://www.electricity-magnetism.org/power-bench-wiring-4/",
  },
];

export { Electronics, Sub_Pages, CATEGORY_CODE };

/*
 {
  id:10,
  title:"power bench wiring - 2",
  image_url:"images/power_bench_wiring_2.jpg",
  desc:"power bench wiring - 2",
  ref1:"https://www.instructables.com/Power-Bench-Wiring-2/",
  ref2:"https://www.electricity-magnetism.org/power-bench-wiring-2/",
  },
  {
  id:11,
  title:"power bench wiring - 3",
  image_url:"images/power_bench_wiring_3.jpg",
  desc:"power bench wiring - 3",
  ref1:"https://www.instructables.com/Power-Bench-Wiring-3/",
  ref2:"https://www.electricity-magnetism.org/power-bench-wiring-3/",
  },

*/
