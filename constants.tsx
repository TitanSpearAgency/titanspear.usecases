
import { UseCaseCategory } from './types';
import { 
  ShoppingCart, PhoneMissed, Video, Headset, Globe, Star, 
  ShieldAlert, FileText, Home, Truck, Stethoscope, Scale, 
  Users, UserX, Share2, Factory, Building, Wallet, Zap, 
  RefreshCcw, PackageCheck, ShoppingBag, Briefcase, Gavel, 
  Landmark, PhoneForwarded, CalendarCheck, Database, 
  MessageSquare, Mic, UserCheck, UtensilsCrossed, GraduationCap,
  ClipboardList, HardHat, HeartHandshake, PhoneIncoming,
  Linkedin, Mail, MessageCircle, Send, Ruler, Gift, BoxSelect,
  Timer, Repeat, Megaphone, Wrench, Droplets, FileSpreadsheet,
  HeartPulse, Siren, TruckIcon, Container, Anchor, PhoneCall,
  Receipt, FileSearch, HandCoins, BadgeEuro, LineChart,
  UserPlus, FileCheck, BellRing, Hammer, Sun, Paintbrush, Car, WrenchIcon,
  Key, Shield, Hotel, PartyPopper, ScrollText, FileClock, Network, ArrowLeftRight,
  Target, Search, UserMinus, Dumbbell, Laptop, BookOpen, Boxes,
  Snowflake, FileSignature, ClipboardCheck, Thermometer, AlertTriangle, CalendarClock,
  HelpCircle, Languages, MapPin, Share, MonitorSmartphone, PieChart
} from 'lucide-react';

export const ICON_MAP: Record<string, any> = {
  ShoppingCart, PhoneMissed, Video, Headset, Globe, Star,
  ShieldAlert, FileText, Home, Truck, Stethoscope, Scale,
  Users, UserX, Share2, Factory, Building, Wallet, Zap, 
  RefreshCcw, PackageCheck, ShoppingBag, Briefcase, Gavel, 
  Landmark, PhoneForwarded, CalendarCheck, Database,
  MessageSquare, Mic, UserCheck, UtensilsCrossed, GraduationCap,
  ClipboardList, HardHat, HeartHandshake, PhoneIncoming,
  Linkedin, Mail, MessageCircle, Send, Ruler, Gift, BoxSelect,
  Timer, Repeat, Megaphone, Wrench, Droplets, FileSpreadsheet,
  HeartPulse, Siren, TruckIcon, Container, Anchor, PhoneCall,
  Receipt, FileSearch, HandCoins, BadgeEuro, LineChart,
  UserPlus, FileCheck, BellRing, Hammer, Sun, Paintbrush, Car, WrenchIcon,
  Key, Shield, Hotel, PartyPopper, ScrollText, FileClock, Network, ArrowLeftRight,
  Target, Search, UserMinus, Dumbbell, Laptop, BookOpen, Boxes,
  Snowflake, FileSignature, ClipboardCheck, Thermometer, AlertTriangle, CalendarClock,
  HelpCircle, Languages, MapPin, Share, MonitorSmartphone, PieChart
};

export const USE_CASES_DATA: UseCaseCategory[] = [
  {
    id: 'trades',
    name: 'Handwerk & Bau',
    cases: [
      {
        id: 'roofer-emergency',
        title: 'Dachdecker Notdienst',
        pain: 'Unwetterereignisse sind Umsatzspitzen, aber ohne Personal im Büro geht jeder zweite Anruf ins Leere.',
        detailedPain: 'In der Dachdeckerbranche ist Erreichbarkeit während Sturmphasen die härteste Währung. Wenn es stürmt, klingelt das Telefon pausenlos – hunderte Anrufe in wenigen Stunden. Dachziegel sind lose, Wasser dringt in Wohnräume ein, Hausbesitzer sind in Panik. In diesem Moment stehen Sie selbst auf dem Gerüst oder koordinieren Baustellen. Wenn das Büro nicht besetzt ist, landet der panische Kunde auf dem Anrufbeantworter. Die Realität zeigt: Er wartet nicht. Er wählt sofort die nächste Nummer bei Google. Sie verlieren in jeder Sturmnacht tausende Euro an lukrativen, hochmargigen Notdienst-Aufträgen an die Konkurrenz, einfach nur wegen mangelnder Telefon-Kapazität.',
        solution: 'KI nimmt Schadensmeldungen 24/7 auf, priorisiert Notfälle & informiert den Meister.',
        detailedSolution: 'Unsere Voice-KI (basierend auf VAPI Enterprise) skaliert unendlich. Egal ob 5 oder 500 Anrufe gleichzeitig eingehen – titanspear.ai nimmt jeden Anruf sofort an. Der Bot führt eine professionelle Triage durch: "Dachdeckerei Müller, Notdienst. Regnet es aktiv in den Wohnraum oder ist es ein Sturmschaden am Dach?". Er erfasst präzise die Adresse, Art des Schadens und die Dringlichkeit. Über eine n8n-Schnittstelle werden diese Daten sofort priorisiert. Echte Notfälle ("Wasser im Haus") lösen einen direkten SMS-Alarm auf dem Handy des Meisters aus. Weniger kritische Fälle werden sauber in einer Liste für den nächsten Morgen sortiert. Sie maximieren Ihren Umsatz bei Unwettern, ohne zusätzliches Büropersonal einstellen zu müssen.',
        workflowSteps: ['Notruf Eingang (SIP-Trunk)', 'Schadens-Klassifizierung (LLM)', 'Adress-Validierung', 'SMS-Alarm an Meister', 'Rückruf-Slot Buchung'],
        roiStats: [{ label: 'Erreichbarkeit', value: '100%' }, { label: 'Umsatz', value: 'Max' }],
        veoPrompt: '',
        iconName: 'Hammer',
        simulationType: 'glitch',
        calculator: {
          inputLabel: 'Notrufe / Sturm',
          inputMin: 10,
          inputMax: 200,
          inputStep: 10,
          defaultValue: 50,
          multiplier: 500, 
          outputLabel: 'Gesicherter Umsatz',
          isCurrency: true,
          description: 'Basierend auf Ø 500€ Auftragswert pro Noteinsatz.'
        }
      },
      {
        id: 'hvac-maintenance',
        title: 'SHK Wartungs-Planer',
        pain: 'Wartungsverträge werden vergessen. Anlagen fallen aus, Kunden sind wütend.',
        detailedPain: 'Wartungsverträge sind das Rückgrat eines profitablen SHK-Betriebs. Doch die Realität im Büroalltag sieht anders aus: Im Tagesgeschäft geht das proaktive Nachtelefonieren unter. Die Liste der fälligen Wartungen wird ignoriert. Die Konsequenz ist fatal: Im Winter fallen ungeprüfte Heizungen aus, der Kunde friert und ist wütend über den schlechten Service. Schlimmer noch: Sie verschenken bares Geld. Jeder nicht terminierte Wartungskunde ist verlorener, planbarer Umsatz, der Ihre Liquidität in der Nebensaison sichern würde. Ohne Automatisierung bleibt dieser Umsatz einfach liegen.',
        solution: 'KI ruft Bestandskunden proaktiv zur Terminierung an. Füllt den Kalender automatisch.',
        detailedSolution: 'Unsere KI-Lösung integriert sich tief in Ihre Handwerkersoftware (z.B. Labelwin, Streit V.1). Ein n8n-Workflow prüft täglich: "Welche Anlage wurde vor 11 Monaten zuletzt gewartet?". Die KI startet daraufhin eine Outbound-Kampagne. Sie ruft den Kunden freundlich an: "Guten Tag, hier ist der Service von [Firma]. Ihre Heizungswartung steht an. Passt Ihnen nächste Woche Dienstag um 14 Uhr, da sind wir eh in Ihrer Straße?". Stimmt der Kunde zu, wird der Termin direkt in den Monteur-Kalender gebucht – routenoptimiert. Ihr Büro hat null Aufwand, die Monteure sind ausgelastet, und die Kundenbindung steigt massiv.',
        workflowSteps: ['CRM Fälligkeits-Trigger', 'Outbound Call (Voice AI)', 'Termin-Abstimmung', 'Routen-Check', 'Kalender-Eintrag'],
        roiStats: [{ label: 'Auslastung', value: '100%' }, { label: 'Kundenbindung', value: '++' }],
        veoPrompt: '',
        iconName: 'Droplets',
        simulationType: 'chart',
        calculator: {
          inputLabel: 'Wartungskunden',
          inputMin: 100,
          inputMax: 5000,
          inputStep: 100,
          defaultValue: 500,
          multiplier: 150, 
          outputLabel: 'Wartungsumsatz',
          isCurrency: true,
          description: '150€ Umsatz pro erfolgreich terminiertem Wartungskunden.'
        }
      },
      {
        id: 'electrician-triage',
        title: 'Elektriker Erste-Hilfe',
        pain: 'Meister fährt raus für "Sicherung rausgesprungen". Verschwendung von Fachkraft-Zeit.',
        detailedPain: 'Der Fachkräftemangel im Handwerk ist extrem. Umso schmerzhafter ist es, wenn hochbezahlte Meister ihre Zeit mit Bagatellfällen verschwenden. Kunden rufen panisch an: "Der Strom ist weg!". Der Meister fährt 30 Minuten durch den Stadtverkehr, nur um vor Ort festzustellen, dass lediglich der FI-Schalter rausgesprungen ist oder ein Gerät defekt ist. Das Ergebnis: Eine Rechnung über 50€ für die Anfahrt, ein verärgerter Kunde ("Dafür muss ich zahlen?") und wertvolle Zeit, die auf einer echten Baustelle fehlt. Ineffizienz tötet die Marge.',
        solution: 'KI führt Fehleranalyse am Telefon durch ("Ist der FI drin?") & filtert Bagatellen.',
        detailedSolution: 'Unser intelligenter Voice-Bot fungiert als technischer Vorfilter. Bevor ein Termin vergeben wird, führt die KI eine strukturierte Anamnese durch. Sie fragt systematisch ab: "Haben Sie kürzlich neue Geräte angeschlossen? Haben Sie den Sicherungskasten geprüft? Ist der FI-Schalter unten?". Sie kann den Kunden sogar anleiten, den Schalter selbst wieder hochzudrücken. Nur wenn das Problem bestehen bleibt, wird ein Termin gebucht und ein Ticket mit detaillierter Fehlerbeschreibung erstellt. Das spart hunderte unnötige Anfahrten pro Jahr und hält Ihrem Team den Rücken frei für echte Aufträge.',
        workflowSteps: ['Störungsmeldung Eingang', 'Technische Diagnose (KI)', 'Selbsthilfe-Anleitung', 'Terminierung (falls nötig)', 'Ticket-Erstellung'],
        roiStats: [{ label: 'Sinnlose Fahrten', value: '-40%' }, { label: 'Meister-Zeit', value: 'Gespart' }],
        veoPrompt: '',
        iconName: 'Zap',
        simulationType: 'chat',
        calculator: {
          inputLabel: 'Störungsanrufe / Mo',
          inputMin: 20,
          inputMax: 300,
          inputStep: 10,
          defaultValue: 100,
          multiplier: 0.3 * 80, 
          outputLabel: 'Gesparte Kosten',
          isCurrency: true,
          description: 'Vermeidung von 30% unnötigen Anfahrten à 80€ Kosten.'
        }
      },
      {
        id: 'painter-offer',
        title: 'Maler Angebots-Bot',
        pain: 'Angebotserstellung dauert zu lange. Kunden springen ab, weil der Preis fehlt.',
        detailedPain: 'Im Privatkunden-Geschäft gewinnt oft der Schnellste. Ein Interessent will "nur mal wissen, was das Streichen des Wohnzimmers kostet". Der Maler muss hinfahren, ausmessen, ins Büro fahren, kalkulieren. Bis das Angebot raus ist, vergehen Tage oder Wochen. Oft stellt sich dann heraus: Dem Kunden ist es zu teuer. Der gesamte Aufwand war umsonst ("Opportunity Cost"). In der Zwischenzeit hat der Kunde längst einen anderen Betrieb beauftragt, der schneller reagiert hat oder einen Online-Preisrechner hatte.',
        solution: 'KI erfragt Raumgrößen & Wünsche. Erstellt Richtpreis-Indikation sofort.',
        detailedSolution: 'Der titanspear.ai Angebots-Bot revolutioniert den Vertrieb. Er nimmt Anrufe entgegen und führt ein präzises Aufmaß-Interview: "Wie viele Zimmer sind es? Wie groß ist die Bodenfläche ca.? Wie hoch sind die Decken? Wollen Sie Farbe oder Weiß?". Basierend auf Ihren hinterlegten Quadratmeterpreisen und Rüstzeiten errechnet die KI in Sekunden eine realistische Preisspanne. "Das wird sich voraussichtlich zwischen 800€ und 1.000€ bewegen." Passt das ins Budget? Perfekt, dann wird ein Aufmaßtermin gebucht. Wenn nicht, haben Sie sich eine teure Anfahrt gespart.',
        workflowSteps: ['Anfrage Eingang', 'Parameter Abfrage (qm, Farbe)', 'Preis-Indikation (Algorithmus)', 'Budget-Check', 'Vor-Ort Termin'],
        roiStats: [{ label: 'Qualifizierung', value: 'Top' }, { label: 'Conversion', value: '+20%' }],
        veoPrompt: '',
        iconName: 'Paintbrush',
        simulationType: 'workflow',
        calculator: {
          inputLabel: 'Anfragen / Monat',
          inputMin: 10,
          inputMax: 100,
          inputStep: 5,
          defaultValue: 30,
          multiplier: 0.5 * 60, 
          outputLabel: 'Gesparte Meister-Minuten',
          isCurrency: false,
          unit: 'min',
          description: '30 Min gespart pro ausgesiebtem "Zu Teuer"-Kunden.'
        }
      },
      {
        id: 'mechanic-booking',
        title: 'KFZ Werkstatt Termin',
        pain: 'Telefonklingeln in der Werkstatt stört die Mechaniker. Hebebühnen bleiben leer.',
        detailedPain: 'In kleinen und mittleren Werkstätten ist das Telefon der größte Produktivitätskiller. Kunden rufen wegen Reifenwechsel, Ölwechsel oder Inspektion an. Der Meister muss unter der Hebebühne hervorkommen, sich die Hände abwischen und ans Telefon gehen. Das unterbricht den Flow und verlängert jede Reparatur. Gleichzeitig entstehen teure Lücken im Kalender, wenn Termine nicht optimal "Back-to-Back" geplant werden. Eine leere Hebebühne kostet bares Geld, während das Telefon klingelt.',
        solution: 'KI bucht Termine direkt in den Werkstatt-Kalender. Meister schraubt ungestört.',
        detailedSolution: 'Unsere KI-Lösung übernimmt die Terminvergabe komplett autonom. Sie fragt den Kunden ab: "Welches Fahrzeugmodell? Welche Leistung wird benötigt?". Sie greift per API auf Ihren Werkstattkalender zu, prüft die Verfügbarkeit der passenden Ressourcen (z.B. Hebebühne für Transporter vs. PKW) und bucht den Termin fest ein. Sie erinnert den Kunden proaktiv daran, das Serviceheft und den Felgenschlüssel mitzubringen. Ihre Mechaniker können durcharbeiten, und die Werkstatt ist lückenlos ausgelastet.',
        workflowSteps: ['Termin-Anfrage', 'Fahrzeug-Daten Erfassung', 'Service-Art Matching', 'Slot-Buchung', 'Erinnerungs-SMS'],
        roiStats: [{ label: 'Produktivität', value: '+15%' }, { label: 'Auslastung', value: 'Optimiert' }],
        veoPrompt: '',
        iconName: 'Wrench',
        simulationType: 'chart',
        calculator: {
          inputLabel: 'Anrufe / Tag',
          inputMin: 5,
          inputMax: 50,
          inputStep: 5,
          defaultValue: 20,
          multiplier: 5 * 20, 
          outputLabel: 'Gesparte Arbeitszeit / Mo',
          isCurrency: false,
          unit: 'h',
          description: '5 Min pro Terminvereinbarung gespart.'
        }
      },
      {
        id: 'solar-lead',
        title: 'Solar Lead Qualifizierung',
        pain: 'Solarteure fahren zu Kunden, deren Dach gar nicht geeignet ist. Teure Fehlbesuche.',
        detailedPain: 'Der Vertrieb von PV-Anlagen ist extrem kostenintensiv. Ein Außendiensttermin kostet das Unternehmen inklusive Anfahrt, Vorbereitung und Arbeitszeit schnell 200-300€. Das Problem: Viele Interessenten sind unqualifiziert. Sie wohnen zur Miete, haben ein verschattetes Nord-Dach, ein denkmalgeschütztes Haus oder keine Finanzierung. Wenn der Vertriebler das erst vor Ort merkt, wurde massiv Geld verbrannt. Die "Cost per Acquisition" (CPA) explodiert.',
        solution: 'KI prüft Eigentum, Dachausrichtung & Stromverbrauch vor dem Termin.',
        detailedSolution: 'Der titanspear.ai Qualifizierungs-Bot ruft jeden Lead innerhalb von Minuten an. Er führt ein hartes Screening durch: "Sind Sie Eigentümer der Immobilie? Wie alt ist das Dach? Wie hoch ist Ihr Jahresstromverbrauch? Haben Sie bereits ein Budget geplant?". Optional kann die KI per API auf Satellitendaten zugreifen, um die Dachfläche grob zu bewerten. Nur Leads, die einen "Fit-Score" von über 80% erreichen, bekommen einen Termin beim Vertriebler. Ihre Abschlussquote pro Besuch verdoppelt sich, weil Sie nur noch zu kaufbereiten Kunden fahren.',
        workflowSteps: ['Lead Eingang', 'Satelliten-Check (API)', 'Eigentümer-Validierung', 'Bedarfs-Analyse', 'Termin-Vergabe'],
        roiStats: [{ label: 'Abschlussquote', value: '2x' }, { label: 'Vertriebskosten', value: '-50%' }],
        veoPrompt: '',
        iconName: 'Sun',
        simulationType: 'network',
        calculator: {
          inputLabel: 'Leads / Monat',
          inputMin: 20,
          inputMax: 500,
          inputStep: 10,
          defaultValue: 100,
          multiplier: 0.4 * 200, 
          outputLabel: 'Gesparte Vertriebskosten',
          isCurrency: true,
          description: '40% ungeeignete Leads á 200€ Besuchskosten gefiltert.'
        }
      }
    ]
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce & Retail',
    cases: [
      {
        id: 'cart-recovery',
        title: 'Warenkorb-Rettung',
        pain: '70% aller Warenkörbe werden stehen gelassen. Email-Erinnerungen landen im Spam.',
        detailedPain: 'Warenkorbabbrüche sind das größte Verlustgeschäft im E-Commerce. Sie haben viel Geld für Traffic ausgegeben (Google/Meta Ads), der Kunde hat Produkte in den Warenkorb gelegt, bricht aber im letzten Schritt ab. Die Gründe sind vielfältig: Technische Probleme, Unsicherheit, Ablenkung. Die Standard-Shopify-Email ("Du hast was vergessen") wird heute von Gmail oft in den Promo-Ordner sortiert oder komplett ignoriert (Open Rates < 10%). Der teuer eingekaufte Traffic konvertiert nicht.',
        solution: 'KI ruft nach 15 Min an: "Gab es ein Problem beim Checkout?". Rettet 20% der Käufe.',
        detailedSolution: 'Wir implementieren einen aggressiven "Speed-to-Lead" Prozess. 15 Minuten nach dem Abbruch klingelt das Telefon des Kunden. "Hallo, hier ist der Kundenservice von [Shop]. Wir haben gesehen, dass der Kauf vorhin nicht geklappt hat. Gab es technische Probleme oder hatten Sie noch Fragen zum Produkt?". Dieser persönliche Touch ist im E-Commerce extrem selten und wirkt Wunder. Oft ist es nur eine kleine Unsicherheit. Die KI kann Fragen klären und bei Bedarf einen 5% "Sorry"-Gutschein anbieten, wenn der Kauf sofort abgeschlossen wird. Das konvertiert Abbrecher zurück in zahlende Kunden.',
        workflowSteps: ['Checkout Abbruch Trigger', '15min Delay', 'KI-Call (Service-Orientiert)', 'Einwandbehandlung', 'Gutschein-Closing'],
        roiStats: [{ label: 'Recovery Rate', value: '20%' }, { label: 'ROAS', value: '+30%' }],
        veoPrompt: '',
        iconName: 'ShoppingCart',
        simulationType: 'glitch',
        highlight: true,
        calculator: {
          inputLabel: 'Abbrüche / Monat',
          inputMin: 100,
          inputMax: 10000,
          inputStep: 100,
          defaultValue: 1000,
          multiplier: 0.2 * 80, 
          outputLabel: 'Geretteter Umsatz',
          isCurrency: true,
          description: '20% Rückgewinnung bei 80€ Warenkorbwert.'
        }
      },
      {
        id: 'return-prevention',
        title: 'Retouren-Prävention',
        pain: 'Hohe Retourenquoten fressen die Marge auf. Oft wegen Bedienfehlern.',
        detailedPain: 'Retouren sind der Profit-Killer Nummer 1. Die Kosten für Hinversand, Rückversand, Qualitätsprüfung, Neuverpackung und Wertverlust summieren sich schnell auf 15-30€ pro Artikel. Besonders bitter: Bei technischen Produkten oder erklärungsbedürftigen Waren sind über 50% der Retouren "Kein Fehler festgestellt". Der Kunde kam einfach nicht mit der Bedienung zurecht, war frustriert und hat das Produkt zurückgeschickt. Das ist vermeidbar.',
        solution: 'KI fragt nach Zustellung: "Klappt alles?". Löst Bedienprobleme sofort.',
        detailedSolution: 'Unsere KI greift auf die Tracking-API (DHL/Hermes) zu. Sobald das Paket als "Zugestellt" markiert ist, startet ein Workflow. Die KI ruft den Kunden an (oder sendet WhatsApp): "Ist alles gut angekommen? Brauchen Sie Hilfe bei der Einrichtung?". Sie erklärt Funktionen proaktiv und beantwortet Fragen. Wenn der Kunde unzufrieden ist, bietet sie Lösungen an (Ersatzteil, Anleitung), BEVOR er das Rücksendeetikett druckt. Das senkt die Quote drastisch und steigert den Customer Lifetime Value.',
        workflowSteps: ['Lieferung (Tracking API)', 'Satisfaction Call', 'Bedienhilfe / Q&A', 'Problem-Lösung', 'NPS Erfassung'],
        roiStats: [{ label: 'Retouren', value: '-35%' }, { label: 'LTV', value: '++' }],
        veoPrompt: '',
        iconName: 'RefreshCcw',
        simulationType: 'chart',
        calculator: {
          inputLabel: 'Retouren / Monat',
          inputMin: 50,
          inputMax: 5000,
          inputStep: 50,
          defaultValue: 300,
          multiplier: 0.3 * 15, 
          outputLabel: 'Gesparte Kosten',
          isCurrency: true,
          description: 'Vermeidung von 30% Retouren à 15€ Bearbeitungskosten.'
        }
      },
      {
        id: 'vip-upsell',
        title: 'VIP Post-Purchase Upsell',
        pain: 'Einmalkäufer bleiben Einmalkäufer. Cross-Selling per Email funktioniert kaum.',
        detailedPain: 'Der Kunde hat gekauft und ist glücklich ("Honeymoon Phase"). Das ist psychologisch der perfekte Moment für Zusatzverkäufe. Doch die meisten Shops senden nur langweilige "Vielleicht gefällt dir auch"-Emails, die im Spam landen. Die Klickraten sind unterirdisch. Das Potenzial, den Warenkorbwert (AOV) nachträglich zu erhöhen oder passendes Zubehör zu verkaufen, wird verschenkt.',
        solution: 'KI bietet exklusives Zubehör 24h nach Kauf an. 15% Conversion Rate.',
        detailedSolution: '24 Stunden nach dem Kauf meldet sich der "VIP Support" per Voice. "Danke für den Kauf der Kaffeemaschine. Unsere Baristas empfehlen dazu die Bohnen X und den Reiniger Y für langanhaltende Freude. Soll ich das als Zubehör-Paket mit 10% Rabatt noch Ihrer Bestellung hinzufügen?". Da die Zahlungsdaten und Adresse oft noch aktiv sind (oder per 1-Click Link bestätigt werden können), ist die Hürde extrem niedrig. Der Kunde fühlt sich beraten, nicht verkauft. Der Warenkorbwert steigt nachträglich ohne neue Ad-Kosten.',
        workflowSteps: ['Kaufabschluss', 'Produkt-Matching KI', 'Outbound Offer Call', '1-Click-Order Link', 'Versand-Update'],
        roiStats: [{ label: 'AOV Increase', value: '+15%' }, { label: 'Repeat Rate', value: 'High' }],
        veoPrompt: '',
        iconName: 'Gift',
        simulationType: 'audio',
        calculator: {
          inputLabel: 'Bestellungen / Monat',
          inputMin: 100,
          inputMax: 10000,
          inputStep: 100,
          defaultValue: 1000,
          multiplier: 0.1 * 25, 
          outputLabel: 'Zusatz-Umsatz',
          isCurrency: true,
          description: '10% Conversion bei 25€ Upsell-Wert.'
        }
      },
      {
        id: 'size-guide',
        title: 'Size-Guide AI',
        pain: 'Kunden bestellen 3 Größen zur Auswahl. 2 kommen sicher zurück.',
        detailedPain: 'Im Modehandel ist die "Auswahlbestellung" der Standard und gleichzeitig der Margen-Killer. Kunden wissen nicht, wie M oder L bei dieser Marke ausfällt. Um sicherzugehen, bestellen sie beides. Das Ergebnis: Eine garantierte Retourenquote von mind. 50%. Statische Größentabellen liest niemand und sie helfen bei individuellen Körpertypen oft nicht weiter. Das Hin- und Herschicken vernichtet den Gewinn.',
        solution: 'KI berät vor Kauf: "Wie groß/schwer bist du?". Empfiehlt perfekte Größe.',
        detailedSolution: 'Ein intelligenter Voice- oder Chatbot auf der Produktseite greift ein, bevor der Kunde die falsche Größe wählt. Er fragt aktiv: "Unsicher bei der Größe? Sag mir kurz Größe, Gewicht und wie du es gerne trägst (locker oder eng)." Die KI gleicht diese Daten mit Millionen von Retourendaten anderer Kunden ab ("Kunden mit deiner Statur haben L behalten und M zurückgeschickt"). Sie empfiehlt selbstbewusst EINE Größe. Der Kunde fühlt sich sicher und bestellt nur einmal. Die Auswahlbestellungen sinken massiv.',
        workflowSteps: ['PDP Besuch', 'KI-Beratung Trigger', 'Körperdaten Abgleich', 'Größen-Empfehlung', 'Add-to-Cart'],
        roiStats: [{ label: 'Auswahl-Käufe', value: '-60%' }, { label: 'Retouren', value: '-40%' }],
        veoPrompt: '',
        iconName: 'Ruler',
        simulationType: 'scanning',
        calculator: {
          inputLabel: 'Retouren (Mode)',
          inputMin: 100,
          inputMax: 5000,
          inputStep: 100,
          defaultValue: 500,
          multiplier: 0.4 * 12, 
          outputLabel: 'Ersparnis',
          isCurrency: true,
          description: 'Vermeidung von 40% Passform-Retouren (12€ Kosten).'
        }
      },
      {
        id: 'smart-inventory',
        title: 'Smart Inventory Monitor',
        pain: '"Out of Stock" kostet Umsatz. Überbestand bindet Kapital.',
        detailedPain: 'Kleine und mittlere Shops managen ihren Bestand oft noch per Bauchgefühl oder Excel. Plötzlich ist der Bestseller leer ("Out of Stock"), und die Nachbestellung aus Asien dauert 4 Wochen. In dieser Zeit verlieren Sie täglich Umsatz an die Konkurrenz. Auf der anderen Seite liegt das Lager voll mit Ladenhütern ("Dead Stock"), die Liquidität binden und Lagerkosten verursachen. Das Balancing ist manuell kaum zu schaffen.',
        solution: 'KI überwacht Abverkauf & Trends. Bestellt autonom nach oder startet Sale.',
        detailedSolution: 'Die KI überwacht Ihre Sales-Velocity und Lieferzeiten in Echtzeit. "Achtung, Produkt X ist in 3 Tagen leer, wenn der Trend anhält. Lieferzeit beträgt 2 Tage. Soll ich nachbestellen?". Sie kann die Bestellung autonom beim Lieferanten auslösen. Gleichzeitig erkennt sie Produkte, die sich zu langsam drehen, und schlägt automatisch eine Rabatt-Kampagne oder ein Bundle vor, um das Lager zu räumen und Liquidität freizusetzen. Das Lager wird vom Kostenfaktor zum Profit-Center.',
        workflowSteps: ['Sales Analyse', 'Trend-Prognose', 'Warn-System (Slack/Mail)', 'Auto-Reorder / Promo', 'Dashboard'],
        roiStats: [{ label: 'Stock-Outs', value: '0%' }, { label: 'Cashflow', value: 'Optimiert' }],
        veoPrompt: '',
        iconName: 'BoxSelect',
        simulationType: 'chart',
        calculator: {
          inputLabel: 'Jahresumsatz',
          inputMin: 100000,
          inputMax: 5000000,
          inputStep: 50000,
          defaultValue: 500000,
          multiplier: 0.1, 
          outputLabel: 'Mehrumsatz',
          isCurrency: true,
          description: '10% mehr Umsatz durch Vermeidung von Out-of-Stock.'
        }
      }
    ]
  },
  {
    id: 'hr',
    name: 'HR & Recruiting',
    cases: [
      {
        id: 'applicant-prescreen',
        title: 'Bewerber-Qualifikation',
        pain: 'Recruiter ertrinken in ungeeigneten CVs. Top-Talente springen ab, weil Prozess zu langsam.',
        detailedPain: 'In Zeiten von "Easy Apply" auf LinkedIn werden HR-Abteilungen mit Bewerbungen geflutet. Auf eine Stelle kommen 100 Bewerbungen, aber 80 davon passen überhaupt nicht (falsche Qualifikation, zu hohe Gehaltsvorstellung, fehlende Sprachkenntnisse). Der Recruiter muss jeden Lebenslauf sichten und mühsam nachtelefonieren. Dieser Prozess dauert Wochen. Das Problem: Die echten Top-Talente warten nicht. Bis Sie sich melden, haben sie längst woanders unterschrieben.',
        solution: 'KI führt 5-Min Interview mit JEDEM Bewerber sofort. Filtert Top 10%.',
        detailedSolution: 'Unsere Voice-KI revolutioniert das Pre-Screening. Sobald eine Bewerbung eingeht, ruft die KI den Kandidaten an (oder schickt einen Link zum Voice-Chat). Sie führt ein natürliches Kurzinterview: "Erzähl mir von deiner Erfahrung mit React. Was ist deine Gehaltsvorstellung? Ab wann bist du verfügbar?". Sie bewertet Hard Skills und Sprachkenntnisse objektiv. Am Ende erhält der Recruiter ein Ranking. Er spricht nur noch mit den Top 5 Kandidaten, die wirklich passen. Die "Time-to-Hire" sinkt drastisch, und kein Talent geht verloren.',
        workflowSteps: ['Bewerbung Eingang', 'KI-Interview (Voice)', 'Skill-Check & Scoring', 'Ranking Erstellung', 'Kalender-Invite für Top-Talente'],
        roiStats: [{ label: 'Time-to-Hire', value: '-50%' }, { label: 'Recruiter-Zeit', value: '-80%' }],
        veoPrompt: '',
        iconName: 'UserCheck',
        simulationType: 'chat',
        highlight: true,
        calculator: {
          inputLabel: 'Bewerbungen / Mo',
          inputMin: 10,
          inputMax: 500,
          inputStep: 10,
          defaultValue: 50,
          multiplier: 0.5 * 60, 
          outputLabel: 'Gesparte HR-Zeit (Min)',
          isCurrency: false,
          unit: 'min',
          description: '30 Min Screening-Zeit pro Bewerber gespart.'
        }
      },
      {
        id: 'active-sourcing',
        title: 'Active Sourcing AI',
        pain: 'Gute Leute bewerben sich nicht. Recruiter müssen mühsam auf LinkedIn suchen.',
        detailedPain: 'Fachkräftemangel bedeutet: Sie müssen Kandidaten finden, nicht umgekehrt ("Post & Pray" funktioniert nicht mehr). Manuelles Active Sourcing auf LinkedIn/Xing ist extrem zeitaufwendig. Recruiter klicken sich durch hunderte Profile, kopieren Textbausteine und schicken Standard-Nachrichten. Diese werden von gefragten Talenten als Spam wahrgenommen und ignoriert. Die Rücklaufquote ist frustrierend niedrig.',
        solution: 'KI scannt Profile, schreibt hyper-personalisierte Ansprache & vereinbart Call.',
        detailedSolution: 'Unsere KI-Agenten automatisieren die Suche und Ansprache intelligent. Die KI sucht passende Kandidaten basierend auf Ihren Kriterien. Sie analysiert das Profil im Detail: "Ah, er hat Projekt X gemacht und nutzt Tech Stack Y". Darauf basierend generiert sie eine hyper-personalisierte Nachricht, die wirklich auf den Kandidaten eingeht. Antwortet der Kandidat, übernimmt der Voice-Bot nahtlos die Terminierung für ein Erstgespräch. Ihre Pipeline füllt sich passiv mit qualifizierten Kandidaten, während Ihre Recruiter Interviews führen.',
        workflowSteps: ['Profil-Scraping (LinkedIn)', 'KI-Personalisierung (GPT-4)', 'Outreach Sequenz', 'Response Handling', 'Terminierung'],
        roiStats: [{ label: 'Antwortrate', value: '3x' }, { label: 'Pipeline', value: 'Voll' }],
        veoPrompt: '',
        iconName: 'UserPlus',
        simulationType: 'network',
        calculator: {
          inputLabel: 'Kontaktierte Kandidaten',
          inputMin: 50,
          inputMax: 1000,
          inputStep: 50,
          defaultValue: 200,
          multiplier: 0.1 * 5000, 
          outputLabel: 'Headhunter-Ersparnis',
          isCurrency: true,
          description: 'Vermeidung von Headhunter-Gebühren (ca. 5k€ pro Hire).'
        }
      },
      {
        id: 'onboarding-buddy',
        title: 'Onboarding Assistant',
        pain: 'Neue Mitarbeiter binden im ersten Monat extrem viel Zeit von Senioren/HR.',
        detailedPain: 'Die Einarbeitung neuer Mitarbeiter ("Onboarding") ist teuer. "Wo finde ich den Urlaubsantrag? Wie richte ich den Drucker ein? Wer ist Ansprechpartner für X? Wie buche ich Spesen?". Neue Mitarbeiter haben 1000 Fragen. Oft trauen sie sich nicht zu fragen oder unterbrechen ständig die erfahrenen Kollegen, die eigentlich produktiv arbeiten müssten. Das senkt die Produktivität des ganzen Teams.',
        solution: 'Interne Voice-KI beantwortet alle Fragen zu Prozessen & Docs 24/7.',
        detailedSolution: 'Der "Onboarding Buddy" ist immer da und nie genervt. Er wurde mit Ihrem Mitarbeiterhandbuch, dem Wiki und den Prozessdokumentationen trainiert (RAG - Retrieval Augmented Generation). Der Neue fragt einfach per Voice oder Chat: "Wie beantrage ich Urlaub?". Die KI gibt sofort die korrekte Antwort inklusive Link zum Formular. Das beschleunigt die Einarbeitung ("Time-to-Productivity") massiv und entlastet Senioren und HR von repetitiven Erklärungen.',
        workflowSteps: ['Frage des Mitarbeiters', 'Knowledge-Base Search (RAG)', 'Antwort Generierung', 'Quellen-Angabe', 'Feedback Loop'],
        roiStats: [{ label: 'Einarbeitungszeit', value: '-30%' }, { label: 'Team-Fokus', value: '100%' }],
        veoPrompt: '',
        iconName: 'GraduationCap',
        simulationType: 'chat',
        calculator: {
          inputLabel: 'Neue Mitarbeiter / Jahr',
          inputMin: 5,
          inputMax: 200,
          inputStep: 5,
          defaultValue: 20,
          multiplier: 10 * 50, 
          outputLabel: 'Gesparte Senior-Zeit',
          isCurrency: true,
          description: '10 Stunden Senior-Betreuungszeit à 50€ gespart pro Neuer.'
        }
      }
    ]
  },
  {
    id: 'sales',
    name: 'Sales & Vertrieb',
    cases: [
      {
        id: 'inbound-speed',
        title: 'Inbound Speed-to-Lead',
        pain: 'Leads werden kalt, weil Vertrieb erst nach Stunden anruft. Chance vertan.',
        detailedPain: 'Im Online-Vertrieb zählt jede Sekunde. Studien (z.B. von Harvard Business Review) belegen: Wer einen Lead innerhalb von 5 Minuten anruft, hat eine 9x höhere Abschlusschance als nach 30 Minuten. Die Realität: Vertriebler sind in Meetings, beim Mittagessen oder rufen erst am nächsten Tag an. Der "heiße" Lead ist dann längst abgekühlt, hat das Interesse verloren oder bereits beim Wettbewerber gekauft, der schneller war.',
        solution: 'KI ruft Lead < 30 Sekunden nach Eintragung an. Qualifiziert & verbindet durch.',
        detailedSolution: 'Mit titanspear.ai erreichen Sie eine Reaktionszeit von unter 30 Sekunden. Sobald der Lead das Formular auf Ihrer Website abschickt, klingelt sein Telefon. "Hallo, danke für Ihre Anfrage bei [Firma]. Haben Sie kurz Zeit?". Die KI qualifiziert vor (BANT: Budget, Authority, Need, Timing). Ist der Lead vielversprechend, sagt sie: "Einen Moment, ich verbinde Sie mit unserem Experten." Der Vertriebler bekommt einen kaufbereiten, vorqualifizierten Lead direkt in die Leitung gelegt ("Live Transfer"). Das maximiert die Conversion Rate Ihrer Marketing-Kampagnen.',
        workflowSteps: ['Formular Submit', 'Sofort-Call (<30s)', 'Vorqualifizierung (BANT)', 'Live-Transfer an Sales', 'CRM-Update'],
        roiStats: [{ label: 'Conversion', value: '+40%' }, { label: 'Erreichbarkeit', value: '90%' }],
        veoPrompt: '',
        iconName: 'PhoneIncoming',
        simulationType: 'network',
        highlight: true,
        calculator: {
          inputLabel: 'Leads / Monat',
          inputMin: 50,
          inputMax: 2000,
          inputStep: 50,
          defaultValue: 200,
          multiplier: 0.15 * 500, 
          outputLabel: 'Zusatz-Pipeline',
          isCurrency: true,
          description: '15% mehr Erreichbarkeit bei 500€ Lead-Wert.'
        }
      },
      {
        id: 'lead-reactivation',
        title: 'Lead-Reaktivierung',
        pain: 'Tausende alte Leads liegen tot im CRM. Ein Vermögen an ungenutztem Potenzial.',
        detailedPain: 'Jedes Unternehmen hat sie: Tausende Kontakte im CRM, die mal Interesse hatten, aber nie gekauft haben ("Karteileichen"). Vertriebler hassen es, diese "kalten" Listen abzutelefonieren. Es ist frustrierend, die Ablehnungsquote ist hoch, und es fühlt sich nach Zeitverschwendung an. Deshalb bleiben diese Daten ungenutzt. Dabei sind statistisch gesehen immer 3-5% dieser Leute genau JETZT wieder bereit zu kaufen, weil sich ihre Situation geändert hat.',
        solution: 'KI telefoniert komplette Datenbank ab. Reaktiviert 5% als Hot Leads.',
        detailedSolution: 'Unsere KI übernimmt diese undankbare Aufgabe – emotionslos und extrem effizient. Sie arbeitet die Liste systematisch ab: "Hallo, wir hatten vor 6 Monaten Kontakt. Ist das Thema X noch aktuell bei Ihnen?". Wenn ja -> Terminvereinbarung für den Vertrieb. Wenn nein -> Grund erfassen und Daten bereinigen. Sie können an einem Tag 10.000 Kontakte kontaktieren. Das generiert massiven Umsatz aus "Datenmüll", ohne dass ein Vertriebler einen Finger krumm macht.',
        workflowSteps: ['CRM Export (Alte Leads)', 'Massen-Outbound Kampagne', 'Bedarfs-Check', 'Terminierung', 'Datenbereinigung'],
        roiStats: [{ label: 'Reaktivierung', value: '5%' }, { label: 'ROI', value: 'Extrem' }],
        veoPrompt: '',
        iconName: 'RefreshCcw',
        simulationType: 'pipeline',
        calculator: {
          inputLabel: 'Alte Leads im CRM',
          inputMin: 1000,
          inputMax: 50000,
          inputStep: 1000,
          defaultValue: 5000,
          multiplier: 0.03 * 300, 
          outputLabel: 'Reaktivierter Wert',
          isCurrency: true,
          description: '3% Reaktivierung bei 300€ Gewinn pro Kunde.'
        }
      },
      {
        id: 'sales-followup',
        title: 'Automatisierte Follow-ups',
        pain: 'Angebote werden verschickt und vergessen. Vertriebler haken nicht konsequent nach.',
        detailedPain: '"Ghosting" nach dem Angebot ist im B2B normal. Vertriebler geben oft nach 1-2 Versuchen auf ("Der meldet sich schon, wenn er will") oder haben Angst, zu nerven. Aber statistisch gesehen braucht es 5-8 Kontaktpunkte ("Touchpoints") bis zum Abschluss. Ohne hartnäckiges, freundliches Follow-up verschenken Sie 50% des Umsatzes, der eigentlich schon greifbar war.',
        solution: 'KI fasst so lange nach (Call/Mail/SMS), bis eine Entscheidung da ist.',
        detailedSolution: 'Wir bauen eine intelligente Omni-Channel-Sequenz. Tag 2 nach Angebot: Nette Mail. Tag 4: KI-Anruf "Hatten Sie Zeit, reinzuschauen? Gibt es Fragen?". Tag 7: WhatsApp. Die KI bleibt freundlich aber hartnäckig am Ball. Sie dokumentiert jeden Kontakt im CRM. Der Vertriebler muss erst wieder eingreifen, wenn der Kunde kaufen will oder eine konkrete Frage hat. Kein Deal wird vergessen, die Abschlussquote steigt signifikant.',
        workflowSteps: ['Angebot versendet', 'Multi-Channel Sequenz (n8n)', 'KI-Call Check-in', 'Einwandbehandlung', 'Closing-Termin'],
        roiStats: [{ label: 'Touchpoints', value: '8x' }, { label: 'Win-Rate', value: '+25%' }],
        veoPrompt: '',
        iconName: 'Repeat',
        simulationType: 'workflow',
        calculator: {
          inputLabel: 'Offene Angebote / Mo',
          inputMin: 10,
          inputMax: 500,
          inputStep: 10,
          defaultValue: 50,
          multiplier: 0.2 * 1000, 
          outputLabel: 'Mehrumsatz',
          isCurrency: true,
          description: '20% höhere Abschlussquote bei 1000€ Deal-Größe.'
        }
      }
    ]
  },
  {
    id: 'outreach',
    name: 'Outreach & Messaging',
    cases: [
      {
        id: 'linkedin-automation',
        title: 'LinkedIn Smart Outreach',
        pain: 'Manuelle Vernetzung kostet Stunden. Copy-Paste Nachrichten wirken wie Spam.',
        detailedPain: 'LinkedIn ist der Goldstandard für B2B-Akquise. Aber manuelles Netzwerken ist extrem zeitintensiv. Jeden Tag 50 Profile besuchen, Texte lesen, Vernetzungsanfrage tippen... das macht niemand lange konsequent. Die Alternative – billige Automatisierungstools – ist gefährlich: Sie schicken plumpe "Hi, I want to sell you X" Nachrichten, die sofort als Spam erkannt werden und Ihrem Ruf schaden oder zur Account-Sperrung führen.',
        solution: 'KI-Agent besucht Profile, generiert individuelle Icebreaker & vernetzt sich.',
        detailedSolution: 'Unser System nutzt Cloud-Browser und LLMs, um menschliches Verhalten zu simulieren. Der Agent besucht das Profil, liest die letzten Posts und die "Über mich"-Sektion. Er generiert eine Vernetzungsanfrage mit echtem Bezug: "Hey [Name], toller Post über [Thema], ich stimme voll zu bei...". Das erhöht die Annahmerate auf über 50%. Auch die Folgemessages sind kontextbasiert und nicht werblich ("Smart Sequence"). Erst wenn der Lead Interesse signalisiert, übernimmt der Mensch. Ihre Personal Brand wächst auf Autopilot.',
        workflowSteps: ['Zielgruppen-Suche (Sales Nav)', 'Profil-Analyse (LLM)', 'Icebreaker-Generierung', 'Smart Sequence', 'Reply-Detection'],
        roiStats: [{ label: 'Acceptance', value: '50%+' }, { label: 'Leads', value: 'Täglich' }],
        veoPrompt: '',
        iconName: 'Linkedin',
        simulationType: 'network',
        calculator: {
          inputLabel: 'Kontaktanfragen / Tag',
          inputMin: 10,
          inputMax: 100,
          inputStep: 5,
          defaultValue: 20,
          multiplier: 0.1 * 500, 
          outputLabel: 'Lead-Pipeline Wert',
          isCurrency: true,
          description: '10% Lead-Conversion bei 500€ Wert.'
        }
      },
      {
        id: 'cold-email',
        title: 'Hyper-Personalized Email',
        pain: 'Kalte Email-Kampagnen haben <1% Antwortrate. Niemand liest Standard-Mails.',
        detailedPain: 'Massenmails ("Spray and Pray") sind tot. Entscheider bekommen hunderte davon am Tag und löschen alles, was nach Template aussieht, sofort. Um heute noch Antworten zu bekommen, müssen Sie tief recherchieren ("Ich sah auf Ihrer Website, dass Sie Software X nutzen..."). Diese Recherche dauert pro Lead 10-15 Minuten – manuell absolut nicht skalierbar für große Listen.',
        solution: 'KI scrapt Website des Leads & schreibt 100% einzigartiges Intro. 3x Reply Rate.',
        detailedSolution: 'Unsere "Clay"-artige Automatisierungskette geht auf die Webseite jedes Prospects. Sie analysiert: Was machen die genau? Welche Technologien nutzen die? Gibt es aktuelle News? Sie schreibt den ersten Absatz der Mail komplett individuell. Der Rest ist Ihr Pitch. Der Empfänger denkt: "Wow, der hat sich wirklich mit mir beschäftigt". Die Antwortraten verdreifachen sich, weil Relevanz Vertrauen schafft. Sie können tausende Mails versenden, die sich anfühlen wie handgeschrieben.',
        workflowSteps: ['Lead-Liste Upload', 'Deep Web-Scraping', 'Intro-Writing (GPT-4)', 'Mail-Versand', 'Auto-Follow-up'],
        roiStats: [{ label: 'Reply Rate', value: '3-5%' }, { label: 'Spam-Rate', value: '0%' }],
        veoPrompt: '',
        iconName: 'Mail',
        simulationType: 'workflow',
        calculator: {
          inputLabel: 'Mails / Monat',
          inputMin: 500,
          inputMax: 20000,
          inputStep: 500,
          defaultValue: 2000,
          multiplier: 0.02 * 200, 
          outputLabel: 'Zusätzliche Termine',
          isCurrency: false,
          unit: 'Termine',
          description: '2% mehr Antworten = Termine.'
        }
      },
      {
        id: 'whatsapp-biz',
        title: 'WhatsApp Business Auto',
        pain: 'Emails haben nur 20% Öffnungsrate. Kunden wollen schnelle Infos aufs Handy.',
        detailedPain: 'Wichtige transaktionale Infos (Terminbestätigung, Versandstatus, Angebot) gehen im Email-Postfach unter oder landen im Spam. Kunden sind genervt, wenn sie nach Infos suchen müssen. WhatsApp ist der Kommunikationskanal #1 in Europa, wird aber von Unternehmen aus Angst vor DSGVO oder technischer Komplexität oft nicht genutzt. Dabei erwarten Kunden heute Kommunikation dort, wo sie sich aufhalten.',
        solution: 'Automatisierte WhatsApp Flows (API). 98% Öffnungsrate in 5 Minuten.',
        detailedSolution: 'Wir binden die offizielle WhatsApp Business API an Ihre Systeme an. Termin gebucht? Ping: WhatsApp Bestätigung mit Kalendereintrag. Paket versendet? Ping: Tracking Link direkt im Chat. Kunde hat eine Frage? Ping: Unser KI-Bot antwortet sofort im WhatsApp Chat. Es ist der intimste und schnellste Kanal zum Kunden. Die Öffnungsraten liegen bei 98%, meist innerhalb von 5 Minuten. Das beschleunigt Prozesse und erhöht die Kundenzufriedenheit massiv.',
        workflowSteps: ['Trigger Event (CRM)', 'WhatsApp Template Versand', 'Kunden-Antwort', 'KI-Chat-Bot Handling', 'Human Handover'],
        roiStats: [{ label: 'Open Rate', value: '98%' }, { label: 'Speed', value: 'Sofort' }],
        veoPrompt: '',
        iconName: 'MessageCircle',
        simulationType: 'chat',
        calculator: {
          inputLabel: 'Nachrichten / Monat',
          inputMin: 100,
          inputMax: 10000,
          inputStep: 100,
          defaultValue: 500,
          multiplier: 0.5, 
          outputLabel: 'Effizienz-Gewinn',
          isCurrency: true,
          description: 'Wert der sofortigen Erreichbarkeit (0,50€ pro Interaktion).'
        }
      }
    ]
  },
  {
    id: 'automotive',
    name: 'Automotive & Autohäuser',
    cases: [
      {
        id: 'test-drive',
        title: 'Probefahrt-Manager',
        pain: 'No-Shows bei Probefahrten blockieren teure Vorführer und Verkäuferzeit.',
        detailedPain: 'Jede Probefahrt kostet das Autohaus echtes Geld: Fahrzeugaufbereitung, Sprit, rote Kennzeichen und vor allem die Zeit des Verkäufers für Einweisung und Begleitung. Wenn Interessenten einfach nicht erscheinen ("No-Show"), steht ein 80.000€ Fahrzeug nutzlos auf dem Hof, statt einen anderen Kunden zu überzeugen. Zudem fehlt oft die Vorqualifizierung vorab: Kann sich der Kunde das Auto überhaupt leisten, oder will er nur mal Sportwagen fahren?',
        solution: 'KI qualifiziert Budget, prüft Führerschein-Gültigkeit & bestätigt Termine.',
        detailedSolution: 'Unsere KI ruft jeden Interessenten (z.B. von Mobile.de Leads) sofort an. Sie klärt die harten Fakten freundlich aber bestimmt: "Haben Sie einen gültigen Führerschein? Passt die monatliche Rate X in Ihr Budget? Wann wollen Sie kaufen?". Erst wenn diese Fragen positiv beantwortet sind, wird der Termin fest gebucht. 24h vor dem Termin ruft die KI erneut an und bittet um Bestätigung. Die No-Show-Rate sinkt gen Null, und Ihre Verkäufer sitzen nur noch mit echten, kaufbereiten Kunden im Auto.',
        workflowSteps: ['Lead Eingang (Mobile.de)', 'KI-Qualifizierungs-Call', 'Termin-Slot Booking', 'SMS-Erinnerung (24h vorher)', 'No-Show Follow-up'],
        roiStats: [{ label: 'No-Shows', value: '-80%' }, { label: 'Sales-Effizienz', value: 'Max' }],
        veoPrompt: '',
        iconName: 'Car',
        simulationType: 'network',
        highlight: true,
        calculator: {
          inputLabel: 'Probefahrten / Monat',
          inputMin: 20,
          inputMax: 500,
          inputStep: 10,
          defaultValue: 100,
          multiplier: 0.2 * 150,
          outputLabel: 'Gesparte Leerlaufkosten',
          isCurrency: true,
          description: 'Vermeidung von 20% No-Shows bei 150€ Prozesskosten.'
        }
      },
      {
        id: 'leasing-return',
        title: 'Leasing-Rückläufer',
        pain: 'Kunden wechseln die Marke, weil niemand rechtzeitig ein Folgeangebot macht.',
        detailedPain: 'Das Ende des Leasingvertrags ist der kritischste "Touchpoint" im Autohaus. Oft wird der Kunde erst 4 Wochen vor Rückgabe kontaktiert – viel zu spät! Er hat sich längst woanders umgesehen. Verkäufer im Tagesgeschäft haben oft keine Lust auf diese "Verwaltungsanrufe" und jagen lieber Neukunden ("Hunter-Mentalität"). So verliert das Autohaus den treuen Bestandskunden unnötig an die Konkurrenz. Die Kundenbindung reißt ab.',
        solution: 'Automatischer Anruf 6 Monate vor Ablauf. Sichert die Verlängerung proaktiv.',
        detailedSolution: 'Exakt 6 Monate vor Vertragsende wird die KI aktiv. "Guten Tag, Ihr Leasing für den [Modell] läuft bald aus. Wir haben gerade den neuen [Nachfolgemodell] reinbekommen oder könnten Ihren Vertrag verlängern – wollen Sie ein Angebot?". Die KI ist freundlich und verbindlich. Erkennt sie Wechselabsichten oder Interesse, alarmiert sie sofort den Top-Verkäufer ("Hot Lead"). So bleibt der Kunde im Ökosystem des Autohauses, bevor er überhaupt darüber nachdenkt, zur Konkurrenz zu gehen.',
        workflowSteps: ['CRM Trigger (-6 Monate)', 'Retention Call', 'Bedarfsanalyse (Upgrade?)', 'Termin für Neuwagen', 'Sales Handover'],
        roiStats: [{ label: 'Verlängerung', value: '+25%' }, { label: 'Churn', value: 'Minimiert' }],
        veoPrompt: '',
        iconName: 'Key',
        simulationType: 'pipeline',
        calculator: {
          inputLabel: 'Rückläufer / Jahr',
          inputMin: 50,
          inputMax: 2000,
          inputStep: 50,
          defaultValue: 300,
          multiplier: 0.15 * 2000,
          outputLabel: 'Gehaltener Deckungsbeitrag',
          isCurrency: true,
          description: '15% mehr Verlängerungen bei ca. 2.000€ Provision/Marge.'
        }
      },
      {
        id: 'recall-action',
        title: 'Rückruf-Aktion Manager',
        pain: 'Rückrufaktionen binden das gesamte Service-Team für Wochen. Kunden sind genervt.',
        detailedPain: 'Ein offizieller Hersteller-Rückruf (z.B. Airbag-Tausch) ist der administrative Albtraum eines jeden Service-Leiters. Tausende Kunden müssen rechtssicher informiert und terminiert werden. Das Telefon blockiert das gesamte Tagesgeschäft, Verkaufsgespräche kommen nicht durch. Briefe werden von Kunden oft ignoriert. Die Quote muss aber erfüllt werden (Vorgabe Kraftfahrt-Bundesamt). Manuelles Nachtelefonieren durch Mechatroniker oder Service-Assistenten ist extrem teuer und ineffizient.',
        solution: 'KI ruft 5.000 Kunden parallel an, erklärt den Grund & bucht Werkstatt-Termin.',
        detailedSolution: 'titanspear.ai übernimmt die Kampagne vollständig. Die KI ruft alle betroffenen Kunden an, erklärt ruhig und verständlich die technische Notwendigkeit ("Es dauert nur 30 Min, ist kostenlos, dient Ihrer Sicherheit"). Sie nimmt dem Kunden die Angst und sucht im Werkstatt-Kalender direkt einen freien Slot für den Austausch. Sie dokumentiert jeden Kontaktversuch revisionssicher für den Hersteller. Die Werkstatt wird optimal ausgelastet, ohne dass das Telefon im Betrieb lahmgelegt wird.',
        workflowSteps: ['Datenimport', 'Massen-Outbound (Skaliert)', 'Termin-Koordination', 'Ersatzteil-Reservierung', 'Reporting an Hersteller'],
        roiStats: [{ label: 'Erledigung', value: '100%' }, { label: 'Admin-Zeit', value: '-95%' }],
        veoPrompt: '',
        iconName: 'WrenchIcon',
        simulationType: 'chart',
        calculator: {
          inputLabel: 'Betroffene Fahrzeuge',
          inputMin: 100,
          inputMax: 10000,
          inputStep: 100,
          defaultValue: 500,
          multiplier: 10,
          outputLabel: 'Gesparte Personalkosten',
          isCurrency: true,
          description: 'Ca. 10€ Prozesskosten-Ersparnis pro Fahrzeug.'
        }
      }
    ]
  },
  {
    id: 'office',
    name: 'Büro & Administration',
    cases: [
      {
        id: 'ai-scheduling',
        title: 'KI-gesteuerte Terminierung',
        pain: 'Manuelle Terminplanung ist ineffizient, führt zu Überbuchungen und teurem Leerlauf.',
        detailedPain: 'Ob Arztpraxis, Kanzlei oder Dienstleister: Die Terminvergabe am Telefon ist ein massiver Zeitfresser. Rezeptionisten blättern ewig im Kalender ("Geht es am Dienstag? Nein? Mittwoch?"). Fehler passieren, Doppelbuchungen ärgern Kunden. Noch schlimmer sind Lücken im Kalender, die entstehen, weil Termine kurzfristig abgesagt werden und niemand aktiv die Warteliste anruft, um nachzurücken. Dieser Leerlauf kostet bei teuren Ressourcen (Arzt, Anwalt) hunderte Euro pro Stunde.',
        solution: 'KI qualifiziert Anrufer, synchronisiert Kalender & optimiert die Auslastung autonom.',
        detailedSolution: 'Unser KI-Agent hat Echtzeit-Zugriff auf Ihren Kalender (Google, Outlook, Doctolib, etc.). Er fragt den Anrufer nach dem Grund ("Erstgespräch oder Folgetermin?"), prüft die nötige Dauer und schlägt proaktiv Lücken vor, die gefüllt werden müssen. Bei kurzfristigen Absagen wird der Bot zum "Lückenfüller": Er ruft automatisch Wartelisten-Kandidaten an ("Jemand ist abgesprungen, wollen Sie morgen schon kommen?"). Das Ergebnis: Ein lückenloser Kalender, maximale Auslastung und 30% weniger No-Shows durch intelligente Erinnerungen.',
        workflowSteps: ['Inbound Call', 'Intent-Erkennung', 'Kalender-Match (API)', 'Slot-Booking', 'Wartelisten-Management'],
        roiStats: [{ label: 'Auslastung', value: 'Optimiert' }, { label: 'No-Shows', value: '-30%' }],
        veoPrompt: '',
        iconName: 'CalendarCheck',
        simulationType: 'chart',
        highlight: true,
        calculator: {
          inputLabel: 'Termine / Monat',
          inputMin: 50,
          inputMax: 2000,
          inputStep: 50,
          defaultValue: 400,
          multiplier: 0.3 * 100,
          outputLabel: 'Geretteter Umsatz / Monat',
          isCurrency: true,
          description: 'Reduktion von 30% Leerlauf bei 100€ Stundenwert.'
        }
      },
      {
        id: 'smart-ab',
        title: 'Intelligenter Anrufbeantworter',
        pain: '67% der Anrufer hinterlassen keine Nachricht. Jeder verpasste Anruf ist verlorener Umsatz.',
        detailedPain: 'Der Satz "Bitte hinterlassen Sie eine Nachricht nach dem Ton" ist der Tod jedes Verkaufsgesprächs. Neukunden sprechen heutzutage nicht mehr auf Bänder – sie legen auf und rufen sofort die Konkurrenz an. Wenn Ihr Büro unbesetzt ist (Mittagspause, Feierabend, Krankheit, Urlaub), verlieren Sie bares Geld. Ein klassischer Anrufbeantworter ist kein Service, sondern ein Umsatz-Verhinderer. Sie wissen nie, ob der Anrufer ein Millionen-Kunde oder nur ein Vertreter war.',
        solution: 'KI nimmt 24/7 ab, qualifiziert das Anliegen & informiert Sie per Slack/Mail.',
        detailedSolution: 'titanspear.ai geht immer ran – sofort, auch nachts um 3 Uhr. "Willkommen bei [Firma], wie kann ich helfen?". Die KI führt einen natürlichen Dialog, erfasst Namen, Rückrufnummer und den genauen Grund des Anrufs. Sie qualifiziert vor: Ist es dringend? Geht es um Sales oder Support? Sie sendet Ihnen sofort ein Transkript und eine Audio-Datei per Email, Slack oder Teams. Bei definierten Notfällen (Schlüsselwörter wie "Notfall", "Ausfall") kann sie den Anruf sogar intelligent auf Ihr Handy durchstellen. Kein Lead geht mehr verloren.',
        workflowSteps: ['Inbound Call (Unbeantwortet)', 'KI Pickup', 'Dialog & Datenerfassung', 'Zusammenfassung (LLM)', 'Push-Notification'],
        roiStats: [{ label: 'Missed Calls', value: '0%' }, { label: 'Lead Erhalt', value: '100%' }],
        veoPrompt: '',
        iconName: 'PhoneMissed',
        simulationType: 'audio',
        calculator: {
          inputLabel: 'Verpasste Anrufe / Monat',
          inputMin: 10,
          inputMax: 1000,
          inputStep: 10,
          defaultValue: 100,
          multiplier: 150, 
          outputLabel: 'Gehaltener Lead-Wert',
          isCurrency: true,
          description: 'Jeder gehaltene Anrufer ist potenziell 150€ wert.'
        }
      },
      {
        id: 'ai-receptionist',
        title: 'KI-Telefonrezeptionist',
        pain: 'Fachkräfte werden alle 11 Min unterbrochen. Fokus-Arbeit ist unmöglich.',
        detailedPain: 'Das Telefon klingelt ständig. "Ist Herr Müller da?". "Wann haben Sie geöffnet?". "Ich will was verkaufen". Teure Fachkräfte (Entwickler, Anwälte, Berater) werden permanent aus ihrer Konzentration gerissen, um banale Sekretariatsaufgaben zu erledigen. Studien zeigen: Nach einer Unterbrechung dauert es 23 Minuten, um wieder in den "Flow" zu kommen. Diese Fragmentierung der Arbeit kostet Unternehmen bis zu 40% der Produktivität. Ein menschlicher Empfang ist für viele KMUs zu teuer.',
        solution: 'Digitales Vorzimmer filtert 100% Spam & routet Calls intelligent zum richtigen AP.',
        detailedSolution: 'Die KI übernimmt die Zentrale komplett. Sie begrüßt jeden Anrufer professionell in Ihrer Corporate Identity. Sie filtert nervige Werbeanrufe rigoros heraus. Standardfragen (Öffnungszeiten, IBAN, Anfahrt) beantwortet sie selbstständig. Nur wenn Herr Müller wirklich gesprochen werden muss UND laut Kalender Zeit hat, stellt sie durch. Sie kann sogar "Bitte nicht stören" Zeiten respektieren. Ihr Team kann endlich wieder ungestört arbeiten (Deep Work), während die Erreichbarkeit nach außen perfekt bleibt.',
        workflowSteps: ['Zentralruf', 'Intent-Erkennung', 'Spam-Filter', 'Kalender-Check', 'Smart Routing'],
        roiStats: [{ label: 'Admin-Entlastung', value: '6h/Tag' }, { label: 'Personalkosten', value: '-40%' }],
        veoPrompt: '',
        iconName: 'PhoneForwarded',
        simulationType: 'network',
        calculator: {
          inputLabel: 'Eingehende Calls / Tag',
          inputMin: 10,
          inputMax: 500,
          inputStep: 10,
          defaultValue: 50,
          multiplier: 3 * 20, 
          outputLabel: 'Produktivitäts-Gewinn / Monat',
          isCurrency: false,
          unit: 'h',
          description: 'Basierend auf 3 Minuten Ersparnis pro Routine-Anruf.'
        }
      },
      {
        id: 'call-reporting',
        title: 'End-of-Call Reporting',
        pain: 'CRM-Daten sind unvollständig. Wichtige Kunden-Infos gehen im Alltag verloren.',
        detailedPain: 'Niemand pflegt das CRM gerne. Nach einem langen Telefonat hetzt man zum nächsten Termin. Notizen werden auf Zettel geschmiert und gehen verloren oder werden unvollständig ins System getippt. Wochen später weiß niemand mehr, was genau besprochen wurde. Das führt zu peinlichen Nachfragen ("Hatten wir darüber gesprochen?") und verpassten Verkaufschancen. Ohne saubere Daten keine Prozessoptimierung und kein Forecasting.',
        solution: 'Auto-Transkription & CRM-Eintrag in Echtzeit. Spart 5 Min Admin pro Call.',
        detailedSolution: 'Unsere KI hört bei Bedarf zu (DSGVO-konform, mit Einwilligung). Sie transkribiert das Gespräch live mit. Nach dem Auflegen analysiert ein LLM (Large Language Model) den Text, filtert die "Action Items" heraus ("Kunde will Angebot bis Freitag", "Interesse an Produkt X") und trägt diese strukturiert ins CRM ein. Sie haben perfekte Datenhygiene ohne eine Sekunde manuellen Aufwand. Das Management hat volle Transparenz über die Pipeline und kann Coachings auf Basis echter Daten durchführen.',
        workflowSteps: ['Call Recording', 'Speech-to-Text', 'LLM Zusammenfassung', 'Daten-Extraktion', 'CRM API Push'],
        roiStats: [{ label: 'Datenqualität', value: '100%' }, { label: 'Zeit/Call', value: '-5 Min' }],
        veoPrompt: '',
        iconName: 'FileCheck',
        simulationType: 'workflow',
        calculator: {
          inputLabel: 'Calls pro Team / Tag',
          inputMin: 10,
          inputMax: 1000,
          inputStep: 10,
          defaultValue: 100,
          multiplier: 0.08 * 100, 
          outputLabel: 'Gesparte Admin-Stunden / Tag',
          isCurrency: false,
          unit: 'h',
          description: '5 Minuten Nacharbeitszeit pro Call gespart.'
        }
      }
    ]
  },
  {
    id: 'finance',
    name: 'Finanzen & Inkasso',
    cases: [
      {
        id: 'smart-dunning',
        title: 'Smart Dunning (Mahnwesen)',
        pain: 'Offene Forderungen binden Liquidität. Inkasso zerstört Kundenbeziehungen.',
        detailedPain: 'Ihr Geld liegt auf der Straße. Mahnungen zu schreiben kostet Porto und Zeit, wird aber oft ignoriert. Wenn Sie ein Inkassobüro einschalten, verlieren Sie hohe Gebühren und meistens auch den Kunden für immer ("Churn"). Es fehlt oft einfach der persönliche Dialog, um herauszufinden, warum nicht gezahlt wurde. Oft ist es nur ein Missverständnis, eine verlorene Rechnung oder ein kurzfristiger Engpass. Ein Brief kann das nicht klären.',
        solution: 'KI senkt DSO um 12 Tage. Verhandelt neutral Raten & holt 40% mehr Geld rein.',
        detailedSolution: 'Die KI ruft kurz nach Fälligkeit an. Sie ist emotionslos, höflich und neutral – das nimmt dem Schuldner die Scham, die oft bei Gesprächen mit Menschen entsteht. Sie fragt lösungsorientiert: "Können wir helfen? Haben Sie die Rechnung nicht erhalten? Wäre eine Ratenzahlung von 50€ machbar?". Sie kann Zahlungslinks direkt per SMS senden. Das Geld kommt schneller rein (DSO Reduktion), und der Kunde fühlt sich fair behandelt statt bedroht. Sie retten den Kunden UND das Geld.',
        workflowSteps: ['Mahnstufe 1 Trigger', 'KI-Call (Empathisch)', 'Ursachenklärung', 'Ratenplan-Vereinbarung', 'Zahlungslink SMS'],
        roiStats: [{ label: 'Recovery', value: '+40%' }, { label: 'DSO', value: '-12 Tage' }],
        veoPrompt: '',
        iconName: 'BadgeEuro',
        simulationType: 'chart',
        highlight: true,
        calculator: {
          inputLabel: 'Offene Forderungen €',
          inputMin: 10000,
          inputMax: 500000,
          inputStep: 10000,
          defaultValue: 50000,
          multiplier: 0.4,
          outputLabel: 'Liquiditäts-Gewinn',
          isCurrency: true,
          description: '40% verbesserte Rückgewinnung durch direkten Dialog.'
        }
      },
      {
        id: 'kyc-onboarding',
        title: 'KYC Onboarding Assistent',
        pain: 'Kunden brechen Kontoeröffnung ab, weil Video-Ident zu lange dauert oder kompliziert ist.',
        detailedPain: 'Der regulatorische Druck (KYC/AML) erfordert strenge Identitätsprüfungen bei Banken und FinTechs. Kunden hassen es, in Warteschleifen von externen Video-Ident-Anbietern zu hängen oder komplizierte Apps zu installieren. Jeder Abbruch an dieser Stelle kostet massives Marketing-Budget (CAC). Wenn der Onboarding-Prozess nicht in wenigen Minuten reibungslos durchlaufen wird, geht der Kunde zur Neobank, wo es einfacher ist.',
        solution: 'KI begleitet Prozess, prüft Dokumente vorab & reduziert Drop-offs um 40%.',
        detailedSolution: 'Der KI-Assistent führt den Kunden Hand-in-Hand durch den Prozess. "Halten Sie bitte Ihren Ausweis bereit. Ist das Licht gut? Bitte kippen Sie den Ausweis etwas." Er beantwortet Fragen zur Sicherheit in Echtzeit. Er kann Dokumente vorab scannen (Computer Vision AI) und auf Lesbarkeit prüfen, bevor der teure menschliche Agent für den finalen rechtlichen Abgleich zugeschaltet wird. Das verkürzt die Ident-Zeit massiv und erhöht die Abschlussquote signifikant.',
        workflowSteps: ['Signup Start', 'KI-Guide (Voice/Chat)', 'Doc-Pre-Check (Vision)', 'Human Handoff (wenn nötig)', 'Konto Aktivierung'],
        roiStats: [{ label: 'Conversion', value: '+40%' }, { label: 'Ident-Kosten', value: '-30%' }],
        veoPrompt: '',
        iconName: 'Shield',
        simulationType: 'scanning',
        calculator: {
          inputLabel: 'Neukunden / Monat',
          inputMin: 100,
          inputMax: 10000,
          inputStep: 100,
          defaultValue: 1000,
          multiplier: 0.2 * 150,
          outputLabel: 'Zusätzlicher CLV',
          isCurrency: true,
          description: '20% weniger Abbrüche bei 150€ Customer Lifetime Value.'
        }
      },
      {
        id: 'fraud-alert',
        title: 'Fraud Prevention Alert',
        pain: 'Betrugsversuche werden zu spät erkannt. SMS-Warnungen werden übersehen.',
        detailedPain: 'Kreditkartenbetrug ist ein Milliardengeschäft. Wenn eine Karte in Thailand belastet wird, während der Kunde in Berlin ist, zählt jede Sekunde. Banken sperren oft die Karte prophylaktisch – zum massiven Ärger des Kunden, der vielleicht doch im Urlaub ist und jetzt ohne Geld dasteht. SMS-Warnungen ("Warst du das?") gehen oft unter oder kommen nicht an. Ein Anruf ist der sicherste Weg, aber manuell nicht leistbar für Millionen Kunden.',
        solution: 'Sofortiger KI-Sicherheitsanruf bei Verdacht. Klärt Situation in 30 Sekunden.',
        detailedSolution: 'Sobald der Fraud-Algorithmus Alarm schlägt, ruft die KI an: "Hier ist der Sicherheitsdienst Ihrer Bank. Wir sehen eine Zahlung über 500€ in Bangkok. Haben Sie diese getätigt?". Kunde: "Ja". KI: "Danke, Karte bleibt aktiv. Schönen Urlaub!" Kunde: "Nein!". KI: "Alles klar, Karte ist gesperrt, eine neue wird sofort versendet. Sie müssen nichts weiter tun." Das ist schnell, sicher und gibt dem Kunden ein Gefühl von exzellentem Schutz ("Peace of Mind").',
        workflowSteps: ['Fraud Trigger', 'Priorisierter Call', 'Auth-Abfrage', 'Sperrung/Freigabe', 'Bestätigungs-SMS'],
        roiStats: [{ label: 'Betrugsschaden', value: '-80%' }, { label: 'False Positives', value: 'Gelöst' }],
        veoPrompt: '',
        iconName: 'Siren',
        simulationType: 'glitch',
        calculator: {
          inputLabel: 'Fraud Alerts / Monat',
          inputMin: 100,
          inputMax: 5000,
          inputStep: 100,
          defaultValue: 500,
          multiplier: 50,
          outputLabel: 'Vermiedener Schaden',
          isCurrency: true,
          description: 'Verhinderung von Chargebacks und manuellen Klärungskosten.'
        }
      }
    ]
  },
  {
    id: 'hospitality',
    name: 'Gastronomie & Events',
    cases: [
      {
        id: 'restaurant-reservation',
        title: 'Reservierung & Menü',
        pain: 'Telefonklingeln im Service-Stress kostet Umsatz und nervt Gäste vor Ort.',
        detailedPain: 'Es ist 19 Uhr, das Restaurant ist voll, das Servicepersonal rotiert. Gleichzeitig klingelt das Telefon Sturm für Reservierungen. Geht der Kellner ran, müssen die Gäste im Restaurant warten. Geht keiner ran, geht Umsatz verloren und der Anrufer ist frustriert. Ein klassisches Dilemma in der Gastronomie, das Servicequalität und Umsatz gleichermaßen schädigt. Gäste, die nicht durchkommen, buchen oft sofort woanders.',
        solution: 'KI managt Reservierungen 24/7 & beantwortet Fragen. Personal hat Hände frei.',
        detailedSolution: 'titanspear.ai nimmt jeden Anruf sofort entgegen. Die KI ist direkt per API mit Ihrem Reservierungssystem (OpenTable, Reserbio, TheFork) verbunden. Sie prüft Verfügbarkeiten in Echtzeit und bucht Tische verbindlich ein. Sie beantwortet auch Standardfragen: "Haben Sie glutenfreie Pizza? Haben Sie draußen noch Platz?". Ihr Personal kann sich zu 100% auf die Gäste konzentrieren, die schon da sind. Das Ergebnis: Mehr Umsatz durch bessere Erreichbarkeit und besseren Service vor Ort.',
        workflowSteps: ['Inbound Call', 'Tisch-Verfügbarkeit Check (API)', 'Buchung im System', 'Bestätigungs-SMS', 'Menü-Infos'],
        roiStats: [{ label: 'No-Shows', value: '-30%' }, { label: 'Service-Qualität', value: 'Top' }],
        veoPrompt: '',
        iconName: 'UtensilsCrossed',
        simulationType: 'glitch', 
        calculator: {
          inputLabel: 'Anrufe pro Abend',
          inputMin: 5,
          inputMax: 100,
          inputStep: 5,
          defaultValue: 20,
          multiplier: 5 * 30, 
          outputLabel: 'Gesparte Service-Minuten / Monat',
          isCurrency: false,
          unit: 'min',
          description: 'Entlastung des Service-Personals (5 Min pro Call).'
        }
      },
      {
        id: 'hotel-concierge',
        title: 'Hotel Digital Concierge',
        pain: 'Rezeption ist überlastet mit Routinefragen. Gäste warten beim Check-in.',
        detailedPain: 'In Hotels rufen Gäste oft von den Zimmern an: "Wann gibt es Frühstück? Ich brauche mehr Handtücher. Wie ist das WLAN-Passwort?". Die Rezeption ist aber gleichzeitig für Check-in und Check-out zuständig. Lange Warteschlangen in der Lobby entstehen, weil das Personal telefoniert. Das drückt die Sterne-Bewertung und hinterlässt einen schlechten ersten Eindruck.',
        solution: 'Zimmer-KI beantwortet alle Gästefragen & leitet Bestellungen an Housekeeping.',
        detailedSolution: 'Die KI nimmt interne Anrufe sofort an. "Frühstück ist von 7 bis 11 Uhr im Erdgeschoss." "Handtücher kommen sofort." (Erstellt automatisch ein Ticket für das Housekeeping). Sie kann sogar Room-Service Bestellungen aufnehmen und direkt in die Küche drucken. Die Rezeption bleibt frei für den persönlichen Empfang neuer Gäste. Das ist Luxus-Service, digital skaliert für jedes Hotel.',
        workflowSteps: ['Zimmer-Anruf', 'Intent-Erkennung', 'Info-Ausgabe', 'Service-Ticket Erstellung', 'Feedback Loop'],
        roiStats: [{ label: 'Rezeption', value: 'Entlastet' }, { label: 'Upsell', value: '+15%' }],
        veoPrompt: '',
        iconName: 'Hotel',
        simulationType: 'audio',
        calculator: {
          inputLabel: 'Zimmer-Anrufe / Tag',
          inputMin: 10,
          inputMax: 500,
          inputStep: 10,
          defaultValue: 50,
          multiplier: 3 * 30,
          outputLabel: 'Stunden / Monat gespart',
          isCurrency: false,
          unit: 'h',
          description: '3 Min pro Routine-Anfrage gespart.'
        }
      },
      {
        id: 'event-sales',
        title: 'Event & Catering Sales',
        pain: 'Anfragen für Hochzeiten/Firmenfeiern bleiben liegen. Follow-up fehlt.',
        detailedPain: 'Events bringen den meisten Umsatz in der Gastro, aber die Planung ist komplex. Interessenten schicken eine Anfrage ("Feier für 50 Leute im Juli") und warten. Wenn der Event-Manager erst nach 3 Tagen antwortet, hat die Konkurrenz den Deal oft schon. Zudem muss oft mühsam hinterhertelefoniert werden, um Details (Menü, Deko, Technik) zu klären. Das bindet extrem viel Zeit.',
        solution: 'KI qualifiziert Event-Leads sofort & fasst Angebote automatisch nach.',
        detailedSolution: 'Jede Web-Anfrage löst einen sofortigen KI-Call aus: "Danke für die Anfrage! Welches Datum genau? Welches Budget pro Kopf? Vegetarisch oder Fleisch?". Die KI erstellt ein detailliertes Vorab-Dossier für den Event-Manager. Nach Versand des Angebots fasst sie automatisch und charmant nach, bis eine Entscheidung fällt. So wird aus jeder Anfrage das Maximum herausgeholt, und der Event-Kalender füllt sich von selbst.',
        workflowSteps: ['Web-Anfrage', 'Qualifizierungs-Call', 'Budget-Check', 'Auto-Follow-Up', 'Vertragsabschluss'],
        roiStats: [{ label: 'Conversion', value: '+35%' }, { label: 'Planungszeit', value: '-50%' }],
        veoPrompt: '',
        iconName: 'PartyPopper',
        simulationType: 'pipeline',
        calculator: {
          inputLabel: 'Event-Anfragen / Mo',
          inputMin: 5,
          inputMax: 100,
          inputStep: 1,
          defaultValue: 20,
          multiplier: 0.2 * 2000,
          outputLabel: 'Zusatz-Umsatz',
          isCurrency: true,
          description: '20% mehr Abschlüsse bei Ø 2.000€ Marge pro Event.'
        }
      }
    ]
  },
  {
    id: 'insurance',
    name: 'Versicherungen',
    cases: [
      {
        id: 'instant-claim',
        title: 'Instant Claim (Schaden)',
        pain: 'Prozesskosten > 150€ pro Schaden durch manuelle Erfassung. Kunden wechseln vor Wut.',
        detailedPain: 'Ein Schadensfall ist der "Moment der Wahrheit" für jeden Versicherer. Wenn der Kunde hier in Warteschleifen hängt oder komplizierte Papierformulare ausfüllen muss, kündigt er. Die manuelle Bearbeitung von Bagatellschäden (Handy, Glas, Hagel) durch menschliche Sachbearbeiter frisst zudem die Prämie der letzten Jahre komplett auf. Es dauert zu lange, ist fehleranfällig und kostet zu viel.',
        solution: 'Vollautomatisierte Aufnahme & Sofort-Check in < 3 Min. Spart 70% Prozesskosten.',
        detailedSolution: 'Der Kunde meldet den Schaden per Telefon oder App. Die KI nimmt den Bericht im natürlichen Dialog auf, prüft live die Deckung in der Police ("Ist Hagel versichert?") und fordert Fotos an. Eine Bildanalyse-KI (Computer Vision) prüft die Plausibilität. Bei grünem Licht erfolgt eine Sofort-Auszahlung oder Handwerker-Buchung in Echtzeit. Ein magisches Erlebnis für den Kunden und maximale Effizienz für den Versicherer.',
        workflowSteps: ['Schadenmeldung', 'Police & Deckungs-Check', 'KI-Bildanalyse', 'Betrugs-Check', 'Sofort-Regulierung'],
        roiStats: [{ label: 'Kosten', value: '-70%' }, { label: 'NPS', value: '+15' }],
        veoPrompt: '',
        iconName: 'FileSearch',
        simulationType: 'scanning',
        calculator: {
          inputLabel: 'Schäden / Monat',
          inputMin: 100,
          inputMax: 5000,
          inputStep: 100,
          defaultValue: 500,
          multiplier: 100,
          outputLabel: 'Ersparnis',
          isCurrency: true,
          description: 'Reduzktion der Prozesskosten um ca. 100€ pro Fall.'
        }
      },
      {
        id: 'policy-renewal',
        title: 'Bestandspolicen-Check',
        pain: 'Kunden kündigen, weil sie woanders billiger versichert sind. Churn Rate steigt.',
        detailedPain: 'Versicherungen sind ein "Low Interest" Produkt. Kunden beschäftigen sich nur damit, wenn die Rechnung kommt – und wechseln dann oft impulsiv zum billigeren Vergleichsportal. Makler schaffen es zeitlich nicht, jeden Bestandskunden jährlich anzurufen, um den Schutz anzupassen. So veraltet der Schutz, Lücken entstehen, und die emotionale Bindung zum Versicherer bröckelt.',
        solution: 'Jährlicher KI-Service-Call: "Passt Ihr Schutz noch?". Erhöht Bindung & Upsell.',
        detailedSolution: 'Einmal im Jahr meldet sich der "Versicherungs-Health-Check". "Guten Tag, Sie sind seit 3 Jahren bei uns versichert. Haben Sie neue Anschaffungen gemacht? Wir haben einen neuen Tarif, der besser passt." Die KI optimiert den Schutz proaktiv. Der Kunde fühlt sich gut betreut und verlängert. Oft entstehen Upsells (Zahnzusatz, Rechtsschutz, E-Bike) ganz natürlich im Gespräch, weil der Bedarf erkannt wird.',
        workflowSteps: ['Jahrestag Trigger', 'Service-Call', 'Bedarfs-Check', 'Tarif-Update Angebot', 'Abschluss'],
        roiStats: [{ label: 'Churn', value: '-40%' }, { label: 'Cross-Sell', value: '+10%' }],
        veoPrompt: '',
        iconName: 'ScrollText',
        simulationType: 'chart',
        calculator: {
          inputLabel: 'Bestandskunden',
          inputMin: 1000,
          inputMax: 100000,
          inputStep: 1000,
          defaultValue: 10000,
          multiplier: 15,
          outputLabel: 'Gehaltener Umsatz',
          isCurrency: true,
          description: '15€ Marge pro gehaltener Police.'
        }
      },
      {
        id: 'broker-support',
        title: 'Makler-Support Hotline',
        pain: 'Makler hängen in der Warteschleife der Zentrale. Können Kunden vor Ort nicht beraten.',
        detailedPain: 'Freie Makler verkaufen Ihre Policen. Aber wenn sie im Kundengespräch eine Rückfrage haben ("Ist Hochwasser in Zone 3 hier gedeckt?"), müssen sie schnell eine Antwort haben. Hängen sie 20 Minuten in der Makler-Betreuung der Zentrale, verkaufen sie stattdessen das Produkt der Konkurrenz, wo jemand abhebt. Erreichbarkeit entscheidet im Vertrieb über den Erfolg.',
        solution: 'Exklusive KI-Hotline für Vertriebspartner. Sofortige Fachantworten 24/7.',
        detailedSolution: 'Die KI agiert als "Super-Expertin" für Ihre Produkte. Der Makler ruft an, authentifiziert sich und fragt nach Details zu Klauseln oder Tarifen. Er bekommt sofort präzise Auskunft (basierend auf einer RAG-Suche in den aktuellen Versicherungsbedingungen). Die KI kann auch Angebote live rechnen und per Mail zusenden. Makler lieben diesen Service und werden Ihre Produkte priorisiert anbieten.',
        workflowSteps: ['Partner-Call', 'Authentifizierung', 'Knowledge-Base Search', 'Tarif-Kalkulation', 'Email-Versand'],
        roiStats: [{ label: 'Partner-Zufriedenheit', value: 'Top' }, { label: 'Sales', value: '++' }],
        veoPrompt: '',
        iconName: 'Headset',
        simulationType: 'network',
        calculator: {
          inputLabel: 'Makler-Anrufe / Mo',
          inputMin: 100,
          inputMax: 5000,
          inputStep: 100,
          defaultValue: 1000,
          multiplier: 8,
          outputLabel: 'Effizienzgewinn',
          isCurrency: true,
          description: '8€ Prozesskosten pro Call gespart vs. Human Agent.'
        }
      }
    ]
  },
  {
    id: 'real-estate',
    name: 'Immobilien & Vertrieb',
    cases: [
      {
        id: 'immo-qualify',
        title: 'Immo-Qualifizierung',
        pain: 'Besichtigungstourismus frisst 15h/Woche. Makler sind teure Türöffner für Leute ohne Geld.',
        detailedPain: 'Auf Immobilienportalen bewerben sich hunderte Leute auf eine attraktive Wohnung. 90% davon können sich die Miete/den Kaufpreis nicht leisten oder passen nicht ins Profil. Makler verbringen ihre Abende und Wochenenden damit, Leuten die Wohnung zu zeigen, die am Ende eh nicht unterschreiben ("Besichtigungstourismus"). Das ist massive Zeitverschwendung und frustriert Top-Verkäufer, die eigentlich Deals closen sollten.',
        solution: 'KI prüft Bonität VOR dem Termin. Nur kaufbereite Kunden erhalten Slots.',
        detailedSolution: 'Die KI schaltet sich als intelligenter Filter dazwischen. Jeder Interessent wird sofort angerufen: "Wie hoch ist Ihr Haushaltsnetto? Haben Sie bereits eine Finanzierungsbestätigung? Wann wollen Sie einziehen?". Nur wer durch diesen Filter kommt, erhält Zugang zum Kalender für einen Besichtigungstermin. Der Makler macht nur noch Termine mit echten, qualifizierten Kaufinteressenten. Die Abschlussquote pro Besichtigung steigt massiv.',
        workflowSteps: ['Portal Anfrage', 'Qualifizierungs-Call', 'Bonitäts-Check', 'Termin-Buchung', 'Absage an Rest'],
        roiStats: [{ label: 'Zeit', value: '25h/Wo' }, { label: 'Qualität', value: '100%' }],
        veoPrompt: '',
        iconName: 'Home',
        simulationType: 'workflow',
        highlight: true,
        calculator: {
          inputLabel: 'Anfragen / Monat',
          inputMin: 10,
          inputMax: 500,
          inputStep: 10,
          defaultValue: 50,
          multiplier: 0.5,
          outputLabel: 'Stunden gespart',
          isCurrency: false,
          unit: 'h',
          description: '30 Min pro unqualifiziertem Lead gespart.'
        }
      },
      {
        id: 'immo-acq',
        title: 'Objekt-Akquise',
        pain: 'Kaltakquise ist für Makler die Hölle. Zu wenig Zeit für zu viele Anrufe.',
        detailedPain: 'Das größte Problem eines Maklers ist nicht der Verkauf, sondern der Einkauf ("Listings"). Eigentümer anzurufen, die privat inserieren ("Von Privat an Privat"), ist der effektivste Weg, aber extrem mühsam und psychologisch belastend. Es hagelt Absagen. Viele Makler meiden diese Arbeit und haben dann Umsatzflauten, weil der Nachschub an Immobilien fehlt. Die Pipeline trocknet aus.',
        solution: 'KI telefoniert Listen ab & filtert Verkaufswillige heraus. Skalierbares Wachstum.',
        detailedSolution: 'Die KI übernimmt die "Drecksarbeit" der Kaltakquise emotionslos. Sie ruft private Inserate an und fragt höflich und professionell: "Planen Sie wirklich ohne Makler zu verkaufen, oder sind Sie offen für professionelle Unterstützung, wenn wir einen Käufer hätten?". Bei Interesse übergibt sie das Gespräch an den Makler ("Warm Lead"). Sie haben jeden Morgen 3-5 warme Eigentümer-Leads im Postfach, ohne selbst den Hörer in die Hand genommen zu haben.',
        workflowSteps: ['Lead Liste (Privatinserate)', 'KI-Outbound Call', 'Einwandbehandlung', 'Interesse Wecken', 'Terminierung'],
        roiStats: [{ label: 'Kosten', value: '-80%' }, { label: 'Leads', value: '++' }],
        veoPrompt: '',
        iconName: 'Building',
        simulationType: 'network',
        calculator: {
          inputLabel: 'Calls / Kampagne',
          inputMin: 500,
          inputMax: 10000,
          inputStep: 500,
          defaultValue: 1000,
          multiplier: 4.5,
          outputLabel: 'Ersparnis',
          isCurrency: true,
          description: 'Vs. manuelle Callcenter Kosten (ca. 5€ pro Call).'
        }
      },
      {
        id: 'expose-bot',
        title: 'Exposé-Bot 24/7',
        pain: 'Interessenten wollen das Exposé SOFORT. Manuelle Bearbeitung verzögert den Verkauf.',
        detailedPain: 'Immobilien-Kunden surfen abends und am Wochenende. Wenn sie eine Anfrage senden, wollen sie das Exposé sofort haben, solange das emotionale Interesse hoch ist. Wenn das Büro erst am Montag reagiert, ist der Kunde oft schon weitergezogen. Zudem sind Standardfragen ("Ist ein Balkon da? Wie hoch ist das Hausgeld?") repetitiv und blockieren das Backoffice.',
        solution: 'KI versendet Exposé automatisch & beantwortet erste Fragen in Echtzeit.',
        detailedSolution: 'Die KI erkennt die Anfrage aus dem Portal (ImmoScout etc.), prüft die Daten und sendet das Exposé per WhatsApp oder Email innerhalb von Sekunden. Sie steht danach im Chat für Rückfragen bereit. "Ja, Balkon ist dabei, Südseite. Hausgeld beträgt 350€." Das steigert die Kundenzufriedenheit und beschleunigt den Vertriebsprozess, da keine Zeit mit Warten auf Dokumente verschwendet wird.',
        workflowSteps: ['Anfrage Eingang', 'Auto-Exposé Versand', 'Q&A Chat', 'Besichtigungs-Option', 'CRM Log'],
        roiStats: [{ label: 'Speed', value: 'Sofort' }, { label: 'Admin', value: '-60%' }],
        veoPrompt: '',
        iconName: 'FileText',
        simulationType: 'chat',
        calculator: {
          inputLabel: 'Anfragen / Monat',
          inputMin: 20,
          inputMax: 500,
          inputStep: 10,
          defaultValue: 100,
          multiplier: 0.25 * 60,
          outputLabel: 'Gesparte Admin-Minuten',
          isCurrency: false,
          unit: 'min',
          description: '15 Min manuelle Bearbeitung pro Anfrage gespart.'
        }
      }
    ]
  },
  {
    id: 'property-management',
    name: 'Hausverwaltung & Facility',
    cases: [
      {
        id: 'emergency-dispatch',
        title: 'Notfall-Dispatching 24/7',
        pain: 'Rohrbruch am Sonntagabend. Mieter ruft den Hausverwalter privat an.',
        detailedPain: 'Hausverwalter stehen unter enormem Stress. Wenn in einem Objekt am Wochenende die Heizung ausfällt oder Wasser durch die Decke tropft, erwarten Mieter sofortige Hilfe. Oft klingelt das private Handy des Verwalters, oder der Anrufbeantworter läuft voll. Die Koordination von Handwerkern aus dem Wochenende heraus ist chaotisch, teuer und führt zu Burnout bei Verwaltern.',
        solution: 'KI nimmt Notrufe an, klassifiziert Dringlichkeit & beauftragt Handwerker.',
        detailedSolution: 'Die KI ist die erste Anlaufstelle. "Ist es ein Notfall (Wasser/Gas/Strom)?". Sie beruhigt den Mieter, nimmt den Schaden strukturiert auf und prüft die Zuständigkeit. Bei echten Notfällen alarmiert sie den hinterlegten Notdienst-Handwerker direkt per Anruf/SMS ("Rohrbruch Objekt X, bitte sofort anfahren"). Der Verwalter erhält nur einen Bericht: "Problem gelöst". Maximale Mieterzufriedenheit, null Stress.',
        workflowSteps: ['Notruf-Eingang', 'Schadens-Klassifizierung', 'Handwerker-Datenbank Match', 'Beauftragung', 'Mieter-Info'],
        roiStats: [{ label: 'Reaktionszeit', value: '<2 Min' }, { label: 'Stress', value: '0%' }],
        veoPrompt: '',
        iconName: 'Siren',
        simulationType: 'glitch',
        calculator: {
          inputLabel: 'Verwaltete Einheiten',
          inputMin: 100,
          inputMax: 5000,
          inputStep: 100,
          defaultValue: 500,
          multiplier: 5,
          outputLabel: 'Gesparte Stunden / Mo',
          isCurrency: false,
          unit: 'h',
          description: 'Ca. 5h Notfall-Management pro 100 Einheiten gespart.'
        }
      },
      {
        id: 'rent-arrears',
        title: 'Mietrückstands-Management',
        pain: 'Mieten werden nicht gezahlt. Mahnungen sind unangenehm und werden ignoriert.',
        detailedPain: 'Mietrückstände zu verfolgen ist eine der unangenehmsten Aufgaben für Verwalter. Schriftliche Mahnungen sind formal notwendig, lösen aber oft das Problem nicht, wenn der Mieter einfach klamm ist oder den Dauerauftrag vergessen hat. Persönliche Anrufe kosten Überwindung und Zeit. Oft laufen Rückstände monatelang auf, bis die Kündigung droht.',
        solution: 'Empathischer KI-Anruf erinnert an Zahlung & vereinbart Lösung.',
        detailedSolution: 'Die KI ruft wenige Tage nach Fälligkeit an. "Guten Tag, uns ist aufgefallen, dass die Miete noch nicht eingegangen ist. Gab es ein Problem mit der Bank?". Dieser sanfte Druck wirkt Wunder. Oft hat der Mieter es nur vergessen. Die KI kann direkt Ratenzahlungen vereinbaren (im Rahmen der Vorgaben) oder Zahlungsziele notieren. Das Geld fließt schneller, und das Verhältnis bleibt intakt.',
        workflowSteps: ['Rückstands-Trigger', 'KI-Call (Soft Collection)', 'Klärung Ursache', 'Zahlungs-Zusage', 'Wiedervorlage'],
        roiStats: [{ label: 'Zahlungsmoral', value: '+40%' }, { label: 'Konflikte', value: '-20%' }],
        veoPrompt: '',
        iconName: 'HandCoins',
        simulationType: 'chart',
        calculator: {
          inputLabel: 'Rückstände / Monat',
          inputMin: 10,
          inputMax: 200,
          inputStep: 5,
          defaultValue: 20,
          multiplier: 50,
          outputLabel: 'Liquiditäts-Vorteil',
          isCurrency: true,
          description: '50€ Bearbeitungskosten pro Fall gespart.'
        }
      },
      {
        id: 'utility-explainer',
        title: 'Nebenkosten-Erklärer',
        pain: 'Nach Versand der Jahresabrechnung glühen die Telefone. Mieter verstehen Abrechnung nicht.',
        detailedPain: 'Die Nebenkostenabrechnung ist kompliziert. Sobald sie im Briefkasten liegt, rufen hunderte Mieter an: "Warum muss ich nachzahlen? Warum ist die Heizung teurer geworden?". Das Telefon in der Hausverwaltung ist für 2 Wochen blockiert. Mitarbeiter erklären 100-mal am Tag das Gleiche. Das lähmt den gesamten Betrieb.',
        solution: 'KI beantwortet Fragen zur Abrechnung ("Warum höher?") basierend auf Daten.',
        detailedSolution: 'Wir trainieren den Bot mit den allgemeinen Daten der Abrechnung (Gaspreissteigerung, kalter Winter). Der Mieter ruft an, und die KI erklärt geduldig: "Die Nachzahlung resultiert aus dem gestiegenen Gaspreis (+20%) und dem kälteren Januar." Sie kann auch Ratenzahlungen für die Nachzahlung direkt vereinbaren. Die Mieter fühlen sich aufgeklärt, und das Büro bleibt arbeitsfähig.',
        workflowSteps: ['Inbound Call (Abrechnung)', 'Identifizierung', 'Daten-Abgleich', 'Erklärung (FAQ)', 'Raten-Vereinbarung'],
        roiStats: [{ label: 'Call-Deflection', value: '80%' }, { label: 'Erklär-Zeit', value: 'Gespart' }],
        veoPrompt: '',
        iconName: 'FileSpreadsheet',
        simulationType: 'chat',
        calculator: {
          inputLabel: 'Mieter-Anrufe / Jahr',
          inputMin: 100,
          inputMax: 5000,
          inputStep: 100,
          defaultValue: 500,
          multiplier: 10,
          outputLabel: 'Gesparte Personalkosten',
          isCurrency: true,
          description: '10€ Personalkosten pro erklärter Abrechnung gespart.'
        }
      }
    ]
  },
  {
    id: 'industry',
    name: 'Industrie & Fertigung',
    cases: [
      {
        id: 'supply-chain',
        title: 'Just-in-Time Einkauf',
        pain: 'Produktionsstillstand wegen fehlender C-Teile kostet 5.000€ pro Stunde.',
        detailedPain: 'In der modernen Fertigung darf nichts fehlen. Doch oft sind es die kleinen C-Teile (Schrauben, Dichtungen, Verpackung), die vergessen werden. Wenn das Band steht, kostet jede Minute Tausende Euro an Ausfall und Konventionalstrafen. Manuelle Bestellprozesse per Fax oder Email sind zu langsam und fehleranfällig für eine echte "Just-in-Time" Produktion.',
        solution: 'KI bestellt autonom bei Meldebestand. Garantiert 100% Verfügbarkeit.',
        detailedSolution: 'IoT-Sensoren im Lager melden: "Schraube X unter Meldebestand". Die KI greift ein. Sie prüft Bestände bei Lieferanten (per API oder Call), vergleicht Preise und löst die Express-Bestellung autonom aus. Sie informiert den Schichtleiter über die geplante Ankunftszeit. Die Versorgungskette wird autonom und rissfest. Mitarbeiter müssen keine Bestellformulare mehr ausfüllen.',
        workflowSteps: ['Sensor Trigger', 'Lieferanten Check', 'Preis/Zeit Vergleich', 'Bestell-Auslösung', 'ERP Sync'],
        roiStats: [{ label: 'Downtime', value: 'Minimiert' }, { label: 'Speed', value: 'Sofort' }],
        veoPrompt: '',
        iconName: 'Container',
        simulationType: 'workflow',
        calculator: {
          inputLabel: 'Bestellungen / Mo',
          inputMin: 50,
          inputMax: 2000,
          inputStep: 50,
          defaultValue: 200,
          multiplier: 45,
          outputLabel: 'Prozesskosten',
          isCurrency: true,
          description: 'Reduzierte Admin-Kosten pro Bestellvorgang.'
        }
      },
      {
        id: 'machine-alert',
        title: 'Produktions-Alarm',
        pain: 'Kritische Alarme werden nachts überhört. Email-Alerts reichen nicht.',
        detailedPain: 'Serverraum überhitzt? Kühlkette unterbrochen? Maschine steht? Solche Alarme kommen oft nachts oder am Wochenende. Eine Email oder SMS wird vom Bereitschaftsdienst im Schlaf leicht überhört. Bis morgens jemand kommt, ist die Ware verdorben oder die Maschine zerstört. Der Schaden geht in die Millionen, nur weil eine Benachrichtigung nicht ankam.',
        solution: 'Eskalations-Calls bis zur Quittierung. Techniker wird sicher geweckt.',
        detailedSolution: 'Die KI macht Terror, bis das Problem gelöst ist. Sie ruft Techniker 1 an. Geht er nicht ran, ruft sie Techniker 2 an. Dann den Betriebsleiter. Sie hört erst auf, wenn jemand den Anruf annimmt und per Tastendruck bestätigt: "Ich kümmere mich". Sie liest den Fehlercode vor und kann ggf. sogar erste Remote-Neustarts durchführen. Das ist die ultimative Versicherung gegen teure Ausfälle.',
        workflowSteps: ['System Error', 'Call Chain Start', 'Eskalations-Stufen', 'Bestätigungscode', 'Incident Log'],
        roiStats: [{ label: 'Reaktion', value: '<30s' }, { label: 'Sicherheit', value: 'Max' }],
        veoPrompt: '',
        iconName: 'Siren',
        simulationType: 'glitch',
        calculator: {
          inputLabel: 'Alarme / Jahr',
          inputMin: 1,
          inputMax: 50,
          inputStep: 1,
          defaultValue: 5,
          multiplier: 15000,
          outputLabel: 'Risiko-Vermeidung',
          isCurrency: true,
          description: 'Vermeidung von Produktionsausfall (konservativ geschätzt).'
        }
      },
      {
        id: 'shift-filler',
        title: 'Schichtplan-Notfall Manager',
        pain: 'Krankmeldungen um 5 Uhr morgens verursachen Panik beim Schichtleiter.',
        detailedPain: 'Wenn ein Mitarbeiter morgens um 5 Uhr krank anruft, beginnt der Stress. Der Schichtleiter muss hektisch herumtelefonieren, um Ersatz zu finden, während die Produktion anlaufen sollte. Das bindet ihn stundenlang und gefährdet den Produktionsstart. Oft wird dann teures Leihpersonal gebucht, weil man die eigenen Leute nicht erreicht hat.',
        solution: 'KI ruft verfügbare Mitarbeiter automatisch an, bis die Schicht besetzt ist.',
        detailedSolution: 'Mitarbeiter meldet sich krank (per App/Bot). Die KI prüft sofort die Verfügbarkeitsliste. Sie ruft qualifizierte Kollegen an: "Kannst du heute einspringen? Es gibt einen Bonus." Sobald einer zusagt, informiert sie den Schichtleiter und aktualisiert den Plan. Das Problem ist gelöst, bevor der Chef im Büro ist. Fair, schnell und ohne Chaos.',
        workflowSteps: ['Krankmeldung', 'Verfügbarkeits-Check', 'Auto-Call Pool', 'Zusage Erfassung', 'Schichtplan-Update'],
        roiStats: [{ label: 'Planungszeit', value: '-90%' }, { label: 'Produktion', value: 'Gesichert' }],
        veoPrompt: '',
        iconName: 'CalendarClock',
        simulationType: 'network',
        calculator: {
          inputLabel: 'Krankheitsfälle / Mo',
          inputMin: 5,
          inputMax: 100,
          inputStep: 5,
          defaultValue: 20,
          multiplier: 45,
          outputLabel: 'Gesparte Planer-Minuten',
          isCurrency: false,
          unit: 'min',
          description: '45 Min Telefoniererei pro Ausfall gespart.'
        }
      }
    ]
  },
  {
    id: 'logistics',
    name: 'Logistik & Spedition',
    cases: [
      {
        id: 'driver-checkin',
        title: 'Driver Check-In Multi-Language',
        pain: 'LKW-Fahrer sprechen oft kein Deutsch/Englisch. Abfertigung am Tor dauert ewig.',
        detailedPain: 'An der Laderampe staut es sich. Fahrer aus Osteuropa oder Übersee verstehen die Anweisungen des Pförtners nicht. Dokumente fehlen, Sicherheitsunterweisungen werden nicht verstanden. Das verzögert den gesamten Umschlag. Disponenten müssen oft zum Tor laufen und mit Händen und Füßen übersetzen.',
        solution: 'KI-Voice-Bot spricht 30 Sprachen. Führt Check-In & Safety-Briefing durch.',
        detailedSolution: 'Der Fahrer ruft bei Ankunft eine Nummer an (oder scannt QR-Code). Die KI fragt: "Which language?". Sie führt den kompletten Check-In Prozess in seiner Muttersprache durch (Polnisch, Rumänisch, Türkisch, etc.). Sie prüft Referenznummern, weist ihm ein Tor zu und führt die Sicherheitsunterweisung durch. Der Fahrer kommt vorbereitet und registriert ans Tor. Der Stau löst sich auf.',
        workflowSteps: ['Fahrer Anruf', 'Spracherkennung', 'Daten-Abgleich (TMS)', 'Tor-Zuweisung', 'Sicherheits-Check'],
        roiStats: [{ label: 'Abfertigungszeit', value: '-50%' }, { label: 'Sprachbarriere', value: '0%' }],
        veoPrompt: '',
        iconName: 'Languages',
        simulationType: 'audio',
        calculator: {
          inputLabel: 'LKWs / Tag',
          inputMin: 10,
          inputMax: 500,
          inputStep: 10,
          defaultValue: 50,
          multiplier: 10 * 20,
          outputLabel: 'Zeitgewinn / Monat',
          isCurrency: false,
          unit: 'min',
          description: '10 Min pro LKW gespart durch Auto-Check-In.'
        }
      },
      {
        id: 'freight-spot',
        title: 'Fracht Spot-Bidding',
        pain: 'Teilladungen müssen schnell verkauft werden. Disponenten telefonieren Listen ab.',
        detailedPain: 'Ein LKW ist nicht voll. Um die Marge zu retten, muss die Restkapazität auf dem Spotmarkt verkauft werden. Disponenten rufen Subunternehmer an: "Hast du was von Hamburg nach München?". Das ist mühsam und zeitkritisch. Oft fährt der LKW halb leer, weil nicht schnell genug ein Partner gefunden wurde.',
        solution: 'KI ruft Partner-Netzwerk an & verhandelt Preise für Restladung.',
        detailedSolution: 'Die KI kennt die Route und die freie Kapazität. Sie ruft passende Partner aus der Datenbank an: "Wir haben 5 Lademeter ab Hamburg morgen frei. Hast du Bedarf? Wir bieten X Euro." Sie kann Preise in einem definierten Rahmen verhandeln. Sobald ein Partner zusagt, bucht sie den Auftrag ins TMS. Die Auslastung wird maximiert, der Disponent entlastet.',
        workflowSteps: ['Leerkapazität Trigger', 'Partner Match', 'Outbound Bidding', 'Preis-Verhandlung', 'Buchung'],
        roiStats: [{ label: 'Auslastung', value: 'Max' }, { label: 'Telefonzeit', value: '-80%' }],
        veoPrompt: '',
        iconName: 'Truck',
        simulationType: 'network',
        calculator: {
          inputLabel: 'Spot-Ladungen / Mo',
          inputMin: 10,
          inputMax: 200,
          inputStep: 10,
          defaultValue: 50,
          multiplier: 150,
          outputLabel: 'Zusatz-Marge',
          isCurrency: true,
          description: '150€ Deckungsbeitrag pro verkaufter Restladung.'
        }
      },
      {
        id: 'delivery-notify',
        title: 'Liefer-Avisierung (Last Mile)',
        pain: 'Empfänger ist nicht da. LKW steht vor verschlossener Tür. Zweitzustellung kostet.',
        detailedPain: 'In der Baustellen- oder B2B-Logistik ist nichts teurer als eine vergebliche Anfahrt. Der LKW kommt mit dem Kran, aber niemand ist auf der Baustelle, um die Ware abzunehmen. Oder der Staplerfahrer macht gerade Mittag. Der LKW muss warten (Standgeld) oder die Ware wieder mitnehmen. Das zerstört die Tourenplanung.',
        solution: 'KI ruft Empfänger 30 Min vor Ankunft an: "Sind Sie bereit?".',
        detailedSolution: 'Das Telematik-System meldet "Ankunft in 30 Min". Die KI ruft den Ansprechpartner vor Ort an: "Unser LKW kommt gleich. Ist die Zufahrt frei und ein Stapler bereit?". Falls nein, kann der Fahrer sofort umgeleitet werden oder eine Wartezeit vereinbart werden. Das verhindert teure Fehlfahrten und Standzeiten massiv.',
        workflowSteps: ['Geofence Trigger', 'Avis-Call', 'Bestätigung', 'Fahrer-Update', 'Zustellung'],
        roiStats: [{ label: 'Fehlfahrten', value: '-90%' }, { label: 'Standgeld', value: '0€' }],
        veoPrompt: '',
        iconName: 'MapPin',
        simulationType: 'workflow',
        calculator: {
          inputLabel: 'Lieferungen / Tag',
          inputMin: 10,
          inputMax: 200,
          inputStep: 10,
          defaultValue: 40,
          multiplier: 0.1 * 150,
          outputLabel: 'Gesparte Fehlkosten',
          isCurrency: true,
          description: 'Vermeidung von 10% Fehlfahrten (ca. 150€ Kosten).'
        }
      }
    ]
  },
  {
    id: 'legal',
    name: 'Recht & Kanzlei',
    cases: [
      {
        id: 'legal-intake',
        title: 'Mandats-Schutzschild',
        pain: 'Anwälte beraten gratis am Telefon. Unlukrative Fälle verstopfen die Leitung.',
        detailedPain: 'Anwälte verkaufen ihre Zeit. Doch wenn das Telefon klingelt, lassen sie sich oft in lange Erstgespräche verwickeln, nur um am Ende zu merken: "Keine Rechtsschutzversicherung, Streitwert zu gering". Diese Gratis-Beratung kostet die Kanzlei jeden Tag hunderte Euro an "Billable Hours". Assistenten sind oft überfordert mit der rechtlichen Einordnung und stellen alles durch.',
        solution: 'KI übernimmt Intake, prüft Versicherung & filtert lukrative Mandate.',
        detailedSolution: 'Die KI ist der intelligente Türsteher der Kanzlei. Sie nimmt den Anruf an, nimmt den Sachverhalt strukturiert auf und prüft die harten Fakten: "Sind Sie rechtsschutzversichert? Um welchen Betrag geht es?". Basierend auf Kanzlei-Vorgaben filtert sie unlukrative Fälle aus (oder verweist auf Pauschalangebote) und stellt nur Top-Mandate zum Anwalt durch. Sie arbeiten nur noch an Fällen, die Umsatz bringen.',
        workflowSteps: ['Mandanten Anruf', 'Sachverhalts-Aufnahme', 'RSV Deckungsanfrage', 'Streitwert-Check', 'Terminvergabe'],
        roiStats: [{ label: 'Zeit', value: '+5h/Wo' }, { label: 'Umsatz', value: 'Optimiert' }],
        veoPrompt: '',
        iconName: 'Scale',
        simulationType: 'workflow',
        calculator: {
          inputLabel: 'Anfragen / Woche',
          inputMin: 10,
          inputMax: 200,
          inputStep: 5,
          defaultValue: 30,
          multiplier: 250, 
          outputLabel: 'Honorar-Potenzial',
          isCurrency: true,
          description: 'Fakturierbare Zeit gewonnen (ca. 1h pro Woche gespart).'
        }
      },
      {
        id: 'doc-chase',
        title: 'Akten-Jäger',
        pain: 'Verfahren stocken, weil Mandanten Unterlagen nicht einreichen. Ewiges Hinterherlaufen.',
        detailedPain: 'Ein Fall kann nicht bearbeitet werden, weil die Vollmacht fehlt oder der Kontoauszug noch nicht da ist. Rechtsanwaltsfachangestellte verbringen Stunden damit, Mandanten per Mail und Telefon zu erinnern. "Haben Sie uns schon X geschickt?". Das ist ineffizient, nervt alle Beteiligten und gefährdet Fristen. Der Cashflow der Kanzlei leidet, weil Fälle nicht abgerechnet werden können.',
        solution: 'KI fordert fehlende Dokumente proaktiv an & erklärt, wie man sie einreicht.',
        detailedSolution: 'Die KI scannt die Akte automatisch auf Lücken. Fehlt etwas, ruft sie den Mandanten an: "Wir brauchen noch Ihre Unterschrift, sonst verpassen wir die Frist. Soll ich Ihnen den Link nochmal aufs Handy schicken?". Sie erklärt geduldig, wie man Dokumente scannt oder fotografiert. Die Akten werden schneller vollständig, Fälle schneller bearbeitet und abgerechnet.',
        workflowSteps: ['Akten-Check', 'Erinnerungs-Call', 'Upload-Link Versand', 'Eingangs-Bestätigung', 'Anwalt-Info'],
        roiStats: [{ label: 'Durchlaufzeit', value: '-20%' }, { label: 'Admin', value: 'Entlastet' }],
        veoPrompt: '',
        iconName: 'FileClock',
        simulationType: 'scanning',
        calculator: {
          inputLabel: 'Laufende Fälle',
          inputMin: 20,
          inputMax: 500,
          inputStep: 10,
          defaultValue: 100,
          multiplier: 0.2 * 60,
          outputLabel: 'Gesparte Admin-Minuten',
          isCurrency: false,
          unit: 'min',
          description: '12 Min Nachtelefonieren pro Fall gespart.'
        }
      },
      {
        id: 'client-update',
        title: 'Mandanten-Update',
        pain: 'Mandanten rufen ständig an: "Gibt es was Neues?". Das stört die anwaltliche Arbeit.',
        detailedPain: 'Rechtsprozesse dauern lange. Mandanten werden ungeduldig, haben Angst und rufen an, nur um zu hören: "Wir warten noch auf das Gericht". Diese "Status-Calls" unterbrechen den Anwalt bei der Arbeit an komplexen Schriftsätzen. Ignoriert man sie, fühlt sich der Mandant schlecht betreut und schreibt schlechte Bewertungen.',
        solution: 'Proaktives Status-Update bei Änderungen. "Keine News ist eine News".',
        detailedSolution: 'Sobald ein Posteingang verzeichnet wird oder eine Frist verstreicht, informiert die KI den Mandanten proaktiv per Kurzanruf oder WhatsApp. "Kurzes Update: Die Gegenseite hat Fristverlängerung beantragt. Wir melden uns in 2 Wochen." Der Mandant fühlt sich top informiert ("Proaktiver Service") und ruft nicht mehr an. Ruhe für die Kanzlei.',
        workflowSteps: ['Posteingang Trigger', 'KI-Status-Generierung', 'Proaktiver Outbound', 'Mandanten-Briefing', 'Log'],
        roiStats: [{ label: 'Rückfragen', value: '-70%' }, { label: 'Zufriedenheit', value: 'A+' }],
        veoPrompt: '',
        iconName: 'MessageSquare',
        simulationType: 'chat',
        calculator: {
          inputLabel: 'Aktive Mandate',
          inputMin: 50,
          inputMax: 1000,
          inputStep: 50,
          defaultValue: 200,
          multiplier: 15,
          outputLabel: 'Gesparte Kosten / Monat',
          isCurrency: true,
          description: 'Vermeidung unnötiger Rückfrage-Calls (15€ Wert).'
        }
      }
    ]
  },
  {
    id: 'custom',
    name: 'Custom & Training',
    cases: [
      {
        id: 'custom-agent',
        title: 'Custom Voiceagent',
        pain: 'Standard-Lösungen scheitern an komplexen Fachprozessen und Nischen.',
        detailedPain: 'Jedes Unternehmen hat seine eigene DNA, Fachsprache und Prozesse. "Out-of-the-box" Bots scheitern hier oft kläglich, weil sie den Kontext nicht verstehen. Wenn ein Bot den Fachbegriff für Ihr Produkt nicht kennt, ist der Kunde frustriert. Sie brauchen keine Standard-Lösung von der Stange, sondern einen Maßanzug, der Ihre Firma versteht.',
        solution: 'Exakt auf Ihre Prozesse trainierte KI. Volle Integration in Ihre IT.',
        detailedSolution: 'Wir entwickeln Ihren perfekten digitalen Mitarbeiter. Wir analysieren Ihre Prozesse, trainieren das Modell auf Ihr Vokabular (Fine-Tuning) und Ihre Knowledge Base. Wir integrieren es tief in Ihre IT-Landschaft (SAP, Salesforce, Eigenentwicklungen via API). Das Ergebnis ist ein Agent, der sich anhört und verhält wie Ihr bester Mitarbeiter – nur schneller und unendlich skalierbar.',
        workflowSteps: ['Prozess-Analyse', 'Custom Model Training', 'API-Integration', 'UAT Testing', 'Deployment'],
        roiStats: [{ label: 'Individualität', value: '100%' }, { label: 'Innovation', value: 'Max' }],
        veoPrompt: '',
        iconName: 'Zap',
        simulationType: 'network',
        calculator: {
          inputLabel: 'Interaktionen / Monat',
          inputMin: 100,
          inputMax: 10000,
          inputStep: 100,
          defaultValue: 1000,
          multiplier: 2.5,
          outputLabel: 'Effizienz-Gewinn',
          isCurrency: true,
          description: 'Geschätzter Wert der Automatisierung pro Vorgang.'
        }
      },
      {
        id: 'legacy-bridge',
        title: 'Legacy System Bridge',
        pain: 'Alte IT-Systeme (Mainframe, AS/400) haben keine APIs. Automatisierung scheint unmöglich.',
        detailedPain: 'Viele Traditionsunternehmen laufen auf uralter Software ("Legacy"), die stabil ist, aber nicht mit moderner KI sprechen kann. "Wir können das nicht automatisieren, weil unser ERP von 1990 ist." Das ist ein Trugschluss, der Innovation blockiert und Wettbewerbsnachteile zementiert. Sie können nicht einfach alles neu bauen.',
        solution: 'KI nutzt RPA (Robotic Process Automation) & Screen Reading als Schnittstelle.',
        detailedSolution: 'Wir bauen Brücken, wo keine sind. Unsere KI nutzt visuelle Erkennung (OCR) und simulierte Mausklicks (RPA), um Daten aus Ihren alten Masken zu lesen und einzutragen – genau wie ein Mensch es tun würde. So können Sie modernste Voice-KI nutzen, ohne Ihre Kern-IT für Millionen austauschen zu müssen. Wir machen Dinosaurier tanzbar.',
        workflowSteps: ['Legacy Analyse', 'RPA Scripting', 'Voice-to-Action Mapping', 'Sicherheits-Layer', 'Go-Live'],
        roiStats: [{ label: 'IT-Kosten', value: 'Gespart' }, { label: 'Modernisierung', value: 'Sofort' }],
        veoPrompt: '',
        iconName: 'Network',
        simulationType: 'workflow',
        calculator: {
          inputLabel: 'Manuelle Vorgänge',
          inputMin: 100,
          inputMax: 10000,
          inputStep: 100,
          defaultValue: 1000,
          multiplier: 5,
          outputLabel: 'Einsparung / Vorgang',
          isCurrency: true,
          description: 'Ersparnis durch Vermeidung manueller Dateneingabe.'
        }
      },
      {
        id: 'migration-assist',
        title: 'Migration Assistant',
        pain: 'Systemwechsel (z.B. zu Salesforce) überfordern Nutzer. Support wird geflutet.',
        detailedPain: 'Sie führen eine neue Software ein. Die Mitarbeiter sind verwirrt, finden Funktionen nicht und rufen ständig den Helpdesk an. Die Produktivität bricht in der Übergangsphase massiv ein. Schulungen sind teuer und werden schnell vergessen. Der Erfolg des ganzen IT-Projekts steht auf dem Spiel ("User Adoption").',
        solution: 'KI-Voice-Bot führt User "Hands-Free" durch die neue Software.',
        detailedSolution: 'Statt Handbücher zu wälzen, fragen Mitarbeiter einfach die KI: "Wie lege ich einen neuen Kunden an?". Die KI erklärt es Schritt für Schritt oder führt die Aktion sogar direkt aus ("Voice-to-Action"). Sie ist der "Buddy", der jedem Mitarbeiter zur Seite steht. Das beschleunigt die Adoption neuer Tools drastisch und entlastet den internen Support.',
        workflowSteps: ['Software-Learning', 'Voice-Interface Overlay', 'User Q&A', 'Action Execution', 'Feedback'],
        roiStats: [{ label: 'Adoption', value: '2x' }, { label: 'Support-Tickets', value: '-60%' }],
        veoPrompt: '',
        iconName: 'ArrowLeftRight',
        simulationType: 'chat',
        calculator: {
          inputLabel: 'User Anzahl',
          inputMin: 10,
          inputMax: 5000,
          inputStep: 10,
          defaultValue: 200,
          multiplier: 200,
          outputLabel: 'Produktivitäts-Erhalt',
          isCurrency: true,
          description: 'Vermeidung von Produktivitätsverlust (ca. 200€ pro User).'
        }
      }
    ]
  },
  {
    id: 'it-msp',
    name: 'IT & Managed Services',
    cases: [
      {
        id: 'password-reset',
        title: 'Auto Password Reset',
        pain: '40% der Helpdesk-Tickets sind "Passwort vergessen". Teure Admins spielen Sekretär.',
        detailedPain: 'Ein klassischer Passwort-Reset kostet den Helpdesk ca. 15-20€ an Zeit. Hochqualifizierte Sys-Admins werden von trivialen Aufgaben blockiert. Wenn am Montagmorgen 50 Leute ihr Passwort vergessen haben, liegt die IT lahm. Mitarbeiter können nicht arbeiten, weil sie ausgesperrt sind. Das ist pure Geldverschwendung.',
        solution: 'KI identifiziert User per Voice-Biometrie & setzt Passwort autonom zurück.',
        detailedSolution: 'Der User ruft an. "Mein Account ist gesperrt." Die KI prüft die Stimme (Voice Biometrics) oder sendet einen 2FA Code aufs Handy. "Identität bestätigt. Ich habe dein Passwort zurückgesetzt, das temporäre Passwort kommt jetzt per SMS." Der Vorgang dauert 30 Sekunden, kostet Cents und erfordert null Admin-Zeit. Maximale Sicherheit, minimaler Aufwand.',
        workflowSteps: ['Inbound Call', 'Biometrie / 2FA Check', 'Active Directory Reset', 'Bestätigung', 'Log'],
        roiStats: [{ label: 'Ticket-Reduktion', value: '-40%' }, { label: 'Admin-Zeit', value: 'Gespart' }],
        veoPrompt: '',
        iconName: 'Key',
        simulationType: 'glitch',
        calculator: {
          inputLabel: 'Resets / Monat',
          inputMin: 50,
          inputMax: 2000,
          inputStep: 50,
          defaultValue: 200,
          multiplier: 15,
          outputLabel: 'IT-Ersparnis',
          isCurrency: true,
          description: '15€ Admin-Kosten pro Ticket eingespart.'
        }
      },
      {
        id: 'ticket-triage',
        title: 'Smart Ticket Triage',
        pain: 'Tickets landen im falschen Team ("Drucker geht nicht" bei DevOps). Chaos.',
        detailedPain: 'User beschreiben Probleme oft vage. "Das Internet ist kaputt." Der First-Level-Support muss mühsam sortieren. Tickets ping-pongen zwischen Abteilungen, bis sich jemand zuständig fühlt. Die Lösungszeit (MTTR - Mean Time To Resolve) explodiert. SLA-Verletzungen drohen.',
        solution: 'KI analysiert Problembeschreibung & routet direkt zum richtigen Experten.',
        detailedSolution: 'Die KI liest das Ticket (oder hört zu). Sie versteht den Kontext: "Internet kaputt" + "Error 503" = Serverproblem -> Team DevOps. "Papierstau" -> Facility Management. Das Ticket landet sofort im richtigen Queue mit der richtigen Priorität. Die Fehlzuweisungsrate sinkt auf fast null, und Probleme werden schneller gelöst.',
        workflowSteps: ['Ticket Eingang', 'NLP Analyse', 'Kategorie-Matching', 'Auto-Routing', 'Auto-Reply'],
        roiStats: [{ label: 'MTTR', value: '-30%' }, { label: 'Effizienz', value: 'Max' }],
        veoPrompt: '',
        iconName: 'Target',
        simulationType: 'network',
        calculator: {
          inputLabel: 'Tickets / Monat',
          inputMin: 200,
          inputMax: 5000,
          inputStep: 100,
          defaultValue: 1000,
          multiplier: 5,
          outputLabel: 'Routing-Ersparnis',
          isCurrency: true,
          description: '5€ Triage-Kosten pro Ticket gespart.'
        }
      },
      {
        id: 'incident-comms',
        title: 'Major Incident Voice-Guard',
        pain: 'Bei Serverausfall fluten 500 User die Hotline. Die IT kann nicht arbeiten, weil Telefon klingelt.',
        detailedPain: 'Der Albtraum der IT: Outlook fällt aus. Innerhalb von Minuten ruft jeder Mitarbeiter an: "Geht Outlook nicht?". Die IT-Abteilung wird quasi DDoS-attackiert durch die eigenen Kollegen. Statt den Fehler zu beheben, müssen Admins 100x erklären: "Wir wissen es, wir sind dran". Das verlängert den Ausfall unnötig.',
        solution: 'KI fängt Ansturm ab, erklärt Status & registriert Rückrufwünsche.',
        detailedSolution: 'Die KI erkennt den "Call Spike" sofort. Sie schaltet in den Krisen-Modus: "Wenn Sie wegen Outlook anrufen: Wir wissen Bescheid. Techniker sind dran. ETA 2 Stunden. Soll ich dich benachrichtigen, wenn es wieder geht?". Sie hält den Rücken der Admins frei, damit diese arbeiten können. Sobald das Problem gelöst ist, ruft die KI alle zurück: "Es geht wieder."',
        workflowSteps: ['Incident Detection', 'Deflection Mode', 'Status Ansage', 'Callback Liste', 'Recovery Info'],
        roiStats: [{ label: 'Entlastung', value: '100%' }, { label: 'Fix-Time', value: 'Schneller' }],
        veoPrompt: '',
        iconName: 'AlertTriangle',
        simulationType: 'glitch',
        calculator: {
          inputLabel: 'Incidents / Jahr',
          inputMin: 1,
          inputMax: 20,
          inputStep: 1,
          defaultValue: 4,
          multiplier: 2000,
          outputLabel: 'Produktivitäts-Schutz',
          isCurrency: true,
          description: 'Vermeidung von Arbeitsausfall durch schnellere Lösung.'
        }
      }
    ]
  },
  {
    id: 'education',
    name: 'Bildung & Coaching',
    cases: [
      {
        id: 'student-enroll',
        title: 'Studienberatung AI',
        pain: 'Unis/Bootcamps verlieren Interessenten, weil Beratung nur 9-15 Uhr erreichbar ist.',
        detailedPain: 'Bildung ist eine Entscheidung fürs Leben. Berufstätige, die sich weiterbilden wollen, rufen abends an. Da ist das Büro zu. Email-Anfragen werden oft erst nach Tagen beantwortet. Die Motivation des Interessenten kühlt ab, er meldet sich nicht an oder geht zur Konkurrenz, die schneller antwortet.',
        solution: '24/7 Beratung zu Kursen, Preisen & Förderung. Vereinbart Gespräche.',
        detailedSolution: 'Die KI kennt alle Module, Starttermine und Finanzierungsoptionen im Detail. "Kann ich das neben dem Beruf machen? Gibt es BAföG?". Die KI antwortet kompetent rund um die Uhr. Ist der Interessent überzeugt, bucht sie direkt den Eignungstest oder das Beratungsgespräch. Die Anmeldezahlen steigen, weil Hürden abgebaut werden.',
        workflowSteps: ['Info-Anfrage', 'FAQ Beantwortung', 'Eignungs-Check', 'Terminierung', 'CRM Eintrag'],
        roiStats: [{ label: 'Anmeldungen', value: '+20%' }, { label: 'Erreichbarkeit', value: '24/7' }],
        veoPrompt: '',
        iconName: 'BookOpen',
        simulationType: 'chat',
        calculator: {
          inputLabel: 'Leads / Monat',
          inputMin: 50,
          inputMax: 2000,
          inputStep: 50,
          defaultValue: 300,
          multiplier: 0.1 * 1500,
          outputLabel: 'Zusatz-Kursgebühren',
          isCurrency: true,
          description: '10% mehr Conversion bei 1500€ Kurswert.'
        }
      },
      {
        id: 'alumni-fundraising',
        title: 'Alumni Fundraising',
        pain: 'Spendenaktionen per Brief sind teuer und ineffektiv. Callcenter sind unbezahlbar.',
        detailedPain: 'Hochschulen brauchen Spenden. Aber tausende Ehemalige ("Alumni") anzurufen ist extrem personalintensiv. Studenten-Callcenter sind oft ungeschult, haben hohe Fluktuation oder sind unmotiviert. Briefe landen im Müll. Die Bindung zu den Alumni geht verloren, das Spendenpotenzial bleibt ungenutzt.',
        solution: 'KI führt empathische Gespräche mit 10.000 Alumni parallel. Skaliert Spenden.',
        detailedSolution: 'Die KI ruft an: "Hallo [Name], hier ist deine Alma Mater. Wir bauen eine neue Bibliothek. Erinnerst du dich noch an Professor X?". Sie baut Nostalgie auf und fragt charmant nach Unterstützung. Sie kann Spenden direkt am Telefon abwickeln (Voice Pay). Sie skaliert persönliche Ansprache auf tausende Kontakte gleichzeitig.',
        workflowSteps: ['Datenbank-Segmentierung', 'Outbound Call', 'Relationship Building', 'Pledge Aufnahme', 'Danke-Mail'],
        roiStats: [{ label: 'Reichweite', value: 'Unendlich' }, { label: 'Spenden', value: '++' }],
        veoPrompt: '',
        iconName: 'HeartHandshake',
        simulationType: 'audio',
        calculator: {
          inputLabel: 'Kontaktierte Alumni',
          inputMin: 1000,
          inputMax: 50000,
          inputStep: 1000,
          defaultValue: 5000,
          multiplier: 0.05 * 50,
          outputLabel: 'Spenden-Volumen',
          isCurrency: true,
          description: '5% Spendenquote bei Ø 50€ Spende.'
        }
      },
      {
        id: 'exam-booking',
        title: 'Prüfungs-Management',
        pain: 'Sekretariate ersticken in Anfragen zu Prüfungsterminen und Fristen.',
        detailedPain: 'In Prüfungsphasen rennen Studenten dem Sekretariat die Bude ein. "Wann ist die Klausur? Kann ich noch zurücktreten? Wo ist der Raum?". Das Telefon steht nicht still, Emails stapeln sich. Wichtige Verwaltungsarbeit (Akkreditierung, Forschung) bleibt liegen. Fehler bei Fristen können rechtliche Konsequenzen haben.',
        solution: 'KI beantwortet Orga-Fragen & bucht Slots für mündliche Prüfungen.',
        detailedSolution: 'Die KI ist der zentrale Ansprechpartner für alle Orga-Fragen. Sie kennt den Prüfungsplan und die Fristen. Sie kann Termine für mündliche Prüfungen direkt vergeben, verschieben und Änderungen kommunizieren. Studenten bekommen sofort Antwort, Sekretariate werden massiv entlastet und können sich auf komplexe Fälle konzentrieren.',
        workflowSteps: ['Studenten Anruf', 'Authentifizierung', 'Termin-Abfrage', 'Slot-Booking', 'Bestätigung'],
        roiStats: [{ label: 'Admin-Stress', value: '-60%' }, { label: 'Service', value: 'Top' }],
        veoPrompt: '',
        iconName: 'ClipboardList',
        simulationType: 'workflow',
        calculator: {
          inputLabel: 'Studenten / Semester',
          inputMin: 100,
          inputMax: 5000,
          inputStep: 100,
          defaultValue: 1000,
          multiplier: 10,
          outputLabel: 'Gesparte Admin-Stunden',
          isCurrency: false,
          unit: 'h',
          description: '10h pro 100 Studenten an Support-Zeit gespart.'
        }
      }
    ]
  },
  {
    id: 'fitness',
    name: 'Fitness & Lifestyle',
    cases: [
      {
        id: 'gym-retention',
        title: 'Mitgliedschafts-Rettung',
        pain: 'Schläfer-Kunden kündigen plötzlich. Studios merken es erst, wenn die Kündigung da ist.',
        detailedPain: 'Die "Karteileiche", die zahlt aber nicht kommt, ist ein Mythos. Wer 4 Wochen nicht im Gym war, kündigt mit hoher Wahrscheinlichkeit bald. Studios haben keine Zeit, hunderten "Abwesenden" hinterherzutelefonieren. Der Churn (Mitgliederschwund) frisst das Wachstum der Neukunden auf.',
        solution: 'KI ruft Abwesende an: "Wir vermissen dich! Hier ist ein Gratis-Shake".',
        detailedSolution: 'Trigger: 21 Tage kein Check-in. KI ruft an: "Hey, alles okay bei dir? Wir haben dich lange nicht gesehen. Komm diese Woche vorbei, dein Protein-Shake geht aufs Haus!". Das reaktiviert die Motivation. Der Kunde fühlt sich wertgeschätzt ("Die kümmern sich") und bleibt. Die Churn-Rate sinkt signifikant.',
        workflowSteps: ['No-Show Trigger', 'Motivations-Call', 'Incentive Angebot', 'Terminierung Trainer', 'Retained'],
        roiStats: [{ label: 'Churn', value: '-25%' }, { label: 'LTV', value: '++' }],
        veoPrompt: '',
        iconName: 'Dumbbell',
        simulationType: 'chart',
        calculator: {
          inputLabel: 'Mitglieder >30 Tage inaktiv',
          inputMin: 50,
          inputMax: 2000,
          inputStep: 50,
          defaultValue: 300,
          multiplier: 0.2 * 400,
          outputLabel: 'Geretteter Jahresbeitrag',
          isCurrency: true,
          description: '20% Reaktivierung bei 400€ Jahreswert.'
        }
      },
      {
        id: 'pt-sales',
        title: 'Personal Training Sales',
        pain: 'Trainer sind gute Sportler, aber schlechte Verkäufer. Umsatzpotenzial bleibt liegen.',
        detailedPain: 'Viele Mitglieder würden Personal Training (PT) buchen, wissen aber nicht, wie es läuft, oder trauen sich nicht zu fragen. Trainer auf der Fläche sind oft schüchtern im Verkauf oder mit Training beschäftigt. Das lukrative Zusatzgeschäft mit PT-Paketen wird kaum aktiv verkauft.',
        solution: 'KI kontaktiert aktive Mitglieder: "Willst du dein Ziel schneller erreichen?".',
        detailedSolution: 'Die KI analysiert das Trainingsverhalten. "Du bist seit 3 Monaten dabei. Willst du einen Booster für den Sommer?". Sie bietet ein kostenloses PT-Schnuppertraining an. Da die Hürde niedrig ist, buchen viele. Der Trainer muss nur noch das Training halten und den Kunden binden. Der Verkauf passiert automatisch.',
        workflowSteps: ['Activity Check', 'Upsell Call', 'Schnupper-Termin', 'Paket-Verkauf', 'Trainer-Briefing'],
        roiStats: [{ label: 'PT-Umsatz', value: '+40%' }, { label: 'Trainer-Auslastung', value: 'Voll' }],
        veoPrompt: '',
        iconName: 'Users',
        simulationType: 'pipeline',
        calculator: {
          inputLabel: 'Aktive Mitglieder',
          inputMin: 100,
          inputMax: 5000,
          inputStep: 100,
          defaultValue: 500,
          multiplier: 0.05 * 300,
          outputLabel: 'Zusatz-PT Umsatz',
          isCurrency: true,
          description: '5% Conversion zu 300€ PT-Paket.'
        }
      },
      {
        id: 'trial-conversion',
        title: 'Probetraining Conversion',
        pain: 'Interessenten machen Probetraining und verschwinden auf Nimmerwiedersehen.',
        detailedPain: 'Nach dem Probetraining geht der Interessent nach Hause. "Ich überleg es mir". Wenn das Studio nicht innerhalb von 24h nachfasst, sinkt die Abschlusschance rapide. Oft fehlt die Zeit für konsequentes Nachtelefonieren, oder der Trainer fühlt sich unwohl dabei, "hinterherzurennen".',
        solution: 'Automatischer Feedback-Call am nächsten Tag. Räumt letzte Zweifel aus.',
        detailedSolution: '24h nach dem Training: "Wie hat dir das Training gefallen? Hast du noch Muskelkater?". Die KI holt Feedback ein und fragt direkt nach der Mitgliedschaft. "Wir haben noch das Angebot ohne Aufnahmegebühr bis morgen." Der psychologische Effekt des "Kümmerns" führt zum Abschluss. Einwände werden geklärt.',
        workflowSteps: ['Probetraining absolviert', 'Feedback Call (+24h)', 'Einwandbehandlung', 'Vertragsabschluss', 'Onboarding'],
        roiStats: [{ label: 'Conversion', value: '+30%' }, { label: 'Member Growth', value: '++' }],
        veoPrompt: '',
        iconName: 'UserCheck',
        simulationType: 'chat',
        calculator: {
          inputLabel: 'Probetrainings / Mo',
          inputMin: 10,
          inputMax: 200,
          inputStep: 5,
          defaultValue: 50,
          multiplier: 0.3 * 500,
          outputLabel: 'Zusatz-Vertragswert',
          isCurrency: true,
          description: '30% mehr Abschlüsse à 500€ LTV.'
        }
      }
    ]
  },
  {
    id: 'wholesale',
    name: 'Großhandel (B2B)',
    cases: [
      {
        id: 'reorder-bot',
        title: 'Smart Reorder Bot',
        pain: 'Gastro/Einzelhandel vergisst Bestellung. LKW fährt halb leer. Umsatz fehlt.',
        detailedPain: 'Restaurants bestellen oft spät nachts auf Anrufbeantworter oder vergessen es ganz. Der Großhändler muss morgens hektisch nachtelefonieren ("Braucht ihr heute keine Milch?"). Das stresst den Vertrieb und sorgt für logistisches Chaos. Wenn der LKW halb leer fährt, leidet die Marge.',
        solution: 'KI ruft Kunden proaktiv an: "Die übliche Bestellung für Dienstag?".',
        detailedSolution: 'Die KI kennt den Bestellrhythmus jedes Kunden. "Hallo Pizzeria Luigi, du bestellst sonst immer montags 50kg Mehl. Soll ich das buchen?". Luigi: "Oh ja, danke, fast vergessen! Und noch Tomaten dazu." Der Umsatz ist gesichert, der LKW voll, und der Kunde ist dankbar für den Service.',
        workflowSteps: ['Bestellhistorie Analyse', 'Proaktiver Call', 'Warenkorb-Check', 'Upsell (Tagesangebot)', 'ERP Order'],
        roiStats: [{ label: 'Order-Frequenz', value: 'Stabil' }, { label: 'Warenkorb', value: '+10%' }],
        veoPrompt: '',
        iconName: 'Boxes',
        simulationType: 'pipeline',
        calculator: {
          inputLabel: 'Aktive Kunden',
          inputMin: 50,
          inputMax: 2000,
          inputStep: 50,
          defaultValue: 500,
          multiplier: 50,
          outputLabel: 'Mehrumsatz / Woche',
          isCurrency: true,
          description: '50€ mehr pro Kunde durch pünktliche Bestellung & Upsell.'
        }
      },
      {
        id: 'cold-chain-alert',
        title: 'Kühlketten-Wächter',
        pain: 'Kühlausfall am Wochenende wird zu spät bemerkt. Ware im Wert von Tausenden verdorben.',
        detailedPain: 'Sensoren messen zwar die Temperatur, aber eine Email-Warnung landet im Spam oder wird nachts übersehen. Wenn der Kühlraum am Samstagabend ausfällt, zählt jede Stunde. Ein verdorbener Bestand bedeutet nicht nur finanziellen Verlust, sondern Lieferunfähigkeit am Montag und verärgerte Kunden.',
        solution: 'Eskalations-Anruf bei Temp-Abweichung. Ruft bis jemand abhebt.',
        detailedSolution: 'Sensor meldet > 7 Grad. Die KI startet die Telefonkette. Lagerleiter -> Stellvertreter -> Techniker. Sie nennt den genauen Ort und Wert: "Kühlhaus 3, Temperatur kritisch, Ware im Wert von 50k gefährdet." Sie dokumentiert den Alarm revisionssicher (HACCP). Das rettet die Ware.',
        workflowSteps: ['IoT Trigger', 'Phone Chain Start', 'Alert Quittierung', 'Techniker Dispatch', 'HACCP Log'],
        roiStats: [{ label: 'Reaktionszeit', value: '<5 Min' }, { label: 'Warenverlust', value: '0%' }],
        veoPrompt: '',
        iconName: 'Snowflake',
        simulationType: 'glitch',
        calculator: {
          inputLabel: 'Kühlhäuser / Lager',
          inputMin: 1,
          inputMax: 50,
          inputStep: 1,
          defaultValue: 3,
          multiplier: 10000,
          outputLabel: 'Versichertes Risiko',
          isCurrency: true,
          description: 'Vermeidung von Warenverlust (konservativ pro Vorfall).'
        }
      },
      {
        id: 'invoice-chase-b2b',
        title: 'Rechnungs-Reminder B2B',
        pain: 'B2B-Kunden zahlen schleppend. Buchhaltung rennt Geld hinterher.',
        detailedPain: 'Im B2B ist "Zahlungsziel 30 Tage" Standard, wird aber oft überzogen. Mahnungen per Post sind langsam und aggressiv. Ein freundlicher Anruf ("Ist die Rechnung angekommen?") wirkt Wunder, kostet aber zu viel Zeit für die Buchhaltung. Liquidität fehlt.',
        solution: 'KI ruft 3 Tage vor Fälligkeit an: "Alles okay mit der Rechnung?".',
        detailedSolution: 'Statt zu mahnen, fragt die KI proaktiv und serviceorientiert: "Die Rechnung wird Freitag fällig. Wollte nur sichergehen, dass alles korrekt ist und die Ware in Ordnung war?". Das eliminiert Ausreden ("Rechnung nicht bekommen") und beschleunigt den Geldeingang drastisch, ohne die Geschäftsbeziehung zu belasten.',
        workflowSteps: ['Fälligkeit Trigger (-3 Tage)', 'Service Call', 'Klärung / Kopie Versand', 'Zusage', 'Cash In'],
        roiStats: [{ label: 'DSO', value: '-10 Tage' }, { label: 'Liquidität', value: '++' }],
        veoPrompt: '',
        iconName: 'BadgeEuro',
        simulationType: 'chart',
        calculator: {
          inputLabel: 'Ausgangsrechnungen / Mo',
          inputMin: 100,
          inputMax: 5000,
          inputStep: 100,
          defaultValue: 500,
          multiplier: 0.1 * 50,
          outputLabel: 'Liquiditäts-Vorteil',
          isCurrency: true,
          description: 'Früherer Geldeingang (Zinsvorteil & Admin-Ersparnis).'
        }
      }
    ]
  },
  {
    id: 'agency',
    name: 'Agenturen & Dienstleister',
    cases: [
      {
        id: 'asset-chase',
        title: 'Content Asset Chasing',
        pain: 'Projekte stehen still, weil Kunden Logos/Texte nicht liefern. Projektleiter sind genervt.',
        detailedPain: 'Webagenturen kennen es: Das Projekt könnte fertig sein, aber der Kunde liefert die Bilder nicht. Der Projektmanager schreibt die 5. Email ("Reminder"). Das nervt und kostet teure Management-Zeit. Der Cashflow verschiebt sich nach hinten, weil nicht abgerechnet werden kann.',
        solution: 'KI übernimmt das "Nerving". Freundlich, aber konsequent bis zur Lieferung.',
        detailedSolution: 'Die KI ruft an: "Wir wollen ihre Website live schalten! Es fehlt nur noch das Teamfoto. Wann können Sie das schicken?". Sie vereinbart eine Deadline. "Ich melde mich Freitag nochmal, wenn es nicht da ist." Der PM kann sich auf Strategie konzentrieren, die KI holt das Material.',
        workflowSteps: ['Fehlendes Asset Trigger', 'Erinnerungs-Call', 'Upload-Hilfe', 'Deadline Setzung', 'PM Info'],
        roiStats: [{ label: 'Projektlaufzeit', value: '-20%' }, { label: 'PM-Stress', value: '0%' }],
        veoPrompt: '',
        iconName: 'Laptop',
        simulationType: 'workflow',
        calculator: {
          inputLabel: 'Aktive Projekte',
          inputMin: 5,
          inputMax: 100,
          inputStep: 5,
          defaultValue: 20,
          multiplier: 2 * 80,
          outputLabel: 'Gesparte PM-Kosten',
          isCurrency: true,
          description: '2 Stunden PM-Zeit pro Projekt gespart.'
        }
      },
      {
        id: 'briefing-bot',
        title: 'Auto-Briefing Agent',
        pain: 'Kunden-Briefings sind unvollständig. Kreative müssen ständig nachfragen.',
        detailedPain: 'Kunde schreibt: "Ich brauche ein Logo, soll modern sein." Das reicht nicht. Der Designer muss anrufen, Mails schreiben, Beispiele schicken. Das "Ping-Pong" vor Projektstart frisst Marge und verzögert den Start.',
        solution: 'KI führt strukturiertes Briefing-Interview & erstellt Zusammenfassung.',
        detailedSolution: 'Nach Auftragserteilung ruft die KI den Kunden an. Sie geht einen dynamischen Fragenkatalog durch: "Welche Farben? Welche Zielgruppe? Gibt es No-Gos?". Sie zeigt Beispiele (am Screen) oder beschreibt Stile. Am Ende liefert sie dem Kreativ-Team ein perfektes, vollständiges Briefing-Dokument.',
        workflowSteps: ['Auftrag Start', 'KI-Interview', 'Stil-Abfrage', 'Zusammenfassung', 'Designer-Handover'],
        roiStats: [{ label: 'Rückfragen', value: '-80%' }, { label: 'Projektstart', value: 'Sofort' }],
        veoPrompt: '',
        iconName: 'FileSignature',
        simulationType: 'chat',
        calculator: {
          inputLabel: 'Neukunden-Projekte',
          inputMin: 5,
          inputMax: 50,
          inputStep: 1,
          defaultValue: 10,
          multiplier: 1.5 * 80,
          outputLabel: 'Gesparte Setup-Kosten',
          isCurrency: true,
          description: '1.5h Briefing-Aufwand pro Projekt gespart.'
        }
      },
      {
        id: 'feedback-loop',
        title: 'Design Feedback Loop',
        pain: 'Feedback kommt kleckerweise per WhatsApp oder Telefon. Versionen-Chaos.',
        detailedPain: 'Der Entwurf ist raus. Der Kunde ruft an: "Mach das Logo größer." Drei Tage später: "Doch lieber blau." Änderungen werden nicht dokumentiert, Versionen vermischt. Das Budget läuft aus dem Ruder. Es entstehen Missverständnisse über das, was vereinbart war.',
        solution: 'KI holt Feedback strukturiert ein & hakt Checkliste ab.',
        detailedSolution: 'Die KI fragt gezielt ab: "Haben Sie den Entwurf gesehen? Sind die Farben okay? Ist die Schriftart okay?". Sie zwingt den Kunden zu konkreten Aussagen und fasst das Feedback schriftlich zusammen ("Client Approval"). Erst dann arbeitet der Designer weiter. Klare Struktur, geschützte Marge.',
        workflowSteps: ['Entwurf Versand', 'Feedback-Call (+48h)', 'Checklisten-Abfrage', 'Freigabe / Change-Log', 'Ticket'],
        roiStats: [{ label: 'Korrekturschleifen', value: '-30%' }, { label: 'Klarheit', value: '100%' }],
        veoPrompt: '',
        iconName: 'ClipboardCheck',
        simulationType: 'workflow',
        calculator: {
          inputLabel: 'Design-Sprints / Mo',
          inputMin: 10,
          inputMax: 200,
          inputStep: 5,
          defaultValue: 20,
          multiplier: 0.5 * 80,
          outputLabel: 'Ersparnis durch Klarheit',
          isCurrency: true,
          description: 'Vermeidung von unnötigen Iterationen (ca. 0.5h pro Sprint).'
        }
      }
    ]
  },
  {
    id: 'marketing',
    name: 'Marketing & Social Media',
    cases: [
      {
        id: 'social-listening',
        title: 'Brand Sentinel AI',
        pain: 'Shitstorms passieren nachts oder am Wochenende. Zu späte Reaktion ruiniert den Ruf.',
        detailedPain: 'Marken werden rund um die Uhr in sozialen Medien diskutiert. Wenn ein Kunde auf Twitter/X öffentlich Dampf ablässt, sehen das Tausende. Wenn das Social Media Team erst am Montagmorgen reagiert, hat sich die Beschwerde viral verbreitet. Reputationsschäden sind teuer und schwer zu reparieren.',
        solution: 'KI überwacht 24/7 Mentions, analysiert Sentiment & alarmiert bei Kritik.',
        detailedSolution: 'Unsere KI-Wächter (n8n + GPT-4 Sentiment Analysis) scannen alle Kanäle in Echtzeit. "Ist dieser Tweet eine Beschwerde?". Bei negativen Erwähnungen wird sofort ein Slack-Alarm an den Bereitschaftsdienst gesendet oder ein Ticket erstellt. Bei neutralen Fragen kann die KI sogar direkt mit einem freigegebenen FAQ-Text antworten. Sie sind immer im Bilde, bevor es brennt.',
        workflowSteps: ['API Monitoring (X/Insta/LinkedIn)', 'Sentiment Analyse', 'Alerting', 'Auto-Response Draft', 'Reporting'],
        roiStats: [{ label: 'Reaktionszeit', value: '<5 Min' }, { label: 'Brand Safety', value: 'Max' }],
        veoPrompt: '',
        iconName: 'Share',
        simulationType: 'glitch',
        calculator: {
          inputLabel: 'Mentions / Tag',
          inputMin: 10,
          inputMax: 1000,
          inputStep: 10,
          defaultValue: 50,
          multiplier: 20,
          outputLabel: 'Markenwert-Schutz',
          isCurrency: true,
          description: 'Vermeidung von PR-Schäden (konservativ geschätzt).'
        }
      },
      {
        id: 'content-repurpose',
        title: 'Content Repurposing',
        pain: 'Viel Aufwand für ein YouTube-Video, aber zu wenig Zeit für Blog, LinkedIn & Newsletter.',
        detailedPain: 'Content Marketing ist König, aber die Erstellung ist zeitintensiv. Sie drehen ein tolles Video oder nehmen einen Podcast auf. Aber dann fehlt die Zeit, daraus Artikel, Tweets und Posts zu machen. Der Content verpufft auf einem Kanal, statt omnipräsent auf allen Kanälen ausgespielt zu werden ("Omnichannel").',
        solution: 'KI verwandelt 1 Video automatisch in Blogpost, 5 Tweets & LinkedIn-Artikel.',
        detailedSolution: 'Sie laden das Video hoch. Ein n8n-Workflow transkribiert es (Whisper), extrahiert die Kernaussagen und generiert mit GPT-4 perfekt formatierte Posts für LinkedIn, Twitter und einen SEO-optimierten Blogartikel. Die Entwürfe landen direkt in Ihrem Planungstool (Buffer/Hootsuite) zur Freigabe. Aus 1 Stück Content werden 10 Assets – vollautomatisch.',
        workflowSteps: ['Video Upload', 'Transkription', 'Multi-Format Generation', 'CMS Upload', 'Social Scheduling'],
        roiStats: [{ label: 'Reichweite', value: '5x' }, { label: 'Content-Kosten', value: '-80%' }],
        veoPrompt: '',
        iconName: 'MonitorSmartphone',
        simulationType: 'workflow',
        calculator: {
          inputLabel: 'Videos / Monat',
          inputMin: 1,
          inputMax: 20,
          inputStep: 1,
          defaultValue: 4,
          multiplier: 4 * 100,
          outputLabel: 'Gesparte Copywriter-Kosten',
          isCurrency: true,
          description: '4 Stunden Texterstellung pro Video gespart (100€/h).'
        }
      },
      {
        id: 'ad-optimizer',
        title: 'Ad-Spend Wächter',
        pain: 'Ads laufen am Wochenende unkontrolliert weiter und verbrennen Budget bei schlechtem ROAS.',
        detailedPain: 'Performance Marketing ist volatil. Eine Kampagne, die Freitag top lief, kann Samstag einbrechen. Wenn niemand ins Werbekonto schaut, verbrennen Sie tausende Euro für Klicks, die nicht konvertieren. Manuelle Kontrolle am Wochenende nervt und ist oft nicht möglich.',
        solution: 'KI prüft stündlich ROAS. Pausiert schlechte Ads, skaliert gute Ads.',
        detailedSolution: 'Die KI überwacht Ihre Meta/Google Ads via API. Regel: "Wenn ROAS < 1.5 über 3 Stunden -> Pause AdSet". "Wenn ROAS > 4.0 -> Budget +20%". Sie agiert wie ein Daytrader für Ihre Ads, 24/7, emotionslos und datengetrieben. Das Budget wird effizienter eingesetzt, die Profitabilität steigt.',
        workflowSteps: ['Hourly API Check', 'Performance Analyse', 'Budget Rule Engine', 'Bid Adjustment', 'Reporting'],
        roiStats: [{ label: 'Ad-Waste', value: '0%' }, { label: 'Profit', value: '+20%' }],
        veoPrompt: '',
        iconName: 'PieChart',
        simulationType: 'chart',
        highlight: true,
        calculator: {
          inputLabel: 'Monatl. Ad-Spend',
          inputMin: 1000,
          inputMax: 100000,
          inputStep: 1000,
          defaultValue: 5000,
          multiplier: 0.15,
          outputLabel: 'Gespartes Budget',
          isCurrency: true,
          description: '15% weniger Budget-Verschwendung durch Auto-Pause.'
        }
      }
    ]
  }
];

export const TECH_SPECS = [
  { label: 'Latenz', value: '< 500ms' },
  { label: 'Parallelität', value: '∞' },
  { label: 'Sprachen', value: '30+' },
  { label: 'Uptime', value: '99.99%' },
  { label: 'CRM Sync', value: 'Live' },
  { label: 'ROI', value: '10x' },
];

export const CLIENT_LOGOS = [
  'HubSpot', 'Salesforce', 'Pipedrive', 'Zendesk', 'Shopify', 'Slack', 'Microsoft', 'SAP', 'Oracle', 'Zoho'
];
