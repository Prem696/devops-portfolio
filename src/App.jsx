import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const projects = [
  {
   title: "EBS Backup Automation (Serverless AWS)",
   short: "Automated EBS snapshot creation using Lambda, API Gateway, and a serverless architecture.",
   details: [
    "Designed fully serverless architecture using AWS Lambda and API Gateway",
    "Automated Amazon EBS snapshot creation using Python (boto3)",
    "Integrated HTTP API with Lambda function for backend processing",
    "Configured IAM roles with least-privilege permissions",
    "Hosted frontend on Amazon S3 with CloudFront HTTPS delivery",
    "Implemented CORS configuration for secure API communication",
    "Returned snapshot ID dynamically to frontend after backup creation",
    "Built scalable, event-driven automation without managing servers"
   ],
    images: [
    "/ebs1.png",
    "/ebs2.png",
    "/ebs3.png",
    "/ebs4.png",
    "/ebs5.png",
   ],
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "React Static Website Deployment (AWS)",
   short: "Deployed React application on AWS using S3, CloudFront, ACM, and Route 53 with custom domain.",
   details: [
    "Built optimized production React build using npm run build",
    "Hosted static website files on Amazon S3",
    "Configured CloudFront CDN for global low-latency delivery",
    "Secured application with SSL certificate via AWS Certificate Manager",
    "Mapped custom domain using Amazon Route 53",
    "Configured CloudFront Origin Access Control (OAC)",
    "Implemented custom error routing (403/404 → index.html) for React Router",
    "Ensured HTTPS-only secure access"
   ],
    images: [
        "/project1.png",
        "/project1-2.png",
        "/project1-3.png",
        "/project1-4.png",
        "/project1-5.png",
        "/project1-6.png",
        "/project1-7.png",
        "/project1-8.png",
      ],
    color: "from-purple-500 to-pink-400",
  },
  {
    title: "3-Tier Architecture Deployment",
    short: "Production-ready 3-tier AWS architecture with secure networking and scalable backend deployment.",
    details: [
     "Designed custom VPC with public and private subnets",
     "Hosted static frontend on Amazon S3 with CloudFront CDN",
     "Deployed Java REST API on EC2 handling /enquiry endpoints",
     "Configured MySQL database on Amazon RDS in private subnet",
     "Implemented secure Security Group rules (App → DB access only)",
     "Configured Internet Gateway and Route Tables",
     "Enabled HTTPS delivery through CloudFront",
     "Automated backend setup using EC2 user-data scripts"
    ],
    images: ["/project3.png", 
      "/project3-2.png",
      "/project3-3.png",
      "/project3-4.png",
      "/project3-5.png",
      "/project3-6.png",
      "/project3-7.png",
      "/project3-8.png"
    ],
    color: "from-orange-500 to-yellow-400",
  },
  {
    title: "Highly Available Web Application (ALB + Auto Scaling)",
    short: "Deployed scalable AWS architecture with CPU-based Auto Scaling and Application Load Balancer.",
    details: [
      "Designed highly available architecture using EC2, ALB, and Auto Scaling Group",
     "Configured CPU-based target tracking scaling (scale-out >50% utilization)",
     "Implemented Application Load Balancer for traffic distribution",
     "Deployed multiple EC2 instances across availability zones",
     "Integrated IAM roles for secure instance permissions",
     "Simulated load increase to trigger automatic instance scaling",
     "Validated real-time load balancing using instance ID responses",
     "Ensured performance, fault tolerance, and cost optimization"
    ],
    images: ["/ha1.png",
      "/ha2.png",
      "/ha3.png",
      "/ha4.png",
      "/ha5.png",
      "/ha6.png",
      "/ha7.png",
    ],
    color: "from-green-500 to-emerald-400",
  },
];

export default function App() {

  // ✅ ALL STATES (must be together)
  const [loading, setLoading] = useState(true);
  const [projectIndex, setProjectIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  // ✅ LOADER EFFECT
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // ✅ Image navigation
const nextImage = () => {
  setImageIndex((prev) =>
    (prev + 1) % projects[projectIndex].images.length
  );
};

const prevImage = () => {
  setImageIndex((prev) =>
    (prev - 1 + projects[projectIndex].images.length) %
    projects[projectIndex].images.length
  );
};

// ✅ Project switch
const changeProject = (i) => {
  setProjectIndex(i);
  setImageIndex(0);
};

  if (loading) {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      
      {/* ✅ Full screen background image */}
      <img
        src="/loader-img.png"
        alt="Loading"
        className="absolute inset-0 w-full h-full object-cover blur-sm scale-105"
      />

      {/* ✅ Dark overlay (for better visibility) */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* ✅ Center content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">

        {/* 🔄 Spinner */}
        <img src="/loader.gif" className="w-20 h-20" />

        {/* ✨ Animated text */}
        <p className="mt-6 text-xl font-semibold animate-pulse">
        Launching My DevOps Portfolio 🚀
        </p>

      </div>
    </div>
  );
}
  return (
    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white min-h-screen scroll-smooth">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/10 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-sky-400 font-bold text-lg">Prem</h1>
          <div className="flex gap-6 text-sm">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#certifications" className="hover:text-sky-400 transition">Certifications</a>
            <a href="#education" className="hover:text-sky-400 transition">Education</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

{/* HERO */}
<section className="min-h-screen flex flex-col md:flex-row items-center justify-center pt-24 px-6 gap-16 relative isolate">
  {/* ✅ Full Background Image */}
<div className="absolute inset-0 z-0">
  <img
    src="/background1.png"   // ✅ FIXED
    alt="hero background"
    className="w-full h-full object-cover"
  />
</div>

{/* ✅ Dark Overlay */}
<div className="absolute inset-0 bg-black/70 z-0"></div>

  {/* Animated Background Glow */}
  <div className="absolute w-96 h-96 bg-sky-500/20 blur-3xl rounded-full z-0 animate-pulse"></div>

  {/* Left Side */}
  <div className="max-w-xl relative z-10">
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-5xl font-bold text-sky-400"
    >
      Prem Mangrulkar
    </motion.h1>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-slate-400 mt-4 text-lg"
    >
      AWS DevOps Engineer focused on building scalable, secure and 
      production-ready cloud infrastructure.
    </motion.p>

    {/* Buttons */}
    <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.6 }}
  className="flex gap-4 mt-6 relative z-10"
>
      <a
        href="#projects"
        className="px-6 py-2 bg-sky-500 rounded-lg hover:bg-sky-400"
      >
        View Projects
      </a>

      <a
        href="#contact"
        className="px-6 py-2 border border-sky-500 rounded-lg hover:bg-sky-500/10"
      >
        Contact Me
      </a>
    </motion.div>
  </div>

  {/* Right Side Profile Image */}
  <motion.img
  src="/profile.jpg"
  alt="profile"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
  className="w-72 h-72 rounded-3xl border-4 border-sky-500 shadow-xl object-cover relative z-10"
/>
</section>

{/* STATS */}
<section className="py-16 bg-slate-950 border-y border-slate-800">
  <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

    {[
      { number: "10+", label: "AWS Services Used" },
      { number: "4+", label: "Production Projects" },
      { number: "100%", label: "Hands-On Learning" },
      { number: "24/7", label: "Learning Mode" },
    ].map((stat, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: i * 0.2 }}
        viewport={{ once: true }}
        className="bg-slate-900 p-6 rounded-2xl border border-slate-700"
      >
        <h3 className="text-3xl font-bold text-sky-400">
          {stat.number}
        </h3>
        <p className="text-slate-400 mt-2 text-sm">
          {stat.label}
        </p>
      </motion.div>
    ))}

  </div>
</section>
      {/* ABOUT */}
      <section id="about" className="p-10 max-w-5xl mx-auto">
        <h2 className="text-3xl text-sky-400 mb-6">About Me</h2>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700 space-y-4">
          <p className="text-slate-300">
            I am a passionate <span className="text-sky-400 font-semibold">DevOps Engineer</span> 
             focused on building scalable, secure, and highly available cloud infrastructure on AWS.
          </p>

          <p className="text-slate-300">
             I have hands-on experience designing real-world cloud architectures including 
             3-tier deployments, serverless automation, CDN-based static hosting, and 
             highly available systems using Auto Scaling and Load Balancers.
          </p>
          
          <p className="text-slate-300">
            My goal is to design production-ready systems that ensure:
          </p>

          <ul className="list-disc ml-6 text-slate-300 space-y-1">
            <li>High Availability</li>
           <li>Fault Tolerance</li>
           <li>Performance Optimization</li>
           <li>Cost Efficiency</li>
           <li>Secure IAM & Networking Practices</li>
          </ul>

          <p className="text-slate-400 text-sm pt-2">
            I continuously practice by building hands-on AWS projects and improving my 
            understanding of cloud architecture patterns.
          </p>
        </div>
      </section>
      {/* PROJECTS */}
      <section id="projects" className="p-10 max-w-5xl mx-auto">
        <h2 className="text-3xl text-sky-400 mb-6">Projects</h2>

        <div className="flex gap-3 mb-6 flex-wrap">
          {projects.map((p, i) => (
            <button
              key={i}
              onClick={() => changeProject(i)}
              className={`px-4 py-2 rounded-xl ${
                projectIndex === i ? "bg-sky-500" : "bg-slate-800"
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden rounded-3xl">
          <motion.img
            key={projects[projectIndex].images[imageIndex]}
            src={projects[projectIndex].images[imageIndex]}
            alt="project"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl w-full"
          />

          <button
            onClick={prevImage}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 px-3 py-2 rounded-full"
          >
            ◀
          </button>

          <button
            onClick={nextImage}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 px-3 py-2 rounded-full"
          >
            ▶
          </button>

          <div className="flex justify-center gap-2 mt-4">
            {projects[projectIndex].images.map((_, i) => (
              <div
                key={i}
                onClick={() => setImageIndex(i)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  imageIndex === i ? "bg-sky-400" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Project Details */}
        <div className="mt-6">
          <h3 className="text-2xl font-bold">
            {projects[projectIndex].title}
          </h3>
          <p className="mt-2 text-slate-300">
            {projects[projectIndex].short}
          </p>

          <ul className="mt-3 list-disc ml-5">
            {projects[projectIndex].details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
      </section>

{/* EXPERIENCE */}
<section id="experience" className="p-10 max-w-5xl mx-auto">
  <h2 className="text-3xl text-sky-400 mb-6">Experience</h2>

  <div className="space-y-6">

    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700">
      <h3 className="text-xl font-semibold">
        AWS DevOps Engineer (Hands-on Projects)
      </h3>
      <p className="text-slate-400 mt-2">
        Practical experience designing, deploying, and managing cloud infrastructure on AWS.
      </p>

      <ul className="list-disc ml-5 mt-4 text-sm text-slate-300 space-y-2">
        <li>Designed and deployed production-style 3-tier architecture (S3 + EC2 + RDS).</li>
        <li>Implemented Application Load Balancer and Auto Scaling with CPU-based target tracking.</li>
        <li>Deployed React applications using S3 + CloudFront + Route 53 + ACM.</li>
        <li>Built serverless automation using Lambda, API Gateway, and EBS snapshot creation.</li>
        <li>Configured IAM roles and security groups following least-privilege principles.</li>
        <li>Designed custom VPC with public & private subnets, route tables, and Internet Gateway.</li>
        <li>Automated EC2 setup using user-data scripts.</li>
      </ul>
    </div>

    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700">
      <h3 className="text-xl font-semibold">
        Cloud Infrastructure & Troubleshooting
      </h3>

      <ul className="list-disc ml-5 mt-4 text-sm text-slate-300 space-y-2">
        <li>Resolved IAM permission issues and AWS credential configuration errors.</li>
        <li>Optimized CloudFront caching and error routing for React applications.</li>
        <li>Debugged EC2 deployment failures and backend connectivity issues.</li>
        <li>Configured secure database access between application and RDS layer.</li>
        <li>Implemented HTTPS-only secure delivery using AWS Certificate Manager.</li>
      </ul>
    </div>

  </div>
</section>

      {/* SKILLS */}
      <section id="skills" className="p-10 max-w-5xl mx-auto">
        <h2 className="text-3xl text-sky-400 mb-6">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "AWS (S3, EC2, CloudFront, Route53)",
            "IAM & Security",
            "CI/CD Basics",
            "Git & GitHub",
            "Linux",
            "Networking",
            "Cloud Architecture",
            "Monitoring Basics",
          ].map((skill, i) => (
            <div key={i} className="bg-slate-800 p-4 rounded-xl text-center">
              {skill}
            </div>
          ))}
        </div>
      </section>
{/* CERTIFICATIONS */}
<section id="certifications" className="p-16 bg-slate-950 border-t border-slate-800">
  <h2 className="text-3xl text-sky-400 text-center mb-12">
    Licenses & Certifications
  </h2>

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

    {[
      {
        title: "AWS - Solutions Architecture Job Simulation",
        org: "Forage",
        issued: "Dec 2025",
        id: "fv73RRcSjh6uKNCsH",
        logo: "/theforage_logo.jpg",
        link: "https://www.theforage.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_694ae02d351b4e5608056995_1766516618859_completion_certificate.pdf" // add actual link if available
      },
      {
        title: "Linux - Skill Up",
        org: "GeeksforGeeks",
        issued: "2025",
        id: "N/A",
        logo: "/forage.png",
        link: "https://media.geeksforgeeks.org/courses/certificates/ca00345db5b3d3ea88bb843251b7f9f8.pdf" // add actual link if available
      },
      {
        title: "DevOps Course Certification",
        org: "Intellipaat",
        issued: "Dec 2025",
        id: "31679-1655-307518",
        logo: "/intellipaat-logo.png",
        link: "https://intellipaat.com/academy/certificate-link/?Yz0xNjU1JnU9MzA3NTE4JmV4dD0x"
      }
    ].map((cert, i) => (
      <div
        key={i}
        className="bg-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-sky-500 transition shadow-lg"
      >
        <div className="flex items-center gap-4 mb-4">
          <img
            src={cert.logo}
            alt={`${cert.org} logo`}
            className="w-12 h-12 object-contain bg-white p-2 rounded-lg"
          />
          <div>
            <h3 className="text-lg font-semibold text-white">
              {cert.title}
            </h3>
            <p className="text-slate-400 text-sm">
              {cert.org}
            </p>
          </div>
        </div>

        <p className="text-slate-400 text-sm">
          Issued: {cert.issued}
        </p>

        <p className="text-slate-500 text-xs mt-1">
          Credential ID: {cert.id}
        </p>

        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-4 py-2 text-sm bg-sky-500 rounded-lg hover:bg-sky-400 transition"
        >
          Show Credential
        </a>
      </div>
    ))}

  </div>
{/* EDUCATION */}
<section id="education" className="p-16 bg-slate-950 border-y border-slate-800">
  <h2 className="text-3xl text-sky-400 text-center mb-12">
    Education
  </h2>

  <div className="max-w-6xl mx-auto space-y-10">

    {/* BTech */}
    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-sky-500 transition shadow-lg flex flex-col md:flex-row gap-6 items-center">
      <img
        src="/tgpcet-logo.png"
        alt="TGPCET Logo"
        className="w-20 h-20 object-contain bg-white p-2 rounded-xl"
      />
      <div>
        <h3 className="text-xl font-semibold text-white">
          Tulsiramji Gaikwad Patil College of Engineering & Technology, Mohgaon
        </h3>
        <p className="text-slate-400">
          Bachelor of Technology (BTech), Computer Science
        </p>
        <p className="text-slate-500 text-sm">
          Oct 2022 – Jun 2025
        </p>
      </div>
    </div>

    {/* Diploma */}
    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-sky-500 transition shadow-lg flex flex-col md:flex-row gap-6 items-center">
      <img
        src="/diploma-logo.png"
        alt="NIT Logo"
        className="w-20 h-20 object-contain bg-white p-2 rounded-xl"
      />
      <div>
        <h3 className="text-xl font-semibold text-white">
          Nagpur Institute of Technology, Katol Road
        </h3>
        <p className="text-slate-400">
          Diploma in Computer Engineering
        </p>
        <p className="text-slate-500 text-sm">
          May 2019 – Jul 2022
        </p>
      </div>
    </div>

    {/* School */}
    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-sky-500 transition shadow-lg flex flex-col md:flex-row gap-6 items-center">
      <img
        src="/school-logo.png"
        alt="Charisma Logo"
        className="w-20 h-20 object-contain bg-white p-2 rounded-xl"
      />
      <div>
        <h3 className="text-xl font-semibold text-white">
          Charisma English Convent
        </h3>
        <p className="text-slate-400">
          Secondary School Certification
        </p>
        <p className="text-slate-500 text-sm">
          Mar 2019
        </p>
      </div>
    </div>

  </div>
</section>
  
</section>
      {/* CONTACT */}
      <section id="contact" className="p-10 max-w-5xl mx-auto">
        <h2 className="text-3xl text-sky-400 mb-6">Contact</h2>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700 space-y-6">
          
          {/* Email with Copy */}
          <div>
              <p className="text-slate-400 mb-1">Email</p>
              <div className="flex items-center gap-3">
             <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=premmangrulkar22@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:underline"
              >
              premmangrulkar22@gmail.com
             </a>

             <button
               onClick={() =>
               navigator.clipboard.writeText("premmangrulkar22@gmail.com")
              }
              className="px-3 py-1 text-sm bg-slate-800 rounded hover:bg-slate-700"
             >
             Copy
            </button>
          </div>
        </div>

          {/* LinkedIn */}
          <div>
            <p className="text-slate-400 mb-1">LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/prem-mangrulkar/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sky-400 hover:underline"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.037-1.851-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.352V9h3.414v1.561h.049c.476-.9 1.637-1.851 3.37-1.851 3.602 0 4.268 2.37 4.268 5.455v6.287zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.814 20.452H3.861V9h2.953v11.452z"/>
              </svg>
              prem-mangrulkar
            </a>
          </div>

          {/* GitHub */}
          <div>
            <p className="text-slate-400 mb-1">GitHub</p>
            <a
              href="https://github.com/Prem696"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sky-400 hover:underline"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.086 3.292 9.387 7.865 10.91.575.106.785-.25.785-.556 0-.274-.01-1.002-.015-1.967-3.2.696-3.877-1.543-3.877-1.543-.523-1.33-1.278-1.683-1.278-1.683-1.045-.714.08-.7.08-.7 1.156.082 1.764 1.188 1.764 1.188 1.027 1.758 2.695 1.25 3.35.956.104-.744.402-1.25.73-1.538-2.554-.29-5.236-1.277-5.236-5.682 0-1.255.448-2.282 1.183-3.087-.119-.29-.513-1.457.112-3.038 0 0 .965-.309 3.162 1.18a10.98 10.98 0 0 1 2.879-.387c.977.004 1.963.132 2.879.387 2.195-1.49 3.158-1.18 3.158-1.18.627 1.581.233 2.748.114 3.038.737.805 1.182 1.832 1.182 3.087 0 4.417-2.686 5.389-5.247 5.673.413.356.781 1.058.781 2.133 0 1.54-.014 2.781-.014 3.16 0 .309.207.668.79.554C20.71 21.384 24 17.084 24 12c0-6.35-5.15-11.5-12-11.5z"/>
              </svg>
              Prem696
            </a>
          </div>

          {/* Contact Form */}
          <form className="space-y-4 mt-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-sky-500 rounded-lg hover:bg-sky-400"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}
