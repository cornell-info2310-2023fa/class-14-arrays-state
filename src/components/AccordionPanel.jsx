import './AccordionPanel.css';

export default function AccordionPanel({
  title,
  isExpanded,
  onActivate,
  darkMode,
  children
}) {
  return (
    <section>
      <h3
        style={{ color: (darkMode ? 'white' : 'black') }}
        onClick={onActivate}>
        {(isExpanded ? '⮟' : '⮞') + ' ' + title}
      </h3>
      {isExpanded && (<p style={{ color: (darkMode ? 'white' : 'black') }}>{children}</p>)}
    </section>
  );
}
