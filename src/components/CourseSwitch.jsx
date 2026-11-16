/** Switches between the two sites in this repo: "/" is AI (CSD 3102), "/toc/" is Theory of Computation (CSD 3101). */
export default function CourseSwitch({ current = 'ai' }) {
  const go = (e) => {
    const to = e.target.value;
    if (to === current) return;
    location.href = to === 'toc' ? './toc/' : '../';
  };
  return (
    <select className="course" aria-label="Course" title="Switch course" value={current} onChange={go}>
      <option value="ai">AI</option>
      <option value="toc">TOC</option>
    </select>
  );
}
