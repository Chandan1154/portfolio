export default function ExperienceTimeline() {
  return (
    <section
      name="experience-timeline"
      className="max-w-3xl mx-auto py-14 px-6 scroll-mt-24"
    >
      <h2 className="text-3xl font-semibold text-center mb-10">Work Experience</h2>

      <div className="border-l-4 border-blue-600 pl-6 space-y-8">
        <div>
          <h3 className="text-xl font-semibold">Software Engineer</h3>
          <p className="text-gray-600">TRUGlobal Software India Pvt Ltd</p>
          <p className="text-gray-600">2023 - Present</p>
          <p className="mt-2 text-gray-700">
            Worked on diverse projects including Cleanleaf Energy, Sephora, and CredlePoint, focusing on
            frontend and full-stack development using React.js, Angular.js, Java, Spring Boot, and Python. Implemented
            microservices architectures, optimized performance, and enhanced security through JWT and Okta SSO.
          </p>
        </div>
      </div>
    </section>
  );
}
