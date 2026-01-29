'use client';

/**
 * Contact Vision Section
 * "Donnons vie à votre vision"
 * Layout: Large Contact Form (Left) + Contact Details/Availability (Right)
 */

export function ContactVision() {
  return (
    <section id="contact" className="section-padding py-20 bg-black text-white border-t border-white/5">
      <div className="container-section max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Donnons vie à votre vision</h2>
          <p className="text-secondary/60 max-w-2xl mx-auto">
            Prêt à transformer votre présence en ligne ? Parlons de votre projet et voyons comment nous pouvons collaborer pour atteindre vos objectifs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT: FORM (2 Cols width) */}
          <div className="lg:col-span-2 p-8 rounded-2xl bg-[#0f0f10] border border-white/5">
            <div className="flex items-center gap-3 mb-8">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
              <h3 className="text-xl font-bold">Démarrez votre projet</h3>
            </div>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary">Votre nom *</label>
                  <input type="text" placeholder="Veuillez saisir votre nom complet" className="w-full p-3 rounded-lg bg-black/50 border border-white/10 focus:border-accent/50 focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-white/20" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary">Adresse courriel *</label>
                  <input type="email" placeholder="votre@email.com" className="w-full p-3 rounded-lg bg-black/50 border border-white/10 focus:border-accent/50 focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-white/20" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary">Type de projet</label>
                <select className="w-full p-3 rounded-lg bg-black/50 border border-white/10 focus:border-accent/50 focus:ring-1 focus:ring-accent outline-none transition-all text-secondary">
                  <option>Sélectionnez le type de votre projet</option>
                  <option>Site Web Vitrine</option>
                  <option>Application Web / SaaS</option>
                  <option>E-commerce</option>
                  <option>Blockchain / Web3</option>
                  <option>Autre</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary">Détails du projet *</label>
                <textarea rows={4} placeholder="Parlez-moi des objectifs de votre projet, de son calendrier..." className="w-full p-3 rounded-lg bg-black/50 border border-white/10 focus:border-accent/50 focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-white/20" />
              </div>



              <button className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold text-lg shadow-lg shadow-red-500/20 hover:shadow-red-500/40 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group">
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
                Envoyer un message et obtenez un devis gratuit
              </button>
            </form>
          </div>

          {/* RIGHT: INFO PANELS */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6">Entrer en contact</h3>
            
            <InfoCard 
              icon={<svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>}
              title="Emplacement"
              content="Disponible dans le monde entier"
              sub="Disponible pour le télétravail"
            />
            
            <InfoCard 
              icon={<svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>}
              title="E-mail"
              content="alijuvance@gmail.com"
              sub="Réponse sous 24 heures"
            />

            <InfoCard 
              icon={<svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>}
              title="WhatsApp"
              content="+261 38 17 171 08"
              sub="Messagerie et appels rapides"
            />

            <InfoCard 
              icon={<svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>}
              title="Disponibilité"
              content="Assistance 24/7"
              sub="Horaires flexibles pour l&apos;international"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, content, sub }: any) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0f0f10] border border-white/5 hover:border-white/10 transition-colors">
      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <h5 className="font-bold text-sm text-secondary mb-1">{title}</h5>
        <p className="font-bold text-white text-base mb-1">{content}</p>
        <p className="text-xs text-secondary/50">{sub}</p>
      </div>
    </div>
  )
}
