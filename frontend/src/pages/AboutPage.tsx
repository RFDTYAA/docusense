export default function AboutPage() {
  const teamMembers = [
    {
      name: "Nero Caesar Suprobo",
      role: "Project Manager & QA",
      image: "src/assets/team/nero.jpg",
    },
    {
      name: "Muhammad Misbahul Muflihin",
      role: "Machine Learning Engineer",
      image: "src/assets/team/misbahul.jpg",
    },
    {
      name: "Muhammad Rafi Aditya",
      role: "Full-Stack Engineer",
      image: "src/assets/team/rafi.jpg",
    },
    {
      name: "Jauhan Ahmad",
      role: "Data Engineer",
      image: "src/assets/team/jauhan.jpg",
    },
    {
      name: "Raffa Arvel Nafi` Nadindra",
      role: "Cloud & Database Engineer",
      image: "src/assets/team/raffa.jpg",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-semibold tracking-tight mb-4">
          About DocuSense
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          An intelligent semantic search engine built to help researchers
          discover relevant academic papers faster and more accurately.
        </p>
      </div>

      {/* What is DocuSense? */}
      <div className="mb-20">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-10">
            <h2 className="text-3xl font-semibold mb-4 text-center">
              What is DocuSense?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed text-center">
              DocuSense is an AI-powered semantic search platform designed
              specifically for academic and research literature. We leverage
              state-of-the-art embedding models and vector search technology to
              understand the meaning behind your queries, not just keywords.
            </p>
          </div>
        </div>
      </div>

      {/* The Problem & Our Solution */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        {/* The Problem */}
        <div className="bg-white border border-gray-200 rounded-3xl p-8">
          <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
            <span className="text-2xl">⚠️</span>
          </div>
          <h3 className="text-2xl font-semibold mb-4">The Problem</h3>
          <p className="text-gray-600 leading-relaxed">
            Traditional keyword-based search often fails to capture the true
            intent behind complex research queries. Researchers waste hours
            sifting through irrelevant papers because existing tools cannot
            understand semantic meaning and context.
          </p>
        </div>

        {/* Our Solution */}
        <div className="bg-white border border-gray-200 rounded-3xl p-8">
          <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
            <span className="text-2xl">💡</span>
          </div>
          <h3 className="text-2xl font-semibold mb-4">Our Solution</h3>
          <p className="text-gray-600 leading-relaxed">
            We built DocuSense using advanced semantic embeddings (BGE), FAISS
            vector search, and cross-encoder reranking. This combination allows
            us to understand the meaning of papers and return highly relevant
            results even when queries are vague or conceptual.
          </p>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="mb-20">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Technology Stack
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* BGE Base v1.5 */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-5">
              <span className="text-3xl">🧠</span>
            </div>
            <h4 className="text-xl font-semibold mb-3">BGE Base v1.5</h4>
            <p className="text-gray-600 leading-relaxed">
              The primary embedding model we use to represent text.
            </p>
          </div>

          {/* FAISS */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-cyan-100 rounded-2xl flex items-center justify-center mb-5">
              <span className="text-3xl">🗄️</span>
            </div>
            <h4 className="text-xl font-semibold mb-3">FAISS</h4>
            <p className="text-gray-600 leading-relaxed">
              Our vector database that makes searching through millions of
              papers incredibly fast.
            </p>
          </div>

          {/* Cross Encoder */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mb-5">
              <span className="text-3xl">🔍</span>
            </div>
            <h4 className="text-xl font-semibold mb-3">Cross Encoder</h4>
            <p className="text-gray-600 leading-relaxed">
              A secondary model that double-checks the results to make sure the
              best matches are at the top.
            </p>
          </div>

          {/* Python */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center mb-5">
              <span className="text-3xl">🐍</span>
            </div>
            <h4 className="text-xl font-semibold mb-3">Python</h4>
            <p className="text-gray-600 leading-relaxed">
              The language we use to glue our backend services and data
              pipelines together.
            </p>
          </div>

          {/* Continuous Learning */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-5">
              <span className="text-3xl">🔄</span>
            </div>
            <h4 className="text-xl font-semibold mb-3">Continuous Learning</h4>
            <p className="text-gray-600 leading-relaxed">
              We regularly fine-tune our models on academic datasets to make the
              search results better.
            </p>
          </div>
        </div>
      </div>

      {/* Our Team - 3 + 2 staggered */}
      <div>
        <h2 className="text-3xl font-semibold text-center mb-12">Our Team</h2>

        <div className="max-w-5xl mx-auto">
          {/* Baris 1 - 3 orang */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10 mb-10">
            {teamMembers.slice(0, 3).map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-xl ring-1 ring-gray-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-lg">{member.name}</h4>
                <p className="text-gray-500 text-sm mt-1">{member.role}</p>
              </div>
            ))}
          </div>

          {/* Baris 2 - 2 orang (selang-seling) */}
          <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-16">
            {teamMembers.slice(3, 5).map((member, index) => (
              <div key={index} className="text-center w-full md:w-72">
                <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-xl ring-1 ring-gray-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-lg">{member.name}</h4>
                <p className="text-gray-500 text-sm mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
