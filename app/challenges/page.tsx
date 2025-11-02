import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ChallengesPage() {
  const challenges = [
    {
      id: "pitch-it-bad",
      title: "Pitch it Bad",
      emoji: "💼",
      description: "Pitch your own startup concept.",
      points: 25,
      formUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSdbuyk4C873ov3Jb3vJ1xgPH1TKfs62-0wrjbLwWTbes_irpw/viewform",
      icon: "pitch",
    },
    {
      id: "heisenberg",
      title: "Heisenberg's Certainty Principle",
      emoji: "🎯",
      description:
        "Replicate an image using prompt engineering. Bonus points for 5-sec flash!",
      points: 25,
      formUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSdUFYXypMvOLk8MOOQi7kXddbm4mobLgh1I2vqnKdmwN2xxAQ/viewform",
      icon: "heisenberg",
    },
    {
      id: "fix-the-lab",
      title: "Fix the Lab",
      emoji: "🔧",
      description: "Redesign and fix a flawed UI/UX.",
      points: 25,
      formUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSe9Mn47weXiCM4Tw1ViGZsfkkEdXe11Ibxle2UOEwZwKzwmCw/viewform?usp=publish-editor",
      icon: "fix",
    },
    {
      id: "word-bank",
      title: "Word Bank Mayhem",
      emoji: "📝",
      description: "Read the passage and guess the hidden words.",
      points: 25,
      icon: "word",
      games: [
        {
          name: "Guessing Game 1",
          formUrl:
            "https://docs.google.com/forms/d/e/1FAIpQLSdbfQG_ia0wzwsZktyKuheObIBAOueAHHQcpJ80mnXje3Ybrg/viewform?usp=header",
        },
        {
          name: "Guessing Game 2",
          formUrl:
            "https://docs.google.com/forms/d/e/1FAIpQLSe9MQ2s_cEwd-7dkt_h4zCrvt6Mz2uklnvEX3ao0IedTQYQMQ/viewform?usp=header",
        },
        {
          name: "Guessing Game 3",
          formUrl:
            "https://docs.google.com/forms/d/e/1FAIpQLSerhxCIk7aqk1AWup9dIfQaVmXvu2xN_6fwrcgXmLv7i7hK2w/viewform?usp=header",
        },
      ],
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative w-full py-20 bg-black overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-600/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black">
                <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent">
                  Challenge Submissions
                </span>
              </h1>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Choose a challenge and submit your creative solution. Each
                challenge is worth 25 points!
              </p>
            </div>
          </div>
        </section>

        {/* Challenges Grid */}
        <section className="relative w-full py-20 bg-black overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-green-600/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {challenges.map((challenge) => (
                <div
                  key={challenge.id}
                  className="group relative p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-600/10 border border-green-500/30 hover:border-green-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-green-600/20"
                >
                  {/* Background accent */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-emerald-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="text-5xl mb-2">{challenge.emoji}</div>
                        <h3 className="text-2xl font-bold text-white">
                          {challenge.title}
                        </h3>
                      </div>
                      <div className="px-3 py-1 bg-green-400/20 border border-green-400/50 rounded-full">
                        <span className="text-green-400 font-bold text-sm">
                          {challenge.points} pts
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-white/70 mb-6 leading-relaxed">
                      {challenge.description}
                    </p>

                    {/* Submit Button(s) */}
                    {challenge.games ? (
                      <div className="space-y-2">
                        {challenge.games.map((game, index) => (
                          <a
                            key={index}
                            href={game.formUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                          >
                            <button className="w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-green-400 to-emerald-600 text-black font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-green-600/50">
                              {game.name}
                            </button>
                          </a>
                        ))}
                      </div>
                    ) : (
                      <a
                        href={challenge.formUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-green-400 to-emerald-600 text-black font-bold transition-all duration-300 hover:shadow-lg hover:shadow-green-600/50 hover:scale-105 group-hover:translate-y-0">
                          Submit Solution
                        </button>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
