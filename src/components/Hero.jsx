export default function Hero() {
  return (
    <section
      name="hero"
      className="flex flex-col items-center justify-center text-center pt-32 pb-20 px-6 bg-gray-50 scroll-mt-24"
    >
      <h2 className="text-4xl font-bold mb-4">Hi, I'm Chandan C C</h2>
      <p className="text-lg text-gray-600 mb-6">
        Full-Stack Developer | Founder of NOTNULL| Open Source Enthusiast
      </p>

      <div className="flex gap-5">
        <button className="px-6 py-2 border rounded-lg bg-blue-600 text-white hover:bg-blue-700">
          Hire Me
        </button>
        <a href="https://drive.google.com/file/d/1zmDj2Ns3sxIHoU4k9wrjLIN8J5fpwfZt/view?usp=drive_link">
          <button className="px-6 py-2 border rounded-lg hover:bg-gray-200">
            Download Resume
          </button>
        </a>
      </div>
    </section>
  );
}
