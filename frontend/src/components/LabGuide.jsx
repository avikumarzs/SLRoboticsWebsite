import { useState } from 'react';

const activityPlans = {
  'build-a-robot': {
    objectives: ['Match each component to its job.', 'Explain how power and control connect to movement.'],
    materials: 'chassis, wheels, motors, controller, battery, distance sensor',
    code: 'check rover parts\nif all parts are installed:\n  run power check'
  },
  'movement-sim': {
    objectives: ['Use forward, reverse, and turn commands.', 'Observe how command order changes the path.'],
    materials: 'rover, movement controls, obstacle course, target',
    code: 'while goal not reached:\n  if obstacle ahead:\n    stop and turn\n  else:\n    move forward'
  },
  'sensor-logic': {
    objectives: ['Set a distance threshold that gives the rover room to react.', 'Trace how a sensor reading triggers the selected response.'],
    materials: 'distance sensor, safety threshold, rover response',
    code: 'distance = read_sensor()\nif distance <= safety_threshold:\n  perform_selected_response\nelse:\n  keep_moving'
  },
  'flowchart-builder': {
    objectives: ['Use start, action, decision, and end symbols.', 'Trace how each decision branch changes the next step.'],
    materials: 'start/end, action and decision blocks, labelled branches',
    code: 'start\nread distance\nif obstacle detected:\n  turn\nelse:\n  move forward\nend'
  }
};

export default function LabGuide({ activityType }) {
  const [copied, setCopied] = useState(false);
  const plan = activityPlans[activityType] || activityPlans['build-a-robot'];

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(plan.code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <details className="lab-guide lab-guide-details">
      <summary>Learning goals and example logic</summary>
      <div className="lab-guide-grid">
        <article>
          <h3>What you’ll learn</h3>
          <ul className="lab-objectives">{plan.objectives.map((objective) => <li key={objective}>{objective}</li>)}</ul>
          <p className="lab-materials"><strong>Tools used:</strong> {plan.materials}.</p>
        </article>
        <article className="lab-code">
          <div className="lab-code-title"><h3>Example logic</h3><button type="button" onClick={copyCode} aria-label="Copy example logic">{copied ? 'Copied' : 'Copy code'}</button></div>
          <pre><code>{plan.code}</code></pre>
        </article>
      </div>
    </details>
  );
}
