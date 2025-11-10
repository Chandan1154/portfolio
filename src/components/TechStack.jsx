export default function TechStack() {
  return (
    <section
      name="techstack"
      className="max-w-4xl mx-auto py-14 px-6 scroll-mt-24"
    >
      <h2 className="text-3xl font-semibold text-center mb-10">Technologies I Use</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        <div className="border rounded-lg p-6 shadow-sm bg-white">
          <h3 className="text-xl font-semibold mb-4">Backend</h3>
          <div className="flex flex-wrap gap-3">
            {["Java", "Kotlin", "Spring Boot", "SQL", "Oracle", "Kafka", "GitHub", "Docker", "Jenkins", "Kubernetes", "Azure", "GCP"].map((tech) => (
              <span key={tech} className="px-3 py-1 border rounded-full bg-gray-50">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="border rounded-lg p-6 shadow-sm bg-white">
          <h3 className="text-xl font-semibold mb-4">Frontend</h3>
          <div className="flex flex-wrap gap-3">
            {["React JS", "Angular", "HTML5", "CSS3", "JavaScript", "TailwindCSS", "Material UI"].map((tech) => (
              <span key={tech} className="px-3 py-1 border rounded-full bg-gray-50">
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
