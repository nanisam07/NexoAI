export default function DashboardPreview() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      <div className="glass rounded-[40px] p-10">

        <div className="flex items-center justify-between">
          <h2 className="text-5xl font-bold">
            Student Dashboard
          </h2>

          <div className="px-5 py-2 rounded-full bg-green-500/20 text-green-400">
            Active Learning
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <div className="glass rounded-3xl p-8">
            <p className="text-gray-400">
              Courses Completed
            </p>

            <h1 className="text-6xl font-bold mt-4">
              12
            </h1>
          </div>

          <div className="glass rounded-3xl p-8">
            <p className="text-gray-400">
              Learning Streak
            </p>

            <h1 className="text-6xl font-bold mt-4">
              84
            </h1>
          </div>

          <div className="glass rounded-3xl p-8">
            <p className="text-gray-400">
              XP Points
            </p>

            <h1 className="text-6xl font-bold mt-4">
              2.4K
            </h1>
          </div>

        </div>
      </div>
    </section>
  );
}