// Tout le contenu éditable : prix, contacts, liens, textes légaux.
window.SITE = {
  name: "New Restaurant",
  priceNote: "[ajouter le prix]",
  placeholder: "[à compléter]",
    "currency": "CHF",
 "menu": [
  {
   "id": "pizza",
   "name": "Pizza",
   "img": "assets/cat-pizza.jpg",
   "alt": "Pizza garnie de tomates, mozzarella et basilic, photo de la carte",
   "featured": true,
   "notes": [
    "Toutes nos pizzas à emporter + une boisson 33 cl : 13.00 CHF",
    "Supplément d'ingrédient : 3.00 CHF"
   ],
   "groups": [
    {
     "title": "Les pizzas",
     "items": [
      [
       "1. Margherita",
       10.0,
       "Mozzarella, sauce tomate, origan"
      ],
      [
       "2. Pizza jambon",
       13.0,
       "Mozzarella, sauce tomate, jambon de dinde, origan"
      ],
      [
       "3. Merguez",
       13.0,
       "Mozzarella, sauce tomate, merguez, champignons de Paris, origan"
      ],
      [
       "4. Fromages",
       13.0,
       "Mozzarella, sauce tomate, gorgonzola, chèvre, parmesan, origan"
      ],
      [
       "5. Fruits de mer",
       13.0,
       "Mozzarella, sauce tomate, fruits de mer, anchois, origan"
      ],
      [
       "6. Pizza kebab",
       13.0,
       "Mozzarella, sauce tomate, kebab, origan"
      ],
      [
       "7. Pizza champignons",
       13.0,
       "Mozzarella, sauce tomate, champignons de Paris, origan"
      ],
      [
       "8. Napolitaine",
       13.0,
       "Mozzarella, sauce tomate, anchois, câpres, olives, origan"
      ],
      [
       "9. Végétarienne",
       13.0,
       "Mozzarella, sauce tomate, poivrons, artichauts, champignons, olives, origan"
      ],
      [
       "10. Quatre saisons",
       13.0,
       "Mozzarella, sauce tomate, jambon de dinde, poivrons, artichauts, œuf, champignons, origan"
      ],
      [
       "11. Thon",
       13.0,
       "Mozzarella, sauce tomate, thon, oignons, origan"
      ],
      [
       "12. Chorizo",
       13.0,
       "Mozzarella, sauce tomate, salami piquant, origan"
      ]
     ]
    }
   ]
  },
  {
   "id": "turc",
   "name": "Spécialités turques",
   "img": "assets/cat-turc.jpg",
   "alt": "Assiette de kebab avec frites et salade, photo de la carte",
   "featured": true,
   "groups": [
    {
     "title": "Galette kebab",
     "items": [
      [
       "Galette mix",
       13.5
      ],
      [
       "Galette agneau",
       13.5
      ],
      [
       "Galette poulet",
       13.5
      ],
      [
       "Galette falafel",
       11.0
      ],
      [
       "Menu galette",
       18.0
      ]
     ]
    },
    {
     "title": "Sandwich kebab",
     "items": [
      [
       "Sandwich mix",
       13.0
      ],
      [
       "Sandwich agneau",
       13.0
      ],
      [
       "Sandwich poulet",
       13.0
      ],
      [
       "Sandwich falafel",
       10.5
      ],
      [
       "Menu sandwich",
       17.0
      ]
     ]
    },
    {
     "title": "Baguette kebab",
     "items": [
      [
       "Baguette mix",
       14.5
      ],
      [
       "Baguette agneau",
       14.5
      ],
      [
       "Baguette poulet",
       14.5
      ],
      [
       "Baguette falafel",
       12.5
      ],
      [
       "Menu baguette",
       18.5
      ]
     ]
    },
    {
     "title": "Box kebab",
     "items": [
      [
       "Box mix",
       13.0
      ],
      [
       "Box agneau",
       13.0
      ],
      [
       "Box poulet",
       13.0
      ],
      [
       "Box nuggets",
       12.0
      ],
      [
       "Box falafel",
       11.0
      ],
      [
       "Menu box",
       16.0
      ]
     ]
    },
    {
     "title": "Assiettes",
     "items": [
      [
       "Assiette kebab (agneau, poulet, mix)",
       23.0
      ],
      [
       "Assiette Domaci",
       20.0
      ],
      [
       "Assiette Adana",
       25.0
      ],
      [
       "Assiette Tanduri",
       24.0
      ],
      [
       "Assiette nuggets",
       19.0
      ],
      [
       "Iskender",
       25.0
      ],
      [
       "Brochette poulet",
       24.0
      ],
      [
       "Assiette falafel",
       19.0
      ],
      [
       "Assiette ailes de poulet",
       20.0
      ],
      [
       "Brochette agneau",
       25.0
      ],
      [
       "Assiette Kofte",
       24.0
      ],
      [
       "Assiette tenders",
       22.0
      ]
     ]
    },
    {
     "title": "Lahmacun et pide",
     "items": [
      [
       "Lahmacun kebap",
       15.0
      ],
      [
       "Assiette Lahmacun",
       12.0
      ],
      [
       "Assiette pide viande hachée",
       14.5
      ],
      [
       "Assiette pides fromage",
       12.5
      ]
     ]
    },
    {
     "title": "Burgers",
     "items": [
      [
       "Hamburger",
       11.0
      ],
      [
       "Cheeseburger",
       12.0
      ],
      [
       "Menu hamburger",
       14.0
      ],
      [
       "Menu cheeseburger",
       15.0
      ]
     ]
    },
    {
     "title": "Suppléments",
     "items": [
      [
       "Portion frites",
       6.0
      ],
      [
       "Portion viande",
       17.0
      ]
     ]
    }
   ]
  },
  {
   "id": "tacos",
   "name": "Tacos",
   "img": "assets/cat-tacos.jpg",
   "alt": "Tacos coupés en deux, garnis de viande et de légumes, photo de la carte",
   "featured": true,
   "notes": [
    "Sauces : Algérienne, Samouraï, Biggy, Ketchup, Mayonnaise, Cocktail",
    "Supplément : +3.50 CHF"
   ],
   "groups": [
    {
     "title": "Les tacos",
     "items": [
      [
       "Tacos poulet",
       13.5
      ],
      [
       "Tacos mix",
       13.5
      ],
      [
       "Tacos agneau",
       13.5
      ],
      [
       "Tacos hachée de bœuf",
       13.5
      ],
      [
       "Tacos végétarien",
       13.0
      ],
      [
       "Tacos nuggets",
       13.0
      ],
      [
       "Tacos cordon bleu",
       13.0
      ],
      [
       "Tacos merguez",
       13.0
      ],
      [
       "Tacos tenders",
       13.0
      ],
      [
       "Menu tacos",
       16.5
      ]
     ]
    }
   ]
  },
  {
   "id": "bento",
   "name": "Bento Box",
   "img": "assets/cat-bento.jpg",
   "alt": "Bento Box en pot kraft avec riz et garnitures, photo de la carte",
   "groups": [
    {
     "title": "Les Bento Box",
     "items": [
      [
       "Bento Box kebab",
       14.9,
       "Riz, kebab poulet, agneau ou mix, frites"
      ],
      [
       "Bento Box mix",
       17.9,
       "Riz, kebab, falafel, nuggets, cordon bleu, frites"
      ],
      [
       "Bento Box cordon bleu",
       13.5,
       "Riz, cordon bleu, frites"
      ],
      [
       "Bento Box nuggets ou tenders",
       13.5,
       "Riz, nuggets ou tenders, frites"
      ],
      [
       "Bento Box thon",
       13.5,
       "Riz, thon, frites"
      ],
      [
       "Bento Box falafel",
       13.5,
       "Riz, falafel, frites"
      ]
     ]
    }
   ]
  },
  {
   "id": "salades",
   "name": "Salades",
   "img": "assets/cat-salades.jpg",
   "alt": "Salade fraîche de tomates, concombre et persil, photo de la carte",
   "groups": [
    {
     "title": "Les salades",
     "items": [
      [
       "Salade mêlée",
       10.0
      ],
      [
       "Petite mêlée",
       5.0
      ],
      [
       "Salade Istanbul",
       11.0
      ],
      [
       "Salade Izmir",
       11.0
      ],
      [
       "Salade thona",
       12.0
      ]
     ]
    }
   ]
  }
 ],
  // AVIS CLIENTS (Google Maps) : ajoutez, retirez ou modifiez les avis ici, sans toucher au reste.
  // stars = nombre d'étoiles (1 à 5) ; sub = notes Cuisine / Service / Ambiance (facultatif) ; meta = ligne d'infos (facultatif) ; text = texte exact de l'avis ; name = nom affiché.
  reviews: {
    rating: "5,0", count: 10,   // note moyenne et nombre d'avis affichés sous le titre
    items: [
      { name: "Robin Vandewatere", stars: 5, text: "Très bon accueil dans un endroit à la décoration chaleureuse.\nCusine au top, produits frais et viandes excellentes 👍", sub: { cuisine: 5, service: 5, ambiance: 4 }, meta: "Dîner · 20–30 CHF par personne" },
      { name: "alberto ojeda", stars: 5, text: "Je vous recommande cette adresse de spécialités turques qui vient d'ouvrir à Onex. Qualité des produits, service impeccable, très bonne ambiance, bref n'hésitez pas.", sub: { cuisine: 5, service: 5, ambiance: 5 }, meta: "Déjeuner · 20–30 CHF par personne · Aucune attente" },
      { name: "Baba Tekkurt", stars: 5, sub: { cuisine: 5, service: 5, ambiance: 5 } },
      { name: "Soner Dirik", stars: 5, sub: { cuisine: 5, service: 5, ambiance: 5 } },
      { name: "Rahman Boyatir", stars: 5, sub: { cuisine: 5, service: 5, ambiance: 5 } },
      { name: "Turco Turco", stars: 5, sub: { cuisine: 5, service: 5, ambiance: 5 } },
      { name: "David Lora", stars: 5, sub: { cuisine: 5, service: 5, ambiance: 5 } },
      { name: "Sakir Boyatır", stars: 5, sub: { cuisine: 5, service: 5, ambiance: 5 } }
    ]
  },
  shopPhoto: "assets/terrasse.jpg",   // photo de la section « Dans le restaurant »
  shopPhotoAlt: "Terrasse du restaurant au coucher du soleil : tables, parasol rouge, guirlandes lumineuses et ardoise des plats",
  visit: {
    address: "Chem. Victor-Duret 56, 1213 Genève",
    street: "Chem. Victor-Duret 56", city: "1213 Genève", hoursShort: "08:00 – 23:00",
    hours: "Tous les jours, de 08:00 à 23:00",
    phone: "[ajouter le numéro de téléphone]",
    phoneHref: "",          // ex. "tel:+41000000000"
    directionsUrl: "https://www.google.com/maps/place/New+restaurant/@46.1871802,6.1009353,16z/data=!4m6!3m5!1s0x478c7b9fc13ac55b:0x8c7a0485eb268d03!8m2!3d46.1871802!4d6.1051399!16s%2Fg%2F11zwm_7763?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D",
    orderUrl: "",           // optionnel : si rempli, un bouton « Commander » apparaît ; vide = pas de bouton
    mapImage: "assets/plan.svg",   // remplacez par une capture de la carte (ex. assets/carte.jpg)
    mapAlt: "Plan stylisé indiquant l'emplacement de New Restaurant, chemin Victor-Duret 56",
    mapEmbed: "https://www.google.com/maps?q=46.1871802,6.1051399&z=17&output=embed",   // carte Google Maps interactive (chargée au clic)
    mapAutoLoad: false,   // true = charge la carte dès l'ouverture de la page (service Google externe)
    instagram: "https://www.instagram.com/newrestaurant1213?igsi=MWp5djdudHo2aHdsag%3D%3D&utm_source=qr"
  },
  legal: {
    contact: "Contact : [adresse e-mail à ajouter] · [téléphone à ajouter]",
    imprint: "[Raison sociale, forme juridique, adresse, responsable de publication, numéro d'immatriculation : à compléter.]",
    privacy: "[Politique de protection des données à compléter. Ce site n'utilise ni cookies ni outil de suivi de sa propre initiative.]"
  }
};
