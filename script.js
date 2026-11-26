const products = [
  {
    id: "mini-morpion",
    name: "Mini morpion",
    category: "poche",
    categoryLabel: "Jeu de poche",
    price: 12,
    material: "PLA recyclé",
    dimensions: "8 × 8 × 1,5 cm",
    weight: "45 g",
    players: "2 joueurs",
    tag: "À emporter",
    art: "board",
    description: "Le grand classique, version mini. Une partie se glisse facilement dans une pause, un trajet ou un moment partagé.",
    provenance: "Imprimé en 3D à partir de filament PLA recyclé. Les pions sont conçus pour rester faciles à manipuler et à ranger."
  },
  {
    id: "puzzle-spirale",
    name: "Puzzle spirale",
    category: "puzzle",
    categoryLabel: "Casse-tête",
    price: 15,
    material: "PET recyclé",
    dimensions: "7 × 7 × 4 cm",
    weight: "62 g",
    players: "1 joueur",
    tag: "À vous de jouer",
    art: "spiral",
    description: "Un défi à prendre en main et à résoudre à son rythme. Observez les formes, testez des pistes et savourez le déclic.",
    provenance: "Fabriqué à la demande en PET recyclé. Chaque pièce est vérifiée avant d'être réunie dans le puzzle."
  },
  {
    id: "galet-mobile",
    name: "Galet mobile",
    category: "anti-stress",
    categoryLabel: "Anti-stress",
    price: 13,
    material: "PLA recyclé",
    dimensions: "6 × 4 × 2 cm",
    weight: "28 g",
    players: "À garder en poche",
    tag: "Petit compagnon",
    art: "fidget",
    description: "Une forme douce et compacte à faire rouler entre les doigts. Un petit objet sensoriel pour occuper les mains, à utiliser selon vos envies.",
    provenance: "Imprimé en 3D en PLA recyclé. Les reliefs sont intégrés à la forme, sans pile ni composant électronique."
  },
  {
    id: "tangram-nomade",
    name: "Tangram nomade",
    category: "poche",
    categoryLabel: "Jeu de poche",
    price: 14,
    material: "PLA recyclé",
    dimensions: "9 × 9 × 1 cm",
    weight: "52 g",
    players: "1 joueur ou plus",
    tag: "À emporter",
    art: "tangram",
    description: "Quelques formes, une foule de possibilités. Assemblez les pièces pour inventer des silhouettes ou relever un défi ensemble.",
    provenance: "Pièces réalisées à partir de PLA recyclé et rangées dans un étui de poche imprimé en 3D."
  },
  {
    id: "labyrinthe-poche",
    name: "Labyrinthe de poche",
    category: "puzzle",
    categoryLabel: "Casse-tête",
    price: 13,
    material: "PET recyclé",
    dimensions: "8 × 6 × 1 cm",
    weight: "40 g",
    players: "1 joueur",
    tag: "Petit défi",
    art: "maze",
    description: "Guidez la bille d'un bout à l'autre du parcours. Un défi simple à comprendre, mais qui demande patience et précision.",
    provenance: "Conçu et imprimé en PET recyclé. Un objet compact, sans écran et réutilisable à l'infini."
  },
  {
    id: "roue-sensorielle",
    name: "Roue sensorielle",
    category: "anti-stress",
    categoryLabel: "Anti-stress",
    price: 10,
    material: "Bois recyclé",
    dimensions: "5 × 5 × 1 cm",
    weight: "24 g",
    players: "À garder en poche",
    tag: "Format mini",
    art: "wheel",
    description: "Une petite roue texturée à faire tourner du bout des doigts. Un geste répétitif et discret, facile à emporter.",
    provenance: "Fabriquée en bois recyclé. Sa texture et sa rotation sont pensées pour une manipulation simple."
  },
  {
    id: "duo-equilibre",
    name: "Duo équilibre",
    category: "poche",
    categoryLabel: "Jeu de poche",
    price: 15,
    material: "PLA recyclé",
    dimensions: "10 × 6 × 2 cm",
    weight: "58 g",
    players: "1 à 2 joueurs",
    tag: "À partager",
    art: "balance",
    description: "Empilez les pièces sans faire vaciller la construction. Un jeu d'adresse qui se joue à deux ou en solo, partout.",
    provenance: "Les pièces sont imprimées en PLA recyclé dans un format léger, puis réunies dans un étui compact."
  },
  {
    id: "noeud-logique",
    name: "Nœud logique",
    category: "puzzle",
    categoryLabel: "Casse-tête",
    price: 15,
    material: "Aluminium recyclé",
    dimensions: "7 × 7 × 3 cm",
    weight: "70 g",
    players: "1 joueur",
    tag: "À démêler",
    art: "knot",
    description: "Trois éléments à séparer puis à réunir. Prenez le temps d'explorer les mouvements et de trouver la bonne combinaison.",
    provenance: "Pièces en aluminium recyclé, assemblées pour former un casse-tête durable."
  }
];

const translationRows = [
  ["Aller au contenu", "Skip to content", "Zum Inhalt springen", "Vai al contenuto"],
  ["Recraft, accueil", "Recraft, home", "Recraft, Startseite", "Recraft, home"],
  ["Ouvrir le menu", "Open menu", "Menü öffnen", "Apri menu"],
  ["Fermer le menu", "Close menu", "Menü schließen", "Chiudi menu"],
  ["Navigation principale", "Main navigation", "Hauptnavigation", "Navigazione principale"],
  ["Accueil", "Home", "Startseite", "Home"],
  ["Boutique", "Shop", "Shop", "Negozio"],
  ["Notre projet", "Our project", "Unser Projekt", "Il nostro progetto"],
  ["Contact", "Contact", "Kontakt", "Contatti"],
  ["Rechercher un produit", "Search for a product", "Produkt suchen", "Cerca un prodotto"],
  ["Rechercher", "Search", "Suchen", "Cerca"],
  ["Changer la langue", "Change language", "Sprache ändern", "Cambia lingua"],
  ["Panier", "Cart", "Warenkorb", "Carrello"],
  ["Explorer", "Explore", "Entdecken", "Esplora"],
  ["Jeux de poche", "Pocket games", "Taschenspiele", "Giochi tascabili"],
  ["Casse-têtes", "Puzzles", "Knobelspiele", "Rompicapi"],
  ["Anti-stress", "Fidget toys", "Anti-Stress", "Antistress"],
  ["À propos", "About", "Über uns", "Chi siamo"],
  ["Contact & retours", "Contact & returns", "Kontakt & Rückgaben", "Contatti e resi"],
  ["Retours et réparations", "Returns & repairs", "Rückgabe & Reparatur", "Resi e riparazioni"],
  ["Mentions légales", "Legal notice", "Impressum", "Note legali"],
  ["Des idées qui tiennent dans la poche.", "Ideas that fit in your pocket.", "Ideen, die in die Tasche passen.", "Idee da portare in tasca."],
  ["Fabriquées avec intention.", "Made with intention.", "Mit Bedacht gefertigt.", "Create con cura."],
  ["Un petit geste, une nouvelle vie pour la matière.", "A small gesture, a new life for materials.", "Ein kleiner Schritt, ein neues Leben für Materialien.", "Un piccolo gesto, nuova vita ai materiali."],
  ["© 2026 Recraft. Tous droits réservés.", "© 2026 Recraft. All rights reserved.", "© 2026 Recraft. Alle Rechte vorbehalten.", "© 2026 Recraft. Tutti i diritti riservati."],
  ["Une maquette de boutique — aucun paiement réel.", "A shop demo — no real payment.", "Shop-Demo — keine echte Zahlung.", "Demo del negozio — nessun pagamento reale."],
  ["Petits objets, grandes idées", "Small objects, big ideas", "Kleine Dinge, große Ideen", "Piccoli oggetti, grandi idee"],
  ["Le jeu tient dans la poche.", "The game fits in your pocket.", "Das Spiel passt in die Tasche.", "Il gioco sta in tasca."],
  ["L’idée va plus loin.", "The idea goes further.", "Die Idee geht weiter.", "L'idea va oltre."],
  ["Des jeux malins et des objets à manipuler, imaginés pour vous accompagner partout — avec des matières qui méritent une seconde vie.", "Clever games and fidget objects designed to go wherever you do — made with materials that deserve a second life.", "Cleveres Spielzeug und Fidget-Objekte für unterwegs — aus Materialien, die ein zweites Leben verdienen.", "Giochi intelligenti e oggetti da manipolare, pensati per accompagnarti ovunque — con materiali che meritano una seconda vita."],
  ["Découvrir la boutique", "Explore the shop", "Zum Shop", "Scopri il negozio"],
  ["L’histoire de Recraft", "The Recraft story", "Die Geschichte von Recraft", "La storia di Recraft"],
  ["Fabriqué avec intention", "Made with intention", "Mit Bedacht gefertigt", "Creato con cura"],
  ["Une démarche plus responsable, à notre échelle.", "A more responsible approach, in our own way.", "Ein verantwortungsvollerer Ansatz, in unserem Rahmen.", "Un approccio più responsabile, nel nostro piccolo."],
  ["Format nomade", "Made to travel", "Für unterwegs", "Formato da viaggio"],
  ["Les idées voyagent léger", "Ideas travel light", "Ideen reisen leicht", "Le idee viaggiano leggere"],
  ["Matières revalorisées", "Reclaimed materials", "Wiederverwertete Materialien", "Materiali recuperati"],
  ["Du PET et du PLA recyclés", "Recycled PET and PLA", "Recyceltes PET und PLA", "PET e PLA riciclati"],
  ["À chacun son petit plaisir", "A little something for everyone", "Kleine Freuden für alle", "Un piccolo piacere per tutti"],
  ["Qu’est-ce qui vous ferait du bien ?", "What would make your day?", "Was würde Ihnen guttun?", "Cosa ti farebbe stare bene?"],
  ["Un jeu à partager, un défi à relever ou un objet à garder près de soi.", "A game to share, a challenge to solve, or an object to keep close.", "Ein Spiel zum Teilen, eine Herausforderung oder ein kleiner Begleiter.", "Un gioco da condividere, una sfida da affrontare o un oggetto da tenere vicino."],
  ["Des moments à partager, partout.", "Moments to share, anywhere.", "Gemeinsame Momente, überall.", "Momenti da condividere, ovunque."],
  ["Un petit défi pour les idées.", "A little challenge for your mind.", "Eine kleine Herausforderung für den Kopf.", "Una piccola sfida per la mente."],
  ["Occuper ses mains à son rythme.", "Keep your hands busy, your way.", "Die Hände beschäftigen, ganz nach eigenem Tempo.", "Tenere le mani occupate, con i propri tempi."],
  ["Explorer", "Explore", "Entdecken", "Esplora"],
  ["Quelques favoris", "A few favourites", "Einige Favoriten", "Alcuni preferiti"],
  ["Les idées à emporter", "Ideas to take with you", "Ideen zum Mitnehmen", "Idee da portare con sé"],
  ["Des objets pensés pour le quotidien, à découvrir et à adopter selon vos envies.", "Everyday objects to discover and make your own.", "Alltagsgegenstände zum Entdecken und Liebgewinnen.", "Oggetti pensati per ogni giorno, da scoprire e scegliere secondo i propri desideri."],
  ["Voir toute la boutique", "Shop all", "Zum gesamten Shop", "Vedi tutto il negozio"],
  ["Notre engagement", "Our commitment", "Unser Engagement", "Il nostro impegno"],
  ["Faire du neuf avec ce qui existe déjà.", "Creating something new from what already exists.", "Neues schaffen aus dem, was schon da ist.", "Creare qualcosa di nuovo da ciò che esiste già."],
  ["Nous imaginons de petits objets fabriqués grâce à l’impression 3D et à des matériaux revalorisés. Une démarche concrète, qui privilégie la curiosité, la durabilité et le plaisir de faire.", "We design small objects using 3D printing and reclaimed materials. A practical approach that values curiosity, durability and the joy of making.", "Wir entwerfen kleine Objekte mit 3D-Druck und wiederverwerteten Materialien. Ein konkreter Ansatz, der Neugier, Langlebigkeit und Freude am Gestalten verbindet.", "Progettiamo piccoli oggetti con la stampa 3D e materiali recuperati. Un approccio concreto che valorizza curiosità, durata e piacere di creare."],
  ["PET & PLA recyclés", "Recycled PET & PLA", "Recyceltes PET & PLA", "PET e PLA riciclati"],
  ["Bois de récupération", "Reclaimed wood", "Wiederverwertetes Holz", "Legno recuperato"],
  ["Aluminium recyclable", "Recyclable aluminium", "Recycelbares Aluminium", "Alluminio riciclabile"],
  ["En savoir plus sur notre démarche", "Learn more about our approach", "Mehr über unseren Ansatz", "Scopri il nostro approccio"],
  ["« Des objets simples, des idées qui font du bien. »", "“Simple objects, ideas that feel good.”", "„Einfache Dinge, gute Ideen.“", "«Oggetti semplici, idee che fanno stare bene.»"],
  ["RECRAFT · JOUER, SOUFFLER, RECOMMENCER", "RECRAFT · PLAY, PAUSE, REPEAT", "RECRAFT · SPIELEN, DURCHATMEN, WEITERMACHEN", "RECRAFT · GIOCARE, RESPIRARE, RICOMINCIARE"],
  ["La boutique Recraft", "The Recraft shop", "Der Recraft-Shop", "Il negozio Recraft"],
  ["De petites idées à emporter.", "Little ideas to take with you.", "Kleine Ideen zum Mitnehmen.", "Piccole idee da portare con sé."],
  ["Jeux de poche, casse-têtes et objets anti-stress : trouvez votre prochain compagnon du quotidien.", "Pocket games, puzzles and fidget objects: find your next everyday companion.", "Taschenspiele, Knobelspiele und Fidget-Objekte: Finden Sie Ihren neuen Alltagsbegleiter.", "Giochi tascabili, rompicapi e oggetti antistress: trova il tuo prossimo compagno quotidiano."],
  ["Tout voir", "View all", "Alle anzeigen", "Vedi tutto"],
  ["Recraft — Petits objets, grandes idées", "Recraft — Small objects, big ideas", "Recraft — Kleine Dinge, große Ideen", "Recraft — Piccoli oggetti, grandi idee"],
  ["Découvrez les jeux de poche, casse-têtes et objets anti-stress Recraft, imaginés avec des matériaux recyclés.", "Discover Recraft pocket games, puzzles and fidget objects, designed with recycled materials.", "Entdecken Sie Recraft-Taschenspiele, Knobelspiele und Fidget-Objekte aus recycelten Materialien.", "Scopri i giochi tascabili, i rompicapi e gli oggetti antistress Recraft, pensati con materiali riciclati."],
  ["Filtrer par catégorie", "Filter by category", "Nach Kategorie filtern", "Filtra per categoria"],
  ["Catalogue de produits", "Product catalogue", "Produktkatalog", "Catalogo prodotti"],
  ["Réinitialiser les filtres", "Reset filters", "Filter zurücksetzen", "Reimposta i filtri"],
  ["Aucun produit ne correspond pour le moment.", "No products match your search right now.", "Derzeit passen keine Produkte zu Ihrer Suche.", "Al momento nessun prodotto corrisponde alla ricerca."],
  ["Essayez un autre mot ou réinitialisez les filtres.", "Try another search or reset the filters.", "Versuchen Sie einen anderen Suchbegriff oder setzen Sie die Filter zurück.", "Prova un'altra parola o reimposta i filtri."],
  ["Oups", "Oops", "Hoppla", "Ops"],
  ["Ce produit est introuvable.", "This product could not be found.", "Dieses Produkt wurde nicht gefunden.", "Questo prodotto non è stato trovato."],
  ["Il a peut-être changé de place dans la boutique.", "It may have moved elsewhere in the shop.", "Vielleicht ist es an einen anderen Ort im Shop umgezogen.", "Forse si trova in un'altra sezione del negozio."],
  ["Retour à la boutique", "Back to the shop", "Zurück zum Shop", "Torna al negozio"],
  ["Choisir une illustration", "Choose an illustration", "Illustration auswählen", "Scegli un'illustrazione"],
  ["Illustration du produit", "Product illustration", "Produktillustration", "Illustrazione del prodotto"],
  ["Visuel illustratif de", "Illustrative product image of", "Illustrative Produktdarstellung von", "Immagine illustrativa di"],
  ["Photographie du morpion de poche ouvert avec son étui fermé.", "Photo of the pocket tic-tac-toe game open beside its closed case.", "Foto des geöffneten Taschen-Tic-Tac-Toe-Spiels neben seinem geschlossenen Etui.", "Foto del tris tascabile aperto accanto alla custodia chiusa."],
  ["Photographie du morpion de poche avec ses pions.", "Photo of the pocket tic-tac-toe game with its pieces.", "Foto des Taschen-Tic-Tac-Toe-Spiels mit seinen Spielsteinen.", "Foto del tris tascabile con le sue pedine."],
  ["Photographie du puzzle spirale bleu ouvert avec son étui fermé.", "Photo of the blue spiral puzzle open beside its closed case.", "Foto des geöffneten blauen Spiralpuzzles neben seinem geschlossenen Etui.", "Foto del puzzle a spirale blu aperto accanto alla custodia chiusa."],
  ["Photographie du galet anti-stress rouge.", "Photo of the red fidget pebble.", "Foto des roten Anti-Stress-Galets.", "Foto del galet antistress rosso."],
  ["Photographie du tangram nomade violet, avec son étui et ses pièces.", "Photo of the purple travel tangram, with its case and pieces.", "Foto des violetten Reise-Tangrams mit Etui und Spielsteinen.", "Foto del tangram da viaggio viola, con custodia e pezzi."],
  ["Photographie du labyrinthe de poche bleu avec ses billes.", "Photo of the blue pocket maze with its metal balls.", "Foto des blauen Taschenlabyrinths mit seinen Kugeln.", "Foto del labirinto tascabile blu con le sue biglie."],
  ["Photographie d’une roue sensorielle circulaire en bois, vue de dessus.", "Photo of a circular wooden sensory wheel, viewed from above.", "Foto eines runden sensorischen Holzrads von oben.", "Foto di una ruota sensoriale circolare in legno, vista dall’alto."],
  ["Photographie du Duo équilibre vert et bois, avec ses billes.", "Photo of the green and wooden balance duo with its balls.", "Foto des grünen Balance-Duos aus Holz mit seinen Kugeln.", "Foto del duo equilibrio verde e legno con le biglie."],
  ["Illustration 1", "Illustration 1", "Illustration 1", "Illustrazione 1"],
  ["Illustration 2", "Illustration 2", "Illustration 2", "Illustrazione 2"],
  ["Illustration 3", "Illustration 3", "Illustration 3", "Illustrazione 3"],
  ["Découvrir", "Discover", "Entdecken", "Scopri"],
  ["Voir le produit", "View product", "Produkt ansehen", "Vedi prodotto"],
  ["prix indicatif", "indicative price", "Richtpreis", "prezzo indicativo"],
  ["Quantité", "Quantity", "Menge", "Quantità"],
  ["Maximum :", "Maximum:", "Maximum:", "Massimo:"],
  ["Maximum : 20", "Maximum: 20", "Maximum: 20", "Massimo: 20"],
  ["Total :", "Total:", "Gesamt:", "Totale:"],
  ["Ajouter au panier", "Add to cart", "In den Warenkorb", "Aggiungi al carrello"],
  ["Voir tous les produits", "View all products", "Alle Produkte ansehen", "Vedi tutti i prodotti"],
  ["Matériau", "Material", "Material", "Materiale"],
  ["PLA recyclé", "Recycled PLA", "Recyceltes PLA", "PLA riciclato"],
  ["PET recyclé", "Recycled PET", "Recyceltes PET", "PET riciclato"],
  ["Aluminium", "Aluminium", "Aluminium", "Alluminio"],
  ["Bois récupéré", "Reclaimed wood", "Wiederverwendetes Holz", "Legno recuperato"],
  ["Bois recyclé", "Recycled wood", "Recyceltes Holz", "Legno riciclato"],
  ["Fabriquée en bois recyclé. Sa texture et sa rotation sont pensées pour une manipulation simple.", "Made from recycled wood. Its texture and rotation are designed for easy handling.", "Aus recyceltem Holz gefertigt. Struktur und Drehbewegung sind für eine einfache Handhabung gedacht.", "Realizzata in legno riciclato. La texture e la rotazione sono pensate per una manipolazione semplice."],
  ["Dimensions", "Dimensions", "Maße", "Dimensioni"],
  ["Poids", "Weight", "Gewicht", "Peso"],
  ["Pour", "For", "Für", "Per"],
  ["Objet cassé ou défectueux ? Écrivez-nous : nous étudierons avec vous une solution de retour ou de remplacement.", "Is your item broken or faulty? Get in touch and we’ll look at return or replacement options with you.", "Ist Ihr Produkt beschädigt oder defekt? Schreiben Sie uns, damit wir gemeinsam eine Rückgabe oder einen Ersatz prüfen können.", "Oggetto rotto o difettoso? Scrivici: valuteremo insieme una soluzione di reso o sostituzione."],
  ["Dans le même esprit", "You might also like", "Das könnte Ihnen auch gefallen", "Potrebbe piacerti anche"],
  ["À découvrir aussi", "Discover more", "Auch interessant", "Scopri anche"],
  ["Voir la catégorie", "View category", "Kategorie ansehen", "Vedi categoria"],
  ["Une idée qui prend forme", "An idea taking shape", "Eine Idee nimmt Gestalt an", "Un'idea prende forma"],
  ["Réinventer le quotidien, un objet à la fois.", "Rethinking everyday life, one object at a time.", "Den Alltag neu denken, ein Objekt nach dem anderen.", "Reinventare il quotidiano, un oggetto alla volta."],
  ["Recraft, c’est un projet qui réunit création, fabrication à la demande et envie de donner une nouvelle place aux matériaux.", "Recraft brings together creativity, on-demand making and the desire to give materials a new purpose.", "Recraft verbindet Kreativität, Fertigung auf Anfrage und den Wunsch, Materialien einen neuen Zweck zu geben.", "Recraft unisce creatività, produzione su richiesta e il desiderio di dare nuova vita ai materiali."],
  ["Découvrir nos objets", "Discover our objects", "Unsere Objekte entdecken", "Scopri i nostri oggetti"],
  ["Illustration d'une création Recraft", "Illustration of a Recraft creation", "Illustration einer Recraft-Kreation", "Illustrazione di una creazione Recraft"],
  ["Notre histoire", "Our story", "Unsere Geschichte", "La nostra storia"],
  ["Des objets utiles, fabriqués autrement.", "Useful objects, made differently.", "Nützliche Dinge, anders gemacht.", "Oggetti utili, realizzati in modo diverso."],
  ["Tout commence par une question simple : peut-on créer des objets du quotidien qui font plaisir, prennent peu de place et utilisent mieux les ressources disponibles ?", "It starts with a simple question: can we create everyday objects that bring joy, take up little space and make better use of available resources?", "Alles beginnt mit einer einfachen Frage: Können wir Alltagsgegenstände schaffen, die Freude machen, wenig Platz brauchen und vorhandene Ressourcen besser nutzen?", "Tutto inizia con una semplice domanda: possiamo creare oggetti quotidiani piacevoli, poco ingombranti e capaci di usare meglio le risorse disponibili?"],
  ["Nous avons imaginé Recraft autour de trois envies : proposer des jeux faciles à emporter, offrir de petits défis à résoudre et créer des objets à manipuler au fil de la journée. L’impression 3D nous permet d’explorer des formes, d’ajuster les modèles et de produire en petites séries.", "We built Recraft around three ideas: pocket-sized games, little challenges to solve, and tactile objects to handle throughout the day. 3D printing lets us explore shapes, refine designs and make small batches.", "Recraft entstand aus drei Ideen: Spiele für unterwegs, kleine Knobelaufgaben und Dinge zum Anfassen für den Alltag. Der 3D-Druck ermöglicht es uns, Formen auszuprobieren, Modelle anzupassen und in kleinen Serien zu fertigen.", "Recraft nasce da tre idee: giochi facili da portare, piccole sfide da risolvere e oggetti da manipolare durante la giornata. La stampa 3D ci permette di esplorare forme, perfezionare i modelli e produrre in piccole serie."],
  ["Nous choisissons des matériaux comme le PET et le PLA recyclés, ainsi que des pièces d’aluminium recyclables et du bois issu de chutes récupérées. Chaque matière a ses caractéristiques et son histoire ; nous souhaitons les présenter avec transparence, sans prétendre qu’un produit est sans impact.", "We choose materials such as recycled PET and PLA, recyclable aluminium parts and reclaimed wood offcuts. Each material has its own qualities and story; we aim to describe them transparently without claiming that any product has no impact.", "Wir verwenden Materialien wie recyceltes PET und PLA, recycelbare Aluminiumteile und wiederverwendete Holzreste. Jedes Material hat eigene Eigenschaften und eine eigene Geschichte. Wir möchten transparent darüber informieren und nicht behaupten, ein Produkt sei ohne Auswirkungen.", "Scegliamo materiali come PET e PLA riciclati, componenti in alluminio riciclabile e scarti di legno recuperati. Ogni materiale ha caratteristiche e una storia: vogliamo presentarli con trasparenza, senza affermare che un prodotto sia privo di impatto."],
  ["Nos objets ne remplacent ni un accompagnement professionnel ni une solution médicale. Ils sont conçus comme des compagnons de jeu ou de manipulation, à utiliser selon les besoins et les préférences de chacun.", "Our objects are not a substitute for professional support or medical care. They are designed as play or tactile companions, to be used according to each person’s needs and preferences.", "Unsere Produkte ersetzen weder professionelle Unterstützung noch medizinische Behandlung. Sie sind als Spiel- oder Tastbegleiter gedacht und können je nach Bedarf und Vorlieben verwendet werden.", "I nostri oggetti non sostituiscono il supporto professionale né le cure mediche. Sono pensati come compagni di gioco o da manipolare, da usare secondo le esigenze e le preferenze di ciascuno."],
  ["En choisissant un objet Recraft, vous soutenez une démarche à taille humaine et la valorisation de matières existantes. Un petit geste, à notre échelle, pour imaginer autrement ce que l’on peut fabriquer.", "By choosing a Recraft object, you support a small-scale approach and the reuse of existing materials. A small gesture, in our own way, to rethink what we make.", "Mit einem Recraft-Objekt unterstützen Sie einen Ansatz im kleinen Maßstab und die Wiederverwendung vorhandener Materialien. Ein kleiner Schritt, um neu darüber nachzudenken, was wir herstellen.", "Scegliendo un oggetto Recraft, sostieni un approccio su piccola scala e la valorizzazione dei materiali esistenti. Un piccolo gesto per immaginare un modo diverso di produrre."],
  ["Mieux comprendre, mieux accueillir", "Understanding more, welcoming everyone", "Mehr verstehen, offen begegnen", "Capire meglio, accogliere tutti"],
  ["L’anxiété et la neurodivergence méritent écoute et respect.", "Anxiety and neurodivergence deserve understanding and respect.", "Angst und Neurodivergenz verdienen Verständnis und Respekt.", "Ansia e neurodivergenza meritano ascolto e rispetto."],
  ["L’anxiété peut être vécue de nombreuses façons. Le bruit, l’imprévu ou certaines situations du quotidien peuvent demander beaucoup d’énergie à certaines personnes — et pas à d’autres.", "Anxiety can be experienced in many ways. Noise, the unexpected or everyday situations may take a lot of energy for some people, but not for others.", "Angst kann auf viele Arten erlebt werden. Lärm, Unvorhergesehenes oder Alltagssituationen können manche Menschen viel Kraft kosten, andere jedoch nicht.", "L’ansia può essere vissuta in molti modi. Il rumore, gli imprevisti o alcune situazioni quotidiane possono richiedere molta energia ad alcune persone, ma non ad altre."],
  ["Les personnes neurodivergentes ont des fonctionnements neurologiques variés, par exemple dans le cas de l’autisme ou du TDAH. La neurodivergence n’est pas un défaut à corriger : chaque personne a ses forces, ses besoins et ses préférences.", "Neurodivergent people have varied ways of thinking and processing the world, including autism and ADHD. Neurodivergence is not a flaw to fix: each person has their own strengths, needs and preferences.", "Neurodivergente Menschen haben unterschiedliche neurologische Funktionsweisen, zum Beispiel bei Autismus oder ADHS. Neurodivergenz ist kein Fehler, der korrigiert werden muss: Jeder Mensch hat eigene Stärken, Bedürfnisse und Vorlieben.", "Le persone neurodivergenti hanno modi diversi di funzionare a livello neurologico, ad esempio in caso di autismo o ADHD. La neurodivergenza non è un difetto da correggere: ogni persona ha i propri punti di forza, bisogni e preferenze."],
  ["Nous voulons contribuer à un quotidien plus accueillant, sans présumer de ce dont chacun a besoin. Un objet à manipuler peut être agréable ou utile à certaines personnes, mais son effet varie d’une personne à l’autre.", "We want to help make everyday life more welcoming without assuming what anyone needs. A fidget object may feel enjoyable or useful to some people, but its effect varies from person to person.", "Wir möchten zu einem offeneren Alltag beitragen, ohne anzunehmen, was einzelne Menschen brauchen. Ein Gegenstand zum Tasten kann für manche angenehm oder hilfreich sein – die Wirkung ist jedoch von Mensch zu Mensch verschieden.", "Vogliamo contribuire a una quotidianità più accogliente, senza presumere ciò di cui ciascuno ha bisogno. Un oggetto da manipolare può essere piacevole o utile per alcune persone, ma l’effetto varia da persona a persona."],
  ["À garder en tête", "A note to keep in mind", "Wichtig zu wissen", "Da ricordare"],
  ["Nos objets ne soignent pas l’anxiété et ne remplacent ni un avis médical ni un accompagnement professionnel. Ce sont des objets de jeu ou de manipulation, à utiliser — ou non — selon les envies de chacun.", "Our objects do not treat anxiety and are not a substitute for medical advice or professional support. They are play or fidget objects, to use—or not—according to each person’s preference.", "Unsere Produkte behandeln keine Angst und ersetzen weder ärztlichen Rat noch professionelle Unterstützung. Es sind Spiel- oder Tastobjekte, die je nach Vorliebe genutzt werden können – oder nicht.", "I nostri oggetti non curano l’ansia e non sostituiscono il parere medico né il supporto professionale. Sono oggetti da gioco o da manipolare, da usare — oppure no — secondo le preferenze di ciascuno."],
  ["Ce qu’il y a dedans", "What goes into it", "Was darin steckt", "Cosa c'è dentro"],
  ["Des matières choisies avec soin.", "Materials chosen with care.", "Sorgfältig ausgewählte Materialien.", "Materiali scelti con cura."],
  ["La provenance et la composition exactes peuvent varier d’un objet à l’autre : elles sont précisées sur chaque fiche produit.", "Exact origin and composition may vary from one item to another; details are provided on each product page.", "Herkunft und genaue Zusammensetzung können je nach Produkt variieren und sind auf der jeweiligen Produktseite angegeben.", "Origine e composizione esatte possono variare: i dettagli sono indicati nella scheda di ogni prodotto."],
  ["Des filaments compatibles avec l’impression 3D, utilisés pour créer des pièces légères et détaillées.", "3D-printable filaments used to create lightweight, detailed parts.", "Für den 3D-Druck geeignete Filamente für leichte, detailreiche Teile.", "Filamenti adatti alla stampa 3D, usati per creare componenti leggeri e dettagliati."],
  ["Un métal recyclable, réservé aux pièces qui en ont besoin pour leur fonction ou leur assemblage.", "A recyclable metal, used where needed for a component’s function or assembly.", "Ein recycelbares Metall, das dort eingesetzt wird, wo es für Funktion oder Montage nötig ist.", "Un metallo riciclabile, usato quando necessario per la funzione o l'assemblaggio."],
  ["Des chutes de bois réemployées pour ajouter un détail de matière et éviter le gaspillage.", "Reused wood offcuts add a natural detail and help avoid waste.", "Wiederverwendete Holzreste sorgen für ein natürliches Detail und helfen, Abfall zu vermeiden.", "Scarti di legno riutilizzati aggiungono un dettaglio naturale e aiutano a evitare sprechi."],
  ["À vous de jouer", "Your turn to play", "Jetzt sind Sie dran", "Tocca a te"],
  ["Une idée vous attend peut-être déjà.", "Your next idea may be waiting here.", "Vielleicht wartet hier schon Ihre nächste Idee.", "La tua prossima idea potrebbe essere qui."],
  ["Découvrez les petits objets Recraft et choisissez celui qui vous ressemble.", "Explore Recraft’s little objects and find the one that suits you.", "Entdecken Sie die kleinen Recraft-Objekte und finden Sie Ihr passendes Stück.", "Scopri i piccoli oggetti Recraft e scegli quello che fa per te."],
  ["On vous répond", "We’re here to help", "Wir antworten Ihnen", "Ti rispondiamo"],
  ["Une question ? Parlons-en.", "Have a question? Let’s talk.", "Fragen? Sprechen wir darüber.", "Hai una domanda? Parliamone."],
  ["Une question sur un produit, les matériaux, ou un objet cassé ou défectueux ? Écrivez-nous, nous serons ravis d’échanger.", "Questions about a product, materials, or a broken or faulty item? Get in touch — we’d be happy to help.", "Fragen zu einem Produkt, den Materialien oder einem beschädigten Artikel? Schreiben Sie uns, wir helfen Ihnen gern weiter.", "Hai domande su un prodotto, sui materiali o su un oggetto rotto o difettoso? Scrivici, saremo felici di aiutarti."],
  ["Nom", "Name", "Name", "Nome"],
  ["Adresse e-mail", "Email address", "E-Mail-Adresse", "Indirizzo e-mail"],
  ["Sujet", "Subject", "Betreff", "Oggetto"],
  ["Votre message", "Your message", "Ihre Nachricht", "Il tuo messaggio"],
  ["Prévisualiser mon message", "Preview my message", "Nachrichtenvorschau", "Anteprima del messaggio"],
  ["Démonstration : vos informations restent dans cette page et ne sont pas envoyées.", "Demo: your information stays on this page and is not sent.", "Demo: Ihre Angaben bleiben auf dieser Seite und werden nicht gesendet.", "Demo: le tue informazioni restano su questa pagina e non vengono inviate."],
  ["Restons en contact", "Get in touch", "Bleiben wir in Kontakt", "Restiamo in contatto"],
  ["Nous sommes à votre écoute.", "We’re here to listen.", "Wir haben ein offenes Ohr.", "Siamo qui per ascoltarti."],
  ["Pour toute question sur votre commande, un matériau ou la démarche Recraft, écrivez-nous par e-mail.", "For questions about your order, a material or Recraft’s approach, email us.", "Bei Fragen zu Ihrer Bestellung, einem Material oder dem Recraft-Ansatz schreiben Sie uns eine E-Mail.", "Per domande sul tuo ordine, su un materiale o sul progetto Recraft, scrivici un'e-mail."],
  ["E-mail", "Email", "E-Mail", "E-mail"],
  ["Objet cassé ou défectueux ?", "Broken or faulty item?", "Beschädigter oder defekter Artikel?", "Oggetto rotto o difettoso?"],
  ["Décrivez le problème et joignez si possible une photo dans votre e-mail. Nous vous aiderons à trouver une solution de retour ou de remplacement.", "Describe the issue and, if possible, attach a photo to your email. We’ll help you find a return or replacement solution.", "Beschreiben Sie das Problem und fügen Sie nach Möglichkeit ein Foto bei. Wir helfen Ihnen bei Rückgabe oder Ersatz.", "Descrivi il problema e, se possibile, allega una foto. Ti aiuteremo a trovare una soluzione di reso o sostituzione."],
  ["Votre sélection", "Your selection", "Ihre Auswahl", "La tua selezione"],
  ["Mon panier", "My cart", "Mein Warenkorb", "Il mio carrello"],
  ["Retirer", "Remove", "Entfernen", "Rimuovi"],
  ["Récapitulatif", "Order summary", "Zusammenfassung", "Riepilogo"],
  ["Livraison", "Shipping", "Versand", "Spedizione"],
  ["À confirmer", "To be confirmed", "Noch zu bestätigen", "Da confermare"],
  ["Total indicatif", "Estimated total", "Voraussichtliche Summe", "Totale indicativo"],
  ["Les frais et délais de livraison seront confirmés avec vous. Le paiement en ligne n’est pas disponible dans cette maquette.", "Shipping costs and delivery times will be confirmed with you. Online payment is not available in this demo.", "Versandkosten und Lieferzeiten werden mit Ihnen abgestimmt. Eine Online-Zahlung ist in dieser Demo nicht verfügbar.", "Costi e tempi di spedizione saranno confermati con te. In questa demo non è disponibile il pagamento online."],
  ["Continuer", "Continue", "Weiter", "Continua"],
  ["Coordonnées de démonstration", "Demo contact details", "Kontaktdaten (Demo)", "Dati di contatto demo"],
  ["Nom complet", "Full name", "Vollständiger Name", "Nome completo"],
  ["Adresse de livraison", "Shipping address", "Lieferadresse", "Indirizzo di spedizione"],
  ["Aucun paiement ni commande ne sera effectué. N’entrez pas de coordonnées bancaires.", "No payment or order will be made. Do not enter bank details.", "Es wird keine Zahlung oder Bestellung ausgelöst. Geben Sie keine Bankdaten ein.", "Non verranno effettuati pagamenti o ordini. Non inserire dati bancari."],
  ["Valider la démonstration", "Submit demo", "Demo abschließen", "Conferma la demo"],
  ["Votre panier est encore vide.", "Your cart is still empty.", "Ihr Warenkorb ist noch leer.", "Il carrello è ancora vuoto."],
  ["Quelques idées à découvrir vous attendent dans la boutique.", "A few ideas are waiting for you in the shop.", "Im Shop warten einige Ideen darauf, entdeckt zu werden.", "Nel negozio ti aspettano tante idee da scoprire."],
  ["Informations", "Information", "Informationen", "Informazioni"],
  ["Après-vente", "After-sales", "Kundendienst", "Assistenza"],
  ["Cette maquette présente un projet fictif. Les informations légales de l’entreprise, son adresse et ses conditions de vente devront être complétées avant toute mise en ligne commerciale.", "This demo presents a fictional project. Company legal details, address and terms of sale must be completed before a commercial launch.", "Diese Demo zeigt ein fiktives Projekt. Rechtliche Angaben, Anschrift und Verkaufsbedingungen müssen vor einem kommerziellen Start ergänzt werden.", "Questa demo presenta un progetto fittizio. I dati legali, l'indirizzo e le condizioni di vendita dovranno essere completati prima della messa online commerciale."],
  ["Recraft — contact :", "Recraft — contact:", "Recraft — Kontakt:", "Recraft — contatto:"],
  ["Un produit est arrivé cassé ou présente un défaut ? Contactez-nous à", "Did your product arrive broken or develop a fault? Contact us at", "Ist Ihr Produkt beschädigt angekommen oder weist es einen Defekt auf? Kontaktieren Sie uns unter", "Il prodotto è arrivato rotto o presenta un difetto? Contattaci a"],
  ["en décrivant le problème. Nous étudierons avec vous les possibilités de retour, de réparation ou de remplacement.", "and describe the issue. We’ll discuss return, repair or replacement options with you.", "und beschreiben Sie das Problem. Gemeinsam prüfen wir Rückgabe, Reparatur oder Ersatz.", "descrivendo il problema. Valuteremo insieme le possibilità di reso, riparazione o sostituzione."],
  ["Les conditions et délais définitifs devront être précisés avant l’ouverture d’une vraie boutique.", "Final terms and timelines must be specified before the real shop opens.", "Die endgültigen Bedingungen und Fristen müssen vor dem Start des echten Shops festgelegt werden.", "Le condizioni e i tempi definitivi dovranno essere specificati prima dell'apertura del negozio."],
  ["Nous contacter", "Contact us", "Kontakt aufnehmen", "Contattaci"],
  ["Indique une quantité d’au moins 1.", "Enter a quantity of at least 1.", "Geben Sie eine Menge von mindestens 1 ein.", "Indica una quantità di almeno 1."],
  ["Pour une quantité supérieure à 20, contactez-nous.", "For quantities over 20, please contact us.", "Bei mehr als 20 Stück kontaktieren Sie uns bitte.", "Per quantità superiori a 20, contattaci."],
  ["Pour une quantité supérieure à 20 par produit, contactez-nous.", "For more than 20 of any product, please contact us.", "Bei mehr als 20 Stück pro Produkt kontaktieren Sie uns bitte.", "Per più di 20 pezzi dello stesso prodotto, contattaci."],
  ["Le panier ne peut pas être enregistré sur cet appareil.", "The cart could not be saved on this device.", "Der Warenkorb konnte auf diesem Gerät nicht gespeichert werden.", "Impossibile salvare il carrello su questo dispositivo."],
  ["La version française est actuellement disponible.", "This language is currently available.", "Diese Sprache ist derzeit verfügbar.", "Questa lingua è attualmente disponibile."],
  ["Démonstration terminée : aucune commande n’a été transmise et aucun paiement n’a été effectué.", "Demo complete: no order was submitted and no payment was made.", "Demo abgeschlossen: Es wurde keine Bestellung übermittelt und keine Zahlung vorgenommen.", "Demo completata: nessun ordine è stato inviato e nessun pagamento è stato effettuato."],
  ["Aperçu de votre message", "Message preview", "Nachrichtenvorschau", "Anteprima del messaggio"],
  ["De :", "From:", "Von:", "Da:"],
  ["Démonstration : aucun message n’est envoyé. Vos réponses restent dans les champs ci-dessus.", "Demo: no message is sent. Your answers remain in the fields above.", "Demo: Es wird keine Nachricht gesendet. Ihre Angaben bleiben in den Feldern oben.", "Demo: il messaggio non viene inviato. Le tue risposte restano nei campi qui sopra."],
  ["Ce champ est obligatoire.", "This field is required.", "Dieses Feld ist erforderlich.", "Questo campo è obbligatorio."],
  ["Entrez une adresse valide, par exemple nom@exemple.ch.", "Enter a valid address, for example name@example.com.", "Geben Sie eine gültige Adresse ein, zum Beispiel name@example.com.", "Inserisci un indirizzo valido, ad esempio nome@esempio.it."],
  ["Indiquez une quantité entre 1 et 20.", "Enter a quantity between 1 and 20.", "Geben Sie eine Menge zwischen 1 und 20 ein.", "Indica una quantità tra 1 e 20."],
  ["Mini morpion", "Mini tic-tac-toe", "Mini-Tic-Tac-Toe", "Mini tris"],
  ["Jeu de poche", "Pocket game", "Taschenspiel", "Gioco tascabile"],
  ["À emporter", "Take anywhere", "Für unterwegs", "Da portare ovunque"],
  ["Le grand classique, version mini. Une partie se glisse facilement dans une pause, un trajet ou un moment partagé.", "A classic in miniature. Easy to play during a break, on a journey or together with someone.", "Der Klassiker im Miniformat. Ideal für eine Pause, unterwegs oder einen gemeinsamen Moment.", "Un grande classico in formato mini. Perfetto per una pausa, un viaggio o un momento da condividere."],
  ["Imprimé en 3D à partir de filament PLA recyclé. Les pions sont conçus pour rester faciles à manipuler et à ranger.", "3D-printed from recycled PLA filament. The pieces are designed to be easy to handle and store.", "Aus recyceltem PLA-Filament im 3D-Druck gefertigt. Die Spielsteine lassen sich leicht handhaben und verstauen.", "Stampato in 3D con filamento PLA riciclato. Le pedine sono facili da maneggiare e riporre."],
  ["Puzzle spirale", "Spiral puzzle", "Spiralrätsel", "Puzzle a spirale"],
  ["Casse-tête", "Puzzle", "Knobelspiel", "Rompicapo"],
  ["À vous de jouer", "Your move", "Jetzt sind Sie dran", "Tocca a te"],
  ["Un défi à prendre en main et à résoudre à son rythme. Observez les formes, testez des pistes et savourez le déclic.", "A hands-on challenge to solve at your own pace. Study the shapes, try different approaches and enjoy the moment it clicks.", "Eine Herausforderung zum Anfassen und Lösen im eigenen Tempo. Formen betrachten, Wege ausprobieren und den Aha-Moment genießen.", "Una sfida da affrontare con le mani e risolvere con i propri tempi. Osserva le forme, prova diverse strade e goditi la soluzione."],
  ["Fabriqué à la demande en PET recyclé. Chaque pièce est vérifiée avant d'être réunie dans le puzzle.", "Made to order from recycled PET. Each piece is checked before being assembled into the puzzle.", "Auf Anfrage aus recyceltem PET gefertigt. Jedes Teil wird geprüft, bevor es zum Puzzle zusammengesetzt wird.", "Realizzato su richiesta in PET riciclato. Ogni pezzo viene controllato prima di comporre il puzzle."],
  ["Galet mobile", "Pocket fidget pebble", "Fidget-Stein", "Pietra antistress"],
  ["Petit compagnon", "Little companion", "Kleiner Begleiter", "Piccolo compagno"],
  ["Une forme douce et compacte à faire rouler entre les doigts. Un petit objet sensoriel pour occuper les mains, à utiliser selon vos envies.", "A smooth, compact shape to roll between your fingers. A small tactile object to keep your hands busy, whenever you like.", "Eine angenehme, kompakte Form zum Rollen zwischen den Fingern. Ein kleines Tastobjekt für beschäftigte Hände, ganz nach Wunsch.", "Una forma morbida e compatta da far scorrere tra le dita. Un piccolo oggetto sensoriale per tenere occupate le mani, quando vuoi."],
  ["Imprimé en 3D en PLA recyclé. Les reliefs sont intégrés à la forme, sans pile ni composant électronique.", "3D-printed in recycled PLA. The texture is built into the shape, with no batteries or electronics.", "Im 3D-Druck aus recyceltem PLA gefertigt. Die Struktur ist Teil der Form – ohne Batterien oder Elektronik.", "Stampato in 3D in PLA riciclato. Le scanalature sono integrate nella forma, senza batterie né componenti elettronici."],
  ["Tangram nomade", "Pocket tangram", "Tangram für unterwegs", "Tangram tascabile"],
  ["Quelques formes, une foule de possibilités. Assemblez les pièces pour inventer des silhouettes ou relever un défi ensemble.", "A few shapes, endless possibilities. Arrange the pieces to create figures or take on a challenge together.", "Wenige Formen, viele Möglichkeiten. Legen Sie die Teile zu Figuren oder lösen Sie gemeinsam eine Aufgabe.", "Poche forme, infinite possibilità. Disponi i pezzi per creare figure o affrontare una sfida insieme."],
  ["Pièces réalisées à partir de PLA recyclé et rangées dans un étui de poche imprimé en 3D.", "Made from recycled PLA and stored in a 3D-printed pocket case.", "Aus recyceltem PLA gefertigt und in einer 3D-gedruckten Tasche verstaut.", "Realizzato in PLA riciclato e riposto in una custodia tascabile stampata in 3D."],
  ["Labyrinthe de poche", "Pocket maze", "Taschenlabyrinth", "Labirinto tascabile"],
  ["Petit défi", "Little challenge", "Kleine Herausforderung", "Piccola sfida"],
  ["Guidez la bille d'un bout à l'autre du parcours. Un défi simple à comprendre, mais qui demande patience et précision.", "Guide the ball through the maze from start to finish. Easy to understand, but it takes patience and precision.", "Führen Sie die Kugel durch das Labyrinth. Die Aufgabe ist leicht verständlich, erfordert aber Geduld und Präzision.", "Guida la pallina da un'estremità all'altra del percorso. Una sfida semplice da capire, ma che richiede pazienza e precisione."],
  ["Conçu et imprimé en PET recyclé. Un objet compact, sans écran et réutilisable à l'infini.", "Designed and printed in recycled PET. A compact, screen-free object you can use again and again.", "Aus recyceltem PET entworfen und gedruckt. Kompakt, ohne Bildschirm und immer wieder verwendbar.", "Progettato e stampato in PET riciclato. Un oggetto compatto, senza schermo e riutilizzabile all'infinito."],
  ["Roue sensorielle", "Sensory wheel", "Sensorisches Rad", "Ruota sensoriale"],
  ["Format mini", "Mini size", "Miniformat", "Formato mini"],
  ["Une petite roue texturée à faire tourner du bout des doigts. Un geste répétitif et discret, facile à emporter.", "A small textured wheel to spin with your fingertips. A discreet, repetitive motion that’s easy to take along.", "Ein kleines, strukturiertes Rad zum Drehen mit den Fingerspitzen. Eine dezente, wiederholende Bewegung für unterwegs.", "Una piccola ruota testurizzata da far girare con la punta delle dita. Un gesto ripetitivo e discreto, facile da portare con sé."],
  ["Imprimée en 3D en PLA recyclé. La texture et la rotation sont pensées pour une manipulation simple.", "3D-printed in recycled PLA. Its texture and rotation are designed for easy handling.", "Im 3D-Druck aus recyceltem PLA gefertigt. Struktur und Drehbewegung sind leicht zu handhaben.", "Stampata in 3D in PLA riciclato. La texture e la rotazione sono pensate per un uso semplice."],
  ["Duo équilibre", "Balance duo", "Balance-Duo", "Equilibrio duo"],
  ["À partager", "Share the fun", "Zum Teilen", "Da condividere"],
  ["Empilez les pièces sans faire vaciller la construction. Un jeu d'adresse qui se joue à deux ou en solo, partout.", "Stack the pieces without toppling the structure. A dexterity game to play solo or with a friend, anywhere.", "Stapeln Sie die Teile, ohne den Turm ins Wanken zu bringen. Ein Geschicklichkeitsspiel für allein oder zu zweit.", "Impila i pezzi senza far cadere la struttura. Un gioco di abilità da fare da soli o in compagnia, ovunque."],
  ["Les pièces sont imprimées en PLA recyclé dans un format léger, puis réunies dans un étui compact.", "The pieces are 3D-printed in recycled PLA, then packed in a compact case.", "Die Teile werden aus recyceltem PLA gedruckt und in einem kompakten Etui verstaut.", "I pezzi sono stampati in PLA riciclato e raccolti in una custodia compatta."],
  ["Nœud logique", "Logic knot", "Logikknoten", "Nodo logico"],
  ["À démêler", "Untangle me", "Zu entwirren", "Da districare"],
  ["Trois éléments à séparer puis à réunir. Prenez le temps d'explorer les mouvements et de trouver la bonne combinaison.", "Separate and reconnect the three pieces. Explore how they move and find the right combination at your own pace.", "Drei Teile müssen getrennt und wieder verbunden werden. Erkunden Sie die Bewegungen und finden Sie die richtige Kombination.", "Separa e ricomponi i tre elementi. Esplora i movimenti e trova la combinazione giusta con calma."],
  ["Aluminium recyclé", "Recycled aluminium", "Recyceltes Aluminium", "Alluminio riciclato"],
  ["Pièces en aluminium recyclé, assemblées pour former un casse-tête durable.", "Pieces made from recycled aluminium, assembled to form a durable puzzle.", "Teile aus recyceltem Aluminium, zu einem langlebigen Puzzle zusammengesetzt.", "Elementi in alluminio riciclato, assemblati per formare un rompicapo resistente."],
  ["1 joueur", "1 player", "1 Spieler", "1 giocatore"],
  ["2 joueurs", "2 players", "2 Spieler", "2 giocatori"],
  ["1 joueur ou plus", "1 or more players", "1 oder mehr Spieler", "1 o più giocatori"],
  ["1 à 2 joueurs", "1–2 players", "1–2 Spieler", "Da 1 a 2 giocatori"],
  ["À garder en poche", "Pocket-sized", "Für die Tasche", "Da tenere in tasca"]
];

const localeCodes = ["fr", "en", "de", "it"];
const translationMaps = Object.fromEntries(localeCodes.slice(1).map((code, index) => [
  code,
  new Map(translationRows.map(row => [row[0], row[index + 1]]))
]));
let language = "fr";
try {
  const savedLanguage = localStorage.getItem("recraft-language");
  if (localeCodes.includes(savedLanguage)) language = savedLanguage;
} catch (error) {
  console.error("Impossible de lire la langue enregistrée.", error);
}
const originalTextNodes = new WeakMap();
const originalAttributes = new WeakMap();

function t(text) {
  return translationMaps[language]?.get(text) || text;
}

function localizedProduct(product) {
  return Object.fromEntries(Object.entries(product).map(([key, value]) => [
    key,
    typeof value === "string" ? t(value) : value
  ]));
}

function translatePage() {
  document.documentElement.lang = language;
  document.title = t("Recraft — Petits objets, grandes idées");
  document.querySelector('meta[name="description"]').content = t("Découvrez les jeux de poche, casse-têtes et objets anti-stress Recraft, imaginés avec des matériaux recyclés.");
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (!originalTextNodes.has(node)) originalTextNodes.set(node, node.nodeValue);
    const original = originalTextNodes.get(node);
    let translated = t(original.trim());
    translated = original.replace(original.trim(), translated);
    translated = translated.replace(/^(\d+) produit(s?) trouvé(s?)$/, (_, count) => {
      const quantity = Number(count);
      if (language === "en") return `${quantity} product${quantity === 1 ? "" : "s"} found`;
      if (language === "de") return `${quantity} Produkt${quantity === 1 ? "" : "e"} gefunden`;
      if (language === "it") return `${quantity} prodott${quantity === 1 ? "o" : "i"} trovat${quantity === 1 ? "o" : "i"}`;
      return original;
    });
    translated = translated.replace(/^Sous-total \((\d+) articles?\)$/, (_, count) => {
      const quantity = Number(count);
      if (language === "en") return `Subtotal (${quantity} item${quantity === 1 ? "" : "s"})`;
      if (language === "de") return `Zwischensumme (${quantity} Artikel)`;
      if (language === "it") return `Subtotale (${quantity} articol${quantity === 1 ? "o" : "i"})`;
      return original;
    });
    node.nodeValue = translated;
  }
  document.querySelectorAll("[aria-label]").forEach(element => {
    let originals = originalAttributes.get(element);
    if (!originals) {
      originals = new Map();
      originalAttributes.set(element, originals);
    }
    if (!originals.has("aria-label")) originals.set("aria-label", element.getAttribute("aria-label"));
    element.setAttribute("aria-label", t(originals.get("aria-label")));
  });
  const search = document.querySelector("#search-input");
  if (search) search.placeholder = t("Rechercher");
  const checkoutEmail = document.querySelector("#checkout-email");
  if (checkoutEmail) checkoutEmail.placeholder = {
    fr: "nom@exemple.ch",
    en: "name@example.com",
    de: "name@beispiel.de",
    it: "nome@esempio.it"
  }[language];
  const languageSelect = document.querySelector("#language-select");
  if (languageSelect) languageSelect.value = language;
}

const app = document.querySelector("#app");
const cartKey = "recraft-cart";
let activeFilter = "all";
let searchTerm = "";
let toastTimer;

const categoryNames = {
  all: "Tout voir",
  poche: "Jeux de poche",
  puzzle: "Casse-têtes",
  "anti-stress": "Anti-stress"
};

function money(value) {
  const locale = { fr: "fr-CH", en: "en-CH", de: "de-CH", it: "it-CH" }[language];
  return new Intl.NumberFormat(locale, { style: "currency", currency: "CHF", maximumFractionDigits: 0 }).format(value);
}

function getCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(cartKey) || "[]");
    if (!Array.isArray(saved)) return [];
    return saved.filter(item => products.some(product => product.id === item.id) && Number.isInteger(item.quantity) && item.quantity > 0);
  } catch (error) {
    console.error("Impossible de lire le panier enregistré.", error);
    return [];
  }
}

function saveCart(cart) {
  try {
    localStorage.setItem(cartKey, JSON.stringify(cart));
  } catch (error) {
    console.error("Impossible d'enregistrer le panier.", error);
    showToast("Le panier ne peut pas être enregistré sur cet appareil.");
  }
  updateCartBadge();
}

function updateCartBadge() {
  const count = getCart().reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.querySelector(".cart-count");
  const link = document.querySelector(".cart-link");
  if (badge) badge.textContent = String(count);
  if (link) {
    const labels = {
      fr: `Panier, ${count} article${count > 1 ? "s" : ""}`,
      en: `Cart, ${count} item${count === 1 ? "" : "s"}`,
      de: `Warenkorb, ${count} Artikel`,
      it: `Carrello, ${count} articol${count === 1 ? "o" : "i"}`
    };
    link.setAttribute("aria-label", labels[language]);
  }
}

function showToast(message) {
  const toast = document.querySelector(".toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 3000);
}

function illustration(type, variant = 0) {
  const palettes = [
    { base: "#77b48e", light: "#d9e9d8", dark: "#354b3c", accent: "#f0bf73" },
    { base: "#c89b68", light: "#eee3cf", dark: "#554437", accent: "#79b38b" },
    { base: "#8299a1", light: "#e1e9e9", dark: "#38484c", accent: "#dfa977" }
  ];
  const c = palettes[variant % palettes.length];
  const shapes = {
    board: `<rect x="30" y="28" width="140" height="140" rx="20" fill="${c.base}"/><path d="M76 42v112M124 42v112M43 76h114M43 122h114" stroke="${c.light}" stroke-width="8" stroke-linecap="round"/><circle cx="76" cy="76" r="13" fill="none" stroke="${c.dark}" stroke-width="7"/><path d="m110 106 25 25m0-25-25 25" stroke="${c.accent}" stroke-width="8" stroke-linecap="round"/><circle cx="76" cy="145" r="10" fill="${c.accent}"/>`,
    spiral: `<path d="M100 24 171 65v74l-71 41-71-41V65z" fill="${c.base}"/><path d="M100 52c31 0 48 32 31 56-13 18-42 19-55 2-11-15-5-38 12-45 14-6 29 4 28 18-1 10-12 16-21 11" fill="none" stroke="${c.light}" stroke-width="10" stroke-linecap="round"/><circle cx="100" cy="100" r="7" fill="${c.accent}"/>`,
    fidget: `<path d="M62 43c11-18 37-18 48 0l11 18 21-1c23-1 36 25 24 44l-12 20 8 21c9 22-12 44-34 37l-23-7-19 13c-20 14-47-1-45-25l2-23-15-16c-16-17-7-46 16-50l22-4z" fill="${c.base}"/><circle cx="101" cy="101" r="27" fill="${c.light}"/><circle cx="101" cy="101" r="12" fill="${c.accent}"/><circle cx="98" cy="48" r="5" fill="${c.dark}"/><circle cx="146" cy="84" r="5" fill="${c.dark}"/><circle cx="136" cy="143" r="5" fill="${c.dark}"/>`,
    tangram: `<rect x="25" y="24" width="150" height="150" rx="16" fill="${c.base}"/><path d="m100 42 46 46h-46z" fill="${c.light}"/><path d="M100 42v92l-46-46z" fill="${c.accent}"/><path d="m54 88 46 46H54z" fill="${c.dark}"/><path d="m100 134 46-46v46z" fill="${c.light}"/><path d="m146 88 26 26-26 20z" fill="${c.accent}"/>`,
    maze: `<rect x="28" y="28" width="144" height="144" rx="19" fill="${c.base}"/><path d="M53 54h94v24H79v21h51v23H79v21h68M53 78v65h26m42-65v21m26 19v-19" fill="none" stroke="${c.light}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="54" cy="54" r="9" fill="${c.accent}"/><circle cx="147" cy="143" r="9" fill="${c.accent}"/>`,
    wheel: `<circle cx="100" cy="100" r="73" fill="${c.base}"/><circle cx="100" cy="100" r="47" fill="${c.light}"/><circle cx="100" cy="100" r="19" fill="${c.accent}"/><path d="M100 31v21M149 51l-15 15M169 100h-21M149 149l-15-15M100 169v-21M51 149l15-15M31 100h21M51 51l15 15" stroke="${c.dark}" stroke-width="8" stroke-linecap="round"/>`,
    balance: `<rect x="37" y="128" width="126" height="35" rx="14" fill="${c.base}"/><path d="M61 122 83 92h34l22 30z" fill="${c.accent}"/><path d="M72 86 91 61h26l18 25z" fill="${c.light}"/><circle cx="100" cy="49" r="16" fill="${c.dark}"/><path d="M48 143h104" stroke="${c.light}" stroke-width="5" stroke-linecap="round"/>`,
    knot: `<path d="M55 54c0-16 13-27 29-20l36 17c15 7 19 24 10 38l-23 35 13 9c11 8 25-2 20-15l-9-24 19-7 12 30c12 33-24 59-52 40l-21-15 34-51c3-5 2-10-4-13L84 61c-6-3-11 0-11 6v14H52z" fill="${c.base}"/><path d="m61 84 34 47-15 12-37-52z" fill="${c.accent}"/><circle cx="62" cy="58" r="8" fill="${c.light}"/>`
  };
  const shape = shapes[type] || shapes.board;
  return `<svg viewBox="0 0 200 200" role="img" aria-label="Illustration du produit" xmlns="http://www.w3.org/2000/svg"><ellipse cx="100" cy="177" rx="62" ry="8" fill="#25272b" opacity=".09"/>${shape}</svg>`;
}

function productImage(product, className = "") {
  const localized = localizedProduct(product);
  const photo = product.id === "mini-morpion"
    ? { image: "mini-morpion-photo-white.png", alt: "Photographie du morpion de poche avec ses pions." }
    : product.id === "puzzle-spirale"
      ? { image: "puzzle-spirale-photo-white.png", alt: "Photographie du puzzle spirale bleu ouvert avec son étui fermé." }
      : product.id === "galet-mobile"
        ? { image: "galet-mobile-photo.png", alt: "Photographie du galet anti-stress rouge." }
        : product.id === "tangram-nomade"
          ? { image: "tangram-nomade-photo.png", alt: "Photographie du tangram nomade violet, avec son étui et ses pièces." }
          : product.id === "labyrinthe-poche"
            ? { image: "labyrinthe-poche-photo.png", alt: "Photographie du labyrinthe de poche bleu avec ses billes." }
            : product.id === "roue-sensorielle"
              ? { image: "roue-sensorielle-photo.png", alt: "Photographie d’une roue sensorielle circulaire en bois, vue de dessus." }
              : product.id === "duo-equilibre"
                ? { image: "duo-equilibre-photo.png", alt: "Photographie du Duo équilibre vert et bois, avec ses billes." }
              : product.id === "noeud-logique"
                ? { image: "noeud-logique-photo.png", alt: "Photographie de plusieurs éléments métalliques du jeu Nœud logique." }
              : null;
  const image = photo ? photo.image : `${product.id}.svg`;
  const alt = photo ? t(photo.alt) : `${t("Visuel illustratif de")} ${localized.name}`;
  const imageClass = ["mini-morpion", "tangram-nomade", "galet-mobile", "labyrinthe-poche", "roue-sensorielle", "duo-equilibre", "puzzle-spirale", "noeud-logique"].includes(product.id)
    ? `${className} product-photo-contain`.trim()
    : className;
  return `<img class="${imageClass}" src="assets/products/${image}" alt="${alt}" loading="lazy">`;
}

function productCard(product) {
  product = localizedProduct(product);
  return `<article class="product-card">
    <a class="product-art-link" href="#product/${product.id}" aria-label="${t("Découvrir")} ${product.name}">
      <span class="product-tag">${product.tag}</span>
      <div class="product-art">${productImage(product)}</div>
    </a>
    <div class="product-info">
      <p class="product-category">${product.categoryLabel}</p>
      <h3><a href="#product/${product.id}">${product.name}</a></h3>
      <div class="product-meta"><span>${product.material}</span><span class="product-price">${money(product.price)}</span></div>
      <div class="product-actions"><a class="button button-outline button-small" href="#product/${product.id}">Voir le produit <span aria-hidden="true">→</span></a></div>
    </div>
  </article>`;
}

function renderHome() {
  app.innerHTML = `
    <section class="hero">
      <div class="wrap hero-grid">
        <div class="hero-copy">
          <span class="eyebrow">Petits objets, grandes idées</span>
          <h1>Le jeu tient dans la poche. <em>L’idée va plus loin.</em></h1>
          <p>Des jeux malins et des objets à manipuler, imaginés pour vous accompagner partout — avec des matières qui méritent une seconde vie.</p>
          <div class="hero-actions"><a class="button" href="#shop">Découvrir la boutique <span aria-hidden="true">→</span></a><a class="text-link" href="#project">L’histoire de Recraft <span aria-hidden="true">↗</span></a></div>
          <div class="hero-stamp"><span aria-hidden="true">✳</span><span><strong>Fabriqué avec intention</strong><br>Une démarche plus responsable, à notre échelle.</span></div>
        </div>
        <div class="hero-visual" aria-label="Illustration d'un jeu de poche">
          <div class="hero-orbit"></div><span class="hero-sparkle sparkle-one">✳</span><span class="hero-sparkle sparkle-two">✳</span>
          <div class="hero-object">${illustration("tangram", 0)}</div>
          <div class="floating-note note-top"><span class="note-icon">↗</span><span><strong>Format nomade</strong><small>Les idées voyagent léger</small></span></div>
          <div class="floating-note note-bottom"><span class="note-icon">♻</span><span><strong>Matières revalorisées</strong><small>Du PET et du PLA recyclés</small></span></div>
        </div>
      </div>
    </section>
    <section class="category-section">
      <div class="wrap">
        <div class="section-heading"><span class="eyebrow">À chacun son petit plaisir</span><h2>Qu’est-ce qui vous ferait du bien ?</h2><p>Un jeu à partager, un défi à relever ou un objet à garder près de soi.</p></div>
        <div class="category-grid">
          ${categoryCard("poche", "Jeux de poche", "Des moments à partager, partout.", "mini-morpion")}
          ${categoryCard("puzzle", "Casse-têtes", "Un petit défi pour les idées.", "puzzle-spirale")}
          ${categoryCard("anti-stress", "Anti-stress", "Occuper ses mains à son rythme.", "galet-mobile")}
        </div>
      </div>
    </section>
    <section class="featured-section">
      <div class="wrap">
        <div class="heading-row"><div class="section-heading"><span class="eyebrow">Quelques favoris</span><h2>Les idées à emporter</h2><p>Des objets pensés pour le quotidien, à découvrir et à adopter selon vos envies.</p></div><a class="text-link" href="#shop">Voir toute la boutique <span aria-hidden="true">→</span></a></div>
        <div class="product-grid">${products.slice(0, 4).map(productCard).join("")}</div>
      </div>
    </section>
    <section class="manifesto">
      <div class="wrap manifesto-grid">
        <div class="manifesto-art">${illustration("knot", 1)}</div>
        <div class="manifesto-copy"><span class="eyebrow">Notre engagement</span><h2>Faire du neuf avec ce qui existe déjà.</h2><p>Nous imaginons de petits objets fabriqués grâce à l’impression 3D et à des matériaux revalorisés. Une démarche concrète, qui privilégie la curiosité, la durabilité et le plaisir de faire.</p><div class="manifesto-points"><span class="pill">PET & PLA recyclés</span><span class="pill">Bois de récupération</span><span class="pill">Aluminium recyclable</span></div><a class="text-link" href="#project">En savoir plus sur notre démarche <span aria-hidden="true">→</span></a></div>
      </div>
    </section>
    <section class="testimonial-strip"><div class="wrap testimonial-inner"><p>« Des objets simples, des idées qui font du bien. »</p><span>RECRAFT · JOUER, SOUFFLER, RECOMMENCER</span></div></section>`;
}

function categoryCard(category, title, caption, productId) {
  return `<a class="category-card" href="#shop?category=${category}"><img class="category-icon" src="assets/products/${productId}.svg" alt="" loading="lazy"><div class="category-card-content"><h3>${title}</h3><p>${caption}</p><span class="category-link">Explorer <span aria-hidden="true">→</span></span></div></a>`;
}

function renderShop() {
  const filtered = products.filter(product => {
    const categoryMatches = activeFilter === "all" || product.category === activeFilter;
    const localized = localizedProduct(product);
    const locale = { fr: "fr", en: "en", de: "de", it: "it" }[language];
    const term = searchTerm.trim().toLocaleLowerCase(locale);
    const searchMatches = !term || `${localized.name} ${localized.categoryLabel} ${localized.material} ${localized.description}`.toLocaleLowerCase(locale).includes(term);
    return categoryMatches && searchMatches;
  });
  app.innerHTML = `
    <section class="wrap page-intro"><span class="eyebrow">La boutique Recraft</span><h1>De petites idées à emporter.</h1><p>Jeux de poche, casse-têtes et objets anti-stress : trouvez votre prochain compagnon du quotidien.</p></section>
    <section class="wrap shop-main" aria-label="Catalogue de produits">
      <div class="shop-controls"><div class="filter-list" role="group" aria-label="Filtrer par catégorie">${Object.entries(categoryNames).map(([key, name]) => `<button class="filter-button" type="button" data-filter="${key}" aria-pressed="${activeFilter === key}">${t(name)}</button>`).join("")}</div><button class="filter-reset" type="button" data-reset>Réinitialiser les filtres</button></div>
      <p class="result-count" aria-live="polite">${filtered.length} produit${filtered.length > 1 ? "s" : ""} trouvé${filtered.length > 1 ? "s" : ""}</p>
      ${filtered.length ? `<div class="product-grid">${filtered.map(productCard).join("")}</div>` : `<div class="empty-state"><h2>Aucun produit ne correspond pour le moment.</h2><p>Essayez un autre mot ou réinitialisez les filtres.</p><button class="button button-small" type="button" data-reset>Réinitialiser les filtres</button></div>`}
    </section>`;
}

function renderProduct(id) {
  const foundProduct = products.find(item => item.id === id);
  if (!foundProduct) {
    app.innerHTML = `<section class="wrap info-page"><div class="info-box"><span class="eyebrow">Oups</span><h1>Ce produit est introuvable.</h1><p>Il a peut-être changé de place dans la boutique.</p><a class="button" href="#shop">Retour à la boutique</a></div></section>`;
    return;
  }
  const product = localizedProduct(foundProduct);
  const related = products.filter(item => item.category === product.category && item.id !== product.id).slice(0, 3);
  app.innerHTML = `
    <section class="wrap product-detail">
      <div class="breadcrumbs"><a href="#home">Accueil</a>　/　<a href="#shop">Boutique</a>　/　${product.name}</div>
      <div class="detail-grid">
        <div class="detail-gallery"><div class="detail-art">${productImage(foundProduct)}</div></div>
        <div class="detail-copy">
          <span class="eyebrow">${product.categoryLabel}</span><h1>${product.name}</h1><p class="detail-price">${money(product.price)} <span style="font-size:.77rem;font-weight:400;color:#737870">· prix indicatif</span></p>
          <p>${product.description}</p><p>${product.provenance}</p>
          <div class="quantity-row"><label for="product-quantity">Quantité</label><input class="quantity-input" id="product-quantity" type="number" min="1" max="20" value="1" inputmode="numeric"><span>Maximum : 20</span></div>
          <p class="field-error" id="quantity-error" aria-live="polite"></p><p class="detail-total" id="detail-total">Total : ${money(product.price)}</p>
          <button class="button" type="button" data-add="${product.id}">Ajouter au panier <span aria-hidden="true">→</span></button>
          <p class="detail-links"><a href="#shop">Voir tous les produits</a></p>
          <div class="detail-facts"><div class="fact-row"><span>Matériau</span><strong>${product.material}</strong></div><div class="fact-row"><span>Dimensions</span><strong>${product.dimensions}</strong></div><div class="fact-row"><span>Poids</span><strong>${product.weight}</strong></div><div class="fact-row"><span>Pour</span><strong>${product.players}</strong></div></div>
          <div class="detail-note">Objet cassé ou défectueux ? Écrivez-nous : nous étudierons avec vous une solution de retour ou de remplacement.</div>
        </div>
      </div>
    </section>
    ${related.length ? `<section class="wrap detail-similar"><div class="heading-row"><div class="section-heading"><span class="eyebrow">Dans le même esprit</span><h2>À découvrir aussi</h2></div><a class="text-link" href="#shop?category=${product.category}">Voir la catégorie <span aria-hidden="true">→</span></a></div><div class="product-grid">${related.map(productCard).join("")}</div></section>` : ""}`;
}

function renderProject() {
  app.innerHTML = `
    <section class="project-hero"><div class="wrap project-hero-grid"><div class="project-hero-copy"><span class="eyebrow">Une idée qui prend forme</span><h1>Réinventer le quotidien, un objet à la fois.</h1><p>Recraft, c’est un projet qui réunit création, fabrication à la demande et envie de donner une nouvelle place aux matériaux.</p><a class="button" href="#shop">Découvrir nos objets <span aria-hidden="true">→</span></a></div><div class="project-visual" aria-label="Illustration d'une création Recraft">${illustration("tangram", 1)}</div></div></section>
    <section class="story-section"><div class="wrap story-grid"><div><span class="eyebrow">Notre histoire</span><h2>Des objets utiles, fabriqués autrement.</h2></div><div class="story-copy"><p>Tout commence par une question simple : peut-on créer des objets du quotidien qui font plaisir, prennent peu de place et utilisent mieux les ressources disponibles ?</p><p>Nous avons imaginé Recraft autour de trois envies : proposer des jeux faciles à emporter, offrir de petits défis à résoudre et créer des objets à manipuler au fil de la journée. L’impression 3D nous permet d’explorer des formes, d’ajuster les modèles et de produire en petites séries.</p><p>Nous choisissons des matériaux comme le PET et le PLA recyclés, ainsi que des pièces d’aluminium recyclables et du bois issu de chutes récupérées. Chaque matière a ses caractéristiques et son histoire ; nous souhaitons les présenter avec transparence, sans prétendre qu’un produit est sans impact.</p><p>Nos objets ne remplacent ni un accompagnement professionnel ni une solution médicale. Ils sont conçus comme des compagnons de jeu ou de manipulation, à utiliser selon les besoins et les préférences de chacun.</p><p>En choisissant un objet Recraft, vous soutenez une démarche à taille humaine et la valorisation de matières existantes. Un petit geste, à notre échelle, pour imaginer autrement ce que l’on peut fabriquer.</p></div></div></section>
    <section class="awareness-section"><div class="wrap awareness-grid"><div class="awareness-heading"><span class="eyebrow">Mieux comprendre, mieux accueillir</span><h2>L’anxiété et la neurodivergence méritent écoute et respect.</h2></div><div class="awareness-copy"><p>L’anxiété peut être vécue de nombreuses façons. Le bruit, l’imprévu ou certaines situations du quotidien peuvent demander beaucoup d’énergie à certaines personnes — et pas à d’autres.</p><p>Les personnes neurodivergentes ont des fonctionnements neurologiques variés, par exemple dans le cas de l’autisme ou du TDAH. La neurodivergence n’est pas un défaut à corriger : chaque personne a ses forces, ses besoins et ses préférences.</p><p>Nous voulons contribuer à un quotidien plus accueillant, sans présumer de ce dont chacun a besoin. Un objet à manipuler peut être agréable ou utile à certaines personnes, mais son effet varie d’une personne à l’autre.</p><div class="awareness-note"><strong>À garder en tête</strong><p>Nos objets ne soignent pas l’anxiété et ne remplacent ni un avis médical ni un accompagnement professionnel. Ce sont des objets de jeu ou de manipulation, à utiliser — ou non — selon les envies de chacun.</p></div></div></div></section>
    <section class="material-section"><div class="wrap"><div class="section-heading"><span class="eyebrow">Ce qu’il y a dedans</span><h2>Des matières choisies avec soin.</h2><p>La provenance et la composition exactes peuvent varier d’un objet à l’autre : elles sont précisées sur chaque fiche produit.</p></div><div class="material-grid">
      <article class="material-card"><span class="material-symbol">♻</span><h3>PET & PLA recyclés</h3><p>Des filaments compatibles avec l’impression 3D, utilisés pour créer des pièces légères et détaillées.</p></article>
      <article class="material-card"><span class="material-symbol">↗</span><h3>Aluminium</h3><p>Un métal recyclable, réservé aux pièces qui en ont besoin pour leur fonction ou leur assemblage.</p></article>
      <article class="material-card"><span class="material-symbol">✳</span><h3>Bois récupéré</h3><p>Des chutes de bois réemployées pour ajouter un détail de matière et éviter le gaspillage.</p></article>
    </div></div></section>
    <section class="project-cta"><div class="wrap"><span class="eyebrow">À vous de jouer</span><h2>Une idée vous attend peut-être déjà.</h2><p>Découvrez les petits objets Recraft et choisissez celui qui vous ressemble.</p><a class="button" href="#shop">Explorer la boutique <span aria-hidden="true">→</span></a></div></section>`;
}

function renderContact() {
  app.innerHTML = `
    <section class="wrap page-intro"><span class="eyebrow">On vous répond</span><h1>Une question ? Parlons-en.</h1><p>Une question sur un produit, les matériaux, ou un objet cassé ou défectueux ? Écrivez-nous, nous serons ravis d’échanger.</p></section>
    <section class="wrap contact-section"><div class="contact-grid">
      <form class="contact-form" id="contact-form" novalidate>
        <div class="form-row"><div class="form-field"><label for="contact-name">Nom</label><input id="contact-name" name="name" autocomplete="name" required><p class="field-error" data-error="name"></p></div><div class="form-field"><label for="contact-email">Adresse e-mail</label><input id="contact-email" name="email" type="email" autocomplete="email" required><p class="field-error" data-error="email"></p></div></div>
        <div class="form-field"><label for="contact-subject">Sujet</label><input id="contact-subject" name="subject" required><p class="field-error" data-error="subject"></p></div>
        <div class="form-field"><label for="contact-message">Votre message</label><textarea id="contact-message" name="message" required></textarea><p class="field-error" data-error="message"></p></div>
        <button class="button" type="submit">Prévisualiser mon message <span aria-hidden="true">→</span></button>
        <p class="form-privacy">Démonstration : vos informations restent dans cette page et ne sont pas envoyées.</p>
        <div id="form-preview" aria-live="polite"></div>
      </form>
      <aside class="contact-aside"><span class="eyebrow">Restons en contact</span><h2>Nous sommes à votre écoute.</h2><p>Pour toute question sur votre commande, un matériau ou la démarche Recraft, écrivez-nous par e-mail.</p><div class="contact-card"><span>E-mail</span><a href="mailto:bonjour@recraft.ch">bonjour@recraft.ch</a></div><p class="return-note"><strong>Objet cassé ou défectueux ?</strong><br>Décrivez le problème et joignez si possible une photo dans votre e-mail. Nous vous aiderons à trouver une solution de retour ou de remplacement.</p></aside>
    </div></section>`;
}

function renderCart() {
  const cart = getCart();
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + products.find(product => product.id === item.id).price * item.quantity, 0);
  app.innerHTML = `
    <section class="wrap cart-section"><span class="eyebrow">Votre sélection</span><h1>Mon panier <span style="font-size:1.05rem;color:#737870;font-family:var(--sans);letter-spacing:0;font-weight:500">(${itemCount})</span></h1>
      ${cart.length ? `<div class="cart-layout"><div class="cart-items">${cart.map(item => {
        const product = localizedProduct(products.find(productItem => productItem.id === item.id));
        return `<article class="cart-item"><div class="cart-item-art">${productImage(products.find(productItem => productItem.id === item.id))}</div><div><h2><a href="#product/${product.id}">${product.name}</a></h2><p>${product.material} · ${money(product.price)}</p><label class="sr-only" for="cart-qty-${product.id}">Quantité de ${product.name}</label><input class="cart-qty" id="cart-qty-${product.id}" type="number" min="1" max="20" value="${item.quantity}" data-cart-quantity="${product.id}"><button type="button" class="remove-item" data-remove="${product.id}">Retirer</button></div><span class="cart-item-total">${money(product.price * item.quantity)}</span></article>`;
      }).join("")}</div>
      <aside class="cart-summary"><h2>Récapitulatif</h2><div class="summary-row"><span>Sous-total (${itemCount} article${itemCount > 1 ? "s" : ""})</span><span>${money(total)}</span></div><div class="summary-row"><span>Livraison</span><span>À confirmer</span></div><div class="summary-row total"><span>Total indicatif</span><span>${money(total)}</span></div><p class="shipping-note">Les frais et délais de livraison seront confirmés avec vous. Le paiement en ligne n’est pas disponible dans cette maquette.</p><button class="button" type="button" id="checkout-toggle">Continuer <span aria-hidden="true">→</span></button><form class="checkout-form" id="checkout-form" hidden><h3>Coordonnées de démonstration</h3><label for="checkout-email">Adresse e-mail</label><input type="email" id="checkout-email" autocomplete="email" placeholder="nom@exemple.ch" required><label for="checkout-name">Nom complet</label><input type="text" id="checkout-name" autocomplete="name" required><label for="checkout-address">Adresse de livraison</label><input type="text" id="checkout-address" autocomplete="street-address" required><p class="checkout-disclaimer">Aucun paiement ni commande ne sera effectué. N’entrez pas de coordonnées bancaires.</p><button class="button button-dark button-small" type="submit">Valider la démonstration</button><div id="checkout-result" aria-live="polite"></div></form></aside></div>` : `<div class="cart-empty"><div class="cart-empty-mark" aria-hidden="true">✳</div><h2>Votre panier est encore vide.</h2><p>Quelques idées à découvrir vous attendent dans la boutique.</p><a class="button" href="#shop">Voir la boutique <span aria-hidden="true">→</span></a></div>`}
    </section>`;
}

function renderInfo(page) {
  const isLegal = page === "legal";
  app.innerHTML = `<section class="wrap info-page"><div class="info-box"><span class="eyebrow">${isLegal ? "Informations" : "Après-vente"}</span><h1>${isLegal ? "Mentions légales" : "Retours & réparations"}</h1>${isLegal ? "<p>Cette maquette présente un projet fictif. Les informations légales de l’entreprise, son adresse et ses conditions de vente devront être complétées avant toute mise en ligne commerciale.</p><p>Recraft — contact : <a href=\"mailto:bonjour@recraft.ch\">bonjour@recraft.ch</a></p>" : "<p>Un produit est arrivé cassé ou présente un défaut ? Contactez-nous à <a href=\"mailto:bonjour@recraft.ch\">bonjour@recraft.ch</a> en décrivant le problème. Nous étudierons avec vous les possibilités de retour, de réparation ou de remplacement.</p><p>Les conditions et délais définitifs devront être précisés avant l’ouverture d’une vraie boutique.</p>"}<a class="button button-outline button-small" href="#contact">Nous contacter</a></div></section>`;
}

function setActiveNav(page) {
  document.querySelectorAll(".primary-nav a").forEach(link => {
    link.toggleAttribute("aria-current", link.dataset.nav === page || (page === "product" && link.dataset.nav === "shop"));
    if (link.dataset.nav === page || (page === "product" && link.dataset.nav === "shop")) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  const menu = document.querySelector(".primary-nav");
  const toggle = document.querySelector(".menu-toggle");
  menu?.classList.remove("is-open");
  toggle?.setAttribute("aria-expanded", "false");
  toggle?.setAttribute("aria-label", "Ouvrir le menu");
}

function route() {
  const raw = location.hash.slice(1) || "home";
  const [routeName, query = ""] = raw.split("?");
  const params = new URLSearchParams(query);
  if (routeName === "shop") {
    activeFilter = categoryNames[params.get("category")] ? params.get("category") : "all";
    searchTerm = document.querySelector("#search-input")?.value || "";
    renderShop();
    setActiveNav("shop");
    translatePage();
  } else if (routeName.startsWith("product/")) {
    renderProduct(routeName.slice("product/".length));
    setActiveNav("product");
  } else if (routeName === "project") {
    renderProject();
    setActiveNav("project");
  } else if (routeName === "contact") {
    renderContact();
    setActiveNav("contact");
  } else if (routeName === "cart") {
    renderCart();
    setActiveNav("cart");
  } else if (routeName === "returns" || routeName === "legal") {
    renderInfo(routeName);
    setActiveNav("");
  } else {
    renderHome();
    setActiveNav("home");
  }
  translatePage();
  updateCartBadge();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function validateQuantity(input, errorElement, totalElement, price) {
  const quantity = Number(input.value);
  if (!Number.isInteger(quantity) || quantity < 1) {
    errorElement.textContent = t("Indique une quantité d’au moins 1.");
    totalElement.textContent = "";
    return null;
  }
  if (quantity > 20) {
    errorElement.textContent = t("Pour une quantité supérieure à 20, contactez-nous.");
    totalElement.textContent = "";
    return null;
  }
  errorElement.textContent = "";
  totalElement.textContent = `${t("Total :")} ${money(price * quantity)}`;
  return quantity;
}

function addToCart(id, quantity) {
  const cart = getCart();
  const existing = cart.find(item => item.id === id);
  if (existing) existing.quantity += quantity;
  else cart.push({ id, quantity });
  if (cart.some(item => item.quantity > 20)) {
    showToast(t("Pour une quantité supérieure à 20 par produit, contactez-nous."));
    return;
  }
  saveCart(cart);
  location.hash = "#cart";
}

function init() {
  updateCartBadge();
  route();

  document.querySelector(".menu-toggle").addEventListener("click", event => {
    const button = event.currentTarget;
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    button.setAttribute("aria-label", t(expanded ? "Ouvrir le menu" : "Fermer le menu"));
    document.querySelector(".primary-nav").classList.toggle("is-open", !expanded);
  });

  document.querySelector("#header-search").addEventListener("submit", event => {
    event.preventDefault();
    searchTerm = document.querySelector("#search-input").value;
    if (location.hash.startsWith("#shop")) route();
    else location.hash = "#shop";
  });
  document.querySelector("#search-input").addEventListener("input", event => {
    if (location.hash.startsWith("#shop")) {
      searchTerm = event.target.value;
      renderShop();
      setActiveNav("shop");
      translatePage();
    }
  });
  document.querySelector("#search-input").addEventListener("focus", event => {
    if (window.matchMedia("(max-width: 780px)").matches) event.currentTarget.closest("form").classList.add("is-open");
  });
  document.querySelector("#language-select").addEventListener("change", event => {
    language = event.currentTarget.value;
    try {
      localStorage.setItem("recraft-language", language);
    } catch (error) {
      console.error("Impossible d'enregistrer la langue choisie.", error);
    }
    route();
  });
  window.addEventListener("hashchange", route);

  app.addEventListener("click", event => {
    const filterButton = event.target.closest("[data-filter]");
    if (filterButton) {
      activeFilter = filterButton.dataset.filter;
      renderShop();
      setActiveNav("shop");
      translatePage();
      return;
    }
    if (event.target.closest("[data-reset]")) {
      activeFilter = "all";
      searchTerm = "";
      const input = document.querySelector("#search-input");
      if (input) input.value = "";
      renderShop();
      setActiveNav("shop");
      return;
    }
    const addButton = event.target.closest("[data-add]");
    if (addButton) {
      const product = products.find(item => item.id === addButton.dataset.add);
      const input = document.querySelector("#product-quantity");
      const quantity = validateQuantity(input, document.querySelector("#quantity-error"), document.querySelector("#detail-total"), product.price);
      if (quantity !== null) addToCart(product.id, quantity);
      return;
    }
    const removeButton = event.target.closest("[data-remove]");
    if (removeButton) {
      saveCart(getCart().filter(item => item.id !== removeButton.dataset.remove));
      renderCart();
      translatePage();
      return;
    }
    if (event.target.closest("#checkout-toggle")) {
      const form = document.querySelector("#checkout-form");
      form.hidden = !form.hidden;
      if (!form.hidden) form.querySelector("input").focus();
    }
  });

  app.addEventListener("input", event => {
    if (event.target.matches("#product-quantity")) {
      const productId = location.hash.slice("#product/".length);
      const product = products.find(item => item.id === productId);
      if (product) validateQuantity(event.target, document.querySelector("#quantity-error"), document.querySelector("#detail-total"), product.price);
    }
  });

  app.addEventListener("change", event => {
    if (!event.target.matches("[data-cart-quantity]")) return;
    const input = event.target;
    const quantity = Number(input.value);
    if (!Number.isInteger(quantity) || quantity < 1 || quantity > 20) {
      input.setCustomValidity(t("Indiquez une quantité entre 1 et 20."));
      input.reportValidity();
      return;
    }
    input.setCustomValidity("");
    const cart = getCart();
    const item = cart.find(entry => entry.id === input.dataset.cartQuantity);
    if (item) item.quantity = quantity;
    saveCart(cart);
    renderCart();
    translatePage();
  });

  app.addEventListener("submit", event => {
    if (event.target.matches("#checkout-form")) {
      event.preventDefault();
      document.querySelector("#checkout-result").innerHTML = `<p class="checkout-disclaimer">${t("Démonstration terminée : aucune commande n’a été transmise et aucun paiement n’a été effectué.")}</p>`;
      return;
    }
    if (event.target.matches("#contact-form")) {
      event.preventDefault();
      const form = event.target;
      const fields = ["name", "email", "subject", "message"];
      let valid = true;
      fields.forEach(name => {
        const input = form.elements[name];
        const error = form.querySelector(`[data-error="${name}"]`);
        let message = "";
        if (!input.value.trim()) message = t("Ce champ est obligatoire.");
        else if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())) message = t("Entrez une adresse valide, par exemple nom@exemple.ch.");
        input.setAttribute("aria-invalid", String(Boolean(message)));
        error.textContent = message;
        if (message) valid = false;
      });
      if (!valid) {
        form.querySelector('[aria-invalid="true"]')?.focus();
        return;
      }
      const data = new FormData(form);
      document.querySelector("#form-preview").innerHTML = `<section class="form-preview"><h2>${t("Aperçu de votre message")}</h2><p><strong>${t("De :")}</strong> ${escapeHtml(data.get("name"))} · ${escapeHtml(data.get("email"))}</p><p><strong>${t("Sujet")}</strong> : ${escapeHtml(data.get("subject"))}</p><p>${escapeHtml(data.get("message")).replace(/\n/g, "<br>")}</p><small>${t("Démonstration : aucun message n’est envoyé. Vos réponses restent dans les champs ci-dessus.")}</small></section>`;
    }
  });
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);
}

init();
