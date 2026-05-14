export default function DashboardPreview() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <div className="glass rounded-[32px] p-8">

        <div className="flex items-center justify-between flex-wrap gap-4">

          <h2 className="text-4xl md:text-5xl font-bold">
            Student Dashboard
          </h2>

          <div className="px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-sm">
            Active Learning
          </div>

        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-10">

          <div className="glass rounded-2xl p-6">

            <p className="text-gray-400 text-sm">
              Courses Completed
            </p>

            <h1 className="text-5xl font-bold mt-3">
              12
            </h1>

          </div>

          <div className="glass rounded-2xl p-6">

            <p className="text-gray-400 text-sm">
              Learning Streak
            </p>

            <h1 className="text-5xl font-bold mt-3">
              84
            </h1>

          </div>

          <div className="glass rounded-2xl p-6">

            <p className="text-gray-400 text-sm">
              XP Points
            </p>

            <h1 className="text-5xl font-bold mt-3">
              2.4K
            </h1>

          </div>

        </div>

      </div>
    </section>
  );
}