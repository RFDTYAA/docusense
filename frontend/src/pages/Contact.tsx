export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-semibold mb-4">Contact Us</h1>
      <p className="text-gray-600 mb-10">
        Have questions, feedback, or partnership inquiries? We'd love to hear
        from you.
      </p>

      <div className="bg-white border border-gray-200 rounded-3xl p-8">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1.5">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">Message</label>
            <textarea
              rows={6}
              className="w-full border border-gray-300 rounded-2xl px-4 py-3"
              placeholder="How can we help you?"
            ></textarea>
          </div>
          <button
            type="button"
            onClick={() => alert("Thank you! Your message has been received.")}
            className="w-full bg-gray-900 hover:bg-black text-white py-3.5 rounded-2xl font-medium transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
