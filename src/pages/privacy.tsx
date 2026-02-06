import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const ImprintPage: React.FC = () => {
  return (
    <Layout>
      <section className="section-padding bg-stone-50 min-h-screen pt-24 sm:pt-32">
        <div className="container-80 max-w-4xl mx-auto">
          {/* Back button */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-stone-600 hover:text-[#A8C95F] transition-colors mb-8 group"
          >
            <svg 
              className="w-5 h-5 transition-transform group-hover:-translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="font-medium">Back to Home</span>
          </Link>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-stone-900 mb-6 sm:mb-8">
            Privacy Policy / Datenschutzerklärung
          </h1>
          
          <p className="text-lg sm:text-xl text-stone-500 mb-12 sm:mb-16">
            Below you can find our privacy policy in German and English.<br />
            Nachfolgend finden Sie unsere Datenschutzerklärung in deutscher und englischer Sprache.
          </p>

          <div className="space-y-12 sm:space-y-16">
            {/* German Section */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 mb-6 sm:mb-8">
                Datenschutzerklärung
              </h2>
              
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-stone-900 mb-4">1. Datenschutz auf einen Blick</h3>
                    <p className="text-lg text-stone-700 leading-relaxed mb-4">
                      Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen entnehmen Sie der nachfolgenden Datenschutzerklärung.
                    </p>
                    <div className="bg-stone-50 rounded-lg p-4">
                      <h4 className="font-bold text-stone-900 mb-2">Verantwortlicher:</h4>
                      <div className="text-stone-700 space-y-1">
                        <p><strong>Nature Credits UG</strong></p>
                        <p>Rehmstr. 10</p>
                        <p>82211 Herrsching, Deutschland</p>
                        <p>E-Mail: <a href="mailto:simon.meitz@naturecredits.earth" className="text-[#A8C95F] hover:text-[#98B94F] transition-colors">simon.meitz@naturecredits.earth</a></p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-stone-900 mb-4">2. Datenerfassung auf dieser Website</h3>
                    <div className="text-lg text-stone-700 leading-relaxed space-y-4">
                      <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen (z. B. durch Eingabe in ein Kontaktformular oder per E-Mail). Andere Daten werden automatisch beim Besuch der Website erfasst (z. B. IP-Adresse, Browsertyp, Betriebssystem, Uhrzeit des Seitenaufrufs).</p>
                      <p>Wir nutzen diese Daten, um die Website bereitzustellen, technische Probleme zu erkennen und die Systemsicherheit zu gewährleisten. Eine Auswertung zu Werbezwecken findet nicht statt.</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-stone-900 mb-4">3. Hosting</h3>
                    <div className="text-lg text-stone-700 leading-relaxed space-y-4">
                      <p>Unsere Website wird extern gehostet durch:</p>
                      <div className="bg-stone-50 rounded-lg p-4">
                        <div className="space-y-1">
                          <p><strong>united-domains GmbH</strong></p>
                          <p>Gautinger Straße 10</p>
                          <p>82319 Starnberg, Deutschland</p>
                        </div>
                      </div>
                      <p>Das Hosting erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO, da wir ein berechtigtes Interesse an einer sicheren, schnellen und effizienten Bereitstellung unserer Website haben.</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-stone-900 mb-4">4. Allgemeine Hinweise</h3>
                    <p className="text-lg text-stone-700 leading-relaxed">
                      Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften. Bitte beachten Sie, dass Datenübertragungen im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen können. Ein vollständiger Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-stone-900 mb-4">5. Speicherdauer</h3>
                    <p className="text-lg text-stone-700 leading-relaxed">
                      Ihre personenbezogenen Daten verbleiben bei uns, bis der Zweck der Verarbeitung entfällt oder Sie Ihr Recht auf Löschung geltend machen, sofern keine gesetzlichen Aufbewahrungsfristen bestehen.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-stone-900 mb-4">6. Ihre Rechte</h3>
                    <div className="text-lg text-stone-700 leading-relaxed space-y-4">
                      <p>Sie haben das Recht auf:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
                        <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
                        <li>Löschung („Recht auf Vergessenwerden", Art. 17 DSGVO)</li>
                        <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                        <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
                        <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                      </ul>
                      <p>Zur Ausübung Ihrer Rechte genügt eine E-Mail an: <a href="mailto:simon.meitz@naturecredits.earth" className="text-[#A8C95F] hover:text-[#98B94F] transition-colors">simon.meitz@naturecredits.earth</a></p>
                      <p>Sie haben zudem das Recht, sich bei der zuständigen Datenschutzaufsichtsbehörde zu beschweren.</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-stone-900 mb-4">7. Änderungen dieser Datenschutzerklärung</h3>
                    <p className="text-lg text-stone-700 leading-relaxed">
                      Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf zu ändern, um sie an rechtliche oder technische Entwicklungen anzupassen. Der jeweils aktuelle Stand ist auf dieser Website veröffentlicht.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* English Section */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 mb-6 sm:mb-8">
                Privacy Policy
              </h2>
              
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-stone-900 mb-4">1. Overview</h3>
                    <p className="text-lg text-stone-700 leading-relaxed mb-4">
                      The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data means any information that can identify you personally. Detailed information is provided in the full Privacy Policy below.
                    </p>
                    <div className="bg-stone-50 rounded-lg p-4">
                      <h4 className="font-bold text-stone-900 mb-2">Controller:</h4>
                      <div className="text-stone-700 space-y-1">
                        <p><strong>Nature Credits UG</strong></p>
                        <p>Rehmstr. 10</p>
                        <p>82211 Herrsching, Germany</p>
                        <p>Email: <a href="mailto:simon.meitz@naturecredits.earth" className="text-[#A8C95F] hover:text-[#98B94F] transition-colors">simon.meitz@naturecredits.earth</a></p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-stone-900 mb-4">2. Data Collection on This Website</h3>
                    <div className="text-lg text-stone-700 leading-relaxed space-y-4">
                      <p>Some data is collected when you provide it to us (for example, via a contact form or by email). Other data is automatically collected by our IT systems when you visit the website (for example, your IP address, browser type, operating system, and time of access).</p>
                      <p>We use this data to ensure the proper functioning, security, and optimization of the website. We do not use the data for advertising or profiling.</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-stone-900 mb-4">3. Hosting</h3>
                    <div className="text-lg text-stone-700 leading-relaxed space-y-4">
                      <p>Our website is hosted externally by:</p>
                      <div className="bg-stone-50 rounded-lg p-4">
                        <div className="space-y-1">
                          <p><strong>united-domains GmbH</strong></p>
                          <p>Gautinger Straße 10</p>
                          <p>82319 Starnberg, Germany</p>
                        </div>
                      </div>
                      <p>Processing is based on Art. 6(1)(f) GDPR, as we have a legitimate interest in providing a secure and efficient online service.</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-stone-900 mb-4">4. General Information</h3>
                    <p className="text-lg text-stone-700 leading-relaxed">
                      We treat your personal data as confidential and in accordance with the applicable data protection laws. Please note that data transmission over the Internet (e.g., via email) may have security vulnerabilities. Complete protection against third-party access is not possible.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-stone-900 mb-4">5. Data Retention</h3>
                    <p className="text-lg text-stone-700 leading-relaxed">
                      Your personal data will be retained only as long as necessary to achieve the purpose for which it was collected or until you request deletion, provided no statutory retention obligations exist.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-stone-900 mb-4">6. Your Rights</h3>
                    <div className="text-lg text-stone-700 leading-relaxed space-y-4">
                      <p>You have the right to:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Access your stored data (Art. 15 GDPR)</li>
                        <li>Rectify inaccurate data (Art. 16 GDPR)</li>
                        <li>Request deletion of your data (Art. 17 GDPR)</li>
                        <li>Restrict processing (Art. 18 GDPR)</li>
                        <li>Object to processing (Art. 21 GDPR)</li>
                        <li>Data portability (Art. 20 GDPR)</li>
                      </ul>
                      <p>To exercise your rights, please email: <a href="mailto:simon.meitz@naturecredits.earth" className="text-[#A8C95F] hover:text-[#98B94F] transition-colors">simon.meitz@naturecredits.earth</a></p>
                      <p>You also have the right to lodge a complaint with the competent supervisory authority.</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-stone-900 mb-4">7. Changes to This Policy</h3>
                    <p className="text-lg text-stone-700 leading-relaxed">
                      We reserve the right to modify this Privacy Policy to comply with changes in law or technology. The most recent version is always available on this website.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  )
}

export default ImprintPage
