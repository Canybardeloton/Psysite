import React, { useState } from 'react';
import {
  Brain,
  Clock,
  FileText,
  Settings,
  ChevronDown,
  ChevronUp,
  Mail,
  Github,
  Twitter,
  Linkedin
} from 'lucide-react';

function App() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs = [
	{
	  question: "Comment fonctionne l'outil ?",
	  answer: "L'outil analyse vos prises de notes et la cotation des tests pour vous proposer une première version structurée de votre bilan. Vous pouvez ensuite l'ajuster à votre convenance."
	},
	{
	  question: "L'outil respecte-t-il la confidentialité des données ?",
	  answer: "La confidentialité est notre priorité. Toutes les données sont hébergées dans le respect de la RGPD auprès d'hébergeurs certifiés HDS."
	},
	{
	  question: "L'outil est-il réservé aux neuropsychologues ?",
	  answer: "Pour le moment, oui. Il est conçu spécifiquement pour répondre aux besoins des bilans neuropsychologiques."
	},
	{
	  question: "L'IA va-t-elle remplacer le neuropsychologue ?",
	  answer: "Non, elle est un assistant qui vous aide à structurer et enrichir votre bilan, mais l'expertise humaine reste indispensable."
	}
  ];

  const benefits = [
	{
	  icon: <Clock className="w-6 h-6 text-blue-600" />,
	  title: "Une temps de rédaction divisé par 2",
	  description: "Rédaction accélérée des bilans, de l'anamnèse à l'analyse de la cotation. Du temps mieux employé pour vos patients."
	},
	{
	  icon: <FileText className="w-6 h-6 text-blue-600" />,
	  title: "Un assistant intelligent pour enrichir vos bilans",
	  description: "Des propositions d'analyses et de recommandations pour élargir votre champ de réflexion"
	},
	{
	  icon: <Settings className="w-6 h-6 text-blue-600" />,
	  title: "Un outil personnalisable selon vos besoins",
	  description: "Adaptable selon vos spécialités et vos habitudes de rédaction"
	}
  ];

  return (
	<div className="min-h-screen bg-gray-50">
	  {/* Header */}
	  <header className="bg-white shadow-sm fixed w-full z-10">
		<div className="container mx-auto px-4 py-4">
		  <div className="flex items-center justify-between">
			<div className="flex items-center space-x-2">
			  <Brain className="w-8 h-8 text-blue-600" />
			  <span className="text-xl font-semibold text-gray-800">NIELS</span>
			</div>
			<nav className="hidden md:flex space-x-6">
			  <a href="#" className="text-gray-600 hover:text-blue-600">Accueil</a>
			  <a href="#about" className="text-gray-600 hover:text-blue-600">À propos</a>
			  <a href="#faq" className="text-gray-600 hover:text-blue-600">FAQ</a>
			  <a href="#contribute" className="text-gray-600 hover:text-blue-600">Comment contribuer ?</a>
			  <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
			</nav>
			<a href="https://forms.gle/p1WJc6SER8yBk32g8" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
			  Participer à l'étude
			</a>
		  </div>
		</div>
	  </header>

	  {/* Hero Section */}
	  <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
		<div className="container mx-auto px-4">
		  <div className="flex flex-col md:flex-row items-center justify-between">
			<div className="md:w-1/2 mb-10 md:mb-0">
			  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
				Niels est l'assistant rédactionnel des neuropsychologues. Son but, vous aider à vous recentrer sur votre cœur de métier : le bien-être de vos patients.
			  </h1>
			  <p className="text-xl text-gray-600 mb-8 max-w-xl">
				Reprenez la main sur votre temps. En quelques clics, votre première séance se transforme en anamnèse, vos notes brutes en une analyse approfondie et un bilan clair pour vos patients. Vous n'avez plus qu'à ajuster et valider.
			  </p>
			  <a
				href="https://forms.gle/p1WJc6SER8yBk32g8"
				target="_blank"
				rel="noopener noreferrer"
				className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg hover:bg-blue-700 transition-colors">
				Participer à l'étude
			  </a>
			</div>
			<div className="md:w-1/2">
			  <img
				src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
				alt="Illustration du projet"
				className="rounded-lg shadow-xl"
			  />
			</div>
		  </div>
		</div>
	  </section>

	  {/* Benefits Section */}
	  <section className="py-20 bg-white" id="about">
		<div className="container mx-auto px-4">
		  <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
			Comment Niels va vous faciliter la vie ?
		  </h2>
		  <div className="grid md:grid-cols-3 gap-8">
			{benefits.map((benefit, index) => (
			  <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
				<div className="mb-4">{benefit.icon}</div>
				<h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
				<p className="text-gray-600">{benefit.description}</p>
			  </div>
			))}
		  </div>
		</div>
	  </section>

	  {/* FAQ Section */}
	  <section className="py-20 bg-gray-50" id="faq">
		<div className="container mx-auto px-4">
		  <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
			Questions fréquentes
		  </h2>
		  <div className="max-w-3xl mx-auto">
			{faqs.map((faq, index) => (
			  <div key={index} className="mb-4">
				<button
				  className="w-full p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow flex justify-between items-center"
				  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
				>
				  <span className="font-semibold text-left">{faq.question}</span>
				  {openFaqIndex === index ? <ChevronUp /> : <ChevronDown />}
				</button>
				{openFaqIndex === index && (
				  <div className="p-4 bg-white border-t">
					<p className="text-gray-600">{faq.answer}</p>
				  </div>
				)}
			  </div>
			))}
		  </div>
		</div>
	  </section>

	  {/* Contribute Section */}
	  <section className="py-20 bg-white" id="contribute">
		<div className="container mx-auto px-4">
		  <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
			Comment contribuer ?
		  </h2>
		  <div className="max-w-4xl mx-auto">
			<div className="bg-blue-50 p-8 rounded-lg">
			  <h3 className="text-2xl font-semibold mb-6">Nous avons besoin de votre expertise !</h3>
			  <div className="space-y-6">
				<div>
				  <h4 className="text-xl font-semibold mb-2">Comment participer ?</h4>
				  <ul className="list-disc list-inside space-y-2 text-gray-600">
					<li>Répondre à un court questionnaire</li>
					<li>Nous envoyer des exemples anonymisés de comptes rendus</li>
					<li>Échanger avec nous lors de sessions de tests utilisateurs</li>
				  </ul>
				</div>
				<div>
				  <h4 className="text-xl font-semibold mb-2">Pourquoi contribuer ?</h4>
				  <ul className="list-disc list-inside space-y-2 text-gray-600">
					<li>Accès anticipé à l'outil</li>
					<li>Possibilité d'influencer son développement selon vos besoins</li>
					<li>Construire ensemble un outil qui répond vraiment aux attentes du terrain</li>
				  </ul>
				</div>
			  </div>
			</div>
		  </div>
		</div>
	  </section>

	  {/* Contact Section */}
	  <section className="py-20 bg-gray-50" id="contact">
		<div className="container mx-auto px-4">
		  <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
			Contactez-nous
		  </h2>
		  <div className="max-w-2xl mx-auto">
			<form className="bg-white p-8 rounded-lg shadow-md">
			  <div className="mb-6">
				<label htmlFor="name" className="block text-gray-700 mb-2">Nom</label>
				<input
				  type="text"
				  id="name"
				  className="w-full p-2 border rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
				/>
			  </div>
			  <div className="mb-6">
				<label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
				<input
				  type="email"
				  id="email"
				  className="w-full p-2 border rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
				/>
			  </div>
			  <div className="mb-6">
				<label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
				<textarea
				  id="message"
				  rows={4}
				  className="w-full p-2 border rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
				></textarea>
			  </div>
			  <button
				type="submit"
				className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
			  >
				Envoyer
			  </button>
			</form>
		  </div>
		</div>
	  </section>

	{/* Footer */}
	<footer className="bg-gray-900 text-white py-12">
			<div className="container mx-auto px-4">
			<div className="flex justify-between items-center">
				<div className="flex items-center space-x-4">
				<Brain className="w-8 h-8 text-blue-600" />
				<span className="text-xl font-semibold">Niels</span>
				</div>
				<div className="flex space-x-4">
				<a href="#" className="text-gray-400 hover:text-white">
					<Mail className="w-6 h-6" />
				</a>
				<a href="#" className="text-gray-400 hover:text-white">
					<Github className="w-6 h-6" />
				</a>
				<a href="#" className="text-gray-400 hover:text-white">
					<Twitter className="w-6 h-6" />
				</a>
				<a href="#" className="text-gray-400 hover:text-white">
					<Linkedin className="w-6 h-6" />
				</a>
				</div>
			</div>
			</div>
		</footer>
		</div>
	);
	}

export default App;