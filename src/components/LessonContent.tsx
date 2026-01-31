export default function LessonContent() {
  return (
    <main className="flex-1 overflow-y-auto">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <a href="#" className="hover:text-blue-600">Conexão</a>
          <span>/</span>
          <span className="text-gray-900 font-medium">O que é uma área de trabalho?</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          O que é uma área de trabalho?
        </h1>

        <div className="flex items-center gap-2 mb-8">
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
            Gratuito
          </span>
        </div>

        {/* Instructor Info */}
        <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
            U
          </div>
          <div>
            <p className="font-semibold text-gray-900">Talkbi</p>
            <p className="text-sm text-gray-600">Instrutor</p>
          </div>
        </div>

        {/* Video Player Placeholder */}
        <div className="mb-8 bg-gray-900 rounded-lg overflow-hidden aspect-video flex items-center justify-center">
          <svg
            className="w-24 h-24 text-white opacity-50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            In this guide, we explore <strong>what a workspace is</strong> and <strong>how to create one</strong> effectively.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            A workspace functions as a <strong>virtual office</strong>, centralizing all essential tools and resources needed for your business operations.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            It facilitates seamless collaboration among team members across various channels and services, making it an indispensable component for modern digital workflows.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">What is a Workspace?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A <strong>workspace</strong> is a <strong>digital environment</strong> that consolidates multiple business tools and platforms, including:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
            <li><strong>Chatbot channels</strong></li>
            <li><strong>E-commerce settings</strong></li>
            <li><strong>Stripe account access</strong></li>
            <li><strong>Mini app creation</strong></li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-8">
            This virtual office enables teams to <strong>collaborate efficiently</strong>, manage multiple channels, and streamline operations within a unified interface.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Create a Workspace</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Creating a workspace is straightforward. Follow these simple steps:
          </p>
          <ol className="list-decimal list-inside space-y-3 mb-6 text-gray-700">
            <li>
              <strong>Navigate to the Top Left Corner</strong><br />
              <span className="ml-6">Locate the dropdown menu in the upper-left section of the interface.</span>
            </li>
            <li>
              <strong>Select "Create New Workspace"</strong><br />
              <span className="ml-6">Click the dropdown and choose the last option, <strong>"Create New Workspace"</strong>.</span>
            </li>
            <li>
              <strong>Access the Workspace Overview</strong><br />
              <span className="ml-6">After selection, you'll be directed to the <strong>workspace overview page</strong>.</span>
            </li>
            <li>
              <strong>View Existing Workspaces</strong><br />
              <span className="ml-6">At the bottom, you'll see a list of all your current workspaces.</span>
            </li>
            <li>
              <strong>Create a New Workspace</strong>
              <ul className="list-disc list-inside ml-6 mt-2">
                <li><strong>Enter a Name</strong> for your new workspace in the designated field.</li>
                <li><strong>Click "Create"</strong> to finalize.</li>
              </ul>
            </li>
            <li>
              <strong>Confirmation</strong><br />
              <span className="ml-6">Your new workspace will now appear in the <strong>current workspaces list</strong>, ready for configuration.</span>
            </li>
          </ol>

          {/* Table */}
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Step</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Action</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">1</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Open dropdown</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Located at top-left corner</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">2</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Select "Create"</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Last option in dropdown</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">3</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Name your workspace</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Enter a descriptive name</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">4</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Click "Create"</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Finalize creation</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Next Steps</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            In the upcoming tutorial, you'll learn <strong>how to manage workspace settings</strong>, including permissions, integrations, and customization options, to optimize your virtual office environment.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Creating a workspace is a <strong>fundamental step</strong> toward organizing your digital business environment. It centralizes tools, enhances team collaboration, and simplifies management. By following the outlined steps, you can quickly set up a workspace tailored to your needs, paving the way for more efficient operations and smoother workflows.
          </p>

          {/* Quote */}
          <blockquote className="border-l-4 border-blue-600 pl-6 py-4 my-8 bg-blue-50 rounded-r-lg">
            <p className="text-gray-700 italic text-lg">
              Embrace the power of a well-structured workspace to elevate your business productivity and collaboration.
            </p>
          </blockquote>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <a
            href="#"
            className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Training
          </a>
          <a
            href="#"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium flex items-center gap-2"
          >
            Next Lesson
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}