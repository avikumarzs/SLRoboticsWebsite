import { useState } from 'react';

const experiences = {
  5: ['A toy car rolls when its wheels turn. A robot uses the same idea, with a motor following simple instructions.', 'Build a small rover plan: move forward, notice a block, then stop safely.', 'Name one robot part and explain what it helps the robot do.', 'chassis, two wheels, motor, battery, simple instructions'],
  6: ['A delivery rover needs wheels, a chassis, and motors to travel between places.', 'Reach the green goal. Try different turns and observe how each command changes the rover path.', 'Use movement commands to reach the goal while avoiding the blocks.', 'rover chassis, two drive wheels, two motors, controller, virtual battery'],
  7: ['A robot vacuum uses a sensor reading to decide when it should stop or change direction.', 'Choose a distance threshold and test how the rover responds to readings above and below it.', 'Explain how the sensor input changes the rover action.', 'distance sensor, controller, motor output, simulated obstacle'],
  8: ['Warehouse robots repeat checks as they move through aisles and adjust when something blocks the route.', 'Build a repeated decision: check the sensor, move if clear, and turn or stop if blocked.', 'Use a loop and a condition to describe a safe repeated behaviour.', 'two simulated sensors, controller, movement commands, obstacle course'],
  9: ['Mobile robots use a sequence of states to organize tasks such as searching, approaching, and avoiding.', 'Plan and test an algorithm that reacts to sensor inputs and handles more than one possible case.', 'Describe the transition that moves the controller from one behaviour state to another.', 'distance sensor, optional second sensor, state logic, rover simulator'],
  10: ['Robotic systems combine sensing, planning, and control. A classroom model demonstrates selected rules, not a complete autonomous vehicle.', 'Compare two navigation rules under the same conditions and explain the measure used to judge them.', 'Evaluate the result, its assumptions, and one limit of the model.', 'simulated sensor inputs, controller rules, route map, test conditions']
};

export default function LabGuide({ grade, title, activityType }) {
  const [copied, setCopied] = useState(false);
  const isMovement = activityType === 'movement-sim';
  const [gradeConnection, gradeProblem, gradeObjective] = experiences[grade] || experiences[5];
  const activityPlans = {
    'build-a-robot': {
      connection: 'A real rover also needs its frame, power source, controller, drive parts, and sensors connected in the right roles.',
      challenge: 'Assemble the virtual rover, identify each part, and run the power check.',
      objectives: ['Match each component to its job.', 'Explain how power and control connect to movement.'],
      success: 'All rover parts are mounted and the diagnostic reports ready.',
      materials: 'virtual chassis, two drive wheels, motors, controller, battery, distance sensor'
    },
    'movement-sim': {
      connection: 'Delivery and warehouse robots use wheels and motors to travel through planned spaces and respond to obstacles.',
      challenge: 'Guide the rover to the target, avoid the blocks, and replay the same course to improve your route.',
      objectives: ['Use forward, reverse, and turn commands.', 'Observe how command order changes the path.'],
      success: 'The rover reaches the goal without contacting an obstacle.',
      materials: 'virtual rover, drive wheels, controller, obstacle course, target beacon'
    },
    'sensor-logic': {
      connection: 'A robot vacuum can use a nearby-object sensor and a programmed rule to decide when to stop or turn.',
      challenge: 'Set the starting distance and threshold, run the rover, and compare the action when the reading crosses the threshold.',
      objectives: ['Change a simulated sensor input and decision threshold.', 'Explain why the selected IF/ELSE branch ran.'],
      success: 'The displayed action matches the tested reading and threshold.',
      materials: 'simulated distance sensor, threshold control, controller rule, rover action'
    },
    'flowchart-builder': {
      connection: 'Engineers use flowcharts to make a robot task’s steps and yes/no decisions easier to inspect before testing.',
      challenge: 'Arrange the flowchart blocks into a valid task, check the decision branches, and run the sequence.',
      objectives: ['Use start, action, decision, and end symbols.', 'Trace how each decision branch changes the next step.'],
      success: 'The flow has a start and end and its labelled branches lead to actions.',
      materials: 'flowchart start/end, action blocks, decision block, labelled branches'
    }
  };
  const plan = activityPlans[activityType] || activityPlans['build-a-robot'];
  const code = grade <= 6
    ? 'move forward\nif obstacle ahead:\n  stop'
    : grade <= 8
      ? 'repeat while goal not reached:\n  distance = read_sensor()\n  if distance < threshold:\n    stop and turn\n  else:\n    move forward'
      : 'state = NAVIGATE\nwhile mission_active:\n  readings = sample_sensors()\n  decision = choose_action(state, readings)\n  log(readings, decision)\n  apply(decision)\n  state = next_state(state, readings)';
  const copyCode = async () => {
    try { await navigator.clipboard.writeText(code); setCopied(true); window.setTimeout(() => setCopied(false), 1800); }
    catch { setCopied(false); }
  };
  return (
    <section className="lab-guide" aria-labelledby="lab-guide-title">
      <div className="lab-guide-heading">
        <span className="lab-kicker">Guided lab · Grade {grade}</span>
        <h2 id="lab-guide-title">{title}</h2>
      </div>
      <div className="lab-guide-grid">
        <article><h3>Real-world connection</h3><p>{plan.connection}</p><p className="lab-materials">{gradeConnection}</p></article>
        <article><h3>Your challenge</h3><p>{plan.challenge}</p><p className="lab-materials">{gradeProblem}</p><p className="lab-materials"><strong>Success looks like:</strong> {plan.success}</p></article>
        <article><h3>What you’ll learn</h3><ul className="lab-objectives"><li>{gradeObjective}</li>{plan.objectives.map((objective) => <li key={objective}>{objective}</li>)}</ul><p className="lab-materials"><strong>Virtual materials:</strong> {plan.materials || gradeComponents}.</p></article>
        <article className="lab-code"><div className="lab-code-title"><h3>Example logic</h3><button type="button" onClick={copyCode} aria-label="Copy example logic">{copied ? 'Copied' : 'Copy code'}</button></div><pre><code>{code}</code></pre><p>{isMovement ? 'Run the rover controls below and observe the path.' : 'The interactive controls below use simulated inputs to show the rule in action.'}</p></article>
      </div>
    </section>
  );
}
