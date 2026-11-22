// Thèmes et prompts de départ de « The Best of Me ».
// Chaque prompt peut être modifié, supprimé ou complété depuis l'appli.
// "source" sert à créditer le photographe / créateur du prompt.
window.SEED_THEMES = [
  {
    id: "cinema",
    name: "Cinéma",
    emoji: "🎬",
    color: "#c2410c",
    prompts: [
      {
        id: "cinema-billard",
        title: "Le coup de billard",
        source: "@photo_tvoritel",
        text: "Hyperrealistic cinematic portrait of the man in the attached photo playing pool, captured at the exact moment he leans forward to strike the cue ball. The camera is positioned at table height, level with the ball, creating a sense of tension and precision.\n\nThe background is softly blurred, with warm lighting focused on the player and the green pool table.\n\nThe subject wears a fitted black T-shirt and a dark bracelet or watch. His expression shows complete concentration, with his arms tense as he lines up the shot.\n\nAn intimate indoor setting with a cinematic atmosphere and detailed realism in the texture of the pool table felt, the wood of the cue, and the light reflections.\n\nSoft directional lighting from above and slightly to the side, natural shadows, realistic skin tones, neutral color balance, and shallow depth of field.\n\nProfessional composition, ultra-photorealistic 8K quality, natural depth and contrast."
      },
      {
        id: "cinema-noir",
        title: "Film noir",
        source: "The Best of Me",
        text: "Black and white film noir portrait of the person in the attached photo, standing under a single street lamp on a wet cobblestone street at night. Long trench coat, collar raised, cigarette-free hands in pockets. Hard side light creating deep shadows across the face, venetian-blind light patterns on a brick wall behind. Thin mist, reflections in puddles. 1940s detective movie atmosphere, 35mm film grain, high contrast, ultra-photorealistic, natural facial features preserved exactly."
      },
      {
        id: "cinema-neon",
        title: "Pluie & néons",
        source: "The Best of Me",
        text: "Cinematic night portrait of the person in the attached photo walking in the rain through a narrow city street lit by pink and blue neon signs. Dark jacket, wet hair, raindrops visible in the backlight. Camera at chest height with a 50mm lens, shallow depth of field, bokeh from the neon lights, reflections on the wet asphalt. Moody teal and magenta color grade, anamorphic look, ultra-photorealistic 8K, realistic skin texture."
      }
    ]
  },
  {
    id: "studio",
    name: "Portrait studio",
    emoji: "📸",
    color: "#334155",
    prompts: [
      {
        id: "studio-nb",
        title: "Noir & blanc classique",
        source: "The Best of Me",
        text: "Fine-art black and white studio portrait of the person in the attached photo, head and shoulders, three-quarter angle. Rembrandt lighting with a single large softbox, subtle triangle of light on the shadow cheek, dark charcoal seamless background. Plain black crew-neck sweater. Calm, confident expression, eyes sharp and in focus. Medium format look, rich tonal range, fine grain, ultra-photorealistic, facial features identical to the reference."
      },
      {
        id: "studio-editorial",
        title: "Éditorial magazine",
        source: "The Best of Me",
        text: "High-end editorial portrait of the person in the attached photo for a fashion magazine feature. Tailored navy suit without tie, white shirt open at the collar, seated on a minimalist wooden stool. Warm beige studio backdrop, soft key light from the front-left with a gentle rim light. Relaxed yet powerful pose, slight smile. Clean, modern composition with negative space on one side, ultra-photorealistic, natural skin texture, 8K."
      },
      {
        id: "studio-pro",
        title: "Portrait professionnel",
        source: "The Best of Me",
        text: "Professional corporate headshot of the person in the attached photo, chest-up framing. Dark blazer over a light shirt, approachable confident smile. Softly blurred modern office background with warm daylight from large windows. Flattering soft light, even skin tones, sharp eyes, 85mm lens look, shallow depth of field. Clean, natural retouching, ultra-photorealistic, faithful to the reference face."
      }
    ]
  },
  {
    id: "sport",
    name: "Sport & action",
    emoji: "🥊",
    color: "#b91c1c",
    prompts: [
      {
        id: "sport-boxe",
        title: "Salle de boxe",
        source: "The Best of Me",
        text: "Gritty cinematic portrait of the person in the attached photo in an old boxing gym, wrapping his hands before training. Grey hoodie with sleeves pushed up, sweat on the skin. Shafts of dusty light coming through high windows, heavy bags and a ring softly blurred in the background. Low camera angle, intense focused gaze, desaturated warm tones, film grain, ultra-photorealistic, detailed fabric and skin texture."
      },
      {
        id: "sport-course",
        title: "Course à l'aube",
        source: "The Best of Me",
        text: "Dynamic action photo of the person in the attached photo running along a coastal path at sunrise, captured mid-stride. Technical running gear, light breeze in the hair. Golden backlight from the low sun, lens flare, sea and cliffs softly blurred behind. Telephoto compression, fast shutter freezing the motion, energetic yet natural, ultra-photorealistic, face clearly recognizable."
      },
      {
        id: "sport-velo",
        title: "Col à vélo",
        source: "The Best of Me",
        text: "Epic cycling photograph of the person in the attached photo climbing a winding mountain pass on a road bike, standing on the pedals. Fitted cycling jersey, helmet, sunglasses pushed up on the helmet so the face is visible. Hairpin bends and snowy peaks behind, dramatic clouds, late afternoon light. Shot from a low side angle, motion blur on the wheels, ultra-photorealistic, authentic effort on the face."
      }
    ]
  },
  {
    id: "voyage",
    name: "Voyage",
    emoji: "🌍",
    color: "#0369a1",
    prompts: [
      {
        id: "voyage-paris",
        title: "Toits de Paris",
        source: "The Best of Me",
        text: "Lifestyle portrait of the person in the attached photo on a Parisian rooftop at golden hour, leaning on a wrought-iron railing, zinc roofs and chimneys stretching to the horizon with the Eiffel Tower softly blurred in the distance. Casual camel coat over a white T-shirt. Warm low sun on the face, gentle wind, relaxed smile. 35mm film look, soft contrast, ultra-photorealistic."
      },
      {
        id: "voyage-phare",
        title: "Phare dans la tempête",
        source: "The Best of Me",
        text: "Dramatic outdoor portrait of the person in the attached photo standing on the rocks of a wild Atlantic coast, a tall lighthouse behind him battered by huge waves. Yellow sailing jacket, wet hair, sea spray in the air. Stormy sky with a break of light illuminating the face. Wide-angle environmental composition, cold blue-green tones with warm skin, ultra-photorealistic, rich detail in the water and rocks."
      },
      {
        id: "voyage-desert",
        title: "Road trip désert",
        source: "The Best of Me",
        text: "Cinematic road-trip photo of the person in the attached photo sitting on the hood of a vintage convertible parked on an empty desert highway at sunset. Denim shirt, aviator sunglasses in hand. Red rock formations, long shadows, dust in the air glowing in the backlight. Wide composition, warm orange and teal grade, Kodak Portra film look, ultra-photorealistic."
      }
    ]
  },
  {
    id: "vintage",
    name: "Vintage",
    emoji: "🎞️",
    color: "#a16207",
    prompts: [
      {
        id: "vintage-70",
        title: "Années 70",
        source: "The Best of Me",
        text: "Authentic 1970s analog photograph of the person in the attached photo, wearing a brown suede jacket and wide-collar shirt, sitting in a retro diner booth with orange vinyl seats. Warm faded colors, slight vignette, soft flash, visible film grain and light leaks. Candid relaxed expression. Looks like a real scanned vintage print, ultra-realistic, facial identity preserved."
      },
      {
        id: "vintage-20",
        title: "Gentleman 1920",
        source: "The Best of Me",
        text: "Sepia-toned portrait of the person in the attached photo as a 1920s gentleman in an art-deco jazz club. Three-piece pinstripe suit, pocket watch chain, slicked hair. Warm tungsten light, brass and velvet details, band softly blurred in the background, cigarette smoke haze. Shot as if on large-format glass plate camera, fine detail, ultra-photorealistic."
      }
    ]
  },
  {
    id: "aventure",
    name: "Aventure",
    emoji: "🏔️",
    color: "#15803d",
    prompts: [
      {
        id: "aventure-sommet",
        title: "Au sommet",
        source: "The Best of Me",
        text: "Epic adventure portrait of the person in the attached photo standing on a rocky mountain summit above a sea of clouds at sunrise. Technical mountaineering jacket, backpack straps, breath visible in the cold air. Golden rim light, vast panoramic background, wind in the hair. Shot from slightly below for a heroic feel, ultra-photorealistic, natural tired-but-proud expression."
      },
      {
        id: "aventure-voile",
        title: "À la barre",
        source: "The Best of Me",
        text: "Action portrait of the person in the attached photo at the helm of a sailing yacht heeling in strong wind, spray flying over the deck. Offshore sailing jacket, determined smile, hands on the wheel. Deep blue sea, white caps, bright sun with dramatic clouds. Wide-angle lens from the deck, sharp detail on water droplets, ultra-photorealistic."
      }
    ]
  }
];
