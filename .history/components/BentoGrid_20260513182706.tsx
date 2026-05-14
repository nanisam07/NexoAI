export default function BentoGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <div className="grid md:grid-cols-3 gap-5">

        <div className="glass rounded-3xl p-6 md:col-span-2 h-[220px]">

          <h2 className="text-3xl font-bold">
            AI Learning Paths
          </h2>

          <p className="text-gray-400 mt-4 max-w-lg">
            Personalized roadmaps generated
            using your career goals and skill level.
          </p>

        </div>

        <div className="glass rounded-3xl p-6 h-[220px]">

          <h2 className="text-3xl font-bold">
            Smart Dashboard
          </h2>

        </div>

        <div className="glass rounded-3xl p-6 h-[220px]">

          <h2 className="text-3xl font-bold">
            Live Classes
          </h2>

        </div>

        <div className="glass rounded-3xl p-6 md:col-span-2 h-[220px]">

          <h2 className="text-3xl font-bold">
            AI Mentor Assistant
          </h2>

        </div>

      </div>
    </section>
  );
}