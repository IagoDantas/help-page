import { useState } from 'react';

export default function Sidebar() {
  const [activeModule, setActiveModule] = useState(1);

  const modules = [
    {
      id: 1,
      title: 'Module 1',
      lessons: [
        { title: 'What is a Workspace?', duration: '1:18', free: true, active: true },
        { title: 'Workspace Settings', duration: '1:46', free: true },
        { title: 'User Settings', duration: '1:07', free: true },
        { title: 'How to Get Support', duration: '1:09', free: true },
        { title: 'How to Create API Key', duration: '1:50', free: true },
        { title: 'How to Join the Referral Program', duration: '2:04', free: true },
        { title: 'My Contents Overview', duration: '1:05', free: true },
        { title: 'Mini App Overview', duration: '4:57', free: true },
      ]
    },
    {
      id: 2,
      title: 'Module 2',
      lessons: [
        { title: 'Manage Your Business Stores Details', duration: '1:28', free: true },
        { title: 'How to Find the App Store and Install Mini App', duration: '1:06', free: true },
        { title: 'Integration Overview', duration: '2:41', free: true },
        { title: 'Phone Number Overview', duration: '0:57', free: true },
      ]
    },
    {
      id: 3,
      title: 'Module 3',
      lessons: [
        { title: 'Connect to Your Zapier Account', duration: '0:47', free: true },
        { title: 'How to Connect Make', duration: '0:56', free: true },
        { title: 'How to Connect Pabbly account', duration: '0:33', free: true },
        { title: 'How to Connect VideoSDK', duration: '1:12', free: true },
      ]
    },
    {
      id: 4,
      title: 'Module 4',
      lessons: [
        { title: 'Analysing the Performance of your Chatbot', duration: '1:13', free: true },
        { title: 'Subflow Type', duration: '1:53', free: true },
        { title: 'How to Create Folder to Structure Your Flow', duration: '2:21', free: true },
      ]
    }
  ];

  return (
    <aside className="w-80 bg-white border-r border-gray-200 overflow-y-auto h-screen sticky top-16">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <a href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            ← Back
          </a>
          <a href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            All Training
          </a>
        </div>

        <div className="space-y-2">
          {modules.map((module) => (
            <div key={module.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setActiveModule(activeModule === module.id ? null : module.id)}
                className="w-full px-4 py-3 text-left font-semibold text-gray-900 bg-gray-50 hover:bg-gray-100 transition"
              >
                {module.title}
              </button>
              {activeModule === module.id && (
                <div className="divide-y divide-gray-100">
                  {module.lessons.map((lesson, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className={`block px-4 py-3 hover:bg-blue-50 transition ${lesson.active ? 'bg-blue-50 border-l-4 border-blue-600' : ''
                        }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className={`text-sm font-medium ${lesson.active ? 'text-blue-600' : 'text-gray-900'
                            }`}>
                            {lesson.title}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs text-gray-500">{lesson.duration}</span>
                            {lesson.free && (
                              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
                                Free
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}