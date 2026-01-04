
import { 
  ShoppingCart, PhoneMissed, Video, Headset, Globe, Star, ShieldAlert, FileText, Home, Truck, Stethoscope, Scale,
  Users, UserX, Share2, Factory, Building, Wallet, Zap, RefreshCcw, PackageCheck, ShoppingBag, Briefcase, Gavel, 
  Landmark, PhoneForwarded, CalendarCheck, Database, MessageSquare, Mic, UserCheck, UtensilsCrossed, GraduationCap,
  ClipboardList, HardHat, HeartHandshake, PhoneIncoming, Linkedin, Mail, MessageCircle, Send, Ruler, Gift, BoxSelect,
  Timer, Repeat, Megaphone, Wrench, Droplets, FileSpreadsheet, HeartPulse, Siren, TruckIcon, Container, Anchor, PhoneCall,
  Receipt, FileSearch, HandCoins, BadgeEuro, LineChart, UserPlus, FileCheck, BellRing, Hammer, Sun, Paintbrush, Car, WrenchIcon,
  Key, Shield, Hotel, PartyPopper, ScrollText, FileClock, Network, ArrowLeftRight, Target, Search, UserMinus, Dumbbell, Laptop, 
  BookOpen, Boxes, Snowflake, FileSignature, ClipboardCheck, Thermometer, AlertTriangle, CalendarClock, HelpCircle, Languages, 
  MapPin, Share, MonitorSmartphone, PieChart, Lightbulb, Plug, School, BookMarked, Award, Baby, CreditCard, Apple, Gauge, 
  Umbrella, Map, Settings, Rocket, Ticket, LifeBuoy, AlarmClock, Cpu, Layout, BarChart, Binary, ShieldCheck, MailWarning, Workflow, Microscope,
  Trophy, Gem, Landmark as Bank, Cloud, Activity, Coffee, ClipboardType, UserCog, HeartPulse as HealthIcon, 
  Gavel as LawIcon, Lightbulb as IdeaIcon, Zap as EnergyIcon, Dumbbell as GymIcon, GraduationCap as SchoolIcon,
  Briefcase as OfficeIcon, SearchCode, Construction, Activity as Pulse, Building2, HardHat as ConstructionIcon,
  Factory as IndustryIcon, BrainCircuit, Landmark as GovIcon, Zap as PowerIcon, Heart as LifeIcon, Utensils, Hotel as HotelIcon,
  Bus, GraduationCap as EducationIcon, Newspaper, Tractor, Heart as WellnessIcon, Camera, Tv, Microscope as ResearchIcon,
  Trees, CloudRain, Wind, Landmark as FinanceIcon, Coins, Landmark as InsuranceIcon, TrendingUp, Handshake, Waves, Info,
  TrendingUp as TrendingUpIcon, Handshake as HandshakeIcon, Waves as WavesIcon, Lock, Heart, Link, MousePointer2
} from 'lucide-react';

import { UseCaseCategory, UseCase } from './types';

export const ICON_MAP: Record<string, any> = {
  ShoppingCart, PhoneMissed, Video, Headset, Globe, Star, ShieldAlert, FileText, Home, Truck, Stethoscope, Scale,
  Users, UserX, Share2, Factory, Building, Wallet, Zap, RefreshCcw, PackageCheck, ShoppingBag, Briefcase, Gavel, 
  Landmark, PhoneForwarded, CalendarCheck, Database, MessageSquare, Mic, UserCheck, UtensilsCrossed, GraduationCap,
  ClipboardList, HardHat, HeartHandshake, PhoneIncoming, Linkedin, Mail, MessageCircle, Send, Ruler, Gift, BoxSelect,
  Timer, Repeat, Megaphone, Wrench, Droplets, FileSpreadsheet, HeartPulse, Siren, TruckIcon, Container, Anchor, PhoneCall,
  Receipt, FileSearch, HandCoins, BadgeEuro, LineChart, UserPlus, FileCheck, BellRing, Hammer, Sun, Paintbrush, Car, WrenchIcon,
  Key, Shield, Hotel, PartyPopper, ScrollText, FileClock, Network, ArrowLeftRight, Target, Search, UserMinus, Dumbbell, Laptop, 
  BookOpen, Boxes, Snowflake, FileSignature, ClipboardCheck, Thermometer, AlertTriangle, CalendarClock, HelpCircle, Languages, 
  MapPin, Share, MonitorSmartphone, PieChart, Lightbulb, Plug, School, BookMarked, Award, Baby, CreditCard, Apple, Gauge, 
  Umbrella, Map, Settings, Rocket, Ticket, LifeBuoy, AlarmClock, Cpu, Layout, BarChart, Binary, ShieldCheck, MailWarning, Workflow, Microscope,
  Trophy, Gem, Bank, Cloud, Activity, Coffee, ClipboardType, UserCog, HealthIcon, LawIcon, IdeaIcon, EnergyIcon, GymIcon, SchoolIcon, OfficeIcon, SearchCode,
  Construction, Pulse, Building2, ConstructionIcon, IndustryIcon, BrainCircuit, GovIcon, PowerIcon, LifeIcon, Utensils, HotelIcon, Bus, EducationIcon, Newspaper,
  Tractor, WellnessIcon, Camera, Tv, ResearchIcon, Trees, CloudRain, Wind, FinanceIcon, Coins, InsuranceIcon, TrendingUp, Handshake, Waves, Info,
  TrendingUpIcon, HandshakeIcon, WavesIcon, Lock, Heart, Link, MousePointer2
};

export const CLIENT_LOGOS = ["Titanspear", "Enterprise", "B2B", "Automation", "Scale", "Growth"];

export const TECH_SPECS = [
  { label: 'Latenz (Voice)', value: '< 800ms' },
  { label: 'Erreichbarkeit', value: '24/7/365' },
  { label: 'Sprachen', value: '30+' },
  { label: 'Datenschutz', value: 'DSGVO+' },
  { label: 'Automatisierung', value: '95%' },
  { label: 'ROI (Jahr 1)', value: 'Ø 340%' }
];

const c = (
  id: string, 
  title: string, 
  pain: string, 
  dp: string, 
  sol: string, 
  ds: string, 
  icon: string, 
  prompt: string, 
  benefits: string[],
  highlight = false
): UseCase => ({
  id, title, pain, detailedPain: dp, solution: sol, detailedSolution: ds, iconName: icon, veoPrompt: prompt, benefits, highlight, simulationType: 'workflow'
});

export const USE_CASES_DATA: UseCaseCategory[] = [
  {
    id: 'trades',
    name: 'Handwerk & Bau',
    iconName: 'ConstructionIcon',
    cases: [
      c('t1', 'Dachdecker Notdienst', 'Bei Unwettern steigt das Anrufvolumen sprunghaft um 1000% an. Qualifizierte Notrufe gehen unter.', 'Inhaber und Gesellen befinden sich während dieser Peaks auf dem Dach und können physisch nicht abheben. Jede verpasste Anfrage ist ein verlorener Auftrag.', 'KI-Voice-Notdienst qualifiziert Anrufe, priorisiert schwere Schäden und bucht Einsätze live.', 'Die KI erkennt die Dringlichkeit (z.B. Wassereintritt vs. lose Ziegel), sendet dem Kunden einen SMS-Link für den Bild-Upload und prüft ERP-Kapazitäten.', 'Hammer', 'Roofer in storm, digital cyan lines', ['100% Erreichbarkeit', 'SMS-Bild-Upload', 'Automatischer ERP-Sync'], true),
      c('t2', 'SHK Wartungs-Management', 'Manuelle Terminvereinbarung für tausende Wartungsverträge bindet hunderte unproduktive Bürostunden.', 'Telefonate zur Terminabstimmung sind ineffizient, Kunden sind schwer erreichbar und die manuelle Planung führt oft zu logistischen Sackgassen.', 'KI-Agent telefoniert Wartungslisten empathisch ab und optimiert die Einsatzplanung.', 'Das System scannt fällige Termine, ruft Kunden zur Wunschzeit an und schlägt Slots vor, die geografisch perfekt in die Tourenplanung passen.', 'Droplets', 'HVAC technician hologram', ['85% Administrative Entlastung', '20% Wege-Effizienz', 'Proaktive Kundenbindung'], false),
      c('t3', 'Maler Sofort-Angebot', 'Lange Wartezeiten auf Angebote führen zu einer massiven Senkung der Abschlussquoten.', 'Standardanfragen blockieren den Meister. Kunden, die mehr als 48h auf eine Kalkulation warten, springen oft ab oder entscheiden sich für den schnellsten Wettbewerber.', 'KI führt technische Erstaufnahme durch und generiert PDF-Angebote in Echtzeit.', 'Die KI fragt Maße, Wandbeschaffenheit und Farbwünsche strukturiert ab und erstellt basierend auf hinterlegten Preiskalkulationen ein fertiges Angebot.', 'Paintbrush', 'Glowing paint droplets', ['Sofort-Angebot per Mail', 'Exakte Lead-Qualifizierung', 'Zeitersparnis Meister'], false),
      c('t4', 'Gerüstbau Logistik-Check', 'Fehlende Rückmeldungen von Baustellen führen zu teuren Leerfahrten und blockiertem Materialkapital.', 'LKWs fahren leer oder dringend benötigtes Material steht ungenutzt auf abgeschlossenen Baustellen, weil Abbautermine nicht proaktiv gemeldet werden.', 'Automatisierte KI-Calls fragen Baustellenfortschritte ab und alarmiert Disposition.', 'Die KI ruft täglich Poliere an, fragt Fortschritte ab und dokumentiert Materialfreigaben für die Disposition, um Leerfahrten zu eliminieren.', 'Construction', 'Digital scaffolding structure', ['0% Leerfahrten', 'Echtzeit-Transparenz', 'Material-Umschlag +15%'], false),
      c('t5', 'Elektro First-Level Support', 'Trivialfragen von Endkunden blockieren hochbezahlte Fachkräfte am Telefon.', 'Kunden rufen für Basiseinstellungen (Smart Home, Sicherungen) an. Fachkräfte werden bei der Montage unterbrochen, was Fehlerquote erhöht.', 'KI-Voice-Bot löst 60% der Standardfragen autonom durch Zugriff auf technisches Wissen.', 'Die KI fungiert als intelligenter Filter, kennt Handbücher und Projektfortschritte und leitet nur komplexe Störfälle an den Meister weiter.', 'Zap', 'Electric circuit boards', ['Produktivitätsschub Team', 'Sofort-Hilfe für Kunden', 'Lückenlose Dokumentation'], false)
    ]
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce & Retail',
    iconName: 'ShoppingCart',
    cases: [
      c('e1', 'High-Ticket Warenkorb-Rettung', 'Hohe Absprungraten bei Premium-Produkten (>1000€) führen zu massivem Werbebudget-Verlust.', 'Bei teuren Anschaffungen entstehen im letzten Moment Zweifel. Standard-Mails werden oft ignoriert und wirken zu unpersönlich.', 'Voice-KI kontaktiert Kunden 120 Sekunden nach Abbruch für eine persönliche Beratung.', 'Basierend auf dem Warenkorbinhalt bietet die KI spezifische Hilfe an, beantwortet Fragen zu Garantie/Versand und schließt den Kauf ab.', 'ShoppingCart', 'Golden cart in digital sea', ['+22% Umsatz-Recovery', 'Premium Service-Erlebnis', 'Sinkende CAC'], true),
      c('e2', 'Intelligente Retouren-Prävention', 'Hohe Retourenquoten durch Anwendungsfehler fressen Margen auf.', 'Kunden verstehen die Einrichtung nicht und schicken die Ware aus Frust zurück. Ein proaktiver Support fehlt oft in der kritischen ersten Stunde.', 'KI ruft nach Zustellung an und klärt Setup-Fragen proaktiv.', 'Sobald das Paket zugestellt ist, meldet sich die KI: "Haben Sie Fragen zur Einrichtung?". Sie sendet bei Bedarf Video-Tutorials per SMS.', 'RefreshCcw', 'Robot inspecting package', ['-40% Retourenquote', 'Steigerung Customer Lifetime Value', 'Bessere Bewertungen'], false),
      c('e3', 'Omnichannel VIP-Concierge', 'A-Kunden erwarten im Luxussegment eine Erreichbarkeit, die manuell kaum skalierbar ist.', 'Standard-Ticketsysteme enttäuschen VIP-Kunden. Markenloyalität sinkt rapide bei langsamen Reaktionen.', 'KI erkennt VIPs an der Rufnummer und bietet exklusives Personal Shopping via Voice.', 'Die KI kennt die Kaufhistorie und Stilvorlieben, reserviert Artikel in Boutiquen und managt Änderungen in flüssiger Konversation.', 'Gem', 'Luxury fashion digital icons', ['Maximale Kundenbindung', 'Höherer Average Order Value', 'Markendifferenzierung'], false),
      c('e4', 'Predictive Stock-Alerts', 'Kunden wandern zum Wettbewerb ab, wenn Wunschartikel nicht vorrätig sind.', 'E-Mails gehen im Spam unter. Der emotionale Kaufmoment ist oft längst vorbei, wenn der Kunde die Info erst Stunden später liest.', 'KI ruft Kunden proaktiv an, sobald Artikel lagernd sind und initiiert den Kauf.', 'Die KI kontaktiert Kunden direkt: "Dein Wunschartikel ist wieder da! Soll ich ihn direkt an deine hinterlegte Adresse senden?".', 'PackageCheck', 'Digital warehouse items', ['3x höhere Conversion vs. Mail', 'Emotionaler Direktvertrieb', 'Bestands-Optimierung'], false),
      c('e5', 'Automatisierter Review-Generator', 'Zu wenige Bewertungen senken das Vertrauen und bremsen das organische Wachstum.', 'Manuelle Bitten um Bewertung werden oft als störend empfunden oder vergessen. SMS wirken oft wie Spam.', 'KI führt nach Produkterhalt empathische Feedback-Calls durch.', 'Die KI klärt die Zufriedenheit und bittet bei positivem Feedback um ein Sterne-Rating, das automatisch übertragen wird.', 'Star', 'Glowing stars in binary code', ['Echter Trust-Aufbau', 'SEO-Boost durch User Content', 'Direktes Marktfeedback'], false)
    ]
  },
  {
    id: 'health',
    name: 'Gesundheitswesen',
    iconName: 'HealthIcon',
    cases: [
      c('h1', 'Praxis-Empfang Automatisierung', 'Dauerbesetzte Leitungen führen zu frustrierten Patienten und extrem gestresstem Personal.', 'MFAs verbringen 70% ihrer Zeit mit repetitiver Administration. Privatpatienten kommen nicht durch.', 'KI übernimmt die komplette Telefonzentrale inkl. Rezepten und Terminen 24/7.', 'Die KI versteht medizinische Fachbegriffe, führt eine strukturierte Triage durch und bucht direkt in PVS-Systeme ein.', 'Pulse', 'Medical reception hologram', ['Null verpasste Anrufe', 'Stressfreier Empfang', 'Echtzeit PVS-Sync'], true),
      c('h2', 'Digitale Patienten-Anamnese', 'Die manuelle Datenaufnahme vor Ort sprengt den Zeitrahmen.', 'Ärzte verbringen wertvolle Behandlungszeit mit der Abfrage von Basisdaten. Patienten fühlen sich durch Formularberge gestresst.', 'KI telefoniert Patienten vor dem Termin ab und erstellt ein Protokoll.', 'Die KI klärt Vorerkrankungen und aktuelle Symptome am Telefon. Die Daten fließen verschlüsselt direkt in die Patientenakte.', 'ClipboardType', 'Heartbeat to digital file', ['+15% Patientendurchlauf', 'Höhere Behandlungsqualität', 'Rechtssichere Doku'], false),
      c('h3', 'Zahnärztlicher Recall-Service', 'Verpasste Vorsorgetermine führen zu erheblichen Umsatzverlusten.', 'Patienten vergessen Termine ohne proaktive Erinnerung. Manuelles Nachtelefonieren ist für das Praxispersonal zu zeitintensiv.', 'KI telefoniert Recall-Listen autonom ab und bucht direkt neue Termine.', 'Die KI ruft empathisch an, erinnert an die Kontrolle und schlägt passende Slots vor. Die Bestätigungsquote ist 4x höher als bei SMS.', 'Star', 'Digital tooth with calendar', ['Umsatzsteigerung gesichert', 'Automatisierter Workflow', 'Bessere Präventionsquote'], false),
      c('h4', 'Pharmazeutisches Order-Management', 'Bestell-Anrufe blockieren die wichtige pharmazeutische Fachberatung.', 'PTAs müssen am Telefon Medikamentennamen buchstabieren lassen. Das verzögert die Beratung der Kunden in der Offizin.', 'KI nimmt Medikamenten-Bestellungen sicher auf und prüft die Verfügbarkeit.', 'Die KI versteht komplizierte Namen, fordert bei Bedarf Rezept-Fotos per SMS an und informiert über Abholung.', 'LifeIcon', 'Medicine pills data stream', ['Fokus auf Vor-Ort-Beratung', 'Fehlerfreie Datenaufnahme', 'Modernes Service-Image'], false),
      c('h5', 'Physio-Auslastungs Management', 'Kurzfristige Absagen führen zu unbezahlten Leerlaufzeiten für Therapeuten.', 'Termine fallen aus, Ersatzpatienten können manuell nicht schnell genug erreicht werden. Therapeuten sitzen ohne Einkommen da.', 'KI telefoniert Wartelisten bei Absagen sofort in Echtzeit ab.', 'Sobald ein Slot im Kalender frei wird, kontaktiert die KI passende Patienten der Warteliste, bis der Termin wieder belegt ist.', 'Activity', 'Muscle fiber digital scan', ['100% Auslastungs-Garantie', 'Sofort-Ersatz Management', 'Umsatzsicherung'], false)
    ]
  },
  {
    id: 'realestate',
    name: 'Immobilienwirtschaft',
    iconName: 'Building2',
    cases: [
      c('r1', '24/7 Portal-Lead Qualifizierung', 'Ungefilterte Anfragen von Portalen überfordern Maklerbüros.', 'Bei attraktiven Objekten kommen Anfragen im Minutentakt. Makler verbringen Stunden mit der Trennung von "Touristen" und echten Käufern.', 'KI ruft Leads innerhalb von 60 Sekunden an und prüft die Bonität.', 'Die KI klärt Finanzierungsbestätigungen und Suchprofile ab. Nur qualifizierte A-Interessenten erhalten Besichtigungstermine.', 'Building', 'Skyscraper with data lines', ['Fokus auf Top-Leads', 'Automatisches Management', 'Speed-to-Lead Rekorde'], true),
      c('r2', 'Hausverwaltung Notfall-Zentrale', 'Notfälle außerhalb der Geschäftszeiten verursachen Chaos.', 'Hausverwalter sind nachts nicht erreichbar. Mieter rufen oft teure, nicht autorisierte Handwerker an. Kostenexplosion ist die Folge.', 'KI managt Notrufe autonom und beauftragt autorisierte Partnerbetriebe.', 'KI nimmt Notruf an, validiert den Schaden (z.B. Rohrbruch vs. tropfender Hahn) und beauftragt den hinterlegten Notdienst.', 'Siren', 'Glowing water ripple on plan', ['Schadensminimierung', 'Haftungssicherheit', '24/7 Mieter-Service'], false),
      c('r3', 'Interaktive Exposé-Auskunft', 'Repetitive Fragen zu Objekten blockieren das Team.', 'Interessenten stellen immer die gleichen Fragen (Haustiere, Keller, Stellplatz). Das Telefon steht nie still für triviale Auskünfte.', 'KI beantwortet detaillierte Objektfragen autonom direkt am Telefon.', 'Die KI kennt jedes Detail der Immobilie aus dem Exposé und beantwortet Fragen flüssig, bevor sie einen Termin vereinbart.', 'Home', 'Digital house blueprint', ['Team-Entlastung 90%', 'Schnellere Vermarktung', 'Sofortige Info-Lieferung'], false),
      c('r4', 'Handwerker-Koordination', 'Manuelle Schlüsselübergaben und Terminkoordinationen sind logistisch extrem aufwendig.', 'Handwerker, Mieter und Verwalter müssen für Termine koordiniert werden. Lange Fahrwege für Schlüsselübergaben sind unwirtschaftlich.', 'KI koordiniert Termine zwischen allen Parteien vollautomatisch.', 'Die KI telefoniert alle Beteiligten ab und stellt sicher, dass zum Termin alle vor Ort sind – inkl. SMS-Erinnerung.', 'Key', 'Glowing digital key', ['Prozess-Sicherheit', 'Logistikkosten-Senkung', 'Lückenlose Dokumentation'], false),
      c('r5', 'Eigentümer-Reporting', 'Der Informationsfluss zu Eigentümern ist oft mühsam und zeitintensiv.', 'Eigentümer fordern regelmäßige Status-Updates zu Sanierungen oder Vermietungen. Diese Calls rauben Maklern Akquise-Zeit.', 'KI gibt personalisierte Status-Berichte via Voice an Eigentümer.', 'Eigentümer rufen eine dedizierte Hotline an und erhalten von der KI den aktuellen Stand basierend auf den CRM-Einträgen.', 'LineChart', 'Bar chart growing digital', ['Investoren-Vertrauen +', 'Mehr Fokus auf Akquise', 'Vollkommene Transparenz'], false)
    ]
  },
  {
    id: 'finance',
    name: 'Finanzen',
    iconName: 'FinanceIcon',
    cases: [
      c('f1', 'Baufinanzierungs-Check', 'Interessenten müssen Basisdaten mühsam in Terminen diktieren.', 'Die manuelle Datenaufnahme ist repetitiv und fehleranfällig. Berater verlieren Zeit für die eigentliche Strategie.', 'KI führt das Erstgespräch und erstellt ein fertiges Scoring-Dossier.', 'Die KI klärt Einkommen, Eigenkapital und Objektwert ab und liefert dem Berater eine fertige Analyse vor dem Termin.', 'Wallet', 'Digital coins and bills house', ['Hocheffiziente Beratung', 'Höhere Abschlussquoten', 'Sofort-Feedback Kunde'], true),
      c('f2', 'Betrugs-Prävention', 'Kunden werden bei verdächtigen Transaktionen oft nicht rechtzeitig erreicht.', 'Banken sperren Karten oft nur präventiv. Der Kunde steht an der Kasse und die Karte funktioniert nicht. Das sorgt für Frust.', 'KI ruft Kunden sofort an und validiert Transaktionen live.', 'Die KI kontaktiert Kunden in Sekunden: "Haben Sie gerade in London bezahlt?". Bei Bestätigung wird die Karte sofort entsperrt.', 'ShieldAlert', 'Shield with warning code', ['Sicherheit & Top-Service', 'Schadensprävention', 'Kundenbindung'], false),
      c('f3', 'Karten-Sperrung 24/7', 'Lange Warteschleifen bei Verlust der Kreditkarte führen zu Panik.', 'Kunden sind in Stresssituationen ungeduldig. Jede Minute Verzögerung erhöht das Risiko für Missbrauch.', 'KI nimmt Sperr-Aufträge sofort und ohne jede Wartezeit an.', 'Die KI validiert die Identität per Voice-Biometrie oder Abfrage und sperrt Karten in Echtzeit in den Kernsystemen.', 'CreditCard', 'Broken digital card', ['Maximale Sicherheit', 'Null Wartezeit Support', 'Panik-Prävention'], false),
      c('f4', 'Zins-Update Service', 'Kunden verpassen lukrative Anlage-Chancen, da Berater nicht jeden Kunden individuell erreichen.', 'Manuelle Info-Anrufe sind für das Massengeschäft zu teuer. Kunden fühlen sich oft nicht ausreichend betreut.', 'KI informiert Kunden proaktiv über neue Konditionen.', 'Basierend auf dem Kontostand bietet die KI passende Produkte an und vereinbart bei Interesse einen Termin mit dem Berater.', 'TrendingUpIcon', 'Financial graph growing', ['Automatischer Sales-Turbo', 'Skalierbare Beratung', 'Service-Vorteil'], false),
      c('f5', 'Compliance-Assistent', 'Kunden übersehen oft wichtige rechtliche Dokumente im Online-Banking.', 'Rechtliche Informationen werden oft nicht gelesen. Dies erhöht die Haftungsrisiken für Banken.', 'KI erinnert Kunden telefonisch an ungelesene Pflicht-Dokumente.', 'Die KI erklärt kurz den Inhalt (z.B. neue AGB) und bittet um Bestätigung via Sprachbefehl oder Web-Login-Link.', 'MailWarning', 'Digital envelope glowing red', ['100% Compliance Sicherheit', 'Minimierte Haftungsrisiken', 'Aktive Info-Pflicht'], false)
    ]
  },
  {
    id: 'legal',
    name: 'Rechtsberatung',
    iconName: 'LawIcon',
    cases: [
      c('l1', 'Kanzlei-Mandanten Intake', 'Sekretariate sind chronisch überlastet; jeder verpasste Call ist ein verlorenes Mandat.', 'Anwaltskanzleien verlieren Mandate bei Nicht-Erreichbarkeit. Panik-Anrufer in Rechtsnotfällen warten nicht.', 'KI führt strukturierte Erstgespräche und prüft Fristen sofort.', 'Die KI fragt Daten ab, erkennt das Rechtsgebiet und prüft Fristabläufe. Der Anwalt erhält ein fertiges Dossier zur Entscheidung.', 'Scale', 'Scales of justice fiber optic', ['Sicherung neuer Mandate', 'Strukturierte Aktenführung', 'Souveräner Kanzlei-Auftritt'], true),
      c('l2', 'Fristen-Erinnerer', 'Mandanten liefern benötigte Unterlagen oft zu spät, was Fristabläufe riskiert.', 'Anwälte müssen ständig hinterhertelefonieren. Diese Zeit fehlt für die eigentliche juristische Facharbeit.', 'KI erinnert Mandanten empathisch und verbindlich an Deadlines.', 'Die KI fordert fehlende Dokumente ein, erklärt die Konsequenzen und dokumentiert jeden Kontaktversuch rechtssicher.', 'FileClock', 'Clock with digital gavel', ['Haftungsvermeidung', 'Stressfreies Team', 'Absolute Pünktlichkeit'], false),
      c('l3', 'Termin-Koordination', 'Gerichtstermine erfordern eine mühsame Abstimmung zwischen vielen Parteien.', 'Manuelle Koordination zwischen Anwalt, Mandant und Zeugen ist ein logistischer Albtraum.', 'KI koordiniert Termine autonom zwischen allen Beteiligten.', 'Die KI telefoniert alle Parteien ab, findet den kleinsten gemeinsamen Nenner und versendet Bestätigungen.', 'CalendarCheck', 'Calendar with glowing check', ['Enorme Prozess-Effizienz', 'Zeitersparnis Partner', 'Fehlerfreie Planung'], false),
      c('l4', 'Gebühren-Auskunft', 'Standardfragen zu Gebühren blockieren Anwälte in ihrer wertvollen Beratungszeit.', 'Mandanten fragen oft: "Was kostet eine Erstberatung?". Diese repetitiven Infos rauben Zeit für die Honorararbeit.', 'KI beantwortet Standard-Fragen zu Gebühren autonom am Telefon.', 'Die KI kennt das RVG sowie kanzleieigene Sätze und informiert Mandanten vorab über Kostenstrukturen.', 'Gavel', 'Judge gavel digital pulse', ['Kostentransparenz', 'Enorme Team-Entlastung', 'Mandanten-Vorqualifizierung'], false),
      c('l5', 'Zeugen-Briefing', 'Zeugen erscheinen oft unvorbereitet, was den Erfolg vor Gericht gefährdet.', 'Verschobene Termine kosten Zeit. Unvorbereitete Zeugen können den Ausgang eines Falls negativ beeinflussen.', 'KI ruft Zeugen vor dem Termin an und klärt Basis-Informationen.', 'Die KI erinnert an Ort/Zeit, gibt allgemeine Hinweise zum Ablauf und reduziert die Nervosität.', 'UserCheck', 'Group of digital silhouettes', ['Höherer Prozess-Erfolg', 'Logistische Sicherheit', 'Maximale Professionalität'], false)
    ]
  },
  {
    id: 'hr',
    name: 'Personal & HR',
    iconName: 'Users',
    cases: [
      c('p1', 'Screening-Calls', 'Hunderte Bewerbungen auf Fachkraft-Positionen überfordern Personalabteilungen.', 'Bewerber müssen in umkämpften Märkten sofort kontaktiert werden. Wer zuerst anruft, gewinnt das Talent.', 'KI führt Erst-Interviews innerhalb von 5 Minuten nach Bewerbungseingang.', 'Die KI prüft Soft-Skills, Gehaltsvorstellungen und Verfügbarkeiten und bucht bei Eignung direkt das Probearbeiten.', 'UserPlus', 'Digital human silhouettes', ['Hiring-Speed +400%', 'Keine verlorenen Talente', 'Objektive Bewerber-Auswahl'], true),
      c('p2', 'Onboarding-Assistent', 'Neue Mitarbeiter haben viele Fragen, während das Team im Tagesgeschäft ausgelastet ist.', 'Standardfragen zu IT oder Abläufen rauben Kollegen die Zeit. Ein mangelhaftes Onboarding senkt die Mitarbeiterbindung.', 'KI begleitet neue Mitarbeiter per Voice-Coaching durch die erste Woche.', 'Der Mitarbeiter kann jederzeit fragen: "Wie richte ich das VPN ein?". Die KI antwortet basierend auf dem Firmen-Wiki.', 'UserCheck', 'Glowing person in network', ['Schnellere Produktivität', 'Enorme Team-Entlastung', 'Modernes Mitarbeiter-Erlebnis'], false),
      c('p3', 'Stimmungs-Check', 'Fluktuationsraten steigen oft, weil Probleme zu spät erkannt werden.', 'Mitarbeitergespräche finden zu selten statt. Unzufriedenheit brodelt oft unbemerkt unter der Oberfläche.', 'KI führt kurze, anonymisierte Feedback-Calls im gesamten Team durch.', 'Die KI klärt die Stimmung und liefert dem Management aggregierte Trends ohne Namensnennung.', 'HeartPulse', 'Digital heart monitor', ['Kündigungs-Prävention', 'Echte Insights für Führung', 'Kultur-Boost'], false),
      c('p4', 'Schicht-Börse', 'Kurzfristige Personalausfälle führen zu operativem Chaos.', 'Stationsleiter müssen oft nachts dutzende Kollegen abtelefonieren. Das ist eine enorme psychische Belastung.', 'KI telefoniert den Springer-Pool bei Ausfällen in Sekunden autonom ab.', 'Sobald eine Krankmeldung eingeht, ruft die KI verfügbare Kräfte an, bis die Schicht wieder voll besetzt ist.', 'Workflow', 'Connecting nodes glowing', ['Sichere Schichtplanung', 'Extrem entlastetes Personal', 'Höhere Ausfallsicherheit'], false),
      c('p5', 'Exit-Interviews', 'Ehrliches Feedback bei Kündigungen fehlt oft.', 'Wichtige Insights über strukturelle Probleme gehen verloren. Unternehmen können ohne Daten ihre Fluktuation nicht senken.', 'KI führt neutrale und strukturierte Austrittsgespräche am Telefon.', 'Die KI sammelt wertvolle Daten über Kündigungsgründe zur systematischen Verbesserung der HR-Strategie.', 'UserMinus', 'Person silhouette fading', ['Senkung der Fluktuation', 'Ehrliche Datengrundlage', 'Prozess-Optimierung'], false)
    ]
  },
  {
    id: 'industry',
    name: 'Industrie',
    iconName: 'IndustryIcon',
    cases: [
      c('i1', 'Ersatzteil-Order', 'Manuelle Erfassung von Teilenummern am Telefon ist extrem fehleranfällig.', 'Techniker diktieren lange Nummern unter Zeitdruck. Fehler führen zu Falschlieferungen und Maschinenstillständen.', 'KI erkennt Seriennummern via Sprache fehlerfrei und bucht direkt in SAP.', 'Die KI erkennt technische Fachbegriffe präzise und bestätigt die Verfügbarkeit live im Gespräch.', 'Settings', 'Gears and mechanical parts', ['Null Fehlerquote Order', 'Weniger Maschinenstillstand', 'Automatischer Innendienst'], true),
      c('i2', 'Wartungs-Diktat', 'Wartungsberichte werden oft spät oder lückenhaft erstellt.', 'Das Tippen an Maschinen ist mühsam. Wichtige Details werden vergessen, was die Dokumentation gefährdet.', 'Techniker diktiert den Bericht live während der Arbeit an die KI.', 'Die KI erstellt ein strukturiertes Protokoll aus dem Diktat und bucht Materialverbräuche direkt auf den Auftrag.', 'Wrench', 'Technician with speech bubbles', ['Präzise Dokumentation', 'Beschleunigte Faktura', 'Höhere Techniker-Laufzeit'], false),
      c('i3', 'Störungs-Melder', 'Kommunikation bei Linienstopps ist oft zu langsam.', 'Mitarbeiter müssen zum PC laufen für eine Meldung. In dieser Zeit läuft fehlerhafter Ausschuss weiter vom Band.', 'KI-Zentrale nimmt Sprachmeldungen an und alarmiert die Instandhaltung.', 'Ein Sprachbefehl genügt: "Störung Linie 4". Die KI informiert die Technik per Push und stoppt bei Bedarf die Anlage.', 'AlertTriangle', 'Red warning signals on line', ['Ausschuss-Reduktion', 'Minimale Reaktionszeit', 'Intuitivste Bedienung'], false),
      c('i4', 'Safety-Compliance', 'Sicherheitsunterweisungen werden im Stress oft vernachlässigt.', 'Das Haftungsrisiko bei Arbeitsunfällen steigt massiv ohne lückenlose Prüfung.', 'KI prüft den Sicherheitsstatus per Voice-Check-in vor Schichtbeginn.', 'Die KI ruft Mitarbeiter an und klärt PSA-Status sowie Gefahrenquellen strukturiert ab.', 'ShieldCheck', 'Digital safety helmet', ['Aktive Unfallvermeidung', '100% Rechtssicherheit', 'Audit-Ready Doku'], false),
      c('i5', 'Logistik-Pforte', 'LKWs stauen sich an der Werkseinfahrt durch manuelle Anmeldeprozesse.', 'Manuelle Anmeldungen von Fahrern dauern zu lange. Lieferzeitfenster werden verpasst, was die Produktionskette stört.', 'KI übernimmt den kompletten LKW-Check-in per Sprach-Terminal.', 'Die KI prüft Lieferpapiere via OCR, validiert Lade-IDs und gibt Schranken-Codes via Voice durch.', 'TruckIcon', 'Truck driving on data highway', ['Schnellerer Hof-Durchlauf', 'Enorme Personal-Ersparnis', 'Keine Staus an Pforten'], false)
    ]
  },
  {
    id: 'insurance',
    name: 'Versicherungen',
    iconName: 'InsuranceIcon',
    cases: [
      c('v1', 'Schaden-Hotline', 'Bei Massenschäden sind menschliche Hotlines sofort überlastet.', 'Kunden warten oft Stunden für eine einfache Schadensmeldung. Die Frustration senkt die Markenbindung.', 'KI nimmt hunderte Schadenmeldungen gleichzeitig ohne Wartezeit an.', 'Die KI nimmt den Schaden strukturiert auf, fordert Fotos via SMS an und leitet Kleinschäden sofort zur Regulierung ein.', 'ShieldCheck', 'Car with digital shield', ['Unbegrenzt Skalierbar', 'Sekunden-Regulierung', 'Höchste Kundenzufriedenheit'], true),
      c('v2', 'Bedarfs-Check', 'Kunden wissen oft nicht, ob sie ausreichend versichert sind.', 'Das Massengeschäft kann von Maklern nicht individuell betreut werden. Deckungslücken bleiben unentdeckt.', 'KI analysiert den Bedarf telefonisch und bietet passende Upgrades an.', 'Die KI klärt neue Lebensumstände ab und passt die Deckungssummen automatisiert und rechtssicher an.', 'FileSearch', 'Magnifying glass on document', ['Massiver Umsatz-Uplift', 'Haftungsvermeidung Makler', 'Top Service-Vorteil'], false),
      c('v3', 'Zahlungserinnerung', 'Standardmäßiges Mahnwesen führt oft zur unnötigen Kündigung.', 'Harte Mahnungen wirken bedrohlich. Kunden kündigen eher, als den Dialog zu suchen.', 'KI ruft bei Zahlungsverzug empathisch an und bietet Lösungen.', 'Die KI klärt Gründe für den Verzug und vereinbart Ratenzahlungen direkt im Gespräch.', 'BadgeEuro', 'Euro sign digital pulse', ['Geringere Stornoquoten', 'Bessere Liquidität', 'Starke Kundenbindung'], false),
      c('v4', 'Datenbereinigung', 'Umzüge werden oft nicht gemeldet; teure Post-Rückläufer belasten das Budget.', 'Rückläufer kosten Porto und Aufwand. Kunden sind bei wichtigen rechtlichen Infos nicht erreichbar.', 'KI klärt neue Adressdaten bei Unstimmigkeiten proaktiv ab.', 'Erkennt das System einen Post-Rückläufer, ruft die KI den Kunden an und fragt nach der aktuellen Adresse.', 'MapPin', 'Location pin digital ripple', ['100% Aktuelle Daten', 'Porto-Ersparnis massiv', 'Garantierte Zustellung'], false),
      c('v5', 'Angebots-Nachfass', 'Erstellte Angebote werden oft nicht konsequent nachverfolgt.', 'Makler vergessen oft das Nachfassen. Hoher Marketing-Spend für Leads ohne konsequenten Abschluss.', 'KI fasst Angebote empathisch nach und klärt offene Fragen.', 'Die KI fragt nach dem Status der Entscheidung und bucht bei fachlichen Fragen einen Termin mit dem Experten.', 'ArrowLeftRight', 'Connecting arrows digital', ['Conversion-Rate +30%', 'Entlastung der Makler', 'Maximierter Marketing ROI'], false)
    ]
  },
  {
    id: 'it_security',
    name: 'IT & Security',
    iconName: 'Shield',
    cases: [
      c('s1', 'Deepfake Phishing-Test', 'Mitarbeiter sind das größte Sicherheitsrisiko.', 'Social Engineering über das Telefon ist hocheffektiv. Passwörter werden am Telefon erschlichen.', 'KI führt kontrollierte, realistische Phishing-Tests durch.', 'Die KI ruft Mitarbeiter an, simuliert einen IT-Admin und schult bei Fehlverhalten sofort live im Gespräch.', 'ShieldAlert', 'Shield protecting brain', ['Maximale IT-Resilienz', 'Gelebte Sicherheitskultur', 'Compliance-Sicherung'], true),
      c('s2', 'Passwort-Reset Voice', 'Der IT-Support ist zu 30% mit trivialen Passwort-Resets blockiert.', 'Teure Administratoren erledigen Aufgaben, die automatisiert werden könnten. Mitarbeiter können während der Wartezeit nicht arbeiten.', 'KI setzt Passwörter nach sicherem Ident-Check (Voice-ID) zurück.', 'Die KI validiert Nutzer an der Stimme und versendet neue Zugangsdaten sicher per SMS.', 'Key', 'Digital lock glowing', ['Support-Kosten -30%', 'Sofortige Hilfe 24/7', 'Admins fokussieren Core'], false),
      c('s3', 'Inzidenz Alarmiersystem', 'Kritische IT-Alarme werden nachts oft übersehen.', 'E-Mails werden im Schlaf nicht gehört. Server-Ausfälle dauern oft Stunden bis zur Entdeckung.', 'KI ruft die IT-Bereitschaft bei kritischen Alarmen sofort an.', 'Die KI lässt das Telefon so lange klingeln, bis jemand abhebt und gibt technische Details durch.', 'BellRing', 'Ringing digital bell', ['Minimale Downtime', 'Sicherer Bereitschaftsdienst', 'Reaktionszeit < 60s'], false),
      c('s4', 'Status-Hotline', 'Bei IT-Großstörungen bricht die Telefonanlage durch tausende Anrufe zusammen.', 'Alle Betroffenen rufen gleichzeitig an. Der Support kann keine Lösung erarbeiten, da er nur mit Telefonaten beschäftigt ist.', 'KI gibt Infos zur Störung und voraussichtlichen Entstörzeit.', 'Die KI erkennt den Standort des Nutzers und sagt: "Dein Office ist betroffen, wir arbeiten bereits an der Lösung".', 'Info', 'Digital info circle', ['Ruhe im Unternehmen', 'Support-Fokus auf Lösung', 'Höchste Transparenz'], false),
      c('s5', 'Multi-Faktor Voice', 'Hardware-Tokens sind teuer und werden oft vergessen.', 'Mitarbeiter im Homeoffice benötigen sicheren Zugang. SMS-Codes gelten zunehmend als unsicher.', 'KI dient als zweiter Faktor via verschlüsseltem Voice-Anruf.', 'Der Nutzer erhält einen Anruf und muss eine PIN oder Phrase einsprechen – biometrisch gesichert.', 'Lock', 'Digital padlock pulsing', ['Investitions-Ersparnis', 'Höchste Sicherheitsstufe', 'Einfachste Nutzer-UX'], false)
    ]
  },
  {
    id: 'hospitality',
    name: 'Gastro & Hotel',
    iconName: 'Utensils',
    cases: [
      c('g1', 'Reservierungs-Zentrale', 'Anrufe während der Stoßzeit können nicht entgegengenommen werden.', 'Gäste rufen die Konkurrenz an, wenn nicht sofort abgehoben wird. Das Team ist im Service gestresst.', 'KI managt alle Tischreservierungen und beantwortet Fragen zur Karte.', 'Die KI kennt Live-Belegungen, Allergene und Parkmöglichkeiten und bucht direkt ein.', 'Utensils', 'Dinner plate with clock', ['Kein Tischverlust mehr', 'Enorme Team-Entlastung', 'Umsatzsteigerung'], true),
      c('g2', 'KI-Room-Service', 'Gästeanfragen in der Nacht überfordern die Minimalbesetzung.', 'Wünsche nach Handtüchern oder Drinks dauern oft zu lange. Gäste empfinden die Wartezeit als mangelhaft.', 'Digitaler KI-Butler am Zimmertelefon nimmt Wünsche sofort entgegen.', 'Gäste sprechen mit der KI. Wünsche werden direkt an das Housekeeping oder die Bar weitergeleitet.', 'HotelIcon', 'Luxury hotel digital butler', ['Zufriedenere Gäste', 'Personalkosten-Optimierung', 'Einfaches Upselling'], false),
      c('g3', 'Event-Briefing', 'Catering-Anfragen erfordern zeitaufwendiges Nachtelefonieren.', 'Web-Anfragen für Hochzeiten sind oft unvollständig. Das manuelle Nachfassen dauert oft Tage.', 'KI ruft Leads sofort an und erstellt ein fertiges Event-Briefing.', 'Innerhalb von 5 Minuten klärt die KI Personenanzahl, Budget und Technik-Bedarf.', 'PartyPopper', 'Digital banquet table', ['Sales-Speed +500%', 'Präzisere Angebote', 'Automatischer Lead-Filter'], false),
      c('g4', 'Check-out Feedback', 'Wertvolles Feedback geht oft verloren.', 'Negative Erfahrungen werden erst auf Google geteilt. Das Hotel erfährt es zu spät, um intern gegenzusteuern.', 'KI ruft Gäste nach dem Check-out an und klärt die Zufriedenheit.', 'Bei Kritik leitet die KI sofort an den Manager weiter. Bei Lob bittet sie um ein Google-Review.', 'Star', 'Glowing five stars', ['Aktives Reputation-Mgmt', 'Direktes Feedback-Kanal', 'Google-Rating Boost'], false),
      c('g5', 'Frühstücks-Leitsystem', 'Überfüllte Frühstücksräume führen zu Gast-Frustration.', 'Gäste kommen gleichzeitig zum Buffet. Das Team ist überlastet, die Qualität des Service leidet.', 'KI informiert Gäste proaktiv über die besten Besuchszeiten.', 'Gäste können die KI fragen: "Wann ist es im Restaurant ruhig?". Die KI analysiert Daten.', 'Coffee', 'Steaming digital cup', ['Intelligente Gast-Steuerung', 'Bessere Personal-Planung', 'Relaxte Atmosphäre'], false)
    ]
  },
  {
    id: 'logistics',
    name: 'Logistik',
    iconName: 'Truck',
    cases: [
      c('l1', 'Lieferstatus Voice', 'Kunden rufen ständig an: "Wo ist mein Paket?".', '80% der Supportanfragen sind reine Status-Abfragen. Die manuelle Beantwortung kostet tausende Euro.', 'KI gibt präzise Liefer-Infos basierend auf Echtzeit-GPS Daten.', 'Die KI informiert: "Dein Fahrer ist noch 3 Stationen entfernt, Ankunft um 12:15 Uhr".', 'TruckIcon', 'Truck on data highway', ['-70% Support-Kosten', 'Herausragende User-UX', 'Echtzeit Tracking Voice'], true),
      c('l2', 'Dispatcher Voice', 'Disponenten verbringen zu viel Zeit mit der Durchgabe trivialer Anweisungen.', 'Adressänderungen müssen einzeln durchgegeben werden. Hohe Fehlerquote und Ablenkung des Fahrers.', 'KI übermittelt neue Aufträge sprachgesteuert direkt an den Fahrer.', 'Der Fahrer bestätigt den Erhalt per Voice-Befehl – absolut freihändig und sicher.', 'PhoneIncoming', 'Phone icon with arrow', ['Maximale Fahrer-Sicherheit', 'Hocheffiziente Disposition', 'Digitale Doku-Pflicht'], false),
      c('l3', 'Rampen-Management', 'LKWs stauen sich vor dem Lager durch fehlende Koordination.', 'Ankunftszeiten stimmen oft nicht mit den gebuchten Slots übereinstimmen. Teure Standgebühren.', 'KI koordiniert Ankunftszeiten live und autonom mit den Fahrern.', 'Die KI ruft Fahrer bei Verzögerungen an und schlägt neue Zeitslots vor.', 'Container', 'Shipping containers digital', ['Optimale Rampenauslastung', 'Keine Standgebühren mehr', 'Stressfreies Lagerpersonal'], false),
      c('l4', 'Zoll-Assistent', 'Fehlende Papiere an den Grenzen führen zu kostspieligem Stillstand.', 'Fahrer verstehen oft die komplexen Dokumenten-Anforderungen nicht. LKWs hängen fest.', 'KI erklärt Zoll-Dokumente mehrsprachig und hilft beim Ausfüllen.', 'Die KI führt Fahrer durch die benötigten Unterlagen und versendet fehlende Infos per SMS.', 'Globe', 'Digital globe connectivity', ['Grenzüberschreitung Pro', 'Minimierter Stillstand', 'Globaler Sprachservice'], false),
      c('l5', 'Schadens-Diktat', 'LKW-Schäden werden oft zu spät oder unklar gemeldet.', 'Fuhrparkmanager erfahren oft erst Wochen später von Dellen. Ohne sofortige Doku reguliert die Versicherung nicht.', 'Fahrer diktieren Schäden sofort via Sprache an die KI-Zentrale.', 'Die KI fordert Fotos an, erstellt den Bericht und informiert die Werkstatt.', 'Camera', 'Digital camera icon', ['Sichere Versicherungs-Doku', 'Top gepflegter Fuhrpark', 'Minimale Ausfallzeit'], false)
    ]
  },
  {
    id: 'automotive',
    name: 'Automotive',
    iconName: 'Car',
    cases: [
      c('a1', 'Reifenwechsel-Booking', 'Kunden hängen während der Saison in ewigen Warteschleifen.', 'Das Peak-Volumen überfordert jede Telefonzentrale. Genervte Kunden rufen beim Wettbewerb an.', 'KI managt die komplette Werkstattplanung 24/7 vollautomatisch.', 'Die KI erkennt Kunden am Kennzeichen, prüft freie Hebebühnen und bucht Termine.', 'WrenchIcon', 'Modern car workshop', ['Keine verpassten Calls', 'Optimale Werkstatt-Auslastung', 'Enorme Büro-Entlastung'], true),
      c('a2', 'Leasing-Rückgabe', 'Hohe Nachforderungen bei der Rückgabe führen oft zu Streit.', 'Kunden sind unvorbereitet auf Schäden am Fahrzeug. Der Prozess wird als intransparent empfunden.', 'KI führt Kunden vorab durch einen strukturierten Rückgabe-Check.', 'Die KI fragt Kilometerstände und Schäden ab, erklärt den Prozess und bucht Gutachter.', 'ClipboardCheck', 'Car silhouette with check', ['Transparentes Leasing', 'Minimierte Reklamationen', 'Top Service-Vorteil'], false),
      c('a3', 'Probefahrt-Turbo', 'Interessenten auf Portalen werden oft zu spät zurückgerufen.', 'Das Kaufinteresse kühlt nach 30 Minuten massiv ab. Verkäufer schaffen den Rückruf im Tagesgeschäft oft nicht.', 'KI ruft Leads in unter 60s an und vereinbart die Probefahrt.', 'Die KI qualifiziert das Interesse vorab und trägt den Termin direkt beim Verkäufer ein.', 'Target', 'Digital target bullseye', ['Sales-Uplift massiv', 'Beste Kundenerfahrung', 'Top Marketing-ROI'], false),
      c('a4', 'Pannen-Notruf', 'Standard-Pannennotrufe blockieren oft lebenswichtige Rettungssysteme.', 'Fragen zu Reifenpannen landen oft in der gleichen Leitung wie schwere Unfälle. Echte Notfälle müssen warten.', 'KI trennt technische Pannen von echten medizinischen Notfällen.', 'Die KI leitet technische Pannen an Service-Partner weiter, medizinische Fälle an die 112.', 'Siren', 'Blue emergency light', ['Echte Lebensrettung', 'Effiziente Hilfeleistung', 'Enorme Kosten-Ersparnis'], false),
      c('a5', 'Zubehör-Sales', 'Das Potenzial für Zusatzverkäufe (Winterreifen, Dachboxen) bleibt oft völlig ungenutzt.', 'Autohäuser schaffen es personell nicht, Kunden nach dem Kauf proaktiv zu kontaktieren.', 'KI informiert Kunden über perfekt passende Angebote nach dem Kauf.', 'Die KI kontaktiert Kunden: "Deine passenden Winterreifen sind jetzt im Angebot.".', 'BoxSelect', 'Car parts digital flow', ['Zusatzumsatz generiert', 'Hohe Kundenbindung', 'Individueller Service'], false)
    ]
  },
  {
    id: 'education',
    name: 'Bildung',
    iconName: 'EducationIcon',
    cases: [
      c('ed1', 'KI-Lern-Coach', 'Lehrer können in großen Klassen nicht auf individuelle Wissenslücken einge nach.', 'Schüler bleiben bei Problemen hängen und verlieren die Motivation. Förderung ist personell kaum leistbar.', 'KI agiert als geduldiger, fachlich versierter 24/7 Voice-Tutor.', 'Schüler führen Fachgespräche mit der KI. Die KI erkennt Lücken und erklärt Konzepte neu.', 'GraduationCap', 'Digital brain with cap', ['Maximale Lernförderung', 'Immer verfügbar 24/7', 'Massive Lehrer-Entlastung'], true),
      c('ed2', 'Sekretariats-Bot', 'Die morgendliche Flut an Krankmeldungen blockiert die Schulsekretariate.', 'Zwischen 7:30 und 8:30 Uhr gehen hunderte Anrufe ein. Sekretariate sind lahmgelegt.', 'KI nimmt alle Krankmeldungen an und dokumentiert diese digital.', 'Die KI erkennt Namen und Klasse fehlerfrei und informiert Lehrer via Push-Nachricht.', 'ClipboardList', 'Digital list with checks', ['Stressfreier Schulmorgen', 'Sichere Doku-Pflicht', 'Sofort-Info für Lehrer'], false),
      c('ed3', 'Sprachpartner', 'Schülern fehlt im Alltag die nötige Praxis, um flüssig sprechen zu lernen.', 'Im Unterricht wird zu wenig gesprochen, da die Zeit fehlt. Die Hemmschwelle für Dialoge ist hoch.', 'KI ist der native Gesprächspartner für Fremdsprachen.', 'Schüler führen natürliche Dialoge mit der KI in der Zielsprache. Die KI korrigiert sanft.', 'Languages', 'Speech bubbles with flags', ['Flüssiges Sprechen lernen', 'Keine Angst vor Fehlern', 'Echte Sprachpraxis'], false),
      c('ed4', 'Kurs-Beratung', 'Interessenten brauchen Beratung, die oft nicht verfügbar ist.', 'Webseiten sind oft zu komplex. Potenzielle Studenten springen ab, wenn sie Fragen nicht klären können.', 'KI berät zu Kursinhalten, Zulassungen und Abschlüssen.', 'Die KI fragt Vorwissen ab und empfiehlt den passenden akademischen Karriere-Pfad.', 'BookOpen', 'Digital book glowing', ['Höhere Buchungsquoten', 'Premium Service 24/7', 'Hocheffiziente Beratung'], false),
      c('ed5', 'Alumni-Netzwerk', 'Hochschulen verlieren oft nach dem Abschluss den Kontakt zu Absolventen.', 'Manuelle Pflege des Netzwerks ist zu teuer. Kooperationspotenzial bleibt ungenutzt.', 'KI hält den Kontakt zu Ehemaligen und sammelt Karriere-Updates.', 'Die KI ruft Absolventen an, gratuliert zu Karriereschritten und lädt zu Events ein.', 'Award', 'Digital trophy with network', ['Starkes Alumni-Netzwerk', 'Marketing-Power Boost', 'Effizientes Fundraising'], false)
    ]
  },
  {
    id: 'energy',
    name: 'Energie',
    iconName: 'PowerIcon',
    cases: [
      c('en1', 'Zählerstand-Voice', 'Der Jahreswechsel-Stress durch manuelle Meldungen bindet enorme Ressourcen.', 'Fehleingaben am Telefon durch Hörfehler und hohe Personalkosten für die Dateneingabe.', 'KI nimmt Zählerstände per Voice auf und validiert diese live.', 'Die KI erkennt Plausibilitätsfehler sofort im Gespräch und klärt den Fehler direkt.', 'Gauge', 'Utility meter digital pulse', ['Null Fehlerrate Daten', 'Extreme Kostensenkung', '24/7 Kunden-Service'], true),
      c('en2', 'Störungs-Info', 'Großflächige Stromausfälle führen zu tausenden gleichzeitigen Anrufen.', 'Netzbetreiber können das Volumen nicht bewältigen. Bürger bleiben ohne Information.', 'KI gibt standortbezogene Informationen zur Entstörung aus.', 'Die KI erkennt die Anrufer-PLZ automatisch: "Der Kabelschaden ist bekannt, Reparatur bis 14 Uhr".', 'Siren', 'Glowing lightbulb storm', ['Sicherheit durch Info', 'Entlastung der Leitwarte', 'Echtzeit-Information'], false),
      c('en3', 'Tarif-Retention', 'Kunden kündigen ihre Verträge massenhaft nach Preiserhöhungen.', 'Preisanpassungen führen zu Kündigungswellen. Der Support kann nicht jeden Kunden individuell beraten.', 'KI klärt Gründe für Unzufriedenheit und bietet bessere Tarife an.', 'Die KI analysiert den Verbrauch und bietet Rabatte zur Kundenbindung direkt im Gespräch an.', 'RefreshCcw', 'Energy cycle digital', ['Churn-Rate -20%', 'Umsatzsicherung massiv', 'Hohe Kundenloyalität'], false),
      c('en4', 'PV-Anschluss Support', 'Einspeisewünsche für PV-Anlagen überfordern den Innendienst.', 'Anträge von Elektrikern sind oft unvollständig. Das mühsame Nachfordern kostet viele Wochen Zeit.', 'KI telefoniert Elektriker für fehlende technische Daten ab.', 'Die KI fragt technische Parameter ab und vervollständigt den Antrag für schnellere Freigabe.', 'Sun', 'Digital sun with data', ['Schnellerer Netzanschluss', 'Zufriedene Fachpartner', 'Energiewende-Beschleunigung'], false),
      c('en5', 'Ratenzahlungs-Bot', 'Hohe Nachzahlungen führen oft zu Zahlungsausfällen bei Privatkunden.', 'Kunden können hohe Einmalbeträge oft nicht leisten. Manuelle Ratenplanungen sind teuer.', 'KI vereinbart Ratenzahlungen autonom direkt am Telefon.', 'Die KI errechnet faire Raten basierend auf den Vorgaben und bucht diese rechtssicher.', 'CreditCard', 'Digital money flow', ['Liquiditätssicherung', 'Weniger Inkasso-Fälle', 'Hohe soziale Kompetenz'], false)
    ]
  },
  {
    id: 'gov',
    name: 'Behörden',
    iconName: 'GovIcon',
    cases: [
      c('gv1', 'Bürger-Service', 'Bürgerämter sind für ihre schlechte telefonische Erreichbarkeit bekannt.', 'Einfache Standardfragen verstopfen die Leitungen für komplexe soziale Notfälle.', 'KI beantwortet Standardfragen und bucht verbindliche Termine.', 'Die KI kennt alle Satzungen und benötigten Dokumente und hilft Bürgern rund um die Uhr.', 'Landmark', 'Historic building digital', ['Zufriedene Bürger-Erfahrung', 'Massive Kostensenkung', 'Digitale Transformation'], true),
      c('gv2', 'Wahlhelfer-Akquise', 'Die Suche nach Freiwilligen für Wahlen ist ein mühsamer, manueller Prozess.', 'Mitarbeiter telefonieren tagelang Listen ab, die Erfolgsquote ist gering bei gleichzeitig hohen Kosten.', 'KI telefoniert potenzielle Wahlhelfer ab und plant den Einsatz.', 'Die KI klärt die Verfügbarkeit und versendet Schulungsunterlagen nach der Zusage.', 'Users', 'Digital crowd network', ['Voll besetzte Wahllokale', 'Null manueller Aufwand', 'Strukturierte Planung'], false),
      c('gv3', 'Abfall-Info', 'Anfragen zu Verschiebungen der Müllabfuhr blockieren die Ämter.', 'Feiertage führen zu Verwirrung bei den Bürgern. Viele greifen zum Telefon.', 'KI gibt Entsorgungstermine basierend auf der Adresse durch.', 'Die KI informiert präzise: "Deine Biotonne wird wegen Ostern erst am Mittwoch geleert".', 'TruckIcon', 'Waste truck digital', ['Support-Entlastung 80%', 'Hervorragende Bürger-Info', 'Moderner Service'], false),
      c('gv4', 'Fundbüro-Bot', 'Bürger rufen täglich an, um nach verlorenen Gegenständen zu fragen.', 'Personal verbringt viel Zeit mit der manuellen Suche in Listen für Kleinteile.', 'KI gleicht Verlustmeldungen mit der Fund-Datenbank live ab.', 'Die KI klärt Details ("Welche Farbe?") ab und vereinbart bei Erfolg einen Abholtermin.', 'Search', 'Magnifying glass glowing', ['Personal-Entlastung pur', 'Sehr glückliche Bürger', 'Vollständig Digitale Liste'], false),
      c('gv5', 'Krisen-Zentrale', 'Großschadenslagen erfordern eine sofortige Massen-Information der Bevölkerung.', 'Katastrophenfälle überlasten die Telefonleitungen der Behörden innerhalb von Minuten.', 'KI übernimmt hunderte Telefonate gleichzeitig zur Lage-Information.', 'Die KI gibt Verhaltenshinweise und warnt vor Gefahrenzonen.', 'Siren', 'Flood warning digital', ['Aktiver Bevölkerungsschutz', 'Informations-Souveränität', 'Entlastung der Notrufe'], false)
    ]
  },
  {
    id: 'marketing',
    name: 'Marketing',
    iconName: 'IdeaIcon',
    cases: [
      c('m1', 'Lead-Turbo', 'Web-Leads werden manuell oft erst nach Stunden kontaktiert.', 'Wird ein Lead nicht innerhalb von 15 Minuten angerufen, sinkt die Abschlusswahrscheinlichkeit um 80%.', 'KI ruft jeden qualifizierten Lead sofort an und setzt den Termin.', 'Die KI agiert als digitaler SDR, qualifiziert das Interesse und bucht den Kalender des Closers voll.', 'Target', 'Digital target bullseye', ['Maximale Lead-Effizienz', 'Massiv gesteigerter Umsatz', 'Fokus auf das Closing'], true),
      c('m2', 'NPS-Umfragen', 'Schriftliche Umfragen haben eine geringe Rücklaufquote.', 'Unternehmen wissen oft nicht, was ihre Kunden wirklich denken. Mails werden massenhaft ignoriert.', 'KI führt kurze, strukturierte Feedback-Calls für echtes Feedback.', 'Die KI erkennt Stimmungen in der Stimme und transkribiert qualitative Insights.', 'PieChart', 'Bar chart digital pulse', ['Echte Kunden-Insights', 'Hohe Rücklaufquoten', 'Wertvolle CRM-Daten'], false),
      c('m3', 'Event-Reminder', 'Hohe No-Show Quoten bei Webinaren entwerten den Marketing-Spend.', 'Kostenlose Online-Events werden oft vergessen. Das Investment verpufft ohne Teilnehmer.', 'KI ruft Teilnehmer kurz vor dem Event an und steigert die Vorfreude.', 'Die KI erinnert an die Startzeit und klärt letzte technische Fragen zum Zugang.', 'BellRing', 'Ringing bell digital', ['No-Show Quote -40%', 'Deutlich mehr Teilnehmer', 'Maximierter Marketing ROI'], false),
      c('m4', 'Win-Back Calls', 'Inaktive Altkunden werden manuell fast nie reaktiviert.', 'Marketing-Daten zeigen die Inaktivität, aber niemand im Team hat die Zeit für Rückgewinnungs-Calls.', 'KI kontaktiert inaktive Altkunden mit einem individuellen Angebot.', 'Die KI bietet personalisierte Rabatte basierend auf der Kaufhistorie an.', 'Repeat', 'Rotating arrows digital', ['Reaktivierungs-Uplift massiv', 'Customer Lifetime Value +', 'Automatisierte Retention'], false),
      c('m5', 'Partner-Onboarding', 'Neue Affiliates wissen oft nicht, wie sie starten sollen.', 'Eine manuelle Betreuung für hunderte kleine Partner ist personell unmöglich.', 'KI begleitet neue Partner empathisch durch die ersten Schritte.', 'Die KI erklärt das Dashboard und das Provisionsmodell in einem persönlichen Telefonat.', 'HandshakeIcon', 'Glowing handshake digital', ['Deutlich schnellere Sales', 'Starke Partner-Loyalität', 'Skalierung ohne Headcount'], false)
    ]
  },
  {
    id: 'wellness',
    name: 'Fitness',
    iconName: 'WellnessIcon',
    cases: [
      c('w1', 'Studio-Sales Agent', 'Interessenten rufen oft an, wenn kein Beratungspersonal vor Ort ist.', 'Am Abend oder Wochenende ist oft nur Trainingspersonal da. Verkäufe gehen verloren.', 'KI berät Interessenten zu Tarifen und schließt Verträge rechtssicher ab.', 'Die KI erklärt die Vorteile der Pakete und versendet den Vertrag sofort per SMS.', 'Dumbbell', 'Muscular arm digital', ['Umsatzgenerierung 24/7', 'Entlastung Trainer-Team', 'Vollautomatische Sales'], true),
      c('w2', 'Spa-Planer', 'Die Buchung komplexer Wellness-Pakete am Telefon ist fehleranfällig.', 'Kunden wollen Massage + Sauna. Die manuelle Abstimmung ist ein logistisches Puzzle.', 'KI koordiniert alle Ressourcen und bucht den perfekten Wellness-Tag.', 'Die KI prüft die Verfügbarkeit von Raum und Personal in Echtzeit.', 'WavesIcon', 'Blue waves digital', ['Optimale Raumauslastung', 'Keine Fehlbuchungen mehr', 'Premium Service-Vorgang'], false),
      c('w3', 'Churn-Prävention', 'Mitglieder kündigen oft stillschweigend nach langer Inaktivität.', 'Stumme Kündigungen sind der Profit-Killer. Niemand bemerkt die Inaktivität rechtzeitig.', 'KI ruft inaktive Mitglieder empathisch an und motiviert zum Neustart.', 'Die KI bietet ein kostenloses Personal Training oder einen Check-up an.', 'RefreshCcw', 'Cycle with heart', ['Churn-Rate -15% gesichert', 'Echte Community-Bindung', 'Mehr Profitabilität'], false),
      c('w4', 'Kurs-Warteliste', 'Kurse sind oft ausgebucht, aber Teilnehmer erscheinen nicht.', 'Der Yoga-Raum ist oft halb leer trotz langer Warteliste. Das sorgt für Enttäuschung.', 'KI telefoniert die Warteliste bei Absagen in Echtzeit autonom ab.', 'Die KI ruft den nächsten auf der Liste an: "Ein Platz ist frei geworden!".', 'Users', 'Digital group in yoga pose', ['Maximale Kursauslastung', 'Hochzufriedene Mitglieder', 'Effizienz in der Planung'], false),
      c('w5', 'Ernährungs-Check-in', 'Mitglieder verlieren oft die Motivation zwischen den Terminen.', 'Der Erfolg bleibt aus, die Kündigung folgt. Eine engmaschige Betreuung ist zu teuer.', 'KI führt wöchentliche Check-in Calls zu den gesetzten Zielen durch.', 'Die KI fragt Fortschritte ab und gibt kleine Tipps.', 'Apple', 'Digital apple glowing', ['Sichtbarer Trainingserfolg', 'Extrem hohe Mitgliederbindung', 'Premium-Image'], false)
    ]
  },
  {
    id: 'tourism',
    name: 'Tourismus',
    iconName: 'Globe',
    cases: [
      c('tm1', 'Reise-Berater', 'Komplexe Online-Buchungen brechen bei Detailfragen oft ab.', 'Kunden sind unsicher bei Versicherungen und brechen den Kaufprozess ab.', 'KI-Voice Begleiter führt Kunden sicher durch den Buchungsprozess.', 'Die KI fungiert als digitaler Reisebüro-Profi, klärt Details und schließt ab.', 'Umbrella', 'Globe with flight paths', ['Conversion-Rate +25%', 'Weniger Warenkorb-Abbrüche', 'Top Service-Vorteil'], true),
      c('tm2', 'City-Guide Voice', 'Geführte Touren sind unflexibel und für viele Touristen zu teuer.', 'Touristen wünschen sich Infos genau dann, wenn sie vor einer Sehenswürdigkeit stehen.', 'KI agiert als persönlicher Guide direkt im Ohr des Touristen.', 'Per Standortfreigabe erzählt die KI Geschichten zu Gebäuden und bucht Tickets.', 'Map', 'Digital map with points', ['Individuelles Erlebnis', 'Unbegrenzt Skalierbar', 'Zusatzumsatz Affiliate'], false),
      c('tm3', 'Flug-Umbuchungs Bot', 'Chaos bei Verspätungen sorgt für endlose Schlangen am Schalter.', 'Tausende Fluggäste wollen gleichzeitig Informationen. Das Bodenpersonal ist überlastet.', 'KI managt Umbuchungen für hunderte Passagiere zeitgleich via Voice.', 'Die KI prüft Alternativen, bucht den Gast um und versendet das neue Ticket.', 'Send', 'Paper plane digital', ['Kein Stress am Gate', 'Enorme Kosten-Ersparnis', 'Starker UX-Vorteil'], false),
      c('tm4', 'Ski-Resort Info', 'Standardfragen zu Pisten blockieren die Mitarbeiter im Tourismusbüro.', 'Skifahrer wollen morgens schnell wissen: "Ist die Talabfahrt offen?".', 'KI gibt präzise Echtzeit-Berichte über Pisten und Lifte via Voice.', 'Die KI kennt das aktuelle Wetter und den Öffnungsstatus aller Anlagen.', 'Snowflake', 'Ski lift with data dots', ['Informationskanal 24/7', 'Sicherheit für Skifahrer', 'Modernes Resort-Image'], false),
      c('tm5', 'Visa-Assistent', 'Reisende sind oft unsicher über aktuelle Bestimmungen.', 'Mails an Konsulate werden oft nicht beantwortet. Die Angst vor Fehlern bei der Einreise ist hoch.', 'KI klärt Einreise-Voraussetzungen basierend auf dem Reisepass.', 'Die KI prüft den Impfstatus und die Gültigkeit in einem interaktiven Dialog.', 'FileSignature', 'Digital passport glowing', ['Sorgenfreies Reise-Erlebnis', 'Exklusiver Service-Vorteil', 'Automatisierte Doku-Prüfung'], false)
    ]
  },
  {
    id: 'specialized',
    name: 'Media & Agri',
    iconName: 'IdeaIcon',
    cases: [
      c('x1', 'Abo-Rettungs Agent', 'Zeitungs-Abos werden oft impulsiv online gekündigt.', 'Der Verlust langjähriger Leser schmerzt. Mails zur Rückgewinnung werden ignoriert.', 'KI ruft gekündigte Abonnenten an und klärt die Beweggründe.', 'Die KI bietet individuelle Probe-Abos zur Bindung direkt am Telefon an.', 'Newspaper', 'Newspaper rolls digital', ['Storno-Rettung +20%', 'Tiefe Leser-Insights', 'ROI-Boost Abo-Modell'], true),
      c('x2', 'Breaking-News Alarm', 'Wichtige Nachrichten gehen in der Masse der Push-Benachrichtigungen unter.', 'Premium-Leser zahlen für Exklusivität. Eine App-Benachrichtigung reicht hier nicht aus.', 'KI ruft VIP-Leser bei Breaking News proaktiv für eine Kurzzusammenfassung an.', 'Die KI gibt ein kurzes Audio-Update der Lage und bietet einen SMS-Link an.', 'Tv', 'Digital screen pulsing', ['Maximale Aufmerksamkeit', 'Echtes Premium-Feature', 'Abo-Mehrwert massiv'], false),
      c('x3', 'Ernte-Koordinator', 'Die Koordination von Saisonkräften ist ein logistisches Chaos.', 'Sprachbarrieren und wechselndes Wetter überfordern Betriebsleiter.', 'KI koordiniert Erntehelfer mehrsprachig am Telefon.', 'Die KI gibt Einsatzorte und Zeiten in der Muttersprache durch.', 'Tractor', 'Tractor in digital field', ['Sichere Ernte-Logistik', 'Keine Sprachbarrieren mehr', 'Hocheffiziente Planung'], false),
      c('x4', 'Veterinär Notruf', 'Tierärzte sind bei Notfällen im Stall oft schwer erreichbar.', 'Jede Minute zählt bei kranken Tieren. Die Praxis-Zentrale ist nicht 24/7 besetzt.', 'KI priorisiert Tier-Notfälle und alarmiert den zuständigen Arzt.', 'Die KI klärt Symptome am Telefon ab und alarmiert den Diensthabenden.', 'Stethoscope', 'Digital paw icon', ['Tierwohl-Garantie', '24/7 Notdienst-Sicherheit', 'Stress-Senkung Team'], false),
      c('x5', 'Agrar-Warnsystem', 'Unwetterwarnungen müssen sofort auf dem Feld ankommen.', 'Landwirte sehen Warn-Apps bei der harten Arbeit oft zu spät. Hagel führt zu Ernteverlusten.', 'KI ruft den Landwirt bei drohenden Gefahren sofort persönlich an.', 'Die KI gibt präzise Warnungen und Zeitfenster für Schutzmaßnahmen durch.', 'CloudRain', 'Rain and lightning digital', ['Aktiver Ernteschutz', 'Echtzeit-Warnung Voice', 'Haftungs-Prävention'], false)
    ]
  }
];
