import { useCallback, useState } from 'react';
import BuildRobotActivity from '../components/activities/BuildRobotActivity';
import MovementSimActivity from '../components/activities/MovementSimActivity';
import SensorLogicActivity from '../components/activities/SensorLogicActivity';
import FlowchartBuilderActivity from '../components/activities/FlowchartBuilderActivity';
import Footer from '../components/Footer';
import LabGuide from '../components/LabGuide';
import Navbar from '../components/Navbar';
import { getGradeProgress, markActivityComplete } from '../utils/progressManager';

const LABS = [
  {
    id: 'build-a-robot',
    title: 'Build a Robot',
    icon: '🛠️',
    description: 'Assemble a virtual rover and learn how its chassis, motors, battery, sensor, and controller work together.',
    challenge: 'Fit the rover parts into place, then power it on to check your assembly.',
    component: BuildRobotActivity,
    accent: 'amber'
  },
  {
    id: 'movement-sim',
    title: 'Rover Simulator',
    icon: '🕹️',
    description: 'Drive a rover through a test arena, avoid obstacles, and observe how wheel commands change its path.',
    challenge: 'Drive the rover to its target while avoiding obstacles.',
    component: MovementSimActivity,
    accent: 'blue'
  },
  {
    id: 'sensor-logic',
    title: 'Sensor Logic',
    icon: '📡',
    description: 'Set a safety distance, choose a rover response, and watch a sensor trigger the rule.',
    challenge: 'Choose when the rover should react and what it should do when an obstacle is near.',
    component: SensorLogicActivity,
    accent: 'purple'
  },
  {
    id: 'flowchart-builder',
    title: 'Flowchart Builder',
    icon: '📊',
    description: 'Arrange sequence and decision blocks, then run the logic to guide a robot through a challenge.',
    challenge: 'Arrange the logic blocks into a valid flow and run it.',
    component: FlowchartBuilderActivity,
    accent: 'orange'
  }
];

export default function LabsPage() {
  const [activeLabId, setActiveLabId] = useState(LABS[0].id);
  const [progress, setProgress] = useState(() => getGradeProgress('labs'));
  const activeLab = LABS.find((lab) => lab.id === activeLabId) || LABS[0];
  const ActiveLab = activeLab.component;

  const handleActivityCompleted = useCallback((activityId) => {
    const updatedProgress = markActivityComplete('labs', activityId);
    if (updatedProgress) {
      setProgress(updatedProgress);
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <Navbar />
      <main className="labs-page flex-1">
        <section className="labs-hero">
          <div className="labs-container">
            <span className="labs-kicker">Shared interactive workspace</span>
            <h1>Interactive Robotics Labs</h1>
            <p>
              Choose a hands-on simulation, experiment with its controls, and build practical
              robotics skills in one place.
            </p>
          </div>
        </section>

        <section className="labs-container labs-content" aria-label="Interactive labs">
          <div className="labs-grid">
            {LABS.map((lab) => {
              const selected = activeLab.id === lab.id;
              const completed = progress.completedActivities?.includes(lab.id);
              return (
                <button
                  key={lab.id}
                  type="button"
                  onClick={() => setActiveLabId(lab.id)}
                  className={`lab-card lab-card-${lab.accent}${selected ? ' lab-card-selected' : ''}`}
                  aria-pressed={selected}
                >
                  <span className="lab-card-icon" aria-hidden="true">{lab.icon}</span>
                  <span className="lab-card-title">{lab.title}</span>
                  <span className="lab-card-description">{lab.description}</span>
                  <span className="lab-card-action">
                    {completed ? 'Completed · Open lab' : selected ? 'Selected lab' : 'Open lab'}
                  </span>
                </button>
              );
            })}
          </div>

          <section className="labs-workspace" aria-labelledby="active-lab-title">
            <div className="labs-workspace-heading">
              <div>
                <span className="labs-kicker">Selected lab</span>
                <h2 id="active-lab-title">{activeLab.icon} {activeLab.title}</h2>
              </div>
              <span className="labs-shared-badge">Shared interactive experience</span>
            </div>
            <section className="labs-activity-focus" aria-label={`${activeLab.title} activity`}>
              <div className="labs-activity-intro">
                <span className="labs-kicker">Interactive activity</span>
                <p>{activeLab.challenge}</p>
              </div>
              <ActiveLab grade={null} onCompleted={handleActivityCompleted} />
            </section>
            <LabGuide activityType={activeLab.id} />
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
}
