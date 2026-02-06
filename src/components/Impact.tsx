import React from 'react'

interface ImpactStat {
  number: string
  label: string
  description: string
}

interface ProjectType {
  title: string
  description: string
  impact: string
  color: string
  projects: string
}

const Impact: React.FC = () => {
  const impactStats: ImpactStat[] = [
    {
      number: "2.5M+",
      label: "Hectares Monitored",
      description: "Real-time satellite monitoring across all land assets"
    },
    {
      number: "500+",
      label: "Enterprise Clients",
      description: "Large landowners and forestry companies"
    },
    {
      number: "99.8%",
      label: "Measurement Accuracy",
      description: "AI-powered carbon stock calculations"
    },
    {
      number: "150+",
      label: "Projects Verified",
      description: "Carbon credit projects successfully developed"
    }
  ]

  const projectTypes: ProjectType[] = [
    {
      title: "Forest Management",
      description: "Advanced monitoring and measurement for large forest estates and timber companies",
      impact: "Monitors 1.2M hectares",
      color: "from-green-500 to-emerald-600",
      projects: "85 active clients"
    },
    {
      title: "Agricultural Carbon",
      description: "Soil carbon measurement and regenerative agriculture monitoring for large farms",
      impact: "Tracks 800K hectares",
      color: "from-blue-500 to-cyan-600",
      projects: "120 active clients"
    },
    {
      title: "Carbon Credit Development",
      description: "End-to-end project development from assessment to verification and trading",
      impact: "150+ projects verified",
      color: "from-emerald-500 to-green-600",
      projects: "45 developers"
    },
    {
      title: "Corporate ESG",
      description: "Carbon accounting and reporting solutions for Net Zero commitments",
      impact: "Serves 200+ corporations",
      color: "from-cyan-500 to-blue-600",
      projects: "200+ enterprises"
    }
  ]

  return (
    <section className="section-padding bg-stone-50">
      <div className="container-80">
        {/* Impact Stats */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-emerald-50 text-emerald-700 rounded-full text-sm font-semibold mb-8 border border-emerald-200">
            <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 animate-pulse"></div>
            Platform Performance
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-6">
            Proven{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
              Carbon Measurement
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Our enterprise platform delivers accurate, verifiable carbon measurements for large-scale land management. 
            Trusted by leading landowners, forestry companies, and carbon credit developers worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {impactStats.map((stat, index) => (
            <div key={index} className="text-center h-full group">
              <div className="bg-white rounded-2xl p-8 border border-stone-200 h-full flex flex-col transition-all duration-300 group-hover:shadow-xl group-hover:border-emerald-200 group-hover:-translate-y-1">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent mb-3 flex-shrink-0">
                  {stat.number}
                </div>
                <div className="text-xl font-bold text-stone-900 mb-3 flex-shrink-0">
                  {stat.label}
                </div>
                <div className="text-stone-600 leading-relaxed flex-grow">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Types */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 mb-4 sm:mb-6">
              Enterprise Solutions
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-stone-600 max-w-3xl mx-auto px-4">
              Comprehensive carbon measurement and monitoring solutions tailored for large-scale 
              land management, forestry operations, and carbon credit development.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {projectTypes.map((project, index) => (
              <div key={index} className="group relative">
                <div className="bg-stone-50 rounded-xl sm:rounded-2xl p-8 sm:p-10 border border-stone-200 h-full">
                  <h4 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4 sm:mb-6">
                    {project.title}
                  </h4>
                  <p className="text-base sm:text-lg text-stone-600 mb-6 sm:mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="text-emerald-600 font-bold text-base sm:text-lg">
                      {project.impact}
                    </div>
                    <div className="text-blue-600 font-semibold text-xs sm:text-sm">
                      {project.projects}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Success Stories */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 mb-12 sm:mb-16 lg:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 mb-4 sm:mb-6">
              Client Success Stories
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-stone-600 max-w-3xl mx-auto px-4">
              See how leading landowners and organizations are maximizing their carbon asset value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            <div className="bg-stone-50 rounded-xl sm:rounded-2xl p-8 sm:p-10">
              <h4 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4 sm:mb-6">Timber Company Success</h4>
              <p className="text-base sm:text-lg text-stone-600 mb-4 sm:mb-6 leading-relaxed">
                Major forestry company increased carbon asset value by 40% through our satellite monitoring 
                and AI-powered carbon stock calculations across 250,000 hectares.
              </p>
              <div className="text-emerald-600 font-semibold text-base sm:text-lg">North America • 40% ROI</div>
            </div>
            
            <div className="bg-stone-50 rounded-xl sm:rounded-2xl p-8 sm:p-10">
              <h4 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4 sm:mb-6">Corporate ESG Achievement</h4>
              <p className="text-base sm:text-lg text-stone-600 mb-4 sm:mb-6 leading-relaxed">
                Fortune 500 company achieved Net Zero goals 3 years ahead of schedule using our carbon 
                accounting platform and verified offset portfolio management.
              </p>
              <div className="text-emerald-600 font-semibold text-base sm:text-lg">Global • Net Zero 2027</div>
            </div>
            
            <div className="bg-stone-50 rounded-xl sm:rounded-2xl p-8 sm:p-10 sm:col-span-2 lg:col-span-1">
              <h4 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4 sm:mb-6">Carbon Credit Developer</h4>
              <p className="text-base sm:text-lg text-stone-600 mb-4 sm:mb-6 leading-relaxed">
                Leading carbon credit developer streamlined project verification process by 60% using our 
                automated measurement and reporting tools, reducing time-to-market significantly.
              </p>
              <div className="text-emerald-600 font-semibold text-base sm:text-lg">Global • 60% Faster</div>
            </div>
          </div>
        </div>

        {/* Final Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              Ready to Maximize Your Carbon Assets?
            </h3>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto px-4">
              Join leading landowners, forestry companies, and carbon credit developers who trust our 
              enterprise platform for accurate measurement, verification, and monetization of their carbon assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <button className="bg-stone-50 hover:bg-stone-50 text-emerald-600 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl text-base sm:text-lg transition-colors">
                Start Measuring
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Impact

