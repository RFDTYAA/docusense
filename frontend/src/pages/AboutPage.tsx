export default function AboutPage() {
  const team = [
    { name: "Muhammad Mishbahul Muflihin", role: "Machine Learning Engineer" },
    { name: "Jauhan Ahmad", role: "Data Engineer" },
    { name: "Nero Caesar Suprobo", role: "Project Manager & QA" },
    { name: "Raffa Arvel Nafi'Nadindra", role: "Cloud & Database Engineer" },
    { name: "Muhammad Rafi Aditya", role: "Frontend Engineer" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold tracking-tight mb-3">
          About DocuSense
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Semantic Search Engine for Academic Literature
        </p>
      </div>

      {/* What is DocuSense */}
      <div className="bg-white border border-gray-200 rounded-3xl p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-4">What is DocuSense?</h2>
        <p className="text-gray-600 leading-relaxed">
          DocuSense is an AI-powered semantic search platform designed to help
          researchers, students, and academics find relevant research papers
          quickly and accurately. Instead of relying on keyword matching,
          DocuSense uses transformer-based embeddings and vector search to
          understand the meaning behind your query.
        </p>
      </div>

      {/* Problem & Solution */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-3xl p-8">
          <h3 className="font-semibold text-lg mb-3">The Problem</h3>
          <p className="text-gray-600">
            Traditional search engines often fail to understand context and
            semantic meaning. Researchers waste hours trying to find relevant
            papers using basic keyword searches.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-3xl p-8">
          <h3 className="font-semibold text-lg mb-3">Our Solution</h3>
          <p className="text-gray-600">
            We built DocuSense using state-of-the-art transformer models and
            FAISS vector search to deliver highly relevant results based on
            semantic understanding, not just keywords.
          </p>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="bg-white border border-gray-200 rounded-3xl p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-6">Technology Stack</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-medium mb-2">Frontend</h4>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>• React 19 + TypeScript</li>
              <li>• Vite</li>
              <li>• Tailwind CSS</li>
              <li>• Recharts</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Backend</h4>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>• FastAPI (Python)</li>
              <li>• FAISS Vector Search</li>
              <li>• Sentence Transformers</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Data & AI</h4>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>• arXiv Dataset (Kaggle)</li>
              <li>• Transformer Embeddings</li>
              <li>• Semantic Search Pipeline</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="bg-white border border-gray-200 rounded-3xl p-8">
        <h2 className="text-2xl font-semibold mb-6">Our Team</h2>
        <p className="text-gray-600 mb-6">
          This project was developed as part of the Pijak x IBM SkillsBuild
          Capstone Program (Team ID: PJK-GM070).
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {team.map((member, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 border border-gray-100 rounded-2xl"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold text-lg">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </span>
              </div>
              <div>
                <div className="font-medium">{member.name}</div>
                <div className="text-sm text-gray-500">{member.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-12 text-sm text-gray-500">
        © 2026 DocuSense. Built with ❤️ for researchers worldwide.
      </div>
    </div>
  );
}
