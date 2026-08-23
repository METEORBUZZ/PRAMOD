import { useState } from "react";
import {
  ArrowRight, Github, Linkedin, Mail, MapPin, ExternalLink,
  Cloud, Server, ShieldCheck, Boxes, Terminal, Database,
  GitBranch, Activity, Menu, X, CheckCircle2, Send, Sun, Moon
} from "lucide-react";

const skills = [
  ["AWS", "Cloud Architecture", Cloud, "aws"],
  ["Kubernetes", "Container Orchestration", Boxes, "https://cdn.simpleicons.org/kubernetes"],
  ["Docker", "Containerization", Server, "https://cdn.simpleicons.org/docker"],
  ["Linux", "Administration", Terminal, "https://cdn.simpleicons.org/linux"],
  ["GitHub / Jenkins", "CI/CD", GitBranch, "https://cdn.simpleicons.org/github"],
  ["Terraform", "Infrastructure as Code", Cloud, "https://cdn.simpleicons.org/terraform"],
  ["Prometheus", "Metrics and Monitoring", Activity, "https://cdn.simpleicons.org/prometheus"],
  ["Grafana", "Dashboards and Observability", Activity, "https://cdn.simpleicons.org/grafana"],
  ["Vault / Trivy", "Security", ShieldCheck, "https://cdn.simpleicons.org/vault"],
  ["Node.js", "Backend", Terminal, "https://cdn.simpleicons.org/nodedotjs"],
  ["React.js", "Frontend", Terminal, "https://cdn.simpleicons.org/react"],
  ["MySQL", "Database", Database, "https://cdn.simpleicons.org/mysql"]
];

const projects = [
  {
    title: "End-to-End DevSecOps Pipeline",
    type: "DevSecOps",
    description: "Production-oriented pipeline combining source control, CI, code quality, security scanning, containerization and Kubernetes deployment.",
    stack: ["GitHub", "Jenkins", "SonarQube", "Trivy", "Docker", "Kubernetes"]
  },
  {
    title: "AWS 3-Tier Cloud Architecture",
    type: "Cloud",
    description: "Highly available web architecture using VPC networking, public/private subnets, compute, database and monitoring concepts.",
    stack: ["AWS", "VPC", "EC2", "RDS", "ALB", "CloudWatch"]
  },
  {
    title: "Kubernetes Production Platform",
    type: "Kubernetes",
    description: "Master/worker cluster concepts with workloads, Services, ConfigMaps, Secrets, probes, resources and security controls.",
    stack: ["K8s", "YAML", "Secrets", "RBAC", "Probes"]
  },
  {
    title: "Two-Tier Voting Application",
    type: "Full Stack",
    description: "Node.js and MySQL voting system with an admin workflow, QR-based access and persistent voting data.",
    stack: ["React.js", "Node.js", "Tailwind", "MySQL", "QR"]
  }
];

function AwsLogo() {
  return (
    <svg viewBox="0 0 64 40" aria-label="AWS logo" role="img" className="h-7 w-9">
      <text x="4" y="22" fill="#232f3e" fontSize="20" fontWeight="700" fontFamily="Arial, sans-serif">aws</text>
      <path d="M8 29c14 8 32 7 46-1" fill="none" stroke="#ff9900" strokeWidth="3" strokeLinecap="round" />
      <path d="m48 24 7 4-8 3" fill="none" stroke="#ff9900" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SonarLogo() {
  return (
    <svg viewBox="0 0 40 40" aria-label="SonarQube logo" role="img" className="h-8 w-8">
      <circle cx="20" cy="20" r="16" fill="#4b9fd4" />
      <path d="M20 8a12 12 0 0 1 12 12M20 13a7 7 0 0 1 7 7M20 18a2 2 0 0 1 2 2" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function App() {
  const [menu, setMenu] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
      }
    } catch {
      alert("Start the Node.js server and try again.");
    }
  };

  const nav = ["about", "skills", "projects", "architecture", "contact"];

  return (
    <div className={`min-h-screen overflow-hidden bg-[#05080d] ${lightMode ? "theme-light" : ""}`}>
      <header className="fixed top-0 z-50 w-full border-b border-slate-800/70 bg-[#05080d]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#home" className="flex items-center gap-2 font-bold">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-cyan-400 text-slate-950">&gt;_</span>
            <span>PRAMOD<span className="ml-1 text-cyan-400">.DEV</span></span>
          </a>
          <nav className="hidden gap-7 text-sm text-slate-300 md:ml-8 md:flex">
            {nav.map(x => <a key={x} href={"#" + x} className="capitalize hover:text-cyan-300">{x}</a>)}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <a href="#contact" className="rounded-lg border border-black bg-white px-3 py-2 text-xs text-black shadow-[4px_4px_0_#000] transition-transform hover:-translate-y-0.5 hover:bg-slate-200 sm:px-4 sm:text-sm">Let's Connect</a>
            <button
              onClick={() => setLightMode(!lightMode)}
              className="rounded-lg border border-slate-700 p-2 text-slate-200 hover:border-cyan-400/40"
              aria-label={lightMode ? "Switch to black background" : "Switch to white background"}
              title={lightMode ? "Use black background" : "Use white background"}
            >
              {lightMode ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>
          <button onClick={() => setMenu(!menu)} className="md:hidden" aria-label="Menu">
            {menu ? <X /> : <Menu />}
          </button>
        </div>
        {menu && (
          <div className="border-t border-slate-800 bg-slate-950 p-5 md:hidden">
            {nav.map(x => <a onClick={() => setMenu(false)} key={x} href={"#" + x} className="block py-3 capitalize text-slate-300">{x}</a>)}
          </div>
        )}
      </header>

      <main id="home">
        <section className="home-background relative grid-bg pt-32">
          <div className="glow-orb left-10 top-24 bg-cyan-400" />
          <div className="glow-orb right-0 top-72 bg-violet-500" />
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.2fr_.8fr] lg:py-28">
            <div>
              <span className="badge mb-6"><span className="mr-2 h-2 w-2 rounded-full bg-emerald-400" /> Open to DevOps / Cloud opportunities</span>
              <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                Building <span className="text-cyan-400">reliable</span> cloud infrastructure.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                Hi, I'm <strong className="text-slate-200">Pramod Ganvit</strong> — a DevOps & Cloud-focused developer working with AWS, Linux, Docker, Kubernetes, CI/CD and modern web technologies.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-300">View Projects <ArrowRight size={18}/></a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-200 hover:border-cyan-400/40">Contact Me <Mail size={18}/></a>
              </div>
              <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-500">
                <span className="flex items-center gap-2"><MapPin size={16}/> Gujarat, India</span>
                <span className="flex items-center gap-2"><Cloud size={16}/> AWS / Cloud</span>
                <span className="flex items-center gap-2"><Boxes size={16}/> Kubernetes</span>
              </div>
            </div>

            <div className="card relative p-5">
              <div className="mb-4 flex items-center gap-2 text-xs text-slate-500"><span className="h-2.5 w-2.5 rounded-full bg-red-400"/><span className="h-2.5 w-2.5 rounded-full bg-yellow-400"/><span className="h-2.5 w-2.5 rounded-full bg-green-400"/> terminal</div>
              <div className="terminal-window rounded-xl border border-slate-800 bg-[#02050a] p-6 font-mono text-sm leading-8">
                <p><span className="terminal-prompt text-cyan-400">pramod@devops</span>:~$ kubectl get pods</p>
                <p className="terminal-muted text-slate-500">NAME                 READY   STATUS</p>
                <p><span className="terminal-success text-emerald-400">react-app</span>          1/1     Running</p>
                <p><span className="terminal-success text-emerald-400">node-api</span>          1/1     Running</p>
                <p><span className="terminal-success text-emerald-400">mysql</span>             1/1     Running</p>
                <p className="mt-3"><span className="terminal-prompt text-cyan-400">pramod@devops</span>:~$ aws cloudformation describe-stacks</p>
                <p className="terminal-success text-emerald-400">✓ infrastructure healthy</p>
                <p><span className="terminal-prompt text-cyan-400">pramod@devops</span>:~$ echo "ship it"</p>
                <p className="terminal-success text-violet-300">ship it 🚀</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-5 py-24">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <span className="badge">ABOUT</span>
              <h2 className="mt-6 text-4xl font-bold text-white">Cloud + DevOps mindset</h2>
              <a href="https://git.io/typing-svg" target="_blank" rel="noreferrer" aria-label="Animated DevOps and Cloud Engineer introduction">
                <img
                  src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=2E9EF7&center=true&vCenter=true&width=435&lines=Pramod+Ganvit+is+here!;DevOps+%26+CLOUDS+Engineering;1%2B+Years+AWS+IAAS+Excerpt;Cloud+Engineer+Expert"
                  alt="hello Dosto ,Pramod Ganvit is here, DevOps and Cloud Engineering, 1+ years AWS IAAS experience, Cloud Engineer Expert"
                  width="435"
                  height="150"
                  className="mt-4 max-w-full"
                />
              </a>
              <div className="mt-5 space-y-4 leading-8 text-slate-400">
                <p>
                  I enjoy building reliable systems and making software delivery faster, safer and easier to manage. My work brings together development, operations and cloud infrastructure.
                </p>
                <p>
                  I work with AWS, Linux, Docker, Kubernetes, Git, Jenkins and CI/CD pipelines. I use these tools to automate repetitive work, improve deployments and keep applications ready for production.
                </p>
                <p>
                  My cloud journey is focused on the <span className="font-semibold text-cyan-300">AWS Solutions Architect</span> path. I am learning to design secure, scalable and highly available solutions using practical architecture principles.
                </p>
              </div>
            </div>
            <div>
              <div className="mx-auto mb-4 h-72 w-72 overflow-hidden rounded-full border-4 border-white/30 bg-black shadow-[0_0_40px_rgba(255,255,255,0.14)] sm:h-96 sm:w-96">
                <img
                  src="/profile-demo.png"
                  alt="Demo profile illustration for Pramod Ganvit"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
              {[
                ["AWS", "Cloud platform"], ["K8s", "Orchestration"], ["Docker", "Containers"], ["DevSecOps", "Security-first delivery"]
              ].map(([a,b]) => <div className="card p-6" key={a}><p className="text-2xl font-bold text-cyan-300">{a}</p><p className="mt-2 text-sm text-slate-500">{b}</p></div>)}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="border-y border-slate-900 bg-slate-950/40">
          <div className="mx-auto max-w-7xl px-5 py-24">
            <span className="badge"> TOOLBOX</span>
            <h2 className="mt-5 text-4xl font-bold text-white">Technologies I work with</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map(([name, desc, Icon, logo]) => (
                <div className="card group p-5 transition hover:-translate-y-1 hover:border-cyan-400/30" key={name}>
                  {logo === "aws" ? <AwsLogo /> : logo ? <img src={logo} alt={`${name} logo`} className="h-7 w-7 object-contain" /> : <Icon className="text-cyan-400" size={25}/>} 
                  <h3 className="mt-5 font-semibold text-white">{name}</h3>
                  <p className="mt-1 text-sm text-slate-500">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-5 py-24">
          <span className="badge">PROJECTS</span>
          <h2 className="mt-5 text-4xl font-bold text-white">Projects that show the workflow</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((p, i) => (
              <article className="card group p-7" key={p.title}>
                <div className="flex items-center justify-between"><span className="text-sm text-cyan-300">{p.type}</span><span className="text-slate-700">0{i+1}</span></div>
                <h3 className="mt-5 text-2xl font-bold text-white">{p.title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{p.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">{p.stack.map(s => <span className="rounded-md bg-slate-800 px-2.5 py-1 text-xs text-slate-300" key={s}>{s}</span>)}</div>
                <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">Discuss project <ArrowRight size={16}/></a>
              </article>
            ))}
          </div>
        </section>

        <section id="architecture" className="bg-slate-950/50">
          <div className="mx-auto max-w-7xl px-5 py-24">
            <span className="badge">ARCHITECTURE</span>
            <h2 className="mt-5 text-4xl font-bold text-white">From code to production</h2>
            <div className="mt-10 grid gap-3 md:grid-cols-5">
              {[
                  ["01","CODE","GitHub", ["github"]],
                  ["02","BUILD","Jenkins", ["jenkins"]],
                   ["03","SECURE","SonarQube + Trivy", ["sonar", "trivy"]],
                  ["04","PACKAGE","Docker", ["docker"]],
                  ["05","RUN","Kubernetes + AWS", ["kubernetes", "aws"]]
                ].map(([n,t,d,logos]) => <div className="card p-5" key={n}><div className="flex h-9 items-center gap-2">{logos.map(logo => logo === "aws" ? <AwsLogo key={logo}/> : logo === "sonar" ? <SonarLogo key={logo}/> : <img key={logo} src={`https://cdn.simpleicons.org/${logo}`} alt={`${logo} logo`} className="h-8 w-8 object-contain" />)}</div><span className="mt-4 block text-xs text-cyan-400">{n}</span><h3 className="mt-2 font-bold text-white">{t}</h3><p className="mt-1 text-sm text-slate-500">{d}</p></div>)}
            </div>
            <div className="card mt-6 overflow-hidden p-6">
              <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
                {["Developer","GitHub","Jenkins","Security Gates","Docker Registry","Kubernetes","AWS","Prometheus / Grafana"].map((x,i) =>
                  <div key={x} className="flex items-center gap-3">
                    <span className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-slate-200">{x}</span>
                    {i < 7 && <ArrowRight className="hidden text-cyan-400 sm:block" size={17}/>}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-5 py-24">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <span className="badge"> CONTACT</span>
              <h2 className="mt-5 text-4xl font-bold text-white">Let's build something reliable.</h2>
              <p className="mt-5 leading-8 text-slate-400">Have a cloud, DevOps, Kubernetes or full-stack project? Send a message through the form.</p>
              <div className="mt-8 space-y-4 text-sm text-slate-400">
                <p className="flex items-center gap-3"><Mail className="text-cyan-400" size={18}/> pramodganvit1@gmail.com</p>
                <p className="flex items-center gap-3"><MapPin className="text-cyan-400" size={18}/> Gujarat, India</p>
              </div>
              <div className="mt-8 flex gap-3">
                <a className="rounded-xl border border-slate-700 p-3 hover:border-cyan-400/40" href="https://github.com/METEORBUZZ" target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github size={20}/></a>
                <a className="rounded-xl border border-slate-700 p-3 hover:border-cyan-400/40" href="https://www.linkedin.com/" target="_blank"><Linkedin size={20}/></a>
              </div>
            </div>
            <form onSubmit={submit} className="card p-7">
              {sent && <div className="mb-5 flex items-center gap-2 rounded-lg border border-emerald-400/20 bg-emerald-400/10 p-3 text-sm text-emerald-300"><CheckCircle2 size={18}/> Message sent successfully.</div>}
              <div className="grid gap-5 sm:grid-cols-2">
                <input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your name" className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 outline-none focus:border-cyan-400/50"/>
                <input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="Email address" className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 outline-none focus:border-cyan-400/50"/>
              </div>
              <textarea required rows="6" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Tell me about your project..." className="mt-5 w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 outline-none focus:border-cyan-400/50"/>
              <button className="mt-5 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-300"><Send size={17}/> Send Message</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-900">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-5 py-8 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Pramod Ganvit. Built with React + Node.js + Tailwind CSS.</p>
          <p className="font-mono">status: <span className="status-available">available</span></p>
        </div>
      </footer>
    </div>
  );
}

export default App;