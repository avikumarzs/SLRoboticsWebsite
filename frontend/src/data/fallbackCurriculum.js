// Frontend Fallback Curriculum Data (Grades 5-10)
// Ensures the learning platform continues to operate seamlessly even if the backend is offline

export const fallbackCurriculum = [
  {
    "grade": 5,
    "tier": "discover",
    "theme": "Introduction to Simple Machines & Robots",
    "subtitle": "Discover the mechanical and sensory building blocks of intelligent rovers",
    "introduction": "Welcome to the exciting world of robotics! A robot is not just a toy or a machine—it is a programmable helper designed to sense its environment, think through smart decisions, and take physical action. In Grade 5, you will discover how ancient simple machines like levers, pulleys, and wheels join forces with modern microchips and sensors to bring autonomous rovers to life!",
    "projectGoals": [
      "Distinguish between ordinary hand tools, motorized appliances, remote-controlled vehicles, and true autonomous robots",
      "Master the universal Sense-Think-Act paradigm that guides all robotic decision making",
      "Understand how simple machines (levers, wheels, pulleys, inclined planes) multiply mechanical force",
      "Identify the five core robot anatomy systems: Chassis, Power, Motors, Ultrasonic Eyes, and Microcontroller Brain",
      "Assemble and pilot a virtual classroom rover while monitoring diagnostic telemetry"
    ],
    "problemStatements": [
      "How does an autonomous robot decide to turn right without a human holding a remote-control joystick?",
      "Why does rolling on a wheel and axle require up to 90% less energy than dragging a flat box across the floor?",
      "How does placing the pivot fulcrum closer to a heavy payload give a robotic gripper arm immense lifting force?",
      "Why is a battery considered the heart of a robot while the microcontroller is the brain?"
    ],
    "modules": [
      {
        "id": "g5-m1",
        "title": "What Makes a Robot a Robot?",
        "readTime": "5 min read",
        "keyConcepts": [
          "Sense-Think-Act loop",
          "Automation vs Remote Control",
          "Everyday Robots"
        ],
        "summary": "Explore the difference between passive tools, motorized appliances, and autonomous robots guided by the Sense-Think-Act cycle.",
        "content": "Have you ever wondered what truly separates a real robot from an ordinary toaster or an RC toy car?\n\n### 1. The Machine Spectrum: Tools vs. Remotes vs. Robots\nTo understand robotics, let us look at how different machines work:\n- **Level 1: Passive Tools (e.g., a hammer, spoon, or bicycle):** Only move when human muscles exert direct physical force. They have no electricity, no motor, and no brain.\n- **Level 2: Motorized Appliances (e.g., a kitchen blender or electric toaster):** Contain electric motors and heating coils, but they act blindly. A toaster cannot tell if bread is inside; it simply heats for two minutes and shuts off.\n- **Level 3: Remote-Controlled (RC) Vehicles (e.g., a toy drone or RC car):** Highly agile and motorized, but completely dependent on a human operator holding a wireless controller. If you drop the remote, the toy stops dead!\n- **Level 4: Autonomous Robots (e.g., a Mars rover or robot vacuum):** Capable of perceiving their surroundings, thinking through instructions, and navigating safely on their own without human joysticks!\n\n---\n\n### 2. The Universal Sense-Think-Act Loop\nEvery autonomous robot in the universe follows a continuous 3-step cycle:\n\n1. **SENSE (Perception):**\n   - The robot uses sensors to gather real-time data about the surrounding world.\n   - *Example:* An ultrasonic sensor emits high-frequency sound chirps and detects a wooden table leg just 15 centimeters ahead!\n\n2. **THINK (Decision):**\n   - The onboard microcontroller (the robot’s computer brain) receives that distance reading and compares it against pre-programmed rules.\n   - *Example rule:* `IF distance < 20 cm THEN Stop and Turn Right!`\n\n3. **ACT (Action):**\n   - The brain sends electrical commands to actuators (motors, wheels, robot arms, or warning buzzers).\n   - *Example:* The left wheel turns forward while the right wheel spins backward, smoothly swinging the rover away from the obstacle!\n\n```\n[ 1. SENSE ] ➔ Detects obstacle with ultrasonic waves\n     ⬇\n[ 2. THINK ] ➔ Microcontroller calculates: \"Turn Right!\"\n     ⬇\n[ 3. ACT   ] ➔ Motors spin wheels to dodge collision\n     🔄 (Repeats 50 to 100 times every second!)\n```\n\n---\n\n### 3. Robots in Our World Today\nRobots are already all around us doing jobs that are too dangerous, repetitive, or distant for humans:\n- **At Home:** Smart vacuum robots use infrared sensors and bumper switches to map living rooms and avoid tumbling down stairs.\n- **In Factories:** Precision assembly arms weld car frames and package medicines with sub-millimeter accuracy 24 hours a day.\n- **In Deep Space:** The NASA Curiosity and Perseverance rovers navigate Mars autonomously because radio signals take up to 20 minutes to travel from Earth to Mars—making real-time human remote control impossible!"
      },
      {
        "id": "g5-m2",
        "title": "The Magic of Simple Machines in Robotics",
        "readTime": "6 min read",
        "keyConcepts": [
          "Levers & Fulcrums",
          "Wheels & Axles",
          "Pulleys & Inclines",
          "Mechanical Advantage"
        ],
        "summary": "Discover how ancient simple machines multiply force and reduce friction, allowing small motors to move heavy robotic payloads.",
        "content": "Thousands of years before electric batteries or microchips were invented, humans built pyramids and massive castles using **Simple Machines**. Today, high-tech rovers and robotic arms still rely on these exact physical principles!\n\n---\n\n### 1. What is Mechanical Advantage?\nSimple machines do not create energy out of thin air. Instead, they give us **Mechanical Advantage (MA)** by trading distance for force:\n```\nMechanical Advantage (MA) = Output Force (Load Lifted) ÷ Input Force (Effort Applied)\n```\nWhen MA is greater than 1, a small electric motor can lift a much heavier weight simply by applying force across a longer distance or through clever mechanical geometry!\n\n---\n\n### 2. The Four Key Simple Machines in Robotics\n\n#### 1. Levers & Fulcrums (The Robotic Muscle Beam)\n- A rigid bar that pivots on a stationary support point called the **fulcrum**.\n- Think of a playground seesaw: if an adult sits close to the center pivot, a light child on the far end can easily lift them up!\n- In robotics: Robotic gripper hands use levers. Placing the motor pivot close to the gripper fingertips allows a small servo motor to pinch down with immense gripping force to hold objects securely without dropping them.\n\n#### 2. Wheels and Axles (Slashing Friction)\n- A large circular wheel rigidly locked to a central rotating shaft (the axle).\n- **Sliding vs. Rolling Friction:** If you drag a heavy wooden box across a classroom carpet, rough microscopic bumps scrape together, generating high sliding friction. Placing the box on wheels transforms sliding contact into smooth rolling contact, reducing movement resistance by over 90%!\n- In robotics: Two motorized wheels mounted on side axles provide smooth locomotion and zero-turn steering.\n\n#### 3. Pulleys (Redirecting Force)\n- A grooved wheel that guides a flexible belt, cable, or string.\n- A single fixed pulley changes the direction of lifting force: pulling **DOWN** on a cable lifts a robotic elevator or gripper **UP**.\n- Combining two or more pulleys into a \"block-and-tackle\" system halves the motor effort required to hoist heavy robotic payloads!\n\n#### 4. The Inclined Plane (Ramps for Climbing)\n- A slanted surface connecting a lower elevation to a higher elevation.\n- Lifting a 4-kilogram rover straight up into the air requires a massive 39 Newtons of direct vertical motor thrust.\n- Driving the rover up a gentle 20-degree ramp spreads that lifting work across a longer travel path, allowing small, battery-efficient DC motors to climb steep hills without stalling!\n\n---\n\n### 3. Combining Simple Machines: The Modern Robot\nA high-tech robotic rover is essentially a harmonious team of simple machines:\n- **Wheels & Axles** roll across rough floors.\n- **Inclined Ramps** allow access over door thresholds.\n- **Levers** act as articulating claw arms.\n- **Pulleys & Gears** transfer power smoothly from tiny spinning motors to heavy loads!"
      },
      {
        "id": "g5-m3",
        "title": "Anatomy of a Robot: Brains, Muscles, Senses & Skeleton",
        "readTime": "6 min read",
        "keyConcepts": [
          "Chassis",
          "DC Motors",
          "Microcontroller",
          "Ultrasonic Sensor",
          "Rechargeable Battery"
        ],
        "summary": "Learn how the five core hardware subsystems connect together to form a living, functioning robotic system.",
        "content": "Just like the human body is made of bones, muscles, nerves, a heart, and a brain, every robot is assembled from five matching engineering subsystems:\n\n---\n\n### The Five Core Robot Subsystems:\n\n#### 1. The Chassis (The Skeleton)\n- **Role:** The rigid structural platform that holds every component in place.\n- **Engineering Design:** Usually laser-cut from lightweight acrylic, aluminum, or 3D-printed polymer.\n- A well-designed chassis must be strong enough to withstand wall bumps while keeping the center of gravity low so the rover never tips over during sharp turns!\n\n#### 2. The Battery Pack (The Heart & Energy)\n- **Role:** Supplies continuous electrical voltage (pressure) and current (flow of electrons) to keep all circuits alive.\n- **Power Division:** High-current rechargeable Lithium-Ion or NiMH battery cells feed:\n  - Low-voltage clean power (5V) to the sensitive microchip brain.\n  - High-current drive power (6V to 9V) to the spinning drive motors.\n\n#### 3. DC Drive Motors & Wheels (The Muscles & Feet)\n- **Role:** Converts electrical battery energy into rotational kinetic force.\n- **How It Works:** Inside each Direct Current (DC) motor, electric current flows through copper wire coils, generating strong magnetic fields that push against permanent magnets, causing the central motor shaft to spin continuously.\n- Rubberized tires grip the arena floor, converting rotation into forward, backward, and steering motion.\n\n#### 4. The Ultrasonic Sensor (The Eyes & Ears)\n- **Role:** Measures spatial distance to obstacles in total darkness.\n- **How It Works:** Built with two silver metal barrels:\n  - **Trigger (Speaker):** Emits a burst of high-frequency ultrasonic sound waves (40,000 vibrations per second—inaudible to human ears!).\n  - **Echo (Microphone):** Listens for the reflected sound wave bouncing back from a wall.\n  - Like a bat flying in a cave, the robot clocks the echo return time to calculate distance with millimeter accuracy!\n\n#### 5. The Microcontroller Board (The Brain & Nervous System)\n- **Role:** The master control chip (like an Arduino, ESP32, or Raspberry Pi Pico).\n- **Operation:** Contains a central processor (CPU), working memory, and input/output pins:\n  - **Input Pins:** Read distance numbers from the ultrasonic sensor.\n  - **Output Pins:** Send fast digital switching signals to the motor drivers to speed up, slow down, or brake the wheels.\n\n---\n\n### The Startup Diagnostic Checklist:\nWhen engineers build a new rover, they perform a pre-flight test sequence:\n1. **Chassis Check:** Are all standoffs and screws tight?\n2. **Power Check:** Does the battery gauge read above 7.0 Volts?\n3. **Motor Test:** Do both left and right wheels spin smoothly without gear grinding?\n4. **Sensor Test:** Does placing a hand 10 cm in front of the ultrasonic sensor trigger an immediate reading?\n5. **Brain Check:** Is the microcontroller status LED pulsing its heartbeat rhythm?\n\nWhen all five systems report green, your rover is officially ready for autonomous lab exploration!"
      }
    ],
    "activities": [
      {
        "id": "build-robot",
        "type": "build-a-robot",
        "title": "Build a Robot Workshop",
        "description": "Mount the chassis, wire the DC motors, slot the battery pack, attach the ultrasonic eyes, and connect the brain to bring your rover online!",
        "instructions": "Click each component from your parts inventory on the left to install it into its designated dock on the rover chassis. Verify diagnostic telemetry once all 5 components are locked in."
      },
      {
        "id": "movement-sim",
        "type": "movement-sim",
        "title": "Rover Movement Simulator",
        "description": "Take the helm of your rover in the testing arena! Test forward, reverse, and pivot commands.",
        "instructions": "Use the on-screen directional controls or keyboard arrow keys to guide the robot across the arena toward the green target beacon without hitting perimeter barriers."
      }
    ],
    "quiz": [
      {
        "id": "g5-q1",
        "question": "What are the three steps in the core robotic cycle?",
        "options": [
          "Sleep, Charge, Wake",
          "Sense, Think, Act",
          "Fast, Slow, Stop",
          "Heat, Cool, Vent"
        ],
        "correctIndex": 1,
        "explanation": "Every robot perceives through sensors (Sense), calculates in its microcontroller (Think), and moves its actuators (Act)."
      },
      {
        "id": "g5-q2",
        "question": "Which simple machine is used in robot wheels to reduce friction with the floor?",
        "options": [
          "Wheel and Axle",
          "Wedge",
          "Screw",
          "Pendulum"
        ],
        "correctIndex": 0,
        "explanation": "A wheel and axle enables smooth rolling instead of sliding friction, allowing robots to traverse ground efficiently."
      },
      {
        "id": "g5-q3",
        "question": "What is the role of the microcontroller board in a robot?",
        "options": [
          "It decorates the rover chassis",
          "It acts as the brain to read sensors and command motors",
          "It is only used as a weight",
          "It produces sound waves to play music"
        ],
        "correctIndex": 1,
        "explanation": "The microcontroller is the brain that executes code, interprets sensor input, and issues motor commands."
      },
      {
        "id": "g5-q4",
        "question": "How does an ultrasonic sensor measure the distance to a wall?",
        "options": [
          "By smelling the paint",
          "By emitting high-frequency sound waves and timing the returning echo",
          "By measuring temperature",
          "By using magnetic tape"
        ],
        "correctIndex": 1,
        "explanation": "Like a bat, the ultrasonic sensor sends sound pulses and calculates distance from the time it takes for the echo to bounce back."
      }
    ]
  },
  {
    "grade": 6,
    "tier": "discover",
    "theme": "Mechanisms, Motors & Motion Dynamics",
    "subtitle": "Master how gears, motors, and wheels turn electrical energy into movement",
    "introduction": "How do robotic rovers climb steep ramps, carry payloads, or spin 360 degrees on the spot? In Grade 6, we explore the physics of robot mobility! Learn how gears trade speed for pulling torque, how electric motors generate rotation, and how differential steering enables agile navigation.",
    "projectGoals": [
      "Understand how gear pairs and gear trains modify rotational speed and torque",
      "Differentiate between continuous DC motors and precision angle Servo motors",
      "Explain differential drive steering: why differing wheel speeds produce curved or pivot turns",
      "Control robot navigation in an obstacle-filled testing arena"
    ],
    "problemStatements": [
      "Why does a hill-climbing rescue rover need high torque rather than high top speed?",
      "How does spinning left and right wheels in opposite directions produce a zero-radius turn?",
      "What happens to rotational direction when two spur gears mesh together?"
    ],
    "modules": [
      {
        "id": "g6-m1",
        "title": "Gears, Ratios & Mechanical Advantage",
        "readTime": "5 min read",
        "keyConcepts": [
          "Driver & Driven Gears",
          "Gear Ratios",
          "Torque vs Speed",
          "Idler Gears"
        ],
        "summary": "Gears allow robotic engineers to trade speed for pulling force (torque) or vice versa.",
        "content": "Gears are toothed wheels that interlock to transfer rotational motion from one shaft to another.\n\nKey rules of gear interaction:\n- **Direction Flip:** When two external gears mesh, they rotate in opposite directions. (If Gear A turns clockwise, Gear B turns counter-clockwise).\n- **The Gear Ratio Formula:**\n  ```\n  Gear Ratio = Teeth on Driven Gear ÷ Teeth on Driver Gear\n  ```\n- **Speed Reduction (High Torque):** If a small 10-tooth motor gear drives a larger 30-tooth wheel gear (Ratio 3:1), the wheel spins at 1/3 the speed, but with **3 times more rotational force (torque)**!\n- **Speed Multiplier:** If a large gear drives a smaller gear, output speed increases, but torque drops.\n\nFor mobile robotics, heavy rovers almost always use gear reduction to conquer slopes and carpet friction."
      },
      {
        "id": "g6-m2",
        "title": "Electric Motors: DC vs Servo",
        "readTime": "4 min read",
        "keyConcepts": [
          "DC Motor",
          "Servo Motor",
          "Electromagnetism",
          "Rotational Degrees"
        ],
        "summary": "Different robotic joints require different types of motorized actuators.",
        "content": "Electric motors convert electrical energy from the battery into mechanical kinetic energy using magnetic fields.\n\nTwo common types used in school robotics:\n1. **DC Motors (Direct Current):**\n   - Spins continuously in full 360° revolutions when voltage is applied.\n   - Reversing the positive and negative wire polarity makes the motor spin in reverse!\n   - Perfect for driving drive wheels and cooling fans.\n\n2. **Servo Motors:**\n   - Designed for precise angular positioning (typically 0° to 180°).\n   - Contains an internal DC motor, gear reduction box, potentiometer position sensor, and control circuit.\n   - Perfect for steering linkages, robotic camera pans, and mechanical gripper claws."
      },
      {
        "id": "g6-m3",
        "title": "Differential Drive Steering Mechanics",
        "readTime": "4 min read",
        "keyConcepts": [
          "Two-Wheel Drive",
          "Pivot Turns",
          "Spin on the Spot",
          "Caster Wheel"
        ],
        "summary": "How two independently controlled drive wheels create all robot maneuvers.",
        "content": "Most educational rovers use **Differential Drive**—two independent motorized wheels on the sides, supported by a passive swivel caster wheel in the rear.\n\nHow steering is achieved:\n- **Move Straight:** Both left and right motors spin forward at the exact same speed.\n- **Gentle Right Turn:** Left motor runs at full speed; right motor runs at half speed.\n- **Pivot Turn (Pivot on Right Wheel):** Left motor spins forward; right motor is stopped (braked).\n- **Zero-Radius Spin (Spin in Place):** Left motor spins forward while right motor spins in reverse! The rover spins about its central vertical axis without moving forward."
      }
    ],
    "activities": [
      {
        "id": "movement-sim",
        "type": "movement-sim",
        "title": "Differential Steering Arena",
        "description": "Master differential drive maneuvers! Steer your rover through barriers, test spin turns, and reach the target dock.",
        "instructions": "Use the control pad to drive. Notice how turning left and right changes your rover heading. Track your odometer distance and coordinate position."
      },
      {
        "id": "build-robot",
        "type": "build-a-robot",
        "title": "High-Torque Rover Assembly",
        "description": "Assemble a rugged high-torque chassis with matched DC gear motors, rubberized grip wheels, and dual battery power.",
        "instructions": "Mount each module into position. Verify the gear motor torque ratings in the diagnostics panel."
      }
    ],
    "quiz": [
      {
        "id": "g6-q1",
        "question": "If a small 10-tooth motor gear drives a large 40-tooth wheel gear, what is the gear ratio and effect?",
        "options": [
          "1:4 ratio, higher speed and lower torque",
          "4:1 ratio, 4x more torque and 1/4 the speed",
          "1:1 ratio, nothing changes",
          "4:4 ratio, motor stops"
        ],
        "correctIndex": 1,
        "explanation": "40 ÷ 10 = 4:1 gear ratio. A larger driven gear increases output torque by 4 times while reducing speed to 1/4."
      },
      {
        "id": "g6-q2",
        "question": "How do you make a differential drive rover spin in place around its own center?",
        "options": [
          "Turn both wheels forward at top speed",
          "Turn left wheel forward and right wheel in reverse at equal speed",
          "Stop both motors",
          "Detach the caster wheel"
        ],
        "correctIndex": 1,
        "explanation": "Spinning the left wheel forward and the right wheel backward produces equal and opposite forces, creating a zero-radius spin."
      },
      {
        "id": "g6-q3",
        "question": "Which motor is best suited for a robotic gripper hand that needs to open to exactly 45 degrees?",
        "options": [
          "Continuous DC motor",
          "Servo motor",
          "Steam turbine",
          "Ceiling fan motor"
        ],
        "correctIndex": 1,
        "explanation": "Servo motors have built-in feedback to hold exact angles between 0° and 180°, making them ideal for robot arms and grippers."
      },
      {
        "id": "g6-q4",
        "question": "What happens to the rotational direction of two spur gears meshed together?",
        "options": [
          "They both turn clockwise",
          "They rotate in opposite directions",
          "They both turn counter-clockwise",
          "They slip without turning"
        ],
        "correctIndex": 1,
        "explanation": "When two external gears mesh, the teeth push against each other, causing the driven gear to rotate in the opposite direction."
      }
    ]
  },
  {
    "grade": 7,
    "tier": "explore",
    "theme": "Sensors, Actuators & Circuit Fundamentals",
    "subtitle": "Connect inputs to outputs through electrical circuits and sensor telemetry",
    "introduction": "In Grade 7, we bridge the physical and digital domains. Robots perceive through sensors (inputs), compute decisions, and trigger actuators (outputs). We study the complete Input-Processing-Output (IPO) architecture, inspect sensor working principles, and learn how electrical circuits drive motors safely.",
    "projectGoals": [
      "Map robotic subsystems to the standard Input -> Processing -> Output (IPO) architecture",
      "Calculate distance using the speed of sound formula for Ultrasonic sensors",
      "Explain how Infrared (IR) reflectance sensors detect lines and close proximity",
      "Construct a reactive obstacle avoidance logic rule"
    ],
    "problemStatements": [
      "Why can a microcontroller GPIO pin not drive a high-current DC motor directly without an H-Bridge driver?",
      "How does surface color (black vs white) affect infrared reflectance for line tracking?",
      "What is the difference between an analog signal reading and a digital binary reading?"
    ],
    "modules": [
      {
        "id": "g7-m1",
        "title": "The IPO Framework: Input, Processing, Output",
        "readTime": "5 min read",
        "keyConcepts": [
          "Input Sensors",
          "Processing Unit (MCU)",
          "Output Actuators",
          "Feedback Loop"
        ],
        "summary": "All electronic computing systems—from smart thermostats to autonomous rovers—operate on the IPO framework.",
        "content": "To understand any robotic system, break it down into three stages:\n\n1. **Input (Sensors):**\n   - Transducers that convert physical environmental phenomena (light, sound, heat, pressure) into electrical voltage signals.\n   - Examples: Ultrasonic rangefinders, Infrared line sensors, push switches, gyroscopes.\n\n2. **Processing (Microcontroller):**\n   - Executes programmed instructions stored in memory.\n   - Reads inputs, evaluates mathematical and logical comparisons (`IF distance < 20cm`), and decides actions.\n\n3. **Output (Actuators & Indicators):**\n   - Converts electrical control signals back into physical work or alerts.\n   - Examples: DC gear motors, servo linkages, LED headlights, piezoceramic buzzers."
      },
      {
        "id": "g7-m2",
        "title": "Sensory Physics: Ultrasonic & Infrared",
        "readTime": "5 min read",
        "keyConcepts": [
          "Speed of Sound (340 m/s)",
          "Time of Flight",
          "IR Phototransistor",
          "Absorption vs Reflection"
        ],
        "summary": "How ultrasonic sensors and infrared sensors perceive spatial geometry.",
        "content": "### Ultrasonic Rangefinding (HC-SR04)\nThe sensor has two circular barrels: a **Trigger** (speaker) and an **Echo** (microphone).\n1. The trigger emits an ultrasonic burst of 40 kHz sound waves.\n2. The sound travels through air at approximately 340 meters per second (0.034 cm/microsecond).\n3. The sound hits an obstacle and reflects back.\n4. The echo pin measures the elapsed microsecond time (t).\n```\nDistance (cm) = (Time in microseconds × 0.034) ÷ 2\n```\n*(We divide by 2 because the sound traveled to the object and back!)*\n\n### Infrared (IR) Proximity & Line Sensors\nUses an Infrared LED emitter and an IR photodiode receiver.\n- **White / Light surfaces:** Reflect infrared rays back to the detector (HIGH signal).\n- **Black / Dark surfaces:** Absorb infrared rays, causing low reflectance (LOW signal).\n- This simple principle enables robots to follow marked track lines autonomously!"
      },
      {
        "id": "g7-m3",
        "title": "Circuits, Current & The H-Bridge Motor Driver",
        "readTime": "5 min read",
        "keyConcepts": [
          "Voltage (V)",
          "Current (mA/A)",
          "GPIO Current Limits",
          "H-Bridge Circuit"
        ],
        "summary": "Why robots need dedicated motor drivers to isolate control logic from heavy motor power.",
        "content": "A common question among young engineers: *\"Why can't I plug my DC motor directly into an Arduino digital pin?\"*\n\n- **The Current Limit:** An Arduino GPIO pin can safely provide around **20 to 40 milliamps (mA)** of electrical current.\n- **The Motor Demand:** A spinning DC motor draws **300 to 1000+ milliamps (1 Amp)**, especially under load or starting from a standstill!\n- If you wire the motor directly to the microchip pin, the excessive current draw will burn out the chip!\n\n### The Solution: The H-Bridge (Motor Driver)\nAn H-Bridge (like the L298N chip) uses 4 transistor switches in an 'H' configuration:\n- It draws high current directly from the battery pack for the motors.\n- It receives tiny low-current control signals from the microcontroller to switch direction and speed without endangering the brain."
      }
    ],
    "activities": [
      {
        "id": "sensor-logic",
        "type": "sensor-logic",
        "title": "Sensor Logic Challenge",
        "description": "Calibrate the ultrasonic sensor threshold and configure obstacle evasion rules! Watch the rover react in real-time as distance drops.",
        "instructions": "Adjust the detection distance slider (e.g. 25 cm). Choose the reaction behavior: Brake & Turn Right, Reverse & Pivot, or Emergency Sound. Run the simulation to verify obstacle evasion."
      },
      {
        "id": "movement-sim",
        "type": "movement-sim",
        "title": "Sensor-Guided Arena",
        "description": "Navigate an arena with dynamic obstacle detection telemetry active.",
        "instructions": "Drive while observing the live sensor distance readout and collision warning system."
      }
    ],
    "quiz": [
      {
        "id": "g7-q1",
        "question": "Why do we divide by 2 when calculating distance with an ultrasonic sensor?",
        "options": [
          "Because sound travels twice as fast",
          "Because the sound wave travels to the obstacle and returns back",
          "Because there are two sensors",
          "Because of battery resistance"
        ],
        "correctIndex": 1,
        "explanation": "The measured time covers the round trip (to the object and back), so we divide by 2 to get the one-way distance."
      },
      {
        "id": "g7-q2",
        "question": "Why is an H-Bridge motor driver necessary between a microcontroller and a DC motor?",
        "options": [
          "To change the color of the robot",
          "Because motors draw more current than microcontroller pins can safely provide",
          "To generate internet Wi-Fi signals",
          "Motors cannot spin without software code"
        ],
        "correctIndex": 1,
        "explanation": "Microcontrollers provide low current (~20mA), while motors draw hundreds of milliamps. The driver uses external battery power to drive the motors safely."
      },
      {
        "id": "g7-q3",
        "question": "How does an infrared line-tracking sensor detect a black tape line on a white floor?",
        "options": [
          "Black tape absorbs IR light, while white floor reflects it",
          "Black tape gets hot",
          "Black tape conducts sound waves",
          "White floor is magnetic"
        ],
        "correctIndex": 0,
        "explanation": "Dark surfaces absorb infrared radiation while light surfaces reflect it, allowing the sensor photodiode to register the line contrast."
      },
      {
        "id": "g7-q4",
        "question": "Which of the following is categorized as an Actuator in the IPO model?",
        "options": [
          "Ultrasonic Sensor",
          "Pushbutton Switch",
          "Servo Motor",
          "Photoresistor LDR"
        ],
        "correctIndex": 2,
        "explanation": "A servo motor is an actuator (Output) that converts electrical signals into physical angular rotation."
      }
    ]
  },
  {
    "grade": 8,
    "tier": "explore",
    "theme": "Algorithms, Flowcharts & Control Algorithms",
    "subtitle": "Design decision trees and visual logic sequences for robotic autonomy",
    "introduction": "Before writing lines of code, engineers conceptualize robotic behavior through algorithms and flowcharts! In Grade 8, you will master algorithmic thinking: breaking complex navigation problems into sequential steps, conditional branches (IF-THEN-ELSE), and infinite control loops.",
    "projectGoals": [
      "Deconstruct robotic tasks into precise, unambiguous step-by-step algorithms",
      "Use standard ISO flowchart symbols: Terminal, Process, Decision, and Input/Output",
      "Build and visually execute a working obstacle evasion logic sequence",
      "Identify and debug logic bugs like infinite trapped loops and edge-case deadlocks"
    ],
    "problemStatements": [
      "How do we ensure a robot does not get stuck oscillating back and forth between two walls?",
      "Why must a robotic controller run inside an infinite while(true) loop rather than terminating?",
      "What is the difference between a sequential action block and a conditional decision diamond?"
    ],
    "modules": [
      {
        "id": "g8-m1",
        "title": "Algorithmic Thinking in Robotics",
        "readTime": "5 min read",
        "keyConcepts": [
          "Sequence",
          "Selection (Conditionals)",
          "Iteration (Loops)",
          "Unambiguous Logic"
        ],
        "summary": "An algorithm is a finite, step-by-step sequence of instructions designed to solve a specific problem.",
        "content": "A robot cannot \"guess\" or \"use common sense\". If you tell a robot to \"go to the kitchen\", it will bump into a wall unless you provide exact instructions.\n\nRobotic algorithms consist of three fundamental building blocks:\n1. **Sequence:** Executing steps in a strictly defined top-to-bottom order.\n   - Example: `Initialize Pins -> Set Speed to 80% -> Enable Sensors`.\n2. **Selection (Conditional Branching):** Choosing different execution paths based on truth conditions.\n   - Example: `IF Obstacle Distance < 15cm THEN Turn Right ELSE Drive Forward`.\n3. **Iteration (Repetition / Loops):** Repeating a set of instructions until a condition changes or running indefinitely (`WHILE true`)."
      },
      {
        "id": "g8-m2",
        "title": "Mastering Standard Flowchart Architecture",
        "readTime": "5 min read",
        "keyConcepts": [
          "Oval (Terminal)",
          "Rectangle (Process)",
          "Diamond (Decision)",
          "Arrows (Flow)"
        ],
        "summary": "Standard visual flowchart symbols create a universal blueprint for software and hardware engineering.",
        "content": "Flowcharts use standardized geometric shapes so any engineer in the world can understand the control sequence:\n\n- **Rounded Oval (Terminal):** Represents the **START** (system boot / power on) or **END** (system shutdown) of the program.\n- **Rectangle (Process Block):** Represents an internal action, calculation, or motor command.\n  - Examples: `Set LeftMotor = 200`, `Wait 500 milliseconds`.\n- **Parallelogram (Input / Output):** Represents reading a sensor value or transmitting telemetry data.\n  - Example: `Read Ultrasonic Distance`.\n- **Diamond (Decision):** Represents a conditional question with two or more exiting branches (typically **YES/TRUE** and **NO/FALSE**).\n  - Example: `Is Distance < 20cm?`\n- **Directed Arrow (Flow Line):** Indicates the direction of execution from one block to the next."
      },
      {
        "id": "g8-m3",
        "title": "The Continuous Polling Loop & State Traps",
        "readTime": "4 min read",
        "keyConcepts": [
          "Continuous Polling",
          "Sampling Rate",
          "State Trap",
          "Failsafe Timeout"
        ],
        "summary": "Robots must constantly poll their sensors in real-time loops while avoiding trap conditions.",
        "content": "In standard desktop programming, a script often runs once, prints an answer, and exits. \nIn mobile robotics, however, the environment changes continuously! If the program stopped after 1 second, the rover would crash into the first wall it encountered.\n\n### The Polling Loop\nThe microcontroller executes an infinite loop:\n```\nLOOP FOREVER:\n  1. Trigger Ultrasonic Ping\n  2. Read Echo Duration & Calculate Distance\n  3. IF Distance < 20cm:\n       Stop Motors\n       Reverse 200ms\n       Turn Right 90 degrees\n     ELSE:\n       Move Forward\n  4. Short Delay (50ms)\nEND LOOP\n```\n\n### Avoiding The Corner Trap\nIf a robot turns right and immediately encounters another wall, simple logic might turn right again and again until it is stuck. Advanced algorithms add a turn counter or randomize turning angles when cornered!"
      }
    ],
    "activities": [
      {
        "id": "flowchart-builder",
        "type": "flowchart-builder",
        "title": "Flowchart Logic Builder",
        "description": "Construct a visual logic program by arranging flowchart blocks! Step through execution and watch the robot navigate.",
        "instructions": "Add blocks: [START] -> [READ SENSOR] -> [DECISION: OBSTACLE < 20CM?] -> [TURN RIGHT / DRIVE FORWARD] -> [LOOP]. Click \"Validate & Run Sequence\" to observe simulated block-by-block execution."
      },
      {
        "id": "sensor-logic",
        "type": "sensor-logic",
        "title": "Reactive Logic Simulator",
        "description": "Fine-tune multi-state conditional logic with ultrasonic distance triggers and visual reaction tests.",
        "instructions": "Program compound rules and inspect live telemetry as obstacle distance changes."
      }
    ],
    "quiz": [
      {
        "id": "g8-q1",
        "question": "Which flowchart symbol represents a decision question like \"Is distance < 20cm?\"",
        "options": [
          "Rectangle",
          "Diamond",
          "Circle",
          "Oval"
        ],
        "correctIndex": 1,
        "explanation": "A diamond shape denotes a conditional decision with branching outputs (Yes/True and No/False)."
      },
      {
        "id": "g8-q2",
        "question": "Why must a mobile robot controller run an infinite loop (e.g. while true)?",
        "options": [
          "Because it does not know when to sleep",
          "To continuously sample real-time sensor updates and respond to dynamic obstacles",
          "To waste battery power",
          "Because motors cannot stop once turned on"
        ],
        "correctIndex": 1,
        "explanation": "The real world is dynamic. Robots must continuously poll sensors in a loop to react to changing surroundings in real time."
      },
      {
        "id": "g8-q3",
        "question": "What happens if an obstacle-avoidance algorithm lacks an evasion turn command in the TRUE branch of an obstacle detection check?",
        "options": [
          "The robot flies",
          "The robot will detect the wall but fail to steer away, resulting in a collision",
          "The battery charges instantly",
          "The code compiles faster"
        ],
        "correctIndex": 1,
        "explanation": "Detecting an obstacle without issuing an evasion motor action (like reverse or turn) leaves the robot heading toward the collision."
      },
      {
        "id": "g8-q4",
        "question": "Which flowchart shape is used to represent the START or END terminal point of a program?",
        "options": [
          "Rounded Oval",
          "Diamond",
          "Triangle",
          "Star"
        ],
        "correctIndex": 0,
        "explanation": "A rounded oval (or stadium pill) represents the terminal start and end points of a flowchart."
      }
    ]
  },
  {
    "grade": 9,
    "tier": "engineer",
    "theme": "Microcontrollers, Pseudocode & Embedded Logic",
    "subtitle": "Bridge software algorithms and hardware pins with embedded computing concepts",
    "introduction": "Step into the laboratory of an embedded systems engineer! In Grade 9, we study how microcontrollers (like the ATmega328P or ESP32) bridge lines of code and physical hardware pins. Learn about General Purpose Input/Output (GPIO), Analog-to-Digital Conversion (ADC), Pulse Width Modulation (PWM) speed regulation, and structured pseudocode.",
    "projectGoals": [
      "Understand the architecture of a microcontroller: Flash memory, SRAM, CPU, and GPIO registers",
      "Explain Pulse Width Modulation (PWM) duty cycles for variable motor speed control",
      "Distinguish between continuous analog signals (0-5V / 0-1023 ADC) and binary digital signals (0/1)",
      "Construct a Finite State Machine (FSM) pseudocode routine for an autonomous rover"
    ],
    "problemStatements": [
      "How does Pulse Width Modulation (PWM) regulate motor speed without dropping supply voltage and losing torque?",
      "How does an Analog-to-Digital Converter (ADC) convert continuous physical voltages into discrete numbers for code?",
      "Why is a Finite State Machine (FSM) superior to deeply nested IF-ELSE statements for complex robotic behaviors?"
    ],
    "modules": [
      {
        "id": "g9-m1",
        "title": "Microcontroller Architecture & GPIO Pins",
        "readTime": "6 min read",
        "keyConcepts": [
          "Von Neumann vs Harvard",
          "Flash & SRAM",
          "GPIO Pin Modes (INPUT/OUTPUT)",
          "Internal Pull-Up"
        ],
        "summary": "A microcontroller is a self-contained computer on a single silicon chip tailored for embedded control.",
        "content": "Unlike desktop CPUs that require external RAM, motherboards, and graphics cards, a **Microcontroller Unit (MCU)** integrates:\n- **Processor Core (CPU):** Executes machine instructions cycle by cycle.\n- **Flash Memory:** Non-volatile storage where your compiled robot program resides.\n- **SRAM:** Volatile working memory for variables and stack frames.\n- **GPIO Pins (General Purpose Input/Output):** Physical pins that can be configured in software:\n  - `pinMode(pin, OUTPUT)`: Can drive pin to HIGH (5V/3.3V) or LOW (0V).\n  - `pinMode(pin, INPUT)`: High-impedance mode to listen for external voltage.\n  - `pinMode(pin, INPUT_PULLUP)`: Activates internal resistor to prevent floating signals on switches."
      },
      {
        "id": "g9-m2",
        "title": "Signals: Digital, Analog & PWM Speed Regulation",
        "readTime": "6 min read",
        "keyConcepts": [
          "Digital Binary (0/1)",
          "Analog ADC (10-bit resolution)",
          "PWM Frequency & Duty Cycle"
        ],
        "summary": "How digital microchips perceive analog gradients and simulate variable voltage.",
        "content": "### Digital vs Analog\n- **Digital Signal:** Has only two distinct states: LOW (0V / binary 0) and HIGH (5V / binary 1). Ideal for pushbuttons, optical encoders, and status LEDs.\n- **Analog Signal:** Continuous voltage gradient (e.g., 0.0V to 5.0V). Light sensors and potentiometers output analog voltages.\n- **ADC (Analog-to-Digital Converter):** A 10-bit ADC maps 0V–5V into discrete integer values from **0 to 1023** (`2^10 = 1024 steps`).\n\n### Pulse Width Modulation (PWM)\nHow do we make a DC motor spin at half speed if digital pins can only output 0V or 5V?\nInstead of lowering voltage (which causes motors to stall), we rapidly toggle 5V ON and OFF hundreds of times per second!\n- **Duty Cycle:** The percentage of time the signal is ON during one period.\n  - 25% Duty Cycle = Motor spins slowly with full voltage pulses.\n  - 50% Duty Cycle = Medium speed.\n  - 100% Duty Cycle = Maximum continuous speed."
      },
      {
        "id": "g9-m3",
        "title": "Pseudocode & Finite State Machines (FSM)",
        "readTime": "5 min read",
        "keyConcepts": [
          "Pseudocode Syntax",
          "FSM States",
          "State Transitions",
          "Deterministic Control"
        ],
        "summary": "Using Finite State Machines to eliminate spaghetti code in autonomous robot programming.",
        "content": "As robots take on complex tasks, nesting dozens of `if... else if...` statements causes unexpected bugs. Professional engineers structure robots as **Finite State Machines (FSM)**.\n\n### Rover Navigation States:\n1. `STATE_FORWARD`: Motors drive straight; ultrasonic ping active.\n2. `STATE_OBSTACLE_DETECTED`: Distance < 20cm; stop motors, start 150ms timer.\n3. `STATE_SCANNING`: Pan servo left and right; compare clear distances.\n4. `STATE_RECOVER_TURN`: Turn toward the clearer direction until heading matches target.\n\n### Pseudocode Example:\n```c\nenum RobotState { FORWARD, REVERSE_TURN, EMERGENCY_STOP };\nRobotState currentState = FORWARD;\n\nvoid loop() {\n  int distance = readUltrasonic();\n  switch(currentState) {\n    case FORWARD:\n      if (distance < 20) {\n        setMotors(0, 0);\n        currentState = REVERSE_TURN;\n      } else {\n        setMotors(200, 200); // 80% PWM\n      }\n      break;\n    case REVERSE_TURN:\n      setMotors(-150, 150); // Pivot turn\n      delay(400);\n      currentState = FORWARD;\n      break;\n  }\n}\n```"
      }
    ],
    "activities": [
      {
        "id": "sensor-logic",
        "type": "sensor-logic",
        "title": "Sensor Logic & PWM Control Studio",
        "description": "Test PWM speed regulation, calibrate obstacle thresholds, and watch state transitions occur in real time.",
        "instructions": "Modify the distance trigger threshold, toggle motor speed PWM levels, and verify state transition telemetry when approaching barriers."
      },
      {
        "id": "flowchart-builder",
        "type": "flowchart-builder",
        "title": "State Machine Flowchart Architect",
        "description": "Build a multi-branch state transition flowchart for an autonomous inspection rover.",
        "instructions": "Organize states: [IDLE] -> [FORWARD DRIVE] -> [OBSTACLE CHECK] -> [EVASIVE PIVOT] -> [RESUME]. Verify execution validity."
      }
    ],
    "quiz": [
      {
        "id": "g9-q1",
        "question": "What does a 50% PWM Duty Cycle mean for a 5V digital output pin?",
        "options": [
          "The pin outputs 2.5V continuous DC voltage",
          "The signal is at 5V for half the period and at 0V for half the period",
          "The motor spins backward",
          "The microcontroller is running at half clock speed"
        ],
        "correctIndex": 1,
        "explanation": "PWM rapidly switches between full 5V and 0V; a 50% duty cycle means the pin is HIGH for 50% of each cycle period."
      },
      {
        "id": "g9-q2",
        "question": "A 10-bit Analog-to-Digital Converter (ADC) maps an input voltage of 0V to 5V to which integer range?",
        "options": [
          "0 to 10",
          "0 to 100",
          "0 to 1023",
          "0 to 65535"
        ],
        "correctIndex": 2,
        "explanation": "A 10-bit ADC provides 2^10 = 1024 discrete values, spanning from 0 (at 0V) up to 1023 (at 5V)."
      },
      {
        "id": "g9-q3",
        "question": "Why is an internal pull-up resistor (INPUT_PULLUP) used when wiring a pushbutton switch to a microcontroller pin?",
        "options": [
          "To speed up calculations",
          "To prevent a floating input state where the pin picks up electromagnetic noise when the switch is open",
          "To heat the circuit board",
          "To reduce motor noise"
        ],
        "correctIndex": 1,
        "explanation": "Without a pull-up or pull-down resistor, an unconnected input pin \"floats\" unpredictably between 0 and 1 due to ambient electrical noise."
      },
      {
        "id": "g9-q4",
        "question": "In a Finite State Machine (FSM), what causes the robot to change from STATE_FORWARD to STATE_REVERSE_TURN?",
        "options": [
          "A State Transition condition being met (e.g., sensor distance < 20cm)",
          "The compiler running out of memory",
          "The chassis falling over",
          "Re-plugging the USB cable"
        ],
        "correctIndex": 0,
        "explanation": "A state transition occurs when an event or condition (such as sensor reading crossing a threshold) triggers a switch to a new state."
      }
    ]
  },
  {
    "grade": 10,
    "tier": "engineer",
    "theme": "Autonomous Systems & Advanced Robotics Problem Solving",
    "subtitle": "Industrial-grade closed-loop cybernetics, state estimation, sensor fusion, and mission resilience",
    "introduction": "Welcome to the capstone tier of the Akshar Bharati Robotics curriculum! In Grade 10, we bridge laboratory prototyping and production aerospace and industrial robotics. You will explore closed-loop feedback systems (PID control theory), stochastic sensor fusion (complementary and Kalman filtering), differential kinematics, hardware watchdog resilience, and deploying low-cost robotics for high-impact humanitarian service learning.",
    "projectGoals": [
      "Contrast open-loop actuation with closed-loop feedback and formulate the mathematical foundations of Proportional-Integral-Derivative (PID) control",
      "Analyze physical failure modes and limitations of acoustic, optical, and inertial sensors",
      "Implement multi-sensor complementary fusion to eliminate high-frequency noise and low-frequency drift",
      "Derive differential drive kinematics and odometry pose tracking equations (x, y, theta)",
      "Design industrial fault-tolerant architectures utilizing hardware Watchdog Timers (WDT), stall current detection, and failsafe states",
      "Apply advanced robotics problem solving to Akshar Bharati service learning missions in agriculture and assistive technology"
    ],
    "problemStatements": [
      "Why does open-loop timing (e.g. drive forward for 3.0s) fail in real environments, and how does error feedback e(t) guarantee precise trajectory tracking?",
      "How does a Proportional-Integral-Derivative (PID) controller eliminate steady-state offset and damp aggressive oscillations during high-speed wall following?",
      "Why is fusing an IMU gyroscope with ultrasonic and optical wheel encoders necessary to overcome cumulative dead reckoning drift?",
      "What hardware and software failsafes prevent motor burnout or runaway rovers when a wheel stalls against an immovable obstacle?"
    ],
    "modules": [
      {
        "id": "g10-m1",
        "title": "Open-Loop vs Closed-Loop Systems & PID Control Theory",
        "readTime": "7 min read",
        "keyConcepts": [
          "Open-Loop Systems",
          "Closed-Loop Feedback",
          "Error Calculation: e(t)",
          "Proportional Gain (Kp)"
        ],
        "summary": "Explore cybernetic feedback control architectures, error formulation, and the mathematical tuning of Proportional-Integral-Derivative (PID) algorithms.",
        "content": "In introductory robotics, beginners often command rovers using simple open-loop delays:\n```c\nsetMotors(FORWARD, 200);\ndelay(3000); // Drive for 3 seconds\nstopMotors();\n```\nIn the real world, this open-loop approach **always fails**. Why? If battery voltage drops from 8.4V to 7.2V, the motors spin slower. If one tire encounters carpet friction or slips on slick tile, the rover veers wildly off course. The robot has no eyes on its own reality!\n\n---\n\n### 1. The Closed-Loop Cybernetic Architecture\nClosed-loop control continuously measures actual physical output, compares it against the desired setpoint, and computes a dynamic real-time correction:\n\n```\nDesired Setpoint r(t) ➔ [ + ] ➔ Error e(t) ➔ [ Controller u(t) ] ➔ [ Motors / Plant ] ➔ Rover Output y(t)\n                         ^ -                                                           |\n                         |-------------------[ Feedback Sensor ]----------------------|\n```\n\n1. **Setpoint r(t):** The target state (e.g., maintaining exactly 20.0 cm from a boundary wall).\n2. **Feedback Sensor y(t):** The real-time measured distance sampled by the ultrasonic sensor.\n3. **Error Detector e(t):** The instantaneous discrepancy between target and reality:\n   ```\n   e(t) = Setpoint - MeasuredValue(t)\n   ```\n4. **Control Output u(t):** The corrective steering command sent to the motor drivers.\n\n---\n\n### 2. Proportional Control (P-Control)\nIn Proportional control, the correction command is directly proportional to the magnitude of the error:\n```\nu(t) = Kp × e(t)\n```\n- **Kp (Proportional Gain):** A tunable sensitivity multiplier.\n- **Large Error:** When the rover is 15 cm off track, e(t) is large, producing a powerful corrective turn.\n- **Small Error:** As the rover approaches the target line, e(t) shrinks toward zero, automatically softening the turn to prevent harsh overshoot.\n\n---\n\n### 3. Overcoming P-Control Limitations: The Full PID Framework\nWhile pure P-control is intuitive, it has physical limitations that advanced engineers resolve using **Integral (I)** and **Derivative (D)** terms:\n\n1. **The Steady-State Offset Problem (Why P-control needs Integral):**\n   - As error gets tiny, the proportional output Kp·e(t) becomes too weak to overcome the physical static friction of the wheels and gearbox. The rover settles with a permanent, stubborn offset error.\n   - **The Integral Term (Ki):** Sums error over time:\n     ```\n     Integral Correction = Ki × ∫ e(τ) dτ\n     ```\n     Even a tiny error, if persistent for 2 seconds, accumulates into a significant corrective force that pushes the rover all the way to zero error!\n\n2. **The Overshoot & Oscillation Problem (Why P-control needs Derivative):**\n   - High Kp gain causes rovers to approach the target line with high momentum, overshooting and oscillating back and forth like a pendulum.\n   - **The Derivative Term (Kd):** Calculates the rate of change of error (de/dt):\n     ```\n     Derivative Correction = Kd × (de(t) / dt)\n     ```\n     Acting like a mathematical shock absorber or damper, Kd detects how rapidly the robot is closing in on the target and brakes early to guarantee a smooth, level approach.\n\n### The Complete Continuous PID Equation:\n```\nu(t) = Kp·e(t)  +  Ki·∫₀ᵗ e(τ)dτ  +  Kd·(de(t)/dt)\n       [Present]       [Past]           [Future]\n```\n\n---\n\n### 4. Practical Heuristic Tuning Guide\nFor autonomous wall-following rovers:\n1. Set Ki = 0 and Kd = 0. Gradually increase Kp until the rover tracks the wall, but begins slight steady oscillations.\n2. Increase Kd to damp out the oscillations until trajectory transitions become smooth and critically damped.\n3. If a small permanent offset distance remains, introduce a modest Ki to pull the steady-state error strictly to zero."
      },
      {
        "id": "g10-m2",
        "title": "Sensor Fusion, Kalman Filtering & Odometry in Harsh Environments",
        "readTime": "7 min read",
        "keyConcepts": [
          "Sensor Limitations",
          "Complementary Fusion",
          "Kalman Filter Concept",
          "Wheel Encoders & Odometry"
        ],
        "summary": "Explore the mathematical fusion of acoustic, optical, and inertial sensor streams to overcome physical limitations and sensor noise.",
        "content": "In safety-critical autonomous vehicles, relying on a single sensor modality is a fatal engineering flaw. Every physical transducer has blind spots, environmental susceptibilities, and noise profiles.\n\n---\n\n### 1. Physical Limitations & Failure Modes of Common Sensors:\n- **Ultrasonic Sensors (Acoustic):**\n  - *Limitation:* Acoustic sound waves experience specular reflection when striking hard surfaces at angles greater than 45°, glancing away like light off a mirror without bouncing back to the receiver barrel!\n  - *Atmospheric Vulnerability:* The speed of sound varies with air temperature and humidity (v = 331.3 + 0.606·T), introducing systematic measurement bias.\n- **Infrared (IR) Phototransistors (Optical):**\n  - *Limitation:* Natural sunlight emits massive amounts of infrared radiation, completely saturating and blinding optical photodiode receivers outdoors.\n- **Wheel Encoders (Dead Reckoning):**\n  - *Limitation:* Optical encoders count wheel slot pulses with microsecond precision, but they measure *wheel rotation*, not *ground displacement*. If wheels slip on dust, sand, or wet tile, encoder estimates accumulate unbounded integration drift (O(t)).\n- **MEMS Gyroscopes (Inertial):**\n  - *Limitation:* Provide instantaneous angular velocity (ω = dθ/dt) with zero lag, but integrating angular rate over time causes numerical integration bias drift, causing calculated robot heading to wander over several minutes.\n\n---\n\n### 2. Complementary Filtering (Frequency Domain Fusion)\nHow do aerospace engineers fuse a drifting gyroscope with a noisy accelerometer or ultrasonic rangefinder?\n- Gyroscopes are **reliable at high frequencies** (sudden turns), but **drift at low frequencies** (long periods).\n- Sonar/Accelerometers are **noisy at high frequencies** (mechanical chassis vibration), but **stable at low frequencies** (over long periods).\n\nBy pairing a High-Pass Filter on the gyro with a Low-Pass Filter on the distance/angle reference, the **Complementary Filter** produces an optimal estimate with virtually zero computing overhead:\n```\nθ_fused(t) = α · [ θ_prev + ω·Δt ]  +  (1 - α) · [ θ_reference ]\n```\n*(where α ≈ 0.96 to 0.98 balances rapid transient tracking with long-term stability).*\n\n---\n\n### 3. The Kalman Filter Concept (Optimal State Estimation)\nIn aerospace navigation and Mars rover missions, sensor noise is modeled statistically using the **Kalman Filter**:\n1. **State Prediction (Physics Model):**\n   - Uses kinematics equations of motion and motor telemetry to predict where the rover *should* be at step k:\n   ```\n   x̂_k⁻ = F·x̂_{k-1} + B·u_k\n   ```\n2. **Measurement Update (Sensor Observation):**\n   - Samples actual noisy sensor readings z_k.\n   - Calculates the **Kalman Gain (K_k)**, which dynamically weights whether to trust the physics prediction or the sensor measurement based on their relative statistical variance (covariance matrices P and R).\n   ```\n   x̂_k = x̂_k⁻ + K_k · (z_k - H·x̂_k⁻)\n   ```\nEven if an obstacle measurement spikes wildly for one cycle due to sound reflection glitching, the Kalman filter gracefully discards the outlier!\n\n---\n\n### 4. Differential Drive Kinematics & Odometry Tracking\nAutonomous path planners track the 2D Cartesian pose vector (x, y, θ) of the rover using dual wheel encoders:\n```\nΔs_left  = (2π · r · ticks_L) / N\nΔs_right = (2π · r · ticks_R) / N\n\nΔs     = (Δs_right + Δs_left) / 2          // Linear distance traveled\nΔθ     = (Δs_right - Δs_left) / Wheelbase  // Heading change in radians\n\nx_{k+1} = x_k + Δs · cos(θ_k + Δθ / 2)\ny_{k+1} = y_k + Δs · sin(θ_k + Δθ / 2)\nθ_{k+1} = θ_k + Δθ\n```\nBy running this kinematics loop at 50 Hz, the rover maintains a continuous dead reckoning coordinate map of its exploration arena."
      },
      {
        "id": "g10-m3",
        "title": "Industrial Fault-Tolerant Architecture & Service Learning Impact",
        "readTime": "7 min read",
        "keyConcepts": [
          "Watchdog Timers",
          "Motor Stall Detection",
          "Failsafe Defaults",
          "Akshar Bharati Service Mission"
        ],
        "summary": "Design bulletproof fault-tolerant robotics architectures and deploy autonomous systems for high-impact community service learning.",
        "content": "A robot that works 99% of the time in a lab is unacceptable in industrial, medical, or agricultural missions. Engineering excellence requires anticipating hardware failures, software deadlocks, and environmental hazards—ensuring the system always fails gracefully and safely.\n\n---\n\n### 1. Hardware Watchdog Timers (WDT)\nMicrocontrollers operating in electrically noisy environments (near heavy DC motor sparks and inductive EMF spikes) can experience program counter corruption, stack overflows, or infinite loop deadlocks.\n- **The Watchdog Architecture:**\n  - A dedicated hardware countdown timer clocked independently from a separate internal silicon oscillator.\n  - While the robot’s main control software runs healthily, it must regularly reset or \"kick\" the watchdog register before the counter reaches zero (e.g., every 250 milliseconds):\n  ```c\n  void loop() {\n    sampleSensors();\n    computePID();\n    driveMotors();\n    wdt_reset(); // \"Kick the watchdog\" to prevent system reset\n  }\n  ```\n  - **The Failsafe Action:** If code hangs in an unexpected while-loop or freezes, the watchdog timer expires, instantly issuing a hardware hardware-level system reboot to restore autonomous operation within milliseconds!\n\n---\n\n### 2. Motor Stall Current Detection & Thermal Protection\nWhen a rover encounters an immovable barrier (such as a boulder or step), the wheels stop spinning while full battery voltage continues to be applied across the motor terminals:\n- **The Physics of a Stall:**\n  - When spinning normally, a DC motor generates internal **Counter-Electromotive Force (Back-EMF)** that opposes incoming current.\n  - When locked stationary, Back-EMF drops to **zero**. Current is limited solely by the tiny internal winding resistance (R_winding ≈ 2 to 3 Ω):\n  ```\n  I_stall = V_battery ÷ R_winding = 7.4V ÷ 2.5Ω = 2.96 Amperes!\n  ```\n- **Thermal Destruction (P = I²R):** A 3-Amp current spike generates nearly 22 Watts of thermal heat in the motor coils and H-Bridge MOSFET switches, melting plastic gears and burning silicon driver chips within seconds!\n- **Engineering Solution:** By placing a low-resistance shunt resistor in series with the motor ground or monitoring current telemetry, the microcontroller detects current spikes exceeding normal thresholds (e.g. > 1.2A for > 200ms) and immediately commands an automated emergency power cutoff and recovery reverse maneuver.\n\n---\n\n### 3. Failsafe State Machine Architecture\nIndustrial autonomy uses hierarchical failsafe state trees:\n\n```\n[ NORMAL OPERATION ] ──(Fault Detected)──> [ DIAGNOSTIC FAULT HANDLER ]\n  • NAV_FORWARD                               • SENSOR_LOST: Stop & ping retry\n  • DOCK_TARGET                               • MOTOR_STALL: Reverse & pivot\n                                              • LOW_VOLTAGE: Enter sleep beacon\n                                              • CRITICAL_ERROR: HARDWARE E-STOP!\n```\n\n- **Failsafe Default Rule:** If communication or sensor telemetry is lost, never hold the last known motor command! The system must immediately default to active dynamic braking (`BRAKE_ALL_MOTORS`) and pulse a diagnostic amber LED flash code.\n\n---\n\n### 4. The Akshar Bharati Service Learning Mission\nEngineering reaches its highest purpose when applied to solving urgent humanitarian and community challenges. Through Akshar Bharati's educational initiatives, students take these exact Grade 5–10 principles and design affordable, high-impact technologies:\n\n1. **Autonomous Precision Agriculture:**\n   - Deploying low-cost mobile rovers equipped with capacitive soil moisture sensors and GPS telemetry to optimize drip irrigation for rural smallholder farmers, conserving up to 40% of precious groundwater.\n2. **Assistive Mobility Technology:**\n   - Designing smart mobility canes and wearable sensory vests that combine ultrasonic sonar and haptic vibration motors to help visually impaired citizens navigate city sidewalks safely.\n3. **Classroom & Public Health Robotics:**\n   - Engineering automated touchless sanitization stations and solar-powered educational robotics kits built from recyclable materials to bring hands-on STEM education to under-resourced rural schools.\n\nBy mastering closed-loop control, sensor integration, and robust failsafe design, you are not just learning robotics—you are becoming an engineer capable of building technologies that uplift society!"
      }
    ],
    "activities": [
      {
        "id": "movement-sim",
        "type": "movement-sim",
        "title": "Autonomous Navigation Maze Arena",
        "description": "Test autonomous obstacle navigation with dynamic telemetry, heading vectors, coordinate tracking, and target waypoints.",
        "instructions": "Guide the rover through the arena while observing real-time coordinate logging, speed modulation, and obstacle proximity alarms."
      },
      {
        "id": "sensor-logic",
        "type": "sensor-logic",
        "title": "Closed-Loop Sensor Logic & Failsafe Simulator",
        "description": "Configure multi-layer sensor thresholds, emergency brake limits, and simulated motor stall triggers.",
        "instructions": "Calibrate proximity limits, observe reactive control graphs, and verify that the system halts safely in emergency zones."
      },
      {
        "id": "flowchart-builder",
        "type": "flowchart-builder",
        "title": "Mission Failsafe Logic Builder",
        "description": "Construct a closed-loop mission flow with watchdog verification and branch recovery.",
        "instructions": "Build and validate the control sequence from boot sequence through telemetry feedback to mission completion."
      }
    ],
    "quiz": [
      {
        "id": "g10-q1",
        "question": "What is the fundamental difference between an open-loop and a closed-loop robotic control system?",
        "options": [
          "Open-loop uses rechargeable batteries, closed-loop does not",
          "Closed-loop uses feedback sensors to measure the actual output error and adjust commands",
          "Open-loop has more gears than closed-loop",
          "Closed-loop can only turn clockwise"
        ],
        "correctIndex": 1,
        "explanation": "Closed-loop systems continuously sample sensors to measure real output error e(t) and make automatic corrections, whereas open-loop systems blindly execute without feedback."
      },
      {
        "id": "g10-q2",
        "question": "Why do autonomous navigation vehicles combine ultrasonic sensors, infrared sensors, and wheel encoders (Sensor Fusion)?",
        "options": [
          "Because one sensor alone is too cheap",
          "Because every individual sensor has blind spots or drift, so fusing multiple inputs provides a robust, reliable picture",
          "To make the robot heavier",
          "It is required by the operating system"
        ],
        "correctIndex": 1,
        "explanation": "Sensor fusion combines complementary data from multiple sensors to overcome individual weaknesses (e.g. wheel slip, sunlight interference, sound reflection angles)."
      },
      {
        "id": "g10-q3",
        "question": "In proportional (P) control, what happens to the steering correction output as the robot gets closer to its target line (as error approaches zero)?",
        "options": [
          "Correction output increases to maximum",
          "Correction output smoothly decreases toward zero to prevent jerky overshoot",
          "Motors instantly reverse polarity",
          "The microcontroller resets"
        ],
        "correctIndex": 1,
        "explanation": "Because Correction = Kp × Error, as error shrinks to zero, the correction smoothly reduces, preventing oscillations and overshoot."
      },
      {
        "id": "g10-q4",
        "question": "What is the primary function of a hardware Watchdog Timer in an autonomous robot?",
        "options": [
          "To bark at intruders",
          "To monitor the main loop and safely halt or reboot the system if the software hangs or freezes",
          "To measure battery chemistry",
          "To speed up motor rotation"
        ],
        "correctIndex": 1,
        "explanation": "A watchdog timer ensures system resilience: if the software hangs or enters an infinite deadlock, the timer triggers a safe reset or failsafe stop."
      }
    ]
  }
];
