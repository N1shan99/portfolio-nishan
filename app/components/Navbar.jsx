export default function Navbar() {
  return (
    <div className="nav">
      <div>Nishan</div>
      <div style={{display:"flex",gap:"20px"}}>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
      </div>
    </div>
  );
}