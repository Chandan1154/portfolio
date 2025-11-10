export default function Projects() {
  return (
    <section
      name="projects"
      className="max-w-5xl mx-auto py-14 px-6 scroll-mt-24"
    >
      <h2 className="text-3xl font-semibold text-center mb-10">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">Inventory & Order Management System</h3>
          <p className="text-gray-700 mb-4">
            A comprehensive system to manage inventory and orders with features like SKU creation, stock tracking, and order placement.
          </p>
          <p className="text-gray-600"><strong>Technologies:</strong> Spring Boot, React, PostgreSQL, Docker, Swagger</p>
          <div className="mt-4">
            <button className="text-blue-500 hover:underline">GitHub</button>
            &nbsp;|&nbsp; 
            <button className="text-blue-500 hover:underline">Live Demo</button>
          </div>
        </div>

        <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">Microservices E-commerce Backend</h3>
          <p className="text-gray-700 mb-4">
            A microservices-based backend for e-commerce applications featuring services for authentication, product management, and order processing.
          </p>
          <p className="text-gray-600"><strong>Technologies:</strong> Spring Boot, Kafka, Redis, PostgreSQL, Docker</p>
        </div>

        <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">Personal Expense Analyzer</h3>
          <p className="text-gray-700 mb-4">
            An application that helps users analyze their personal expenses by categorizing spending and providing insights and recommendations.
          </p>
          <p className="text-gray-600"><strong>Technologies:</strong> Spring Boot, Python (ML), React</p>
        </div>
        <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">AI Support Chatbot</h3>
          <p className="text-gray-700 mb-4">
            An intelligent chatbot built using Spring AI integrated with OpenAI API for real-time IT support queries.
          </p>
          <p className="text-gray-600"><strong>Technologies:</strong> Spring AI, OpenAI API, React.js, REST API</p>
        </div>
      </div>
    </section>
  );
}
