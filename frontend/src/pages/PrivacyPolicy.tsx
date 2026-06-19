export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-semibold mb-8">Privacy Policy</h1>

      <div className="prose prose-gray max-w-none">
        <p>Last updated: June 2026</p>

        <h2 className="mt-8">1. Information We Collect</h2>
        <p>
          DocuSense collects minimal information necessary to provide our
          semantic search service. We do not store personal search queries or
          require user accounts for basic usage.
        </p>

        <h2 className="mt-8">2. How We Use Information</h2>
        <p>
          We use collected data solely to improve search relevance, maintain
          system performance, and ensure platform security.
        </p>

        <h2 className="mt-8">3. Data Sharing</h2>
        <p>
          We do not sell or share your data with third parties. Academic papers
          indexed are from public sources (arXiv).
        </p>

        <h2 className="mt-8">4. Contact Us</h2>
        <p>
          If you have questions about this policy, please reach out through our{" "}
          <a href="/contact" className="text-blue-600 hover:underline">
            Contact page
          </a>
          .
        </p>
      </div>
    </div>
  );
}
