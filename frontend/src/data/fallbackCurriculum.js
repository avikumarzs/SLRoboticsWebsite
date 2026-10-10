// Frontend Fallback Curriculum Data (Grades 5-10)
// Ensures the learning platform continues to operate seamlessly even if the backend is offline

export const fallbackCurriculum = [
  {
    grade: 5,
    tier: 'discover',
    theme: 'Introduction to Simple Machines & Robots',
    subtitle: 'Discover the building blocks of mechanical creatures',
    introduction: 'Welcome to the exciting world of robotics! A robot is a programmable machine designed to sense its environment, think through logic, and take action to help humans. In Grade 5, we explore how simple machines like levers, pulleys, gears, and wheels combine with electronics to bring robots to life.',
    projectGoals: [
      'Distinguish between ordinary tools, motorized appliances, and autonomous robots',
      'Learn the Sense-Think-Act paradigm that every robot follows',
      'Identify the five core robot parts: Chassis, Motors, Wheels, Battery, and Controller',
      'Assemble a virtual two-wheel rover and understand how each part contributes'
    ],
    problemStatements: [
      'How do simple machines like wheels and levers reduce the effort needed to move heavy objects?',
      'What components allow a robot to sense an obstacle instead of bumping into a wall?',
      'Why is a battery like the heart of a robot while the microcontroller is the brain?'
    ],
    modules: [
      {
        id: 'g5-m1',
        title: 'What Makes a Robot a Robot?',
        readTime: '4 min read',
        keyConcepts: ['Sense-Think-Act loop', 'Automation vs Remote Control', 'Everyday Robots'],
        summary: 'Robots are smart helpers that use sensors to detect the world, a microcontroller brain to decide, and motors to move.',
        content: `Have you ever wondered what makes a robot different from a regular household toaster or an RC toy car?

A toaster does only one mechanical heating task when pushed down. An RC toy car only moves when a human pushes a joystick. 

A true **robot**, however, follows the **Sense-Think-Act loop**:
1. **Sense:** Sensors (like ultrasonic eyes or light sensors) detect what is happening around it.
2. **Think:** A microcontroller brain processes that sensor data based on instructions.
3. **Act:** Actuators (like motors, wheels, buzzers, or robot arms) make physical movements in response!

Today, robots explore Mars, help doctors in hospitals, build cars in factories, and clean living room floors autonomously.`
      },
      {
        id: 'g5-m2',
        title: 'The Magic of Simple Machines',
        readTime: '5 min read',
        keyConcepts: ['Levers & Fulcrums', 'Wheels & Axles', 'Pulleys & Inclines', 'Mechanical Advantage'],
        summary: 'Long before electric motors were invented, simple machines enabled humans to lift massive stones. Robots still use these exact principles!',
        content: `Every high-tech robot is built upon mechanical principles discovered thousands of years ago. These are called **Simple Machines**:

- **Wheel and Axle:** Reduces friction by rolling instead of sliding across the ground. Two wheels connected to a central shaft allow smooth rolling and steering.
- **The Lever:** A rigid bar pivoting on a fulcrum. A small force pushed down on one side can lift a much heavier load on the other (just like a seesaw or a robotic gripper arm!).
- **The Pulley:** Uses a grooved wheel and a belt/cable to change the direction of force and lift heavy robotic arms or elevator lifts.
- **The Inclined Plane:** A ramp that makes it easier to raise objects to a higher elevation, allowing robotic rovers to climb slopes.`
      },
      {
        id: 'g5-m3',
        title: 'Anatomy of a Robot: Brains, Muscles & Senses',
        readTime: '5 min read',
        keyConcepts: ['Chassis', 'DC Motors', 'Microcontroller', 'Ultrasonic Sensor', 'Rechargeable Battery'],
        summary: 'Just like the human body has bones, muscles, nerves, and a brain, a robot is built with matching subsystems.',
        content: `To build a robot, we connect five essential systems together:

1. **The Chassis (Skeleton):** The sturdy structural frame that holds all components securely in place.
2. **The Battery (Heart & Energy):** Provides electrical voltage and current to power the brain and drive motors.
3. **DC Motors & Wheels (Muscles):** Convert electrical energy into rotational kinetic force to propel the robot forward and backward.
4. **Ultrasonic Sensor (Eyes & Ears):** Emits high-frequency sound waves that bounce off obstacles to calculate distance.
5. **Microcontroller Board (Brain):** The computer chip that reads sensor signals and commands the motors.`
      }
    ],
    activities: [
      {
        id: 'build-robot',
        type: 'build-a-robot',
        title: 'Build a Robot Workshop',
        description: 'Mount the chassis, wire the DC motors, slot the battery pack, attach the ultrasonic eyes, and connect the brain to bring your rover online!',
        instructions: 'Click each component from your parts inventory on the left to install it into its designated dock on the rover chassis. Verify diagnostic telemetry once all 5 components are locked in.'
      },
      {
        id: 'movement-sim',
        type: 'movement-sim',
        title: 'Rover Movement Simulator',
        description: 'Take the helm of your rover in the testing arena! Test forward, reverse, and pivot commands.',
        instructions: 'Use the on-screen directional controls or keyboard arrow keys to guide the robot across the arena toward the green target beacon without hitting perimeter barriers.'
      }
    ],
    quiz: [
      {
        id: 'g5-q1',
        question: 'What are the three steps in the core robotic cycle?',
        options: ['Sleep, Charge, Wake', 'Sense, Think, Act', 'Fast, Slow, Stop', 'Heat, Cool, Vent'],
        correctIndex: 1,
        explanation: 'Every robot perceives through sensors (Sense), calculates in its microcontroller (Think), and moves its actuators (Act).'
      },
      {
        id: 'g5-q2',
        question: 'Which simple machine is used in robot wheels to reduce friction with the floor?',
        options: ['Wheel and Axle', 'Wedge', 'Screw', 'Pendulum'],
        correctIndex: 0,
        explanation: 'A wheel and axle enables smooth rolling instead of sliding friction, allowing robots to traverse ground efficiently.'
      },
      {
        id: 'g5-q3',
        question: 'What is the role of the microcontroller board in a robot?',
        options: ['It decorates the rover chassis', 'It acts as the brain to read sensors and command motors', 'It is only used as a weight', 'It produces sound waves to play music'],
        correctIndex: 1,
        explanation: 'The microcontroller is the brain that executes code, interprets sensor input, and issues motor commands.'
      },
      {
        id: 'g5-q4',
        question: 'How does an ultrasonic sensor measure the distance to a wall?',
        options: ['By smelling the paint', 'By emitting high-frequency sound waves and timing the returning echo', 'By measuring temperature', 'By using magnetic tape'],
        correctIndex: 1,
        explanation: 'Like a bat, the ultrasonic sensor sends sound pulses and calculates distance from the time it takes for the echo to bounce back.'
      }
    ]
  },
  {
    grade: 6,
    tier: 'discover',
    theme: 'Mechanisms, Motors & Motion Dynamics',
    subtitle: 'Master how gears, motors, and wheels turn electrical energy into movement',
    introduction: 'How do robotic rovers climb steep ramps, carry payloads, or spin 360 degrees on the spot? In Grade 6, we explore the physics of robot mobility! Learn how gears trade speed for pulling torque, how electric motors generate rotation, and how differential steering enables agile navigation.',
    projectGoals: [
      'Understand how gear pairs and gear trains modify rotational speed and torque',
      'Differentiate between continuous DC motors and precision angle Servo motors',
      'Explain differential drive steering: why differing wheel speeds produce curved or pivot turns',
      'Control robot navigation in an obstacle-filled testing arena'
    ],
    problemStatements: [
      'Why does a hill-climbing rescue rover need high torque rather than high top speed?',
      'How does spinning left and right wheels in opposite directions produce a zero-radius turn?',
      'What happens to rotational direction when two spur gears mesh together?'
    ],
    modules: [
      {
        id: 'g6-m1',
        title: 'Gears, Ratios & Mechanical Advantage',
        readTime: '5 min read',
        keyConcepts: ['Driver & Driven Gears', 'Gear Ratios', 'Torque vs Speed', 'Idler Gears'],
        summary: 'Gears allow robotic engineers to trade speed for pulling force (torque) or vice versa.',
        content: `Gears are toothed wheels that interlock to transfer rotational motion from one shaft to another.

Key rules of gear interaction:
- **Direction Flip:** When two external gears mesh, they rotate in opposite directions. (If Gear A turns clockwise, Gear B turns counter-clockwise).
- **The Gear Ratio Formula:**
  \`\`\`
  Gear Ratio = Teeth on Driven Gear ÷ Teeth on Driver Gear
  \`\`\`
- **Speed Reduction (High Torque):** If a small 10-tooth motor gear drives a larger 30-tooth wheel gear (Ratio 3:1), the wheel spins at 1/3 the speed, but with **3 times more rotational force (torque)**!
- **Speed Multiplier:** If a large gear drives a smaller gear, output speed increases, but torque drops.

For mobile robotics, heavy rovers almost always use gear reduction to conquer slopes and carpet friction.`
      },
      {
        id: 'g6-m2',
        title: 'Electric Motors: DC vs Servo',
        readTime: '4 min read',
        keyConcepts: ['DC Motor', 'Servo Motor', 'Electromagnetism', 'Rotational Degrees'],
        summary: 'Different robotic joints require different types of motorized actuators.',
        content: `Electric motors convert electrical energy from the battery into mechanical kinetic energy using magnetic fields.

Two common types used in school robotics:
1. **DC Motors (Direct Current):**
   - Spins continuously in full 360° revolutions when voltage is applied.
   - Reversing the positive and negative wire polarity makes the motor spin in reverse!
   - Perfect for driving drive wheels and cooling fans.

2. **Servo Motors:**
   - Designed for precise angular positioning (typically 0° to 180).
   - Contains an internal DC motor, gear reduction box, potentiometer position sensor, and control circuit.
   - Perfect for steering linkages, robotic camera pans, and mechanical gripper claws.`
      },
      {
        id: 'g6-m3',
        title: 'Differential Drive Steering Mechanics',
        readTime: '4 min read',
        keyConcepts: ['Two-Wheel Drive', 'Pivot Turns', 'Spin on the Spot', 'Caster Wheel'],
        summary: 'How two independently controlled drive wheels create all robot maneuvers.',
        content: `Most educational rovers use **Differential Drive**—two independent motorized wheels on the sides, supported by a passive swivel caster wheel in the rear.

How steering is achieved:
- **Move Straight:** Both left and right motors spin forward at the exact same speed.
- **Gentle Right Turn:** Left motor runs at full speed; right motor runs at half speed.
- **Pivot Turn (Pivot on Right Wheel):** Left motor spins forward; right motor is stopped (braked).
- **Zero-Radius Spin (Spin in Place):** Left motor spins forward while right motor spins in reverse! The rover spins about its central vertical axis without moving forward.`
      }
    ],
    activities: [
      {
        id: 'movement-sim',
        type: 'movement-sim',
        title: 'Differential Steering Arena',
        description: 'Master differential drive maneuvers! Steer your rover through barriers, test spin turns, and reach the target dock.',
        instructions: 'Use the control pad to drive. Notice how turning left and right changes your rover heading. Track your odometer distance and coordinate position.'
      },
      {
        id: 'build-robot',
        type: 'build-a-robot',
        title: 'High-Torque Rover Assembly',
        description: 'Assemble a rugged high-torque chassis with matched DC gear motors, rubberized grip wheels, and dual battery power.',
        instructions: 'Mount each module into position. Verify the gear motor torque ratings in the diagnostics panel.'
      }
    ],
    quiz: [
      {
        id: 'g6-q1',
        question: 'If a small 10-tooth motor gear drives a large 40-tooth wheel gear, what is the gear ratio and effect?',
        options: ['1:4 ratio, higher speed and lower torque', '4:1 ratio, 4x more torque and 1/4 the speed', '1:1 ratio, nothing changes', '4:4 ratio, motor stops'],
        correctIndex: 1,
        explanation: '40 ÷ 10 = 4:1 gear ratio. A larger driven gear increases output torque by 4 times while reducing speed to 1/4.'
      },
      {
        id: 'g6-q2',
        question: 'How do you make a differential drive rover spin in place around its own center?',
        options: ['Turn both wheels forward at top speed', 'Turn left wheel forward and right wheel in reverse at equal speed', 'Stop both motors', 'Detach the caster wheel'],
        correctIndex: 1,
        explanation: 'Spinning the left wheel forward and the right wheel backward produces equal and opposite forces, creating a zero-radius spin.'
      },
      {
        id: 'g6-q3',
        question: 'Which motor is best suited for a robotic gripper hand that needs to open to exactly 45 degrees?',
        options: ['Continuous DC motor', 'Servo motor', 'Steam turbine', 'Ceiling fan motor'],
        correctIndex: 1,
        explanation: 'Servo motors have built-in feedback to hold exact angles between 0° and 180°, making them ideal for robot arms and grippers.'
      },
      {
        id: 'g6-q4',
        question: 'What happens to the rotational direction of two spur gears meshed together?',
        options: ['They both turn clockwise', 'They rotate in opposite directions', 'They both turn counter-clockwise', 'They slip without turning'],
        correctIndex: 1,
        explanation: 'When two external gears mesh, the teeth push against each other, causing the driven gear to rotate in the opposite direction.'
      }
    ]
  },
  {
    grade: 7,
    tier: 'explore',
    theme: 'Sensors, Actuators & Circuit Fundamentals',
    subtitle: 'Connect inputs to outputs through electrical circuits and sensor telemetry',
    introduction: 'In Grade 7, we bridge the physical and digital domains. Robots perceive through sensors (inputs), compute decisions, and trigger actuators (outputs). We study the complete Input-Processing-Output (IPO) architecture, inspect sensor working principles, and learn how electrical circuits drive motors safely.',
    projectGoals: [
      'Map robotic subsystems to the standard Input -> Processing -> Output (IPO) architecture',
      'Calculate distance using the speed of sound formula for Ultrasonic sensors',
      'Explain how Infrared (IR) reflectance sensors detect lines and close proximity',
      'Construct a reactive obstacle avoidance logic rule'
    ],
    problemStatements: [
      'Why can a microcontroller GPIO pin not drive a high-current DC motor directly without an H-Bridge driver?',
      'How does surface color (black vs white) affect infrared reflectance for line tracking?',
      'What is the difference between an analog signal reading and a digital binary reading?'
    ],
    modules: [
      {
        id: 'g7-m1',
        title: 'The IPO Framework: Input, Processing, Output',
        readTime: '5 min read',
        keyConcepts: ['Input Sensors', 'Processing Unit (MCU)', 'Output Actuators', 'Feedback Loop'],
        summary: 'All electronic computing systems—from smart thermostats to autonomous rovers—operate on the IPO framework.',
        content: `To understand any robotic system, break it down into three stages:

1. **Input (Sensors):**
   - Transducers that convert physical environmental phenomena (light, sound, heat, pressure) into electrical voltage signals.
   - Examples: Ultrasonic rangefinders, Infrared line sensors, push switches, gyroscopes.

2. **Processing (Microcontroller):**
   - Executes programmed instructions stored in memory.
   - Reads inputs, evaluates mathematical and logical comparisons (\`IF distance < 20cm\`), and decides actions.

3. **Output (Actuators & Indicators):**
   - Converts electrical control signals back into physical work or alerts.
   - Examples: DC gear motors, servo linkages, LED headlights, piezoceramic buzzers.`
      },
      {
        id: 'g7-m2',
        title: 'Sensory Physics: Ultrasonic & Infrared',
        readTime: '5 min read',
        keyConcepts: ['Speed of Sound (340 m/s)', 'Time of Flight', 'IR Phototransistor', 'Absorption vs Reflection'],
        summary: 'How ultrasonic sensors and infrared sensors perceive spatial geometry.',
        content: `### Ultrasonic Rangefinding (HC-SR04)
The sensor has two circular barrels: a **Trigger** (speaker) and an **Echo** (microphone).
1. The trigger emits an ultrasonic burst of 40 kHz sound waves.
2. The sound travels through air at approximately 340 meters per second (0.034 cm/microsecond).
3. The sound hits an obstacle and reflects back.
4. The echo pin measures the elapsed microsecond time (t).
\`\`\`
Distance (cm) = (Time in microseconds × 0.034) ÷ 2
\`\`\`
*(We divide by 2 because the sound traveled to the object and back!)*

### Infrared (IR) Proximity & Line Sensors
Uses an Infrared LED emitter and an IR photodiode receiver.
- **White / Light surfaces:** Reflect infrared rays back to the detector (HIGH signal).
- **Black / Dark surfaces:** Absorb infrared rays, causing low reflectance (LOW signal).
- This simple principle enables robots to follow marked track lines autonomously!`
      },
      {
        id: 'g7-m3',
        title: 'Circuits, Current & The H-Bridge Motor Driver',
        readTime: '5 min read',
        keyConcepts: ['Voltage (V)', 'Current (mA/A)', 'GPIO Current Limits', 'H-Bridge Circuit'],
        summary: 'Why robots need dedicated motor drivers to isolate control logic from heavy motor power.',
        content: `A common question among young engineers: *"Why can't I plug my DC motor directly into an Arduino digital pin?"*

- **The Current Limit:** An Arduino GPIO pin can safely provide around **20 to 40 milliamps (mA)** of electrical current.
- **The Motor Demand:** A spinning DC motor draws **300 to 1000+ milliamps (1 Amp)**, especially under load or starting from a standstill!
- If you wire the motor directly to the microchip pin, the excessive current draw will burn out the chip!

### The Solution: The H-Bridge (Motor Driver)
An H-Bridge (like the L298N chip) uses 4 transistor switches in an 'H' configuration:
- It draws high current directly from the battery pack for the motors.
- It receives tiny low-current control signals from the microcontroller to switch direction and speed without endangering the brain.`
      }
    ],
    activities: [
      {
        id: 'sensor-logic',
        type: 'sensor-logic',
        title: 'Sensor Logic Challenge',
        description: 'Calibrate the ultrasonic sensor threshold and configure obstacle evasion rules! Watch the rover react in real-time as distance drops.',
        instructions: 'Adjust the detection distance slider (e.g. 25 cm). Choose the reaction behavior: Brake & Turn Right, Reverse & Pivot, or Emergency Sound. Run the simulation to verify obstacle evasion.'
      },
      {
        id: 'movement-sim',
        type: 'movement-sim',
        title: 'Sensor-Guided Arena',
        description: 'Navigate an arena with dynamic obstacle detection telemetry active.',
        instructions: 'Drive while observing the live sensor distance readout and collision warning system.'
      }
    ],
    quiz: [
      {
        id: 'g7-q1',
        question: 'Why do we divide by 2 when calculating distance with an ultrasonic sensor?',
        options: ['Because sound travels twice as fast', 'Because the sound wave travels to the obstacle and returns back', 'Because there are two sensors', 'Because of battery resistance'],
        correctIndex: 1,
        explanation: 'The measured time covers the round trip (to the object and back), so we divide by 2 to get the one-way distance.'
      },
      {
        id: 'g7-q2',
        question: 'Why is an H-Bridge motor driver necessary between a microcontroller and a DC motor?',
        options: ['To change the color of the robot', 'Because motors draw more current than microcontroller pins can safely provide', 'To generate internet Wi-Fi signals', 'Motors cannot spin without software code'],
        correctIndex: 1,
        explanation: 'Microcontrollers provide low current (~20mA), while motors draw hundreds of milliamps. The driver uses external battery power to drive the motors safely.'
      },
      {
        id: 'g7-q3',
        question: 'How does an infrared line-tracking sensor detect a black tape line on a white floor?',
        options: ['Black tape absorbs IR light, while white floor reflects it', 'Black tape gets hot', 'Black tape conducts sound waves', 'White floor is magnetic'],
        correctIndex: 0,
        explanation: 'Dark surfaces absorb infrared radiation while light surfaces reflect it, allowing the sensor photodiode to register the line contrast.'
      },
      {
        id: 'g7-q4',
        question: 'Which of the following is categorized as an Actuator in the IPO model?',
        options: ['Ultrasonic Sensor', 'Pushbutton Switch', 'Servo Motor', 'Photoresistor LDR'],
        correctIndex: 2,
        explanation: 'A servo motor is an actuator (Output) that converts electrical signals into physical angular rotation.'
      }
    ]
  },
  {
    grade: 8,
    tier: 'explore',
    theme: 'Algorithms, Flowcharts & Control Algorithms',
    subtitle: 'Design decision trees and visual logic sequences for robotic autonomy',
    introduction: 'Before writing lines of code, engineers conceptualize robotic behavior through algorithms and flowcharts! In Grade 8, you will master algorithmic thinking: breaking complex navigation problems into sequential steps, conditional branches (IF-THEN-ELSE), and infinite control loops.',
    projectGoals: [
      'Deconstruct robotic tasks into precise, unambiguous step-by-step algorithms',
      'Use standard ISO flowchart symbols: Terminal, Process, Decision, and Input/Output',
      'Build and visually execute a working obstacle evasion logic sequence',
      'Identify and debug logic bugs like infinite trapped loops and edge-case deadlocks'
    ],
    problemStatements: [
      'How do we ensure a robot does not get stuck oscillating back and forth between two walls?',
      'Why must a robotic controller run inside an infinite while(true) loop rather than terminating?',
      'What is the difference between a sequential action block and a conditional decision diamond?'
    ],
    modules: [
      {
        id: 'g8-m1',
        title: 'Algorithmic Thinking in Robotics',
        readTime: '5 min read',
        keyConcepts: ['Sequence', 'Selection (Conditionals)', 'Iteration (Loops)', 'Unambiguous Logic'],
        summary: 'An algorithm is a finite, step-by-step sequence of instructions designed to solve a specific problem.',
        content: `A robot cannot "guess" or "use common sense". If you tell a robot to "go to the kitchen", it will bump into a wall unless you provide exact instructions.

Robotic algorithms consist of three fundamental building blocks:
1. **Sequence:** Executing steps in a strictly defined top-to-bottom order.
   - Example: \`Initialize Pins -> Set Speed to 80% -> Enable Sensors\`.
2. **Selection (Conditional Branching):** Choosing different execution paths based on truth conditions.
   - Example: \`IF Obstacle Distance < 15cm THEN Turn Right ELSE Drive Forward\`.
3. **Iteration (Repetition / Loops):** Repeating a set of instructions until a condition changes or running indefinitely (\`WHILE true\`).`
      },
      {
        id: 'g8-m2',
        title: 'Mastering Standard Flowchart Architecture',
        readTime: '5 min read',
        keyConcepts: ['Oval (Terminal)', 'Rectangle (Process)', 'Diamond (Decision)', 'Arrows (Flow)'],
        summary: 'Standard visual flowchart symbols create a universal blueprint for software and hardware engineering.',
        content: `Flowcharts use standardized geometric shapes so any engineer in the world can understand the control sequence:

- **Rounded Oval (Terminal):** Represents the **START** (system boot / power on) or **END** (system shutdown) of the program.
- **Rectangle (Process Block):** Represents an internal action, calculation, or motor command.
  - Examples: \`Set LeftMotor = 200\`, \`Wait 500 milliseconds\`.
- **Parallelogram (Input / Output):** Represents reading a sensor value or transmitting telemetry data.
  - Example: \`Read Ultrasonic Distance\`.
- **Diamond (Decision):** Represents a conditional question with two or more exiting branches (typically **YES/TRUE** and **NO/FALSE**).
  - Example: \`Is Distance < 20cm?\`
- **Directed Arrow (Flow Line):** Indicates the direction of execution from one block to the next.`
      },
      {
        id: 'g8-m3',
        title: 'The Continuous Polling Loop & State Traps',
        readTime: '4 min read',
        keyConcepts: ['Continuous Polling', 'Sampling Rate', 'State Trap', 'Failsafe Timeout'],
        summary: 'Robots must constantly poll their sensors in real-time loops while avoiding trap conditions.',
        content: `In standard desktop programming, a script often runs once, prints an answer, and exits. 
In mobile robotics, however, the environment changes continuously! If the program stopped after 1 second, the rover would crash into the first wall it encountered.

### The Polling Loop
The microcontroller executes an infinite loop:
\`\`\`
LOOP FOREVER:
  1. Trigger Ultrasonic Ping
  2. Read Echo Duration & Calculate Distance
  3. IF Distance < 20cm:
       Stop Motors
       Reverse 200ms
       Turn Right 90 degrees
     ELSE:
       Move Forward
  4. Short Delay (50ms)
END LOOP
\`\`\`

### Avoiding The Corner Trap
If a robot turns right and immediately encounters another wall, simple logic might turn right again and again until it is stuck. Advanced algorithms add a turn counter or randomize turning angles when cornered!`
      }
    ],
    activities: [
      {
        id: 'flowchart-builder',
        type: 'flowchart-builder',
        title: 'Flowchart Logic Builder',
        description: 'Construct a visual logic program by arranging flowchart blocks! Step through execution and watch the robot navigate.',
        instructions: 'Add blocks: [START] -> [READ SENSOR] -> [DECISION: OBSTACLE < 20CM?] -> [TURN RIGHT / DRIVE FORWARD] -> [LOOP]. Click "Validate & Run Sequence" to observe simulated block-by-block execution.'
      },
      {
        id: 'sensor-logic',
        type: 'sensor-logic',
        title: 'Reactive Logic Simulator',
        description: 'Fine-tune multi-state conditional logic with ultrasonic distance triggers and visual reaction tests.',
        instructions: 'Program compound rules and inspect live telemetry as obstacle distance changes.'
      }
    ],
    quiz: [
      {
        id: 'g8-q1',
        question: 'Which flowchart symbol represents a decision question like "Is distance < 20cm?"',
        options: ['Rectangle', 'Diamond', 'Circle', 'Oval'],
        correctIndex: 1,
        explanation: 'A diamond shape denotes a conditional decision with branching outputs (Yes/True and No/False).'
      },
      {
        id: 'g8-q2',
        question: 'Why must a mobile robot controller run an infinite loop (e.g. while true)?',
        options: ['Because it does not know when to sleep', 'To continuously sample real-time sensor updates and respond to dynamic obstacles', 'To waste battery power', 'Because motors cannot stop once turned on'],
        correctIndex: 1,
        explanation: 'The real world is dynamic. Robots must continuously poll sensors in a loop to react to changing surroundings in real time.'
      },
      {
        id: 'g8-q3',
        question: 'What happens if an obstacle-avoidance algorithm lacks an evasion turn command in the TRUE branch of an obstacle detection check?',
        options: ['The robot flies', 'The robot will detect the wall but fail to steer away, resulting in a collision', 'The battery charges instantly', 'The code compiles faster'],
        correctIndex: 1,
        explanation: 'Detecting an obstacle without issuing an evasion motor action (like reverse or turn) leaves the robot heading toward the collision.'
      },
      {
        id: 'g8-q4',
        question: 'Which flowchart shape is used to represent the START or END terminal point of a program?',
        options: ['Rounded Oval', 'Diamond', 'Triangle', 'Star'],
        correctIndex: 0,
        explanation: 'A rounded oval (or stadium pill) represents the terminal start and end points of a flowchart.'
      }
    ]
  },
  {
    grade: 9,
    tier: 'engineer',
    theme: 'Microcontrollers, Pseudocode & Embedded Logic',
    subtitle: 'Bridge software algorithms and hardware pins with embedded computing concepts',
    introduction: 'Step into the laboratory of an embedded systems engineer! In Grade 9, we study how microcontrollers (like the ATmega328P or ESP32) bridge lines of code and physical hardware pins. Learn about General Purpose Input/Output (GPIO), Analog-to-Digital Conversion (ADC), Pulse Width Modulation (PWM) speed regulation, and structured pseudocode.',
    projectGoals: [
      'Understand the architecture of a microcontroller: Flash memory, SRAM, CPU, and GPIO registers',
      'Explain Pulse Width Modulation (PWM) duty cycles for variable motor speed control',
      'Distinguish between continuous analog signals (0-5V / 0-1023 ADC) and binary digital signals (0/1)',
      'Construct a Finite State Machine (FSM) pseudocode routine for an autonomous rover'
    ],
    problemStatements: [
      'How does Pulse Width Modulation (PWM) regulate motor speed without dropping supply voltage and losing torque?',
      'How does an Analog-to-Digital Converter (ADC) convert continuous physical voltages into discrete numbers for code?',
      'Why is a Finite State Machine (FSM) superior to deeply nested IF-ELSE statements for complex robotic behaviors?'
    ],
    modules: [
      {
        id: 'g9-m1',
        title: 'Microcontroller Architecture & GPIO Pins',
        readTime: '6 min read',
        keyConcepts: ['Von Neumann vs Harvard', 'Flash & SRAM', 'GPIO Pin Modes (INPUT/OUTPUT)', 'Internal Pull-Up'],
        summary: 'A microcontroller is a self-contained computer on a single silicon chip tailored for embedded control.',
        content: `Unlike desktop CPUs that require external RAM, motherboards, and graphics cards, a **Microcontroller Unit (MCU)** integrates:
- **Processor Core (CPU):** Executes machine instructions cycle by cycle.
- **Flash Memory:** Non-volatile storage where your compiled robot program resides.
- **SRAM:** Volatile working memory for variables and stack frames.
- **GPIO Pins (General Purpose Input/Output):** Physical pins that can be configured in software:
  - \`pinMode(pin, OUTPUT)\`: Can drive pin to HIGH (5V/3.3V) or LOW (0V).
  - \`pinMode(pin, INPUT)\`: High-impedance mode to listen for external voltage.
  - \`pinMode(pin, INPUT_PULLUP)\`: Activates internal resistor to prevent floating signals on switches.`
      },
      {
        id: 'g9-m2',
        title: 'Signals: Digital, Analog & PWM Speed Regulation',
        readTime: '6 min read',
        keyConcepts: ['Digital Binary (0/1)', 'Analog ADC (10-bit resolution)', 'PWM Frequency & Duty Cycle'],
        summary: 'How digital microchips perceive analog gradients and simulate variable voltage.',
        content: `### Digital vs Analog
- **Digital Signal:** Has only two distinct states: LOW (0V / binary 0) and HIGH (5V / binary 1). Ideal for pushbuttons, optical encoders, and status LEDs.
- **Analog Signal:** Continuous voltage gradient (e.g., 0.0V to 5.0V). Light sensors and potentiometers output analog voltages.
- **ADC (Analog-to-Digital Converter):** A 10-bit ADC maps 0V–5V into discrete integer values from **0 to 1023** (\`2^10 = 1024 steps\`).

### Pulse Width Modulation (PWM)
How do we make a DC motor spin at half speed if digital pins can only output 0V or 5V?
Instead of lowering voltage (which causes motors to stall), we rapidly toggle 5V ON and OFF hundreds of times per second!
- **Duty Cycle:** The percentage of time the signal is ON during one period.
  - 25% Duty Cycle = Motor spins slowly with full voltage pulses.
  - 50% Duty Cycle = Medium speed.
  - 100% Duty Cycle = Maximum continuous speed.`
      },
      {
        id: 'g9-m3',
        title: 'Pseudocode & Finite State Machines (FSM)',
        readTime: '5 min read',
        keyConcepts: ['Pseudocode Syntax', 'FSM States', 'State Transitions', 'Deterministic Control'],
        summary: 'Using Finite State Machines to eliminate spaghetti code in autonomous robot programming.',
        content: `As robots take on complex tasks, nesting dozens of \`if... else if...\` statements causes unexpected bugs. Professional engineers structure robots as **Finite State Machines (FSM)**.

### Rover Navigation States:
1. \`STATE_FORWARD\`: Motors drive straight; ultrasonic ping active.
2. \`STATE_OBSTACLE_DETECTED\`: Distance < 20cm; stop motors, start 150ms timer.
3. \`STATE_SCANNING\`: Pan servo left and right; compare clear distances.
4. \`STATE_RECOVER_TURN\`: Turn toward the clearer direction until heading matches target.

### Pseudocode Example:
\`\`\`c
enum RobotState { FORWARD, REVERSE_TURN, EMERGENCY_STOP };
RobotState currentState = FORWARD;

void loop() {
  int distance = readUltrasonic();
  switch(currentState) {
    case FORWARD:
      if (distance < 20) {
        setMotors(0, 0);
        currentState = REVERSE_TURN;
      } else {
        setMotors(200, 200); // 80% PWM
      }
      break;
    case REVERSE_TURN:
      setMotors(-150, 150); // Pivot turn
      delay(400);
      currentState = FORWARD;
      break;
  }
}
\`\`\``
      }
    ],
    activities: [
      {
        id: 'sensor-logic',
        type: 'sensor-logic',
        title: 'Sensor Logic & PWM Control Studio',
        description: 'Test PWM speed regulation, calibrate obstacle thresholds, and watch state transitions occur in real time.',
        instructions: 'Modify the distance trigger threshold, toggle motor speed PWM levels, and verify state transition telemetry when approaching barriers.'
      },
      {
        id: 'flowchart-builder',
        type: 'flowchart-builder',
        title: 'State Machine Flowchart Architect',
        description: 'Build a multi-branch state transition flowchart for an autonomous inspection rover.',
        instructions: 'Organize states: [IDLE] -> [FORWARD DRIVE] -> [OBSTACLE CHECK] -> [EVASIVE PIVOT] -> [RESUME]. Verify execution validity.'
      }
    ],
    quiz: [
      {
        id: 'g9-q1',
        question: 'What does a 50% PWM Duty Cycle mean for a 5V digital output pin?',
        options: ['The pin outputs 2.5V continuous DC voltage', 'The signal is at 5V for half the period and at 0V for half the period', 'The motor spins backward', 'The microcontroller is running at half clock speed'],
        correctIndex: 1,
        explanation: 'PWM rapidly switches between full 5V and 0V; a 50% duty cycle means the pin is HIGH for 50% of each cycle period.'
      },
      {
        id: 'g9-q2',
        question: 'A 10-bit Analog-to-Digital Converter (ADC) maps an input voltage of 0V to 5V to which integer range?',
        options: ['0 to 10', '0 to 100', '0 to 1023', '0 to 65535'],
        correctIndex: 2,
        explanation: 'A 10-bit ADC provides 2^10 = 1024 discrete values, spanning from 0 (at 0V) up to 1023 (at 5V).'
      },
      {
        id: 'g9-q3',
        question: 'Why is an internal pull-up resistor (INPUT_PULLUP) used when wiring a pushbutton switch to a microcontroller pin?',
        options: ['To speed up calculations', 'To prevent a floating input state where the pin picks up electromagnetic noise when the switch is open', 'To heat the circuit board', 'To reduce motor noise'],
        correctIndex: 1,
        explanation: 'Without a pull-up or pull-down resistor, an unconnected input pin "floats" unpredictably between 0 and 1 due to ambient electrical noise.'
      },
      {
        id: 'g9-q4',
        question: 'In a Finite State Machine (FSM), what causes the robot to change from STATE_FORWARD to STATE_REVERSE_TURN?',
        options: ['A State Transition condition being met (e.g., sensor distance < 20cm)', 'The compiler running out of memory', 'The chassis falling over', 'Re-plugging the USB cable'],
        correctIndex: 0,
        explanation: 'A state transition occurs when an event or condition (such as sensor reading crossing a threshold) triggers a switch to a new state.'
      }
    ]
  },
  {
    grade: 10,
    tier: 'engineer',
    theme: 'Autonomous Systems, Feedback Loops & Mission Robotics',
    subtitle: 'Architect real-world robotic solutions with sensor fusion, PID control, and failsafes',
    introduction: 'Welcome to senior engineering! In Grade 10, we explore advanced autonomous systems that power planetary rovers, agricultural harvest drones, and surgical robots. Learn about closed-loop control systems, proportional feedback error correction, sensor fusion, and fault-tolerant architecture.',
    projectGoals: [
      'Compare open-loop vs closed-loop feedback systems and explain proportional control',
      'Understand sensor fusion: combining complementary sensors (ultrasonic + IR + encoders)',
      'Design software watchdog timers and failsafe protocols for real-world reliability',
      'Apply the engineering design cycle to Akshar Bharti rural robotics challenges'
    ],
    problemStatements: [
      'How does proportional error feedback prevent aggressive overshoot and oscillation in line-following or wall-following?',
      'How does sensor fusion overcome physical limitations of single sensors (e.g. ultrasonic blind spots or IR ambient sunlight interference)?',
      'What failsafes are required when a robot loses communication or detects a motor stall condition?'
    ],
    modules: [
      {
        id: 'g10-m1',
        title: 'Open-Loop vs Closed-Loop & Proportional Control',
        readTime: '6 min read',
        keyConcepts: ['Open-Loop Systems', 'Closed-Loop Feedback', 'Error Calculation: e(t)', 'Proportional Gain (Kp)'],
        summary: 'Feedback control systems continuously measure the difference between current state and target state.',
        content: `### Open-Loop vs Closed-Loop Control
- **Open-Loop Control:** Executes commands without measuring the real result.
  - Example: *"Spin motors forward for 3 seconds."* If the wheels slip on sand or hit a bump, the robot has no idea where it actually landed!
- **Closed-Loop Control:** Continuously samples sensors, calculates the discrepancy (**Error**), and adjusts output to eliminate that error.
  - Example: A thermostat measuring room temperature, or a wall-following robot keeping exactly 15cm from a boundary.

### The Proportional Control Concept (P of PID)
\`\`\`
Error = Desired Target - Current Sensor Value
Correction Output = Kp × Error
\`\`\`
- If the robot is far from its desired path (large Error), it applies a strong steering correction.
- As it gets very close to the path (tiny Error), the correction smoothly decreases to prevent jerky overshooting.`
      },
      {
        id: 'g10-m2',
        title: 'Sensor Fusion & Redundancy in Harsh Environments',
        readTime: '6 min read',
        keyConcepts: ['Sensor Limitations', 'Complementary Fusion', 'Kalman Filter Concept', 'Wheel Encoders & Odometry'],
        summary: 'No single sensor is 100% reliable. Autonomous robots combine multiple sensor streams to build truth.',
        content: `Every physical sensor has blind spots and vulnerabilities:
- **Ultrasonic Sensors:** Cannot detect sound-absorbing fabrics, and sound waves glance off angled surfaces without echoing back.
- **Infrared (IR) Sensors:** Blinded outdoors by direct infrared radiation from sunlight.
- **Wheel Encoders (Odometry):** Measure wheel rotation ticks, but accumulate cumulative drift if wheels slip on wet mud or smooth tiles.

### Sensor Fusion
Autonomous systems fuse multiple sensors:
1. **Short Range Precision:** IR sensors detect close obstacles (< 10cm).
2. **Medium Range Spatial Depth:** Ultrasonic sensors detect room geometry (10cm - 300cm).
3. **Dead Reckoning & Inertial Tracking:** Wheel encoders + 6-axis IMU (gyroscope and accelerometer) cross-check rover velocity and heading.
If one sensor gives erratic spikes, the fusion filter discards the anomaly!`
      },
      {
        id: 'g10-m3',
        title: 'Fault Tolerant Architecture & Service Learning Impact',
        readTime: '5 min read',
        keyConcepts: ['Watchdog Timers', 'Motor Stall Detection', 'Failsafe Defaults', 'Akshar Bharti Service Mission'],
        summary: 'Designing robots that fail safely and deploying robotics technology for high-impact social good.',
        content: `### Industrial Failsafe Design
In critical missions, software bugs or physical obstacles must never cause runaway robots:
- **Watchdog Timers:** Hardware counter that reboots or halts the system if the main loop hangs.
- **Stall Current Protection:** If wheels are stuck against a boulder, current spikes dramatically. The controller detects high current and shuts down drive H-bridges to prevent motor burnout.
- **Failsafe Default:** If sensor communication fails, default to \`STOP_ALL_ACTUATORS\` and flash a diagnostic LED code.

### The Akshar Bharti Service Learning Mission
Through Akshar Bharti's educational outreach, high school students use these exact engineering principles to design low-cost robotics for:
- Automated seed sowing and soil moisture monitoring in rural agriculture.
- Obstacle-sensing mobility canes for visually impaired citizens.
- Low-cost automated classroom sanitizers and water level managers.`
      }
    ],
    activities: [
      {
        id: 'movement-sim',
        type: 'movement-sim',
        title: 'Autonomous Navigation Maze Arena',
        description: 'Test autonomous obstacle navigation with dynamic telemetry, heading vectors, coordinate tracking, and target waypoints.',
        instructions: 'Guide the rover through the arena while observing real-time coordinate logging, speed modulation, and obstacle proximity alarms.'
      },
      {
        id: 'sensor-logic',
        type: 'sensor-logic',
        title: 'Closed-Loop Sensor Logic & Failsafe Simulator',
        description: 'Configure multi-layer sensor thresholds, emergency brake limits, and simulated motor stall triggers.',
        instructions: 'Calibrate proximity limits, observe reactive control graphs, and verify that the system halts safely in emergency zones.'
      },
      {
        id: 'flowchart-builder',
        type: 'flowchart-builder',
        title: 'Mission Failsafe Logic Builder',
        description: 'Construct a closed-loop mission flow with watchdog verification and branch recovery.',
        instructions: 'Build and validate the control sequence from boot sequence through telemetry feedback to mission completion.'
      }
    ],
    quiz: [
      {
        id: 'g10-q1',
        question: 'What is the fundamental difference between an open-loop and a closed-loop robotic control system?',
        options: ['Open-loop uses rechargeable batteries, closed-loop does not', 'Closed-loop uses feedback sensors to measure the actual output error and adjust commands', 'Open-loop has more gears than closed-loop', 'Closed-loop can only turn clockwise'],
        correctIndex: 1,
        explanation: 'Closed-loop systems continuously sample sensors to measure real output error e(t) and make automatic corrections, whereas open-loop systems blindly execute without feedback.'
      },
      {
        id: 'g10-q2',
        question: 'Why do autonomous navigation vehicles combine ultrasonic sensors, infrared sensors, and wheel encoders (Sensor Fusion)?',
        options: ['Because one sensor alone is too cheap', 'Because every individual sensor has blind spots or drift, so fusing multiple inputs provides a robust, reliable picture', 'To make the robot heavier', 'It is required by the operating system'],
        correctIndex: 1,
        explanation: 'Sensor fusion combines complementary data from multiple sensors to overcome individual weaknesses (e.g. wheel slip, sunlight interference, sound reflection angles).'
      },
      {
        id: 'g10-q3',
        question: 'In proportional (P) control, what happens to the steering correction output as the robot gets closer to its target line (as error approaches zero)?',
        options: ['Correction output increases to maximum', 'Correction output smoothly decreases toward zero to prevent jerky overshoot', 'Motors instantly reverse polarity', 'The microcontroller resets'],
        correctIndex: 1,
        explanation: 'Because Correction = Kp × Error, as error shrinks to zero, the correction smoothly reduces, preventing oscillations and overshoot.'
      },
      {
        id: 'g10-q4',
        question: 'What is the primary function of a hardware Watchdog Timer in an autonomous robot?',
        options: ['To bark at intruders', 'To monitor the main loop and safely halt or reboot the system if the software hangs or freezes', 'To measure battery chemistry', 'To speed up motor rotation'],
        correctIndex: 1,
        explanation: 'A watchdog timer ensures system resilience: if the software hangs or enters an infinite deadlock, the timer triggers a safe reset or failsafe stop.'
      }
    ]
  }
];
