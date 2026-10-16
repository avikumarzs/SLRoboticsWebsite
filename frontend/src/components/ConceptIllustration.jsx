const classify = (title = '') => {
  const value = title.toLowerCase();
  if (/wheel|axle|gear|motor|mechanism/.test(value)) return 'motion';
  if (/sensor|sense|input|output|actuat/.test(value)) return 'sensor';
  if (/battery|circuit|electric|power/.test(value)) return 'circuit';
  if (/flowchart|algorithm|sequence|program|code|logic|state/.test(value)) return 'logic';
  return 'rover';
};

export default function ConceptIllustration({ title, compact = false }) {
  const kind = classify(title);
  const description = {
    motion: 'A wheel-and-axle mechanism with a turning amber wheel.',
    sensor: 'A rover sensor detecting an object with blue sound waves.',
    circuit: 'A simple battery, wire, and light circuit.',
    logic: 'A flow of program steps leading to a decision.',
    rover: 'A small rover with wheels, sensor, and controller.'
  }[kind];
  return (
    <div className={`concept-art ${compact ? 'concept-art-compact' : ''}`} role="img" aria-label={`${title}: ${description}`}>
      <svg viewBox="0 0 320 150" aria-hidden="true" focusable="false">
        <path d="M0 126 Q80 104 160 126 T320 126 V150 H0Z" fill="#f7eccd" />
        {kind === 'motion' && <g className="wheel-turn"><circle cx="160" cy="82" r="48" fill="#fffaf0" stroke="#a64b0e" strokeWidth="9"/><circle cx="160" cy="82" r="13" fill="#dc7900"/><path d="M160 34v35m0 26v35m-48-48h35m26 0h35M126 48l25 25m18 18 25 25m0-68-25 25m-18 18-25 25" stroke="#f5b700" strokeWidth="8" strokeLinecap="round"/><path d="M92 122h136" stroke="#76502d" strokeWidth="7" strokeLinecap="round"/></g>}
        {kind === 'sensor' && <g><rect x="67" y="75" width="116" height="45" rx="12" fill="#a64b0e"/><circle cx="96" cy="123" r="13" fill="#53432f"/><circle cx="155" cy="123" r="13" fill="#53432f"/><circle cx="176" cy="88" r="7" fill="#f5b700"/><path d="M196 75q24 20 0 40M211 65q42 30 0 60" fill="none" stroke="#a64b0e" strokeWidth="5" strokeLinecap="round"/><rect x="253" y="78" width="22" height="44" rx="4" fill="#dc7900"/><path d="M258 88h12m-12 10h12m-12 10h12" stroke="#fffaf0" strokeWidth="3"/></g>}
        {kind === 'circuit' && <g><rect x="40" y="58" width="72" height="46" rx="7" fill="#a64b0e"/><path d="M112 72h50v-18h59v18h34v34h-70v-16h-73" fill="none" stroke="#dc7900" strokeWidth="6" strokeLinejoin="round"/><path d="M63 50v-9m22 9v-9" stroke="#dc7900" strokeWidth="6"/><circle cx="221" cy="104" r="17" fill="#f5b700" stroke="#dc7900" strokeWidth="4"/><path d="M221 81V71m-15 14-8-8m38 8 8-8" stroke="#f5b700" strokeWidth="4"/></g>}
        {kind === 'logic' && <g><rect x="25" y="59" width="75" height="38" rx="18" fill="#a64b0e"/><path d="M100 78h26m0 0-8-8m8 8-8 8" stroke="#dc7900" strokeWidth="5" fill="none"/><path d="m160 50 40 28-40 28-40-28z" fill="#f5b700" stroke="#dc7900" strokeWidth="3"/><path d="M200 78h27m0 0-8-8m8 8-8 8" stroke="#dc7900" strokeWidth="5" fill="none"/><rect x="228" y="59" width="72" height="38" rx="5" fill="#dc7900"/><text x="62" y="84" fill="white" fontSize="12" textAnchor="middle">START</text><text x="160" y="82" fill="#57391e" fontSize="11" textAnchor="middle">IF?</text><text x="264" y="84" fill="white" fontSize="12" textAnchor="middle">ACT</text></g>}
        {kind === 'rover' && <g><rect x="79" y="61" width="160" height="53" rx="16" fill="#a64b0e"/><rect x="124" y="39" width="69" height="25" rx="6" fill="#f5b700" stroke="#dc7900" strokeWidth="3"/><circle cx="113" cy="120" r="17" fill="#53432f"/><circle cx="207" cy="120" r="17" fill="#53432f"/><circle cx="147" cy="50" r="4" fill="#a64b0e"/><circle cx="171" cy="50" r="4" fill="#a64b0e"/><path d="M78 77 51 66m0 0 9-1m-9 1 4 8" fill="none" stroke="#dc7900" strokeWidth="4" strokeLinecap="round"/></g>}
      </svg>
    </div>
  );
}
