export interface BrandSection {
  heading?: string;
  paragraphs: string[];
}

export interface BrandHistory {
  manufacturer: string;
  founded: string;
  tagline: string;
  image: string;
  sections: BrandSection[];
}

const brandHistories: Record<string, BrandHistory> = {
  Porsche: {
    manufacturer: "Porsche",
    founded: "1931, Stuttgart, Germany",
    tagline: "Precision engineering built around the driver.",
    image: "/history-img/Porsche.svg",
    sections: [
      {
        heading: "A Racing Pedigree",
        paragraphs: [
          "Porsche began as an engineering consultancy founded by Ferdinand Porsche, and its first true sports car — the 356 — arrived in 1948. It set the template the brand has followed ever since: light, rear-engined, and built to be driven hard.",
          "The 911, introduced in 1963, has been in continuous production longer than almost any other car in the world, evolving generation after generation while keeping its unmistakable silhouette.",
        ],
      },
      {
        heading: "What Sets It Apart",
        paragraphs: [
          "Porsche treats motorsport as R&D, not marketing. Technology proven at Le Mans and in Formula E regularly finds its way into road cars within a few years.",
        ],
      },
    ],
  },

  "Land Rover": {
    manufacturer: "Land Rover",
    founded: "1948, Solihull, England",
    tagline: "Go anywhere, in comfort.",
    image: "/history-img/Landrover.svg",
    sections: [
      {
        heading: "Born From a Farm",
        paragraphs: [
          "The original Land Rover was sketched in the sand on a Welsh beach by engineer Maurice Wilks, who wanted something as capable as a Jeep but more comfortable to live with day to day.",
          "That balance — genuine off-road capability paired with a refined cabin — has defined every Range Rover and Defender since.",
        ],
      },
      {
        heading: "What Sets It Apart",
        paragraphs: [
          "Few brands are as trusted in genuinely difficult terrain while still being at home outside a five-star hotel. Land Rover has spent decades refusing to choose between the two.",
        ],
      },
    ],
  },

  Tesla: {
    manufacturer: "Tesla",
    founded: "2003, San Carlos, California",
    tagline: "Accelerating the shift to electric.",
    image: "/history-img/Tesla.svg",
    sections: [
      {
        heading: "Starting From Zero",
        paragraphs: [
          "Tesla set out to prove that an electric car could be genuinely desirable, not just efficient. The Roadster in 2008 did that with raw performance; the Model S in 2012 did it with everyday usability.",
        ],
      },
      {
        heading: "What Sets It Apart",
        paragraphs: [
          "Tesla builds its own battery technology, software, and charging network in-house, which is part of why its cars keep improving significantly after you buy one, through over-the-air updates.",
        ],
      },
    ],
  },

  "Mercedes Benz": {
    manufacturer: "Mercedes Benz",
    founded: "1926, Stuttgart, Germany",
    tagline: "The inventor of the automobile, still setting the standard.",
    image: "/history-img/MB.svg",
    sections: [
      {
        heading: "The Original",
        paragraphs: [
          "Karl Benz built the first true automobile in 1885. The company that carries his name has spent well over a century since then defining what luxury and safety mean in a car — the modern seatbelt and airbag both trace back to Mercedes-Benz research.",
        ],
      },
      {
        heading: "What Sets It Apart",
        paragraphs: [
          "Mercedes-Benz has consistently used its flagship S-Class as a proving ground for technology years before it reaches the rest of the industry.",
        ],
      },
    ],
  },

  BMW: {
    manufacturer: "BMW",
    founded: "1916, Munich, Germany",
    tagline: "The ultimate driving machine.",
    image: "/history-img/BMW.svg",
    sections: [
      {
        heading: "From Aircraft Engines to Roads",
        paragraphs: [
          "BMW — Bayerische Motoren Werke — started out building aircraft engines before turning to motorcycles and then cars. The blue-and-white roundel on every BMW is a nod to that aviation history.",
          "Through the 1960s and 70s, BMW built its reputation on cars that were as satisfying to drive as they were practical, a formula it's stuck to ever since.",
        ],
      },
      {
        heading: "What Sets It Apart",
        paragraphs: [
          "Near-perfect weight distribution and driver-focused engineering are baked into BMW's approach at a fundamental level, not added on as an afterthought.",
        ],
      },
    ],
  },

  Toyota: {
    manufacturer: "Toyota",
    founded: "1937, Toyota City, Japan",
    tagline: "Engineered to be reliable, everywhere.",
    image: "/history-img/Toyota.svg",
    sections: [
      {
        heading: "Built on a Production Philosophy",
        paragraphs: [
          "Toyota's rise wasn't built on flash — it was built on the Toyota Production System, a relentless focus on eliminating waste and defects that became the blueprint for manufacturing far beyond the car industry.",
        ],
      },
      {
        heading: "What Sets It Apart",
        paragraphs: [
          "Toyota's reputation for dependability isn't marketing — it consistently ranks among the most reliable manufacturers in independent long-term ownership studies.",
        ],
      },
    ],
  },

  Ford: {
    manufacturer: "Ford",
    founded: "1903, Dearborn, Michigan",
    tagline: "The company that put America on wheels.",
    image: "/history-img/Ford.svg",
    sections: [
      {
        heading: "The Assembly Line",
        paragraphs: [
          "Henry Ford didn't invent the automobile, but the moving assembly line he introduced for the Model T in 1913 made car ownership possible for millions of ordinary people for the first time.",
        ],
      },
      {
        heading: "What Sets It Apart",
        paragraphs: [
          "Ford's F-Series trucks have been among the best-selling vehicle lines in the United States for decades, a testament to how deeply the brand understands its core buyers.",
        ],
      },
    ],
  },

  Mazda: {
    manufacturer: "Mazda",
    founded: "1920, Hiroshima, Japan",
    tagline: "Driving matters — and it should feel good.",
    image: "/history-img/Mazda.svg",
    sections: [
      {
        heading: "The Rotary Gamble",
        paragraphs: [
          "Mazda made its name by committing to the Wankel rotary engine when most manufacturers wouldn't touch it, and later by keeping the idea of an affordable, lightweight sports car alive with the Miata when the rest of the industry had moved on.",
        ],
      },
      {
        heading: "What Sets It Apart",
        paragraphs: [
          'Mazda\'s "Jinba Ittai" philosophy — horse and rider as one — still shapes how every model handles, not just its sports cars.',
        ],
      },
    ],
  },

  Audi: {
    manufacturer: "Audi",
    founded: "1909, Zwickau, Germany",
    tagline: "Vorsprung durch Technik — progress through technology.",
    image: "/history-img/Audi.svg",
    sections: [
      {
        heading: "Four Rings, One Company",
        paragraphs: [
          "Audi's four-ring logo represents the 1932 merger of four German automakers. The brand's breakthrough moment came decades later with the Quattro, which brought all-wheel drive out of rally racing and into everyday performance cars.",
        ],
      },
      {
        heading: "What Sets It Apart",
        paragraphs: [
          "Audi's interior design and lighting technology — from the first LED daytime running lights to today's digital matrix headlights — have repeatedly set benchmarks the rest of the industry follows.",
        ],
      },
    ],
  },

  Honda: {
    manufacturer: "Honda",
    founded: "1948, Hamamatsu, Japan",
    tagline: "The power of dreams.",
    image: "/history-img/Honda.svg",
    sections: [
      {
        heading: "From Motorcycles to Engines That Rev",
        paragraphs: [
          "Honda built its name on motorcycles before entering the car business, and that heritage shows in its long-standing love of high-revving, small-displacement engines that punch above their weight.",
        ],
      },
      {
        heading: "What Sets It Apart",
        paragraphs: [
          "Honda is one of the few manufacturers that designs and builds its own engines in-house for nearly everything it sells — cars, motorcycles, boats, and even jets.",
        ],
      },
    ],
  },

  Lamborghini: {
    manufacturer: "Lamborghini",
    founded: "1963, Sant'Agata Bolognese, Italy",
    tagline: "Built to be unreasonable, on purpose.",
    image: "/history-img/Lamborghini.svg",
    sections: [
      {
        heading: "A Rivalry That Built a Brand",
        paragraphs: [
          "Legend has it Ferruccio Lamborghini, a tractor manufacturer, started his own car company after Enzo Ferrari dismissed his complaints about a Ferrari he owned. Whether or not the story is exact, the resulting cars were built to out-Ferrari Ferrari.",
        ],
      },
      {
        heading: "What Sets It Apart",
        paragraphs: [
          "Lamborghini has never chased subtlety. From the Miura's mid-engine layout to the Countach's scissor doors, the brand has consistently prioritized drama as much as speed.",
        ],
      },
    ],
  },

  Ferrari: {
    manufacturer: "Ferrari",
    founded: "1939, Maranello, Italy",
    tagline: "Racing passion, engineered for the road.",
    image: "/history-img/Ferrari.svg",
    sections: [
      {
        heading: "Born From Racing",
        paragraphs: [
          "Enzo Ferrari founded the company that bears his name after years of involvement in motorsport. Ferrari built its identity around competition, with its road cars helping finance an intensely focused racing operation.",
          "The brand's victories in Formula One and endurance racing transformed the prancing horse into one of the most recognizable symbols in automotive history.",
        ],
      },
      {
        heading: "What Sets It Apart",
        paragraphs: [
          "Ferrari combines racing-derived engineering with obsessive attention to performance, sound, design, and exclusivity. Its road cars are designed to feel like genuine members of the Ferrari racing family.",
        ],
      },
    ],
  },

  "Aston Martin": {
    manufacturer: "Aston Martin",
    founded: "1913, London, England",
    tagline: "British elegance with a sporting soul.",
    image: "/history-img/AstonMartin.svg",
    sections: [
      {
        heading: "The British Grand Tourer",
        paragraphs: [
          "Aston Martin was founded by Lionel Martin and Robert Bamford and became associated with beautifully proportioned sports cars and grand tourers that combined performance with long-distance refinement.",
          "Its international reputation grew further through motorsport and its association with James Bond, making the brand a lasting symbol of British automotive style.",
        ],
      },
      {
        heading: "What Sets It Apart",
        paragraphs: [
          "Aston Martin occupies a distinctive space between an exotic sports car and a luxury grand tourer, emphasizing handcrafted interiors, elegant design, and effortless high-speed performance.",
        ],
      },
    ],
  },

  Bentley: {
    manufacturer: "Bentley",
    founded: "1919, London, England",
    tagline: "Grand touring without compromise.",
    image: "/history-img/Bentley.svg",
    sections: [
      {
        heading: "Racing and Luxury",
        paragraphs: [
          "W. O. Bentley founded Bentley Motors with the ambition of building fast, capable cars. The company's early racing success, particularly at Le Mans, established its reputation for combining durability with serious performance.",
          "Over time Bentley developed into one of Britain's most prestigious luxury marques, pairing powerful engines with hand-finished cabins.",
        ],
      },
      {
        heading: "What Sets It Apart",
        paragraphs: [
          "Bentley specializes in high-performance luxury. Its cars deliver substantial power and grand-touring ability while retaining the craftsmanship and comfort expected from an ultra-luxury automobile.",
        ],
      },
    ],
  },

  RollsRoyce: {
    manufacturer: "RollsRoyce",
    founded: "1906, Manchester, England",
    tagline: "Effortless luxury, without compromise.",
    image: "/history-img/RollsRoyce.svg",
    sections: [
      {
        heading: "A Standard of Luxury",
        paragraphs: [
          "Rolls-Royce was founded by Charles Rolls and Henry Royce with the ambition of producing exceptionally refined automobiles. The company quickly established a reputation for engineering quality and remarkable smoothness.",
          "The marque became synonymous with luxury motoring, eventually becoming one of the world's most recognizable names in handcrafted automobiles.",
        ],
      },
      {
        heading: "What Sets It Apart",
        paragraphs: [
          "Rolls-Royce places extraordinary emphasis on craftsmanship, personalization, quietness, and ride comfort. Each vehicle is designed to feel more like a bespoke luxury object than a conventional automobile.",
        ],
      },
    ],
  },
  Nissan: {
    manufacturer: "Nissan",
    founded: "1933, Yokohama, Japan",
    tagline: "Innovation that excites.",
    image: "/history-img/Nissan.svg",
    sections: [
      {
        heading: "From Datsun to Nissan",
        paragraphs: [
          "Nissan grew from the Japanese automotive industry of the early twentieth century and became internationally known through vehicles sold under the Datsun name before consolidating its global identity around Nissan.",
          "The company developed a reputation for combining accessible engineering with distinctive performance cars, from the Z series to the legendary Skyline GT-R.",
        ],
      },
      {
        heading: "What Sets It Apart",
        paragraphs: [
          "Nissan has repeatedly experimented with performance, four-wheel drive, electrification, and advanced driver technology, giving the company a broad engineering identity that spans everyday cars and serious performance machines.",
        ],
      },
    ],
  },
  Volkswagen: {
    manufacturer: "Volkswagen",
    founded: "1937, Berlin, Germany",
    tagline: "Making mobility accessible to millions.",
    image: "/history-img/Volkswagen.svg",
    sections: [
      {
        heading: "The People's Car",
        paragraphs: [
          "Volkswagen was established around the idea of producing an affordable car for ordinary people. The Beetle became one of the most recognizable automobiles ever built and helped establish the Volkswagen name worldwide.",
          "The brand later expanded with models such as the Golf, which became one of Europe's defining compact cars.",
        ],
      },
      {
        heading: "What Sets It Apart",
        paragraphs: [
          "Volkswagen has built its identity around practical engineering, accessible technology, understated design, and vehicles designed to work for a broad range of drivers.",
        ],
      },
    ],
  },

  Volvo: {
    manufacturer: "Volvo",
    founded: "1927, Gothenburg, Sweden",
    tagline: "Designed around people.",
    image: "/history-img/Volvo.svg",
    sections: [
      {
        heading: "Safety First",
        paragraphs: [
          "Volvo began producing cars in Gothenburg in 1927 and gradually became one of the world's most respected automotive brands for safety engineering.",
          "The company's introduction of the three-point safety belt in 1959 became one of the most important safety developments in automotive history.",
        ],
      },
      {
        heading: "What Sets It Apart",
        paragraphs: [
          "Volvo combines Scandinavian design with a strong emphasis on occupant protection, understated luxury, practicality, and increasingly electrified powertrains.",
        ],
      },
    ],
  },

  Jaguar: {
    manufacturer: "Jaguar",
    founded: "1922, Blackpool, England",
    tagline: "Grace, space, pace.",
    image: "/history-img/Jaguar.svg",
    sections: [
      {
        heading: "A Sporting British Icon",
        paragraphs: [
          "Jaguar's roots go back to the Swallow Sidecar Company before the company developed into a manufacturer of elegant sports cars and luxury sedans.",
          "The XK120 and later E-Type established Jaguar as one of Britain's great performance marques, combining beautiful design with impressive speed.",
        ],
      },
      {
        heading: "What Sets It Apart",
        paragraphs: [
          "Jaguar has traditionally focused on elegant proportions, strong performance, refined interiors, and a distinctive British interpretation of the luxury sports car.",
        ],
      },
    ],
  },
  Maserati: {
    manufacturer: "Maserati",
    founded: "1914, Bologna, Italy",
    tagline: "Italian performance with unmistakable elegance.",
    image: "/history-img/Maserati.svg",
    sections: [
      {
        heading: "The Trident Legacy",
        paragraphs: [
          "The Maserati brothers founded their company in Bologna with a focus on racing cars. The brand's early competition success helped establish the Trident as a symbol of Italian performance.",
          "Maserati later became famous for combining racing heritage with luxurious grand tourers and distinctive Italian styling.",
        ],
      },
      {
        heading: "What Sets It Apart",
        paragraphs: [
          "Maserati occupies a unique space between luxury and performance, emphasizing expressive design, powerful engines, distinctive exhaust notes, and the character of an Italian grand tourer.",
        ],
      },
    ],
  },

  "Rolls Royce": {
    manufacturer: "Rolls Royce",
    founded: "1906, Manchester, England",
    tagline: "Effortless luxury, without compromise.",
    image: "/history-img/RollsRoyce.svg",
    sections: [
      {
        heading: "A Standard of Luxury",
        paragraphs: [
          "Rolls-Royce was founded by Charles Rolls and Henry Royce with the ambition of producing exceptionally refined automobiles. The company quickly established a reputation for engineering quality and remarkable smoothness.",
          "The marque became synonymous with luxury motoring and remains one of the world's most prestigious names in handcrafted automobiles.",
        ],
      },
      {
        heading: "What Sets It Apart",
        paragraphs: [
          "Rolls-Royce places extraordinary emphasis on craftsmanship, personalization, quietness, and ride comfort. Each vehicle is designed to feel more like a bespoke luxury object than a conventional automobile.",
        ],
      },
    ],
  },

  Bugatti: {
    manufacturer: "Bugatti",
    founded: "1909, Molsheim, Alsace",
    tagline: "Art, form, and performance without limits.",
    image: "/history-img/Bugatti.svg",
    sections: [
      {
        heading: "The Art of Speed",
        paragraphs: [
          "Ettore Bugatti founded the company in Molsheim in 1909 and quickly established a reputation for technically sophisticated and beautifully engineered racing and road cars.",
          "The modern Bugatti era continued that philosophy with cars such as the Veyron and Chiron, which pushed the boundaries of speed, engineering, and luxury.",
        ],
      },
      {
        heading: "What Sets It Apart",
        paragraphs: [
          "Bugatti combines extreme performance with meticulous craftsmanship and artistic design, creating automobiles that are as much engineering statements as they are luxury objects.",
        ],
      },
    ],
  },
  Hyundai: {
    manufacturer: "Hyundai",
    founded: "1967, Seoul, South Korea",
    tagline: "Progress for humanity.",
    image: "/history-img/Hyundai.svg",
    sections: [
      {
        heading: "From Local Manufacturer to Global Brand",
        paragraphs: [
          "Hyundai Motor Company was founded in South Korea in 1967 and grew from producing affordable vehicles for its domestic market into a major global automotive manufacturer.",
          "Its expansion into performance, electric vehicles, SUVs, and advanced technology has transformed its position in the global market.",
        ],
      },
      {
        heading: "What Sets It Apart",
        paragraphs: [
          "Hyundai combines competitive pricing with increasingly sophisticated design, technology, electrification, and long-term investment in new mobility systems.",
        ],
      },
    ],
  },

  Kia: {
    manufacturer: "Kia",
    founded: "1944, Seoul, South Korea",
    tagline: "Movement that inspires.",
    image: "/history-img/Kia.svg",
    sections: [
      {
        heading: "A Korean Automotive Transformation",
        paragraphs: [
          "Kia's history began with bicycle components and later expanded into motorcycles, trucks, and passenger vehicles. After becoming part of the Hyundai Motor Group, Kia underwent a major transformation in design and engineering.",
          "The modern Kia lineup has established the company as a serious global competitor in mainstream, performance, and electric vehicles.",
        ],
      },
      {
        heading: "What Sets It Apart",
        paragraphs: [
          "Kia has built its modern identity around bold design, strong value, practical technology, and increasingly capable electric and performance-oriented vehicles.",
        ],
      },
    ],
  },
  Chevrolet: {
    manufacturer: "Chevrolet",
    founded: "1911, Detroit, Michigan",
    tagline: "Performance, capability, and American character.",
    image: "/history-img/Chevrolet.svg",
    sections: [
      {
        heading: "An American Institution",
        paragraphs: [
          "Chevrolet was founded by Louis Chevrolet and William C. Durant in 1911. It became part of General Motors and grew into one of America's most important automotive brands.",
          "The Corvette, Camaro, and Silverado helped establish Chevrolet's reputation across sports cars, muscle cars, and trucks.",
        ],
      },
      {
        heading: "What Sets It Apart",
        paragraphs: [
          "Chevrolet covers a broad range of American motoring, from practical family vehicles and powerful pickup trucks to iconic performance cars with unmistakable character.",
        ],
      },
    ],
  },
  Cadillac: {
    manufacturer: "Cadillac",
    founded: "1902, Detroit, Michigan",
    tagline: "American luxury with ambition.",
    image: "/history-img/Cadillac.svg",
    sections: [
      {
        heading: "The Standard of American Luxury",
        paragraphs: [
          "Cadillac was founded in Detroit in 1902 and quickly established itself as one of America's leading luxury manufacturers. Its engineering achievements helped raise standards for precision and interchangeability in automotive manufacturing.",
          "Over the decades, Cadillac became synonymous with large, powerful American luxury cars while later expanding into performance sedans and SUVs.",
        ],
      },
      {
        heading: "What Sets It Apart",
        paragraphs: [
          "Cadillac blends American scale and performance with modern luxury technology, bold styling, and increasingly sophisticated chassis and electric-vehicle engineering.",
        ],
      },
    ],
  },
  Jeep: {
    manufacturer: "Jeep",
    founded: "1941, Toledo, Ohio",
    tagline: "Go anywhere, do anything.",
    image: "/history-img/Jeep.svg",
    sections: [
      {
        heading: "Born for the Battlefield",
        paragraphs: [
          "The Jeep became famous during World War II as a compact, capable military vehicle designed to travel across difficult terrain. Its usefulness and distinctive shape helped create a civilian following after the war.",
          "The Wrangler continues the basic spirit of that original vehicle while offering modern comfort, safety, and technology.",
        ],
      },
      {
        heading: "What Sets It Apart",
        paragraphs: [
          "Jeep remains one of the world's best-known names in four-wheel-drive vehicles, with an identity built around off-road capability, open-air driving, and adventure.",
        ],
      },
    ],
  },
  Dodge: {
    manufacturer: "Dodge",
    founded: "1900, Detroit, Michigan",
    tagline: "Performance with attitude.",
    image: "/history-img/Dodge.svg",
    sections: [
      {
        heading: "An American Performance Tradition",
        paragraphs: [
          "The Dodge brothers began producing automotive components before building complete vehicles. The brand eventually became one of America's most recognizable names in performance cars, trucks, and SUVs.",
          "Dodge became especially famous during the muscle-car era and later revived that spirit through high-powered versions of the Challenger, Charger, and other models.",
        ],
      },
      {
        heading: "What Sets It Apart",
        paragraphs: [
          "Dodge embraces performance and personality, favoring powerful engines, aggressive styling, and vehicles designed to deliver an unmistakably American driving experience.",
        ],
      },
    ],
  },
  Fiat: {
    manufacturer: "Fiat",
    founded: "1899, Turin, Italy",
    tagline: "Italian ingenuity made for everyday life.",
    image: "/history-img/Fiat.svg",
    sections: [
      {
        heading: "From Turin to the World",
        paragraphs: [
          "Fiat was founded in Turin in 1899 as Fabbrica Italiana Automobili Torino. The company quickly became one of Italy's most important industrial manufacturers, helping bring affordable automobiles to a much wider audience.",
          "Throughout the twentieth century, Fiat became closely associated with compact and practical cars such as the Topolino, 500, and Panda, while expanding its presence across Europe and international markets.",
        ],
      },
      {
        heading: "What Sets It Apart",
        paragraphs: [
          "Fiat has built its identity around compact dimensions, clever packaging, efficient engines, distinctive Italian design, and vehicles designed to make everyday urban driving simple and enjoyable.",
        ],
      },
    ],
  },
  Polestar: {
    manufacturer: "Polestar",
    founded: "1996, Gothenburg, Sweden",
    tagline: "Electric performance, Scandinavian design.",
    image: "/history-img/Polestar.svg",
    sections: [
      {
        heading: "From Racing to Electric Performance",
        paragraphs: [
          "Polestar began in Sweden as a motorsport and performance engineering company associated with Volvo. Its early work focused on developing and racing high-performance Volvo vehicles before the brand evolved into a standalone electric performance car manufacturer.",
          "Polestar became an independent electric vehicle brand in 2017, combining Scandinavian design with advanced electric powertrains and a strong focus on minimalist technology.",
        ],
      },
      {
        heading: "What Sets It Apart",
        paragraphs: [
          "Polestar combines Scandinavian minimalism with electric performance, emphasizing clean design, powerful electric drivetrains, advanced software, and a more sustainability-focused approach to vehicle development.",
        ],
      },
    ],
  },
  Smart: {
    manufacturer: "Smart",
    founded: "1994, Böblingen, Germany",
    tagline: "Small footprint, big personality.",
    image: "/history-img/Smart.svg",
    sections: [
      {
        heading: "Rethinking the City Car",
        paragraphs: [
          "Smart was created in the early 1990s through a collaboration between Swatch and Daimler with a simple idea: rethink urban transportation around a compact, highly maneuverable car. The first production Smart, the City-Coupé, arrived in 1998 and quickly became recognizable for its tiny dimensions and distinctive design.",
          "The brand later expanded beyond the original two-seat city car, introducing models such as the Forfour and eventually developing a new generation of larger electric vehicles through its partnership with Geely.",
        ],
      },
      {
        heading: "What Sets It Apart",
        paragraphs: [
          "Smart has always focused on making efficient use of space, especially in crowded cities. Its modern vehicles combine the brand's original urban philosophy with electric power, contemporary technology, and a more premium approach to design.",
        ],
      },
    ],
  },
  Mini: {
    manufacturer: "Mini",
    founded: "1959, Oxford, England",
    tagline: "Small car, big character.",
    image: "/history-img/Mini.svg",
    sections: [
      {
        heading: "Born From a Fuel Crisis",
        paragraphs: [
          "MINI was created by the British Motor Corporation in response to the fuel shortages of the late 1950s. Designed by Alec Issigonis, the original Mini used a front-mounted transverse engine and front-wheel drive to create an unusually spacious cabin from a remarkably small footprint.",
          "The original Mini became a cultural icon, combining clever engineering with distinctive styling. Its success in motorsport, particularly through the Mini Cooper and Cooper S, also gave the little car an unexpectedly serious performance reputation.",
        ],
      },
      {
        heading: "What Sets It Apart",
        paragraphs: [
          "MINI has always been about making small cars feel special. Its compact proportions, go-kart-like handling, unmistakable design, and playful character have made it one of the most recognizable names in the automotive world.",
        ],
      },
    ],
  },

  Chrysler: {
    manufacturer: "Chrysler",
    founded: "1925, Detroit, Michigan",
    tagline: "American innovation with a distinctive sense of style.",
    image: "/history-img/Chrysler.svg",
    sections: [
      {
        heading: "An American Automotive Pioneer",
        paragraphs: [
          "Chrysler was founded by Walter P. Chrysler in Detroit in 1925 after he took control of the Maxwell Motor Company. From the beginning, the company aimed to compete with America's largest automakers through engineering innovation, strong performance, and distinctive design.",
          "Chrysler became particularly influential during the mid-twentieth century, introducing advanced engineering and memorable designs while building a reputation for large, comfortable American automobiles.",
        ],
      },
      {
        heading: "What Sets It Apart",
        paragraphs: [
          "Chrysler has traditionally combined American comfort and practicality with engineering innovation and expressive styling. The brand has also played an important role in popularizing technologies and vehicle concepts that later became common throughout the automotive industry.",
        ],
      },
    ],
  },
};

export function getBrandHistory(manufacturer: string): BrandHistory {
  return (
    brandHistories[manufacturer] ?? {
      manufacturer,
      founded: "Details coming soon",
      tagline: "A name trusted by drivers around the world.",
      image: "logoMain.jpg",
      sections: [
        {
          paragraphs: [
            `We're still gathering the full story on ${manufacturer}. Check back soon for more on the brand's history and what makes it worth driving.`,
          ],
        },
      ],
    }
  );
}
