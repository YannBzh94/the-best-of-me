// Thèmes et prompts de départ de « The Best of Me ».
// Chaque prompt peut être modifié, supprimé ou complété depuis l'appli.
// "source" crédite le photographe / créateur. « prompt original » = rédigé pour l'appli dans ce style.
// Augmenter SEED_VERSION ajoute les nouveaux exemples chez les utilisateurs existants sans toucher à leurs prompts.
window.SEED_VERSION = 8;
window.SEED_THEMES = [
  {
    "id": "cinema",
    "name": "Cinéma",
    "emoji": "🎬",
    "color": "#c2410c",
    "prompts": [
      {
        "id": "cinema-pluie-fenetre",
        "title": "Fenêtre sous la pluie",
        "source": "@photo_tvoritel",
        "text": "Using my uploaded selfie, recreate me in the composition and visual concept of the reference photo. Preserve my exact identity, face, eyes, skin texture, beard, hairstyle, proportions, and natural imperfections. Do not beautify or alter my appearance.\n\nCreate a photorealistic 9:16 cinematic portrait of me standing close to a dark, rain-covered window, wearing a naturally wrinkled white linen shirt with an open collar. My body faces the glass while my head turns slightly toward the light, gazing intensely outside with a calm, masculine, introspective expression. Add a realistic rain-distorted reflection in the window.\n\nUse dramatic low-key natural light, illuminating one eye and side of my face while the rest fades into deep shadow. Moody desaturated tones, cold gray and muted olive undertones, subtle haze, film grain, and soft halation.\n\n85mm f/1.8 cinematic lens look, shallow depth of field, ARRI-inspired tonality, ultra-photorealistic. Make it feel like a powerful frame from a high-budget psychological drama, not an AI-generated portrait.",
        "format": "9:16"
      },
      {
        "id": "cinema-billard",
        "title": "Le coup de billard",
        "source": "@photo_tvoritel",
        "text": "Hyperrealistic cinematic portrait of the man in the attached photo playing pool, captured at the exact moment he leans forward to strike the cue ball. The camera is positioned at table height, level with the ball, creating a sense of tension and precision.\n\nThe background is softly blurred, with warm lighting focused on the player and the green pool table.\n\nThe subject wears a fitted black T-shirt and a dark bracelet or watch. His expression shows complete concentration, with his arms tense as he lines up the shot.\n\nAn intimate indoor setting with a cinematic atmosphere and detailed realism in the texture of the pool table felt, the wood of the cue, and the light reflections.\n\nSoft directional lighting from above and slightly to the side, natural shadows, realistic skin tones, neutral color balance, and shallow depth of field.\n\nProfessional composition, ultra-photorealistic 8K quality, natural depth and contrast."
      },
      {
        "id": "cinema-noir",
        "title": "Film noir",
        "source": "The Best of Me",
        "text": "Black and white film noir portrait of the person in the attached photo, standing under a single street lamp on a wet cobblestone street at night. Long trench coat, collar raised, cigarette-free hands in pockets. Hard side light creating deep shadows across the face, venetian-blind light patterns on a brick wall behind. Thin mist, reflections in puddles. 1940s detective movie atmosphere, 35mm film grain, high contrast, ultra-photorealistic, natural facial features preserved exactly."
      },
      {
        "id": "cinema-neon",
        "title": "Pluie & néons",
        "source": "The Best of Me",
        "text": "Cinematic night portrait of the person in the attached photo walking in the rain through a narrow city street lit by pink and blue neon signs. Dark jacket, wet hair, raindrops visible in the backlight. Camera at chest height with a 50mm lens, shallow depth of field, bokeh from the neon lights, reflections on the wet asphalt. Moody teal and magenta color grade, anamorphic look, ultra-photorealistic 8K, realistic skin texture."
      },
      {
        "id": "cinema-train",
        "title": "Train de nuit",
        "source": "Tendance Instagram (prompt original)",
        "text": "Cinematic portrait of the person in the attached photo sitting in a vintage sleeper train compartment at night, leaning against the window as lights of a station pass by in streaks. Wool coat, open book on the knees, wood paneling and brass details. Warm compartment lamp mixed with cold blue light from outside. Melancholic, elegant atmosphere, 35mm film look, ultra-photorealistic."
      }
    ]
  },
  {
    "id": "instant",
    "name": "Instant décisif",
    "emoji": "🎯",
    "color": "#7c2d12",
    "prompts": [
      {
        "id": "instant-echecs",
        "title": "La partie d'échecs",
        "source": "Style @photo_tvoritel (prompt original)",
        "text": "Hyperrealistic cinematic portrait of the man in the attached photo playing chess, captured at the exact moment his fingers close around a knight before moving it. The camera is positioned at board height, just behind the pieces, so the foreground pieces are softly out of focus.\n\nThe background is a dim, quiet café with blurred bookshelves and warm lamps.\n\nThe subject wears a charcoal knit sweater and a simple steel watch. His expression shows deep calculation, eyebrows slightly drawn, eyes fixed on the board.\n\nAn intimate indoor setting with detailed realism in the polished wood of the pieces, the texture of the board and the fabric of the sweater.\n\nSoft warm lamp light from the side, natural shadows, realistic skin tones, shallow depth of field.\n\nProfessional composition, ultra-photorealistic 8K quality, natural depth and contrast."
      },
      {
        "id": "instant-flechettes",
        "title": "Le lancer de fléchette",
        "source": "Style @photo_tvoritel (prompt original)",
        "text": "Hyperrealistic cinematic portrait of the man in the attached photo throwing a dart in an old pub, captured at the exact moment the dart leaves his fingers. The camera is placed beside the dartboard, looking back at him, the board softly blurred in the foreground.\n\nThe background shows a warm, crowded bar out of focus, with amber bottles and string lights.\n\nThe subject wears a dark denim shirt with rolled sleeves. His expression shows calm focus, one eye slightly narrowed, arm fully extended.\n\nDetailed realism in the wood paneling, the metal of the dart and the light reflections on the glasses.\n\nWarm tungsten lighting from above, natural shadows, realistic skin tones, shallow depth of field.\n\nProfessional composition, ultra-photorealistic 8K quality, natural depth and contrast."
      },
      {
        "id": "instant-barbier",
        "title": "Chez le barbier",
        "source": "Style @photo_tvoritel (prompt original)",
        "text": "Hyperrealistic cinematic portrait of the man in the attached photo sitting in a vintage barber chair, captured at the moment the barber's razor passes along his jaw, seen through the large mirror. The camera is positioned behind the chair at shoulder height, framing his reflection.\n\nThe background is an old barbershop with tiled walls, chrome details and glass bottles, softly blurred.\n\nThe subject wears a white barber cape. His expression is relaxed, eyes half closed, a light trace of shaving foam on the cheek.\n\nDetailed realism in the leather of the chair, the steel of the razor and the mirror reflections.\n\nSoft daylight from a side window mixed with warm interior light, natural shadows, realistic skin texture, shallow depth of field.\n\nProfessional composition, ultra-photorealistic 8K quality, natural depth and contrast."
      },
      {
        "id": "instant-atelier",
        "title": "L'atelier du menuisier",
        "source": "Style @photo_tvoritel (prompt original)",
        "text": "Hyperrealistic cinematic portrait of the man in the attached photo working in a woodworking shop, captured at the moment he blows sawdust off a freshly planed plank. The camera is placed at workbench height, very close to the wood surface.\n\nThe background shows hanging tools and shelves, softly blurred, with dust particles floating in a beam of light.\n\nThe subject wears a canvas work apron over a grey T-shirt. His expression shows quiet satisfaction and concentration.\n\nDetailed realism in the wood grain, the curls of shavings and the texture of his hands.\n\nA single shaft of warm sunlight from a high window, natural shadows, realistic skin tones, shallow depth of field.\n\nProfessional composition, ultra-photorealistic 8K quality, natural depth and contrast."
      },
      {
        "id": "instant-piano",
        "title": "Les mains sur le piano",
        "source": "Style @photo_tvoritel (prompt original)",
        "text": "Hyperrealistic cinematic portrait of the man in the attached photo playing a grand piano, captured at the exact moment he leans into a powerful chord. The camera is positioned at keyboard level, the keys leading diagonally toward him.\n\nThe background is an empty concert hall in darkness with a few soft bokeh lights.\n\nThe subject wears a black shirt with the top button open. His expression shows emotion and total absorption, eyes closed.\n\nDetailed realism in the glossy black lacquer, the ivory keys and the reflections of light on the piano lid.\n\nA single spotlight from above and slightly behind, rim light on his hair and shoulders, deep natural shadows, realistic skin tones, shallow depth of field.\n\nProfessional composition, ultra-photorealistic 8K quality, natural depth and contrast."
      },
      {
        "id": "instant-cafe",
        "title": "Le premier café",
        "source": "Style @photo_tvoritel (prompt original)",
        "text": "Hyperrealistic cinematic portrait of the man in the attached photo sitting by a café window early in the morning, captured at the moment he lifts a cup of black coffee, steam rising in front of his face. The camera is outside the window at table height, with faint reflections of the street on the glass.\n\nThe background inside is softly blurred, warm and quiet.\n\nThe subject wears a dark overcoat and a light scarf. His expression is calm and thoughtful, gaze lost toward the street.\n\nDetailed realism in the ceramic cup, the steam, the condensation on the glass and the fabric of the coat.\n\nLow golden morning light hitting his face from the side, natural shadows, realistic skin tones, shallow depth of field.\n\nProfessional composition, ultra-photorealistic 8K quality, natural depth and contrast."
      },
      {
        "id": "instant-garage",
        "title": "Le garage moto",
        "source": "Style @photo_tvoritel (prompt original)",
        "text": "Hyperrealistic cinematic portrait of the man in the attached photo in a vintage motorcycle garage, captured at the moment he wipes his hands on a rag after tightening a bolt, standing next to a classic café-racer motorcycle. The camera is low, at the height of the engine.\n\nThe background shows tool walls, old signs and a half-open garage door, softly blurred.\n\nThe subject wears a worn leather jacket over a white T-shirt, a small grease mark on the cheek. His expression shows a slight proud smile.\n\nDetailed realism in the chrome, the oil stains, the leather and the metal textures.\n\nDaylight coming through the garage door mixed with a warm work lamp, natural shadows, realistic skin tones, shallow depth of field.\n\nProfessional composition, ultra-photorealistic 8K quality, natural depth and contrast."
      },
      {
        "id": "instant-bowling",
        "title": "Le strike",
        "source": "Style @photo_tvoritel (prompt original)",
        "text": "Hyperrealistic cinematic portrait of the man in the attached photo bowling, captured at the exact moment he releases the ball, his body low and extended. The camera is positioned on the lane at floor level, the ball rolling toward the lens.\n\nThe background is a retro bowling alley with neon lights and lanes softly blurred.\n\nThe subject wears a vintage bowling shirt and dark trousers. His expression shows intense focus.\n\nDetailed realism in the glossy wooden lane, the reflections of neon on the floor and the texture of the ball.\n\nMixed neon and overhead lighting, natural shadows, realistic skin tones, shallow depth of field.\n\nProfessional composition, ultra-photorealistic 8K quality, natural depth and contrast."
      }
    ]
  },
  {
    "id": "studio",
    "name": "Portrait studio",
    "emoji": "📸",
    "color": "#334155",
    "prompts": [
      {
        "id": "studio-chemise-luxe",
        "title": "Chemise blanche, lumière orange",
        "source": "@photo_tvoritel",
        "text": "Transform my photo into a high-end luxury studio portrait while preserving my exact identity, facial features, hairstyle, facial hair, body proportions, skin tone, and natural expression. Do not change who I am.\n\nDress me in a perfectly tailored fitted white dress shirt with the sleeves buttoned and subtle premium fabric texture. Pair it with tailored black trousers, a luxury black leather watch, and minimal accessories for a sophisticated, timeless look.\n\nPose me naturally while adjusting the cuff of my left sleeve with my right hand. Rotate my body about 45 degrees away from the camera, but keep my head turned slightly toward the camera, making confident eye contact or looking just beside the lens. The pose should feel relaxed, masculine, and effortless, like an editorial fashion campaign.\n\nPlace me against a completely black studio background with no visible distractions.\n\nLight the scene with dramatic cinematic studio lighting: a warm orange rim light outlining the back and right side of the body, combined with a soft red accent light on the opposite side. Add a large soft key light from the front-left to illuminate the face naturally while maintaining strong contrast and sculpting the jawline and facial features.\n\nThe shirt should display realistic folds, crisp tailoring, and subtle highlights. Skin texture should remain completely natural with realistic pores and facial detail.\n\nStyle: luxury men's fashion editorial, Tom Ford campaign, Hugo Boss, GQ magazine, cinematic portrait photography, premium studio lighting, elegant, masculine, minimalistic.\n\nCamera settings: 85mm lens, f/1.8, eye-level composition, shallow depth of field, ultra-sharp focus on the eyes, HDR, realistic skin tones, photorealistic, 8K, ultra-detailed.\n\nNegative prompt (avoid): female, side profile only, looking away, cartoon, anime, CGI, unrealistic muscles, oversized body, blurry, low quality, plastic skin, bad anatomy, extra fingers, duplicate limbs, distorted face, watermark, logo, text, noise, oversaturated colors, poorly fitted clothing."
      },
      {
        "id": "studio-echecs-citation",
        "title": "Échecs & citation (N&B)",
        "source": "@photo_tvoritel",
        "text": "Using my uploaded photo as the source, recreate it as a cinematic, photorealistic black-and-white editorial portrait while preserving my identity exactly as in the original image. Keep my face, eyes, eyebrows, eyelashes, skin texture, beard, hairstyle, facial proportions, body shape, and every defining feature completely unchanged and instantly recognizable. Do not beautify, age, stylize, or alter my appearance in any way.\n\nRecreate the composition with me leaning forward over a chessboard, both forearms resting naturally on the table, maintaining direct eye contact with the camera. My expression should be calm, confident, thoughtful, and slightly mysterious, as if I have already anticipated every move. The eyes must be the emotional focal point of the image.\n\nPlace realistic chess pieces in the foreground, heavily blurred by a shallow depth of field, while my face and especially my eyes remain razor-sharp. Use a clean matte-black background with generous negative space on the right side.\n\nLighting should be dramatic low-key studio lighting with a single directional key light, deep shadows, rich monochrome contrast, subtle film grain, realistic skin texture, and a timeless fine-art editorial aesthetic. Capture the image with an 85mm portrait lens, shallow depth of field (around f/1.8), ultra-high detail, realistic optical compression, natural catchlights, and authentic cinematic tonality.\n\nAdd elegant minimalist typography in the empty black space on the right side (approximately x: 85%, y: 21%), vertically centered within the negative space. Use a small luxury serif font in soft white/light gray with generous letter spacing. Above the quote, place a tiny minimalist chess pawn icon with a thin horizontal line extending to each side.\n\nText:\n\nLife is a well-planned game of chess.\nHow you play it\nis entirely up to you.\n\nThe typography should feel subtle, premium, and timeless—similar to a luxury magazine editorial. It must complement the portrait without drawing attention away from the eyes."
      },
      {
        "id": "studio-nb",
        "title": "Noir & blanc classique",
        "source": "The Best of Me",
        "text": "Fine-art black and white studio portrait of the person in the attached photo, head and shoulders, three-quarter angle. Rembrandt lighting with a single large softbox, subtle triangle of light on the shadow cheek, dark charcoal seamless background. Plain black crew-neck sweater. Calm, confident expression, eyes sharp and in focus. Medium format look, rich tonal range, fine grain, ultra-photorealistic, facial features identical to the reference."
      },
      {
        "id": "studio-editorial",
        "title": "Éditorial magazine",
        "source": "The Best of Me",
        "text": "High-end editorial portrait of the person in the attached photo for a fashion magazine feature. Tailored navy suit without tie, white shirt open at the collar, seated on a minimalist wooden stool. Warm beige studio backdrop, soft key light from the front-left with a gentle rim light. Relaxed yet powerful pose, slight smile. Clean, modern composition with negative space on one side, ultra-photorealistic, natural skin texture, 8K."
      },
      {
        "id": "studio-pro",
        "title": "Portrait professionnel",
        "source": "The Best of Me",
        "text": "Professional corporate headshot of the person in the attached photo, chest-up framing. Dark blazer over a light shirt, approachable confident smile. Softly blurred modern office background with warm daylight from large windows. Flattering soft light, even skin tones, sharp eyes, 85mm lens look, shallow depth of field. Clean, natural retouching, ultra-photorealistic, faithful to the reference face."
      },
      {
        "id": "studio-profil",
        "title": "Profil noir & blanc",
        "source": "Tendance Instagram (prompt original)",
        "text": "Hyper-realistic black and white studio portrait of the person in the attached photo in strict side profile against a pure black background. A single narrow strip light outlines the forehead, nose, lips and jawline. Calm, eyes looking straight ahead. Fine-art style, deep blacks, crisp detail in the skin and hair, ultra-photorealistic, profile faithful to the reference."
      },
      {
        "id": "studio-closeup",
        "title": "Gros plan incliné (à compléter)",
        "source": "@ai_photos_prompt_000",
        "text": "Preserve the original person's identity, face, and physical features with high likeness. Do not alter their face. Apply the following style: An extreme close-up headshot, angled slightly upwards from eye-level, focusing on the subject's face from mid-forehead to just below the lips, with parts of the shoulders and collarbone visible on the lower left. Apply a slender and delicate build to the subject. The subject's head is tilted significantly towards their right (viewer's left).\n\n[SUITE À COMPLÉTER : le prompt original continue sur la publication]"
      }
    ]
  },
  {
    "id": "sport",
    "name": "Sport & action",
    "emoji": "🥊",
    "color": "#b91c1c",
    "prompts": [
      {
        "id": "sport-boxe",
        "title": "Salle de boxe",
        "source": "The Best of Me",
        "text": "Gritty cinematic portrait of the person in the attached photo in an old boxing gym, wrapping his hands before training. Grey hoodie with sleeves pushed up, sweat on the skin. Shafts of dusty light coming through high windows, heavy bags and a ring softly blurred in the background. Low camera angle, intense focused gaze, desaturated warm tones, film grain, ultra-photorealistic, detailed fabric and skin texture."
      },
      {
        "id": "sport-course",
        "title": "Course à l'aube",
        "source": "The Best of Me",
        "text": "Dynamic action photo of the person in the attached photo running along a coastal path at sunrise, captured mid-stride. Technical running gear, light breeze in the hair. Golden backlight from the low sun, lens flare, sea and cliffs softly blurred behind. Telephoto compression, fast shutter freezing the motion, energetic yet natural, ultra-photorealistic, face clearly recognizable."
      },
      {
        "id": "sport-velo",
        "title": "Col à vélo",
        "source": "The Best of Me",
        "text": "Epic cycling photograph of the person in the attached photo climbing a winding mountain pass on a road bike, standing on the pedals. Fitted cycling jersey, helmet, sunglasses pushed up on the helmet so the face is visible. Hairpin bends and snowy peaks behind, dramatic clouds, late afternoon light. Shot from a low side angle, motion blur on the wheels, ultra-photorealistic, authentic effort on the face."
      }
    ]
  },
  {
    "id": "voyage",
    "name": "Voyage",
    "emoji": "🌍",
    "color": "#0369a1",
    "prompts": [
      {
        "id": "voyage-paris",
        "title": "Toits de Paris",
        "source": "The Best of Me",
        "text": "Lifestyle portrait of the person in the attached photo on a Parisian rooftop at golden hour, leaning on a wrought-iron railing, zinc roofs and chimneys stretching to the horizon with the Eiffel Tower softly blurred in the distance. Casual camel coat over a white T-shirt. Warm low sun on the face, gentle wind, relaxed smile. 35mm film look, soft contrast, ultra-photorealistic."
      },
      {
        "id": "voyage-phare",
        "title": "Phare dans la tempête",
        "source": "The Best of Me",
        "text": "Dramatic outdoor portrait of the person in the attached photo standing on the rocks of a wild Atlantic coast, a tall lighthouse behind him battered by huge waves. Yellow sailing jacket, wet hair, sea spray in the air. Stormy sky with a break of light illuminating the face. Wide-angle environmental composition, cold blue-green tones with warm skin, ultra-photorealistic, rich detail in the water and rocks."
      },
      {
        "id": "voyage-desert",
        "title": "Road trip désert",
        "source": "The Best of Me",
        "text": "Cinematic road-trip photo of the person in the attached photo sitting on the hood of a vintage convertible parked on an empty desert highway at sunset. Denim shirt, aviator sunglasses in hand. Red rock formations, long shadows, dust in the air glowing in the backlight. Wide composition, warm orange and teal grade, Kodak Portra film look, ultra-photorealistic."
      },
      {
        "id": "voyage-venise",
        "title": "Venise à l'aube",
        "source": "Tendance Instagram (prompt original)",
        "text": "Lifestyle portrait of the person in the attached photo standing on a small stone bridge over a quiet canal in Venice at dawn, mist on the water, a gondola softly blurred below. Light trench coat, hands on the railing, peaceful smile. Soft pastel morning light, pink and gold tones, 35mm film look, ultra-photorealistic."
      }
    ]
  },
  {
    "id": "vintage",
    "name": "Vintage",
    "emoji": "🎞️",
    "color": "#a16207",
    "prompts": [
      {
        "id": "vintage-70",
        "title": "Années 70",
        "source": "The Best of Me",
        "text": "Authentic 1970s analog photograph of the person in the attached photo, wearing a brown suede jacket and wide-collar shirt, sitting in a retro diner booth with orange vinyl seats. Warm faded colors, slight vignette, soft flash, visible film grain and light leaks. Candid relaxed expression. Looks like a real scanned vintage print, ultra-realistic, facial identity preserved."
      },
      {
        "id": "vintage-20",
        "title": "Gentleman 1920",
        "source": "The Best of Me",
        "text": "Sepia-toned portrait of the person in the attached photo as a 1920s gentleman in an art-deco jazz club. Three-piece pinstripe suit, pocket watch chain, slicked hair. Warm tungsten light, brass and velvet details, band softly blurred in the background, cigarette smoke haze. Shot as if on large-format glass plate camera, fine detail, ultra-photorealistic."
      }
    ]
  },
  {
    "id": "aventure",
    "name": "Aventure",
    "emoji": "🏔️",
    "color": "#15803d",
    "prompts": [
      {
        "id": "aventure-sommet",
        "title": "Au sommet",
        "source": "The Best of Me",
        "text": "Epic adventure portrait of the person in the attached photo standing on a rocky mountain summit above a sea of clouds at sunrise. Technical mountaineering jacket, backpack straps, breath visible in the cold air. Golden rim light, vast panoramic background, wind in the hair. Shot from slightly below for a heroic feel, ultra-photorealistic, natural tired-but-proud expression."
      },
      {
        "id": "aventure-voile",
        "title": "À la barre",
        "source": "The Best of Me",
        "text": "Action portrait of the person in the attached photo at the helm of a sailing yacht heeling in strong wind, spray flying over the deck. Offshore sailing jacket, determined smile, hands on the wheel. Deep blue sea, white caps, bright sun with dramatic clouds. Wide-angle lens from the deck, sharp detail on water droplets, ultra-photorealistic."
      }
    ]
  },
  {
    "id": "tendances",
    "name": "Tendances Insta",
    "emoji": "🔥",
    "color": "#be185d",
    "prompts": [
      {
        "id": "tend-minecraft",
        "title": "Game over dans la neige",
        "source": "@photo_tvoritel",
        "text": "Use 100% of the face and body from my reference image. Create a cinematic top-down winter scene inspired by a Minecraft death screen. The person is lying spread out on snow, wearing casual winter clothes, realistic pose, cold atmospheric lighting, slightly desaturated tones, footprints visible in the snow. Surround the person with floating or placed pixelated Minecraft-style items including a diamond sword, bow, pickaxe, emerald, steak, Ender Eye, music disc, and spider mob. Add a realistic Minecraft 'You died!' game over overlay at the top with pixel font, including 'Score: 0', crosshair symbol, and two retro UI buttons labeled 'Respawn' and 'Title screen'. Blend realistic photography with pixel-art game elements naturally. Soft shadows, moody winter aesthetic, ultra detailed, vertical composition, DSLR realism, subtle depth of field, high contrast, 9:16 ratio.\n\nNegative prompt (avoid): low quality, blurry face, distorted body, extra limbs, wrong facial features, cartoon body, unrealistic.",
        "format": "9:16"
      },
      {
        "id": "tend-taxi",
        "title": "Taxi sous la pluie",
        "source": "Tendance Instagram (prompt original)",
        "text": "Intimate cinematic close-up of the person in the attached photo sitting in the back seat of a taxi at night, seen from outside through a rain-streaked window. City lights blur into colorful bokeh behind the glass, droplets in sharp focus. Head resting slightly against the seat, pensive gaze looking out. Dark coat, soft reflections of red and amber lights on the face. Moody, quiet atmosphere, film grain, ultra-photorealistic, face identical to the reference."
      },
      {
        "id": "tend-paparazzi",
        "title": "Flash paparazzi",
        "source": "Tendance Instagram (prompt original)",
        "text": "Night street photo of the person in the attached photo walking out of a restaurant, caught by a harsh direct camera flash, paparazzi style. Black outfit, confident stride, glancing toward the camera. Deep shadows behind, slight motion blur on the background lights, cool tones. Candid, high-contrast, editorial realism, ultra-photorealistic, face clearly recognizable."
      },
      {
        "id": "tend-feu",
        "title": "À la lueur du feu",
        "source": "Tendance Instagram (prompt original)",
        "text": "Cinematic portrait of the person in the attached photo sitting by a campfire at night, lit only by the warm flickering firelight. Wool sweater, hands held toward the flames, sparks floating in the air. Deep shadows around the edges, orange glow on the face, contemplative expression. Soft film grain, shallow depth of field, ultra-photorealistic, natural skin texture."
      },
      {
        "id": "tend-lofi",
        "title": "Crépuscule lofi",
        "source": "Tendance Instagram (prompt original)",
        "text": "Nostalgic lofi portrait of the person in the attached photo on a city rooftop at dusk, sitting on the edge with headphones around the neck. Purple and orange sky, first city lights turning on below. Oversized hoodie, relaxed pose. Soft grain, slightly faded colors, gentle glow, Y2K-inspired atmosphere, cinematic and dreamy, ultra-photorealistic face identical to the reference."
      },
      {
        "id": "tend-miroir",
        "title": "Selfie miroir ascenseur",
        "source": "Tendance Instagram (prompt original)",
        "text": "Stylish mirror selfie of the person in the attached photo inside a modern elevator with brushed metal walls, phone held low and to the side so the face stays fully visible. Smart casual outfit: black overshirt, white T-shirt, dark trousers. Soft overhead lighting, clean reflections, slight smile. Realistic smartphone photo look, sharp details, ultra-photorealistic."
      },
      {
        "id": "tend-argentique",
        "title": "Compact argentique",
        "source": "Tendance Instagram (prompt original)",
        "text": "Candid lifestyle photo of the person in the attached photo laughing at a dinner table with friends blurred around, shot with a 35mm point-and-shoot film camera and direct flash. Warm vintage tones, soft film grain, slightly overexposed foreground, natural spontaneous expression. Looks like a real scanned film print, ultra-realistic, face identical to the reference."
      },
      {
        "id": "tend-rouge",
        "title": "Fond rouge intense",
        "source": "Tendance Instagram (prompt original)",
        "text": "Bold studio portrait of the person in the attached photo, chest up, against a deep saturated red background. Black turtleneck. Hard key light from one side sculpting the face, strong shadow on the other side, subtle rim light. Direct, intense gaze into the lens. Minimal, graphic, high-end editorial style, ultra-photorealistic, natural skin texture."
      }
    ]
  },
  {
    "id": "typo",
    "name": "Affiches typo",
    "emoji": "🔤",
    "color": "#475569",
    "prompts": [
      {
        "id": "typo-couverture",
        "title": "Couverture de magazine (à personnaliser)",
        "source": "@photo_tvoritel (adapté)",
        "text": "Use my uploaded photo as the exact identity reference. Preserve my face, hairstyle, skin tone, facial hair, body proportions, and all recognizable features with high fidelity.\n\nCreate an ultra-premium luxury editorial fashion campaign featuring [MON PRÉNOM NOM] ([MON PSEUDO]), [MON MÉTIER / MA PASSION]. Inspired by the visual language of Fear of God Essentials, COS Studio, Represent, Saint Laurent, and modern luxury fashion editorials.\n\nShow me confidently walking toward the camera with a relaxed stride and calm expression, wearing an oversized heavyweight white hoodie, black wide-leg cargo trousers, and clean white sneakers.\n\nShot as commercial fashion photography on an 85mm lens (f/2.2) with realistic proportions, soft background separation, cinematic studio lighting, warm rim light, deep elegant shadows, and a seamless charcoal-to-dark-grey backdrop with subtle haze.\n\nDesign the layout like a luxury magazine cover. Place a massive vertical \"[MON PSEUDO]\" behind the subject in bold condensed typography with an ivory distressed texture. Add minimal Swiss-inspired editorial graphics, premium serif and sans-serif typography, and elegant microcopy such as \"CREATE WITHOUT LIMITS\", \"VISUAL STORYTELLER\", and \"CRAFTED WITH PURPOSE.\"\n\nInclude:\n\n* [MON PRÉNOM NOM]\n* [MON PSEUDO]\n* [MON MÉTIER • MA PASSION]\n* [MA VILLE • MON PAYS]\n\nFinish as an ultra-photorealistic, high-end fashion campaign with timeless luxury aesthetics, premium matte tones, and magazine-cover quality.",
        "format": "4:5"
      },
      {
        "id": "typo-x",
        "title": "Portrait dans un X",
        "source": "@bibi_syedaa",
        "text": "Ultra-minimalist typographic portrait poster on a clean light-gray (#efefef) background. Create a compact geometric capital X centered on the canvas. The X is NOT elongated or stretched; it consists of four separate thick diagonal geometric segments with flat horizontal ends, forming a short, wide, perfectly balanced modern X with large negative space between segments and a tight precise center crossing. The X acts as a photo mask containing a realistic young woman portrait. Face perfectly centered in the X intersection; left eye visible inside the upper-left section, right eye visible inside the upper-right section, nose and lips aligned exactly in the center crossing, hair flowing naturally through upper sections, white shirt visible in lower sections, soft natural daylight, neutral facial expression, looking directly into camera. Hands originate from INSIDE the portrait image, not outside the frame. Only fingers and small portions of the hands cross over the white edges of the X. Upper-right hand emerges from inside the upper-right portrait section and gently hooks over the side-right X segment edge with fingers naturally resting on the white surface as if gripping the X. Lower-left hand emerges from inside the lower-left portrait section and lightly hangs over the bottom-left X segment edge with fingers touching only the white background outside the mask. Realistic layer-over-mask effect, subtle shadows beneath fingers, no floating hands, no arms outside the X, hands naturally attached to the body inside the portrait. X geometry features thick diagonal bars, flat horizontal cut ends, wide trapezoid-like sections, compact proportions, luxury typography poster style, clean geometric symmetry, no thin or elongated X, no road-like strips, no hollow interior border. Typography is very small uppercase sans-serif with wide tracking: left side 'LETTER PORTRAIT', right side 'PHOTOSHOP TUTORIAL'. Light gray typography, subtle and minimal. Style: Swiss graphic design, luxury editorial poster, negative space, geometric masking, professional Photoshop artwork, realistic portrait photography, premium branding aesthetic, ultra-clean composition. 4:5 vertical format, centered layout, ultra-sharp 4K, realistic skin, realistic fingers, precise geometric X matching a modern letter-mask poster design.",
        "format": "4:5"
      },
      {
        "id": "typo-p",
        "title": "Caché derrière le P",
        "source": "@bibi_syedaa",
        "text": "Ultra-minimalist typographic portrait poster featuring a large uppercase serif letter \"P\" centered on a clean light-gray background (#f2f2f2). The letter P is thick, elegant, and occupies approximately 80% of the canvas height, acting as both a portrait frame and interaction element. A realistic smiling young woman is positioned behind the vertical opening of the P, naturally leaning out from inside the letter, with her upper body and face extending beyond the inner opening while remaining connected to the space behind the typography. She peeks playfully from behind the vertical stem of the P with her head slightly tilted toward the viewer, looking directly into the camera with a bright genuine smile. Her long straight brown hair falls naturally over her left shoulder, and she wears a light blue denim shirt. One hand grips the upper inner edge of the P from behind while the second hand grips the middle inner edge, with fingers wrapping naturally around the letter as if she is peeking out from behind it. Hands must appear realistically attached to the body and emerging from behind the letter, never floating, with convincing depth and layering. The letter P features elegant serif typography in a soft pastel blue-gray color, a thick vertical stem, a rounded upper-right bowl, smooth curves, and refined editorial styling. Typography layout includes the word \"LETTER\" at the top center and \"PORTRAIT\" at the bottom center, both in black uppercase sans-serif with very wide letter spacing for a clean luxury editorial aesthetic. Composition is perfectly centered with generous negative space, Swiss design influence, minimalist typography poster styling, premium branding aesthetics, soft studio lighting, subtle shadows for depth, ultra-clean edges, and professional Photoshop typography artwork. Color palette consists of a light gray-white background, muted pastel blue-gray letter P, black typography, and natural skin tones. Photorealistic quality, ultra-sharp details, realistic hands gripping the letter, realistic facial expression, luxury typography poster appearance, modern graphic design showcase, and 4K high-resolution square composition.",
        "format": "1:1"
      }
    ]
  },
  {
    "id": "fetes",
    "name": "Fêtes & tradition",
    "emoji": "🪔",
    "color": "#7e22ce",
    "prompts": [
      {
        "id": "fetes-diwali",
        "title": "Sari de Diwali (à compléter)",
        "source": "@ai_photos_prompt_000",
        "text": "Create an ultra-photorealistic, premium-quality Indian traditional festive fashion portrait in vertical 4:5 aspect ratio, 8K Ultra HD resolution (4320 × 5400 pixels). Feature a beautiful young adult Indian woman celebrating Diwali in a warm, luxurious, beautifully decorated festive setting.\n\nAppearance & Hairstyle: STRICT FACE PRESERVATION: If using an uploaded reference photo, preserve the person's exact facial identity with maximum possible accuracy. Maintain the original facial structure, face shape, eyes, eyebrows, nose, lips, skin tone, natural skin texture, and distinctive facial features. Do not alter, beautify, reshape, or replace the face. Style her long, naturally dark\n\n[SUITE À COMPLÉTER : le prompt original continue sur la publication]",
        "format": "4:5"
      }
    ]
  },
  {
    "id": "edito",
    "name": "Éditorial mode",
    "emoji": "📰",
    "color": "#1f2937",
    "prompts": [
      {
        "id": "edito-y2k-nuit",
        "title": "Flash Y2K de nuit",
        "source": "@exwageslave",
        "text": "Use uploaded reference image as ONLY face/body reference. Identity lock 100%: exact likeness, facial geometry, proportions unchanged, same hair color/length; preserve natural skin texture, no beautification, no face morphing. Maintain true identity consistency across all frames and angles. Ultra-realistic Y2K editorial portrait, nighttime urban street setting. Subject positioned against a gritty urban corner with metal roll-up door and layered posters, subtle depth with street lights fading into the background. Shot slightly tilted (Dutch angle) for dynamic composition, mid-shot framing (mid-torso to head), subject centered with slight offset. Pose: holding a flip phone to the ear, direct eye contact with the camera, confident and composed expression, lips neutral, shoulders relaxed but assertive stance. One hand engaged with phone, the other resting near waistline or pocket, posture slightly leaning into the frame. Environment: night city street, textured wall with posters and metallic shutter, soft bokeh streetlights in the distance, cinematic urban atmosphere, subtle reflections and ambient glow. Lighting: direct on-camera flash creating sharp highlights and defined shadows, high contrast look, crisp facial illumination, slight falloff into background, mixed ambient street lighting. Camera/metadata: 28-35mm lens, close-to-subject perspective, sharp focus on eyes, deep contrast, slight background blur but still readable, editorial street photography style. Outfit (strict Y2K, no logos): fitted red leather jacket, white cropped tank top, low-rise denim jeans with visible waistband, minimal accessories, narrow tinted sunglasses. A high-resolution, hyper-realistic skin/surface texture with visible pores, fine lines, and micro-details, clear facial expressions with no blur, cinematic lighting, ultra-detailed realism, 8K resolution. Finish: high-end editorial street realism, natural skin texture preserved, subtle film grain, high dynamic range, slight chromatic aberration, soft bloom on highlights, deep blacks and rich color contrast."
      },
      {
        "id": "edito-cafe-vitre",
        "title": "Café derrière la vitre",
        "source": "@exwageslave",
        "text": "Cinematic café portrait captured through a reflective window, using the provided photo as identity reference, preserving exact facial features, skin tone, body structure, and personal identity with full accuracy; with layered reflections of street scenery softly overlaying the subject. The framing is a medium close-up, showing the subject seated at a wooden table, holding a warm-toned ceramic cup near their lips in a contemplative pose. The expression is calm and introspective, with the gaze directed slightly off-frame. Lighting is soft, diffused daylight (~5200K) filtering through the café windows, creating gentle highlights on the face and hands, while cooler exterior reflections (#7A8A95) blend across the glass. The interior palette features warm browns and ambers (#C79A68, #4A3B2D), contrasted with muted blues and grays from the reflections. Wardrobe consists of a dark, matte hoodie with subtle texture, complementing the cozy atmosphere. Lens simulation approximates a 50mm full-frame at f/1.8, producing shallow depth of field with a creamy bokeh and softly layered reflections. A high-resolution, hyper-realistic skin texture with visible, clear facial expressions with no blur, visible pores, fine lines, and micro-detail on skin, fabric, ceramic glaze, and the natural grain of the table. The overall mood is intimate, cinematic, and atmospheric, blending warmth, solitude, and urban quietude within a fashion-editorial aesthetic. Editorial, modern, high-detail, cinematic composition, ultra-realistic textures, professional fashion photography style, 8K resolution."
      },
      {
        "id": "edito-1952",
        "title": "Studio 1952, toile peinte",
        "source": "@exwageslave",
        "text": "ROLE: You are a professional studio portrait photographer specializing in fine-art editorial color photography. Your task: create a calm, timeless studio portrait with refined color and classical composition.\n\nTOP PRIORITY — IDENTITY PRESERVATION: Use the person from the reference photo as the main subject. Preserve exact facial structure, proportions, expression, and natural skin tone. No beautification, stylization, or reinterpretation of identity.\n\nSCENE & STYLE: High-resolution color fine-art editorial portrait. Vertical medium-shot studio portrait — subject sits on a simple wooden or metal stool. Minimalist, classical framing with controlled negative space. Period authenticity: American mid-century, circa 1952. Cinematic quality — the formal elegance of classic studio portraiture.\n\nCOLOR PALETTE: Cool, controlled hues: soft blue-grey, muted green, pale off-white. Low saturation, high tonal precision. Skin tones natural and slightly warm for gentle contrast. No vibrant or glossy color grading.\n\nWARDROBE & STYLING: Formal 1952 American attire. IF MALE: Well-tailored blazer or suit jacket in muted neutral tone (charcoal, soft grey, deep navy), crisp dress shirt (cream, soft white, pale blue), subtle understated tie. Neat, polished grooming. IF FEMALE: Tailored dress, blouse, or structured top in muted neutral (charcoal, soft grey, cream, pale blue), refined neckline, optional simple accessory. Neat, polished grooming. Overall: refined dignity, quiet confidence, polished appearance — elegant without ostentation, period-appropriate.\n\nPOSE & EXPRESSION: Sits on stool with gentle half-profile torso turn, one leg crossed, hands resting naturally on lap. Dynamic compositions: torso angled left with thoughtful gaze | torso angled right with direct gaze | torso forward-leaning, three-quarter angle, engaged | torso half-profile, head tilted gently upward, introspective. Expression: calm, introspective, composed, dignified, never stiff.\n\nLIGHTING & ATMOSPHERE: Soft diffused studio light with gentle directional shaping, even illumination with delicate shadow shaping. Soft golden skin highlights, lifted shadows, mild rim light along cheek and hair. Smooth tonal transitions, no harsh contrast. Mood: quiet, confident, timeless — reminiscent of 1950s studio portraiture.\n\nBACKGROUND: Classic studio painted backdrop with soft, muted landscape scene. Soft green foliage, misty atmosphere, subtle water or distant scenery. Impressionistic, painterly quality, not photorealistic. Muted palette (greens, greys, soft browns). Soft focus and texture suggesting golden age backdrop. Creates depth without overwhelming subject.\n\nCAMERA & COMPOSITION: Classic portrait framing (above chest, seated), subject positioned with natural body turn and head angle, camera at eye level or slightly above. Composition suggests calm presence and life, not stiff frontality. Soft micro-contrast, subtle film grain, matte refined finish.\n\nFINAL PARAMETERS: Ultra-realistic | color fine-art editorial | 1952 formal American aesthetic | seated composition | painted studio backdrop | minimalist palette | subtle film grain | cinematic dignity."
      },
      {
        "id": "edito-crt",
        "title": "Mur de télés cathodiques",
        "source": "@exwageslave",
        "text": "Raw editorial fashion photograph, early-2000s studio aesthetic; male model (KEEP ORIGINAL FACE FROM UPLOADED PHOTO EXACTLY, do not alter facial features in any way, preserve identity 100%, no facial changes even 1%) sitting on the floor, legs relaxed apart, back leaning against stacked CRT televisions; one hand resting on thigh, the other loosely holding the hem of the sweater; outfit: oversized white short-sleeve sweatshirt, matching loose shorts; emotion: calm, emotionally distant, slightly bored; lighting: flat studio base light + direct frontal flash, soft shadows under jawline; background: white studio with retro televisions showing static noise; camera: straight-on medium shot, eye-level, no dramatic angles; A high-resolution, hyper-realistic skin texture with visible, clear facial expressions with no blur, pores, grain and fine details, realistic skin pores, slight redness, cotton fabric weave; color grading: neutral whites, muted blacks, slight analog noise; overall mood: editorial fashion shoot, casual intimacy, anti-glamour; cinematic lighting, 8K resolution, hyper-realistic render, photographic quality."
      },
      {
        "id": "edito-pont-hiver",
        "title": "Pont en hiver",
        "source": "@exwageslave",
        "text": "Use uploaded reference image as ONLY face/body reference. Identity lock 100%: exact likeness, facial geometry, proportions unchanged, same hair color/length; preserve natural skin texture (pores, micro-shine), no beautification, no face morphing. Maintain true identity consistency across all frames and angles. Close-up portrait: dramatic wide-angle high viewpoint slightly above and in front of the subject, looking down along the bridge; close-up framing from upper chest/shoulders to top of head, subject placed lower-right of frame, icy blue railing runs diagonally behind the shoulders toward the background city, road/buildings still visible on the left/top as compressed context but secondary. Pose: leaning back into the railing, shoulders open, one arm still implied along the rail out of frame; head tilted slightly back, eyes looking directly into the camera, confident cool expression, lips slightly parted; wind pushes a few strands across forehead/cheek, a few snow grains on hair and jacket collar, visible breath vapor. Environment: winter urban pedestrian bridge over multi-lane road, wet slushy asphalt reflections below, faint falling snow. Lighting: hard low winter sun key from camera-right creating crisp shadows on cheekbones and nose, cool skylight fill, slight rim on hair edges, WB ~5600K. Camera/metadata: 24mm wide-angle close to subject, f/4, 1/1000s, ISO 200, focus on the eyes, background readable but less dominant. Outfit (strict Y2K winter, exact colors): glossy black oversized puffer jacket with high collar; silver-grey zip hoodie underneath; white ribbed knit turtleneck; cobalt-blue knit beanie; charcoal grey chunky scarf wrapped once; black insulated nylon winter gloves (NOT leather); only bare skin visible if hands enter frame. A high-resolution, hyper-realistic skin/surface texture with visible pores, fine lines, and micro-details, clear facial expressions with no blur, cinematic lighting, ultra-detailed realism, 8K resolution. Finish: high-end street editorial realism, natural skin texture preserved, high dynamic range, subtle film-like grain, sharp detail without smoothing, cool winter palette with icy blues and deep blacks."
      },
      {
        "id": "edito-geant",
        "title": "Géant en ville",
        "source": "@exwageslave",
        "text": "Use uploaded reference image as ONLY face/body reference. Identity lock 100%: exact likeness, facial geometry, proportions unchanged, same hair color/length, natural skin texture, no beautification, no face mixing. Maintain true identity consistency across all frames and angles. Scene: classic downtown avenue street canyon with stone buildings and long perspective. Giant scale: the subject crouches/sits on the corner of a historic building, elbows on knees, hands relaxed, chin slightly down, direct eye contact, pose stable and grounded, no destruction. Camera: street-level looking up, 18-24mm ultra-wide, dramatic verticals, deep blue sky. Wardrobe (strict Y2K, no logos): oversized denim set or baggy jeans + oversized zip hoodie, chunky chain belt, narrow sunglasses, platform sneakers. Lighting: clean midday sun, sharp shadows, crisp texture. A high-resolution, hyper-realistic skin/surface texture with visible pores, fine lines, and micro-details, clear facial expressions with no blur, cinematic lighting, ultra-detailed realism, 8K resolution. Aspect ratio: 4:5.",
        "format": "4:5"
      },
      {
        "id": "edito-fleurs",
        "title": "Gros plan fleuri",
        "source": "@exwageslave",
        "text": "Use uploaded reference image as ONLY face/body reference. Identity lock 100%: exact likeness, facial geometry, proportions unchanged, same hair color/length; preserve natural skin texture, no beautification, no face morphing. Maintain true identity consistency across all frames and angles. Extreme close-up portrait in a natural floral setting. Subject surrounded by blooming white flowers and soft greenery, partially framed by branches in the foreground. Composition is intimate and organic, with flowers softly overlapping parts of the face and body, creating depth and layered framing. Background filled with dense blossoms, softly blurred. Pose: subject gently holding or touching a branch of small white flowers near the face, relaxed posture, head slightly tilted, soft direct gaze into the camera, calm and dreamy expression, lips slightly parted. Hair naturally flowing with subtle movement from a light breeze, a few strands crossing the face. Environment: outdoor spring garden filled with blooming white flowers, fresh natural atmosphere, soft wind movement, serene and romantic mood. Lighting: soft natural daylight, diffused sunlight creating even skin tones, gentle highlights on face and hair, no harsh shadows, airy and luminous feel. Camera/metadata: macro-style or 50-85mm portrait lens, very shallow depth of field, sharp focus on eyes, creamy bokeh in foreground and background, high detail retention. Outfit: light, delicate styling — soft white dress or top with subtle floral embroidery, sheer fabric elements (like a chiffon scarf or ribbon tied around the neck), minimal accessories, natural aesthetic. A high-resolution, hyper-realistic skin/surface texture with visible pores, fine lines, and micro-details, clear facial expressions with no blur, cinematic lighting, ultra-detailed realism, 8K resolution. Finish: high-end editorial beauty photography, natural skin texture preserved, soft color grading with warm highlights and fresh greens, subtle film-like grain, luminous glow, refined contrast without overprocessing."
      },
      {
        "id": "edito-dark-1",
        "title": "Dark minimaliste 1 – pose pensive",
        "source": "@bruna.iainfluencer (traduit du portugais)",
        "text": "I am sitting in a contemplative pose, leaning slightly forward with one elbow resting on my knee and my hand gently supporting my face. My posture is relaxed yet introspective, creating a sense of quiet depth and emotional presence. The background is split into two dark sections, one dark grey and one black, forming a subtle contrast that frames me without distractions. I am wearing a black long-sleeved turtleneck top paired with dark trousers, creating an elegant, minimalist silhouette that complements the monochrome palette. The fabric absorbs the light softly, allowing the lighting to sculpt the contours of my body and face with precision. My expression is neutral and reflective, with my eyes looking directly at the camera, inviting a moment of connection and reflection.\n\nMy hair is pulled up in a high, effortless bun with a few deliberately messy loose strands in front of my face. Vogue-style portrait. My makeup is impeccable, with glowing skin. The lighting is soft and directional, casting delicate shadows and subtle highlights on my features. It emphasizes the structure of my face, the texture of the clothing and the emotional tone of the portrait. The overall atmosphere is moody and artistically composed, evoking timeless elegance. This portrait should be captured with a full-frame Canon EOS R5 DSLR and an 85mm f/1.8 lens, ensuring ultra-sharp detail, deep tonal richness and a refined fine grain. The image should be rendered in 8K resolution, highlighting the interplay of light and shadow, the texture of the fabric and the subtle nuances of my expression. The final result should convey a cinematic, intimate and emotionally resonant feeling — ideal for art, editorials or expressive monochrome narratives."
      },
      {
        "id": "edito-dark-2",
        "title": "Dark minimaliste 2 – bras croisés",
        "source": "@bruna.iainfluencer (traduit du portugais)",
        "text": "Create an ultra-realistic 8K portrait of me, captured with a full-frame Canon EOS R5 DSLR using an 85mm f/1.8 lens to reveal ultra-sharp details, realistic skin textures and extremely well-defined surfaces. The lighting is natural and cinematic, with realistic depth of field and a 35mm film-inspired aesthetic, creating an intimate and sophisticated atmosphere.\n\nI am positioned with my arms crossed on a textured surface, gently resting my head on my forearms. My face is turned toward the camera, with fixed, intense eyes, conveying a contemplative and slightly melancholic expression. My fingers delicately touch my lips, adding a touch of vulnerability and elegance to the composition.\n\nMy hair is in a messy, stylish bun, with loose strands framing the face and catching the light subtly. The makeup is artistic and refined: satin-finish skin with visible texture, light contouring that enhances the facial features, eyes highlighted with earthy-toned shadows and long, defined lashes. The lips are full, with a creamy finish in a warm nude tone, contrasting with the introspective expression.\n\nI am wearing a dark top in matte fabric, with a discreet collar and minimalist cut, which enhances the dramatic lighting and the focus on the face. The setting is a studio with a dark, blurred background, creating separation between the subject and the scene. The soft, diffused light models the face and arms, revealing micro-details of the skin, the hair and the texture of the surface I am leaning on.\n\nThe portrait should convey a high-end editorial aesthetic, with an emotional atmosphere, hyper-realistic textures, soft shadows and clean highlights. The depth of field is shallow, blurring the background naturally and cinematically, while the focus stays precise on the eyes, lips and skin details. The composition highlights presence, beauty and introspection, with a touch of modern luxury.\nAspect ratio 1080 x 1350 px.",
        "format": "4:5"
      },
      {
        "id": "edito-dark-3",
        "title": "Dark minimaliste 3 – regard par-dessus l'épaule",
        "source": "@bruna.iainfluencer (traduit du portugais)",
        "text": "Create an ultra-realistic 8K portrait, in color. Aspect ratio 1080 x 1350 px.\nI want to capture an image of me from behind, with my body turned away from the camera but my face turned over my shoulder, looking directly into the lens with a serene expression and a penetrating gaze. This pose conveys introspection, lightness and presence, highlighting the facial features in a delicate and captivating way. I am wearing a delicate silk top with thin straps.\nMy hair is loose, elegant and natural, with strands that gently follow the contour of the face, adding texture and movement to the composition. The lighting is natural and cinematic, soft and diffused, coming from a side window, creating subtle shadows that enhance the depth of the eyes, the texture of the skin and the details of the surfaces. The depth of field should be realistic, with the background blurred to keep the focus entirely on me.\nThe setting is minimalist and artistic, with a neutral, soft background, with no distracting visual elements, reinforcing the intimate aesthetic of the portrait. I am wearing a light-fabric top with a natural drape and no prints, which complements the composition with sophistication and simplicity.\nThe makeup is subtle and well executed, focused on enhancing the skin naturally, a light shine on the lips and a soft highlight on the eyes, without exaggeration. The portrait should be captured with a full-frame Canon EOS R5 DSLR, using an 85 mm f/1.8 lens to guarantee ultra-sharp details, extremely precise skin textures and rich surfaces. The image should simulate the aesthetic of a film captured with a 35mm lens, reinforcing the cinematic and emotional style of the composition.",
        "format": "4:5"
      }
    ]
  },
  {
    "id": "pro",
    "name": "Pro & LinkedIn",
    "emoji": "💼",
    "color": "#1e40af",
    "prompts": [
      {
        "id": "pro-ceo",
        "title": "CEO",
        "source": "@leesiefken",
        "text": "Create a premium CEO portrait of the person in the uploaded reference photo. Preserve their exact facial identity, age, skin texture, proportions, and natural asymmetry.\n\nThe subject stands naturally with weight shifted slightly, leaning against a modern architectural feature. One hand is in a pocket while the other remains relaxed. Wardrobe: tailored navy suit and light blue shirt. Expression: confident, approachable, and authoritative. Background: modern office lobby or executive terrace softly out of focus.\n\nLighting: clean natural daylight with realistic shadow transitions. Photographed on a Canon EOS R5 with a 50mm lens. Ultra-realistic commercial photography, visible skin texture, natural hair detail, authentic smile, realistic depth of field, magazine-quality executive portrait. No forced expressions, no facial alterations, no beauty filters, no text, no logos."
      },
      {
        "id": "pro-business",
        "title": "Business (fauteuil)",
        "source": "@leesiefken",
        "text": "Create an ultra-realistic executive portrait of the person in the uploaded reference photo. Preserve their exact facial identity, age, skin texture, proportions, and natural asymmetry.\n\nThe subject sits comfortably in a modern executive chair with relaxed posture. One arm rests naturally on the armrest while the other rests casually on their thigh. Wardrobe: tailored dark suit with light shirt. Background: contemporary office environment softly blurred.\n\nLighting: soft commercial studio lighting with subtle highlights. Photographed using a Phase One medium-format camera with a 40mm lens.\n\nRealistic skin detail, natural eye reflections, authentic fabric texture, premium corporate photography quality. No facial modifications, no beauty filters, no text, no logos."
      },
      {
        "id": "pro-clairobscur",
        "title": "Clair-obscur N&B",
        "source": "@leesiefken",
        "text": "Create an ultra-realistic black and white cinematic portrait of the person in the uploaded reference photo. Preserve their exact facial features, proportions, age, skin texture, and natural asymmetry.\n\nThe subject sits at a three-quarter angle with hands naturally interlocked. Expression is contemplative and intelligent. One side of the face is illuminated by dramatic directional light while the opposite side fades into rich shadow.\n\nWardrobe: black tailored jacket over an open-collar white shirt.\n\nBackground: seamless black studio backdrop. Photographed with an 85mm portrait lens. Crisp eyes, realistic skin texture, fine hair detail, subtle catchlights, authentic shadow transitions, premium magazine photography quality. No plastic skin, no beauty filters, no distorted hands, no extra fingers, no AI artefacts."
      },
      {
        "id": "pro-editorial",
        "title": "Éditorial tabouret",
        "source": "@leesiefken",
        "text": "Create a premium editorial portrait of the person in the uploaded reference photo. Preserve their exact facial features, proportions, skin texture, age, and natural asymmetry. The subject sits on a studio stool, leaning slightly forward with forearms resting naturally on their thighs and hands relaxed. Expression is thoughtful, intelligent, and quietly confident.\n\nWardrobe: minimalist black jacket over a dark crew-neck shirt. Background: soft grey concrete studio backdrop with subtle texture.\n\nLighting: soft directional editorial light with gentle shadow falloff and realistic skin highlights. Photographed on a Sony A7R V, 50mm lens, shallow depth of field. Ultra-realistic commercial photography, visible skin pores, natural hair detail, realistic eyes, no beauty retouching, no filters, no text, no logos, no facial alterations."
      },
      {
        "id": "pro-autorite",
        "title": "Autorité",
        "source": "@leesiefken",
        "text": "Create a sophisticated authority portrait of the person in the uploaded reference photo. Preserve their exact facial features, age, proportions, skin texture, and natural asymmetry.\n\nThe subject stands with relaxed shoulders, straight posture, and hands loosely positioned. Expression is calm, credible, and quietly powerful.\n\nWardrobe: tailored navy suit and light blue shirt. Background: minimalist architectural space with soft depth and muted tones.\n\nLighting: natural overcast daylight with soft contrast. Photographed on a Nikon Z8 with an 85mm lens. Realistic skin texture, visible pores, authentic eye detail, premium executive portrait photography.\nNo fashion exaggeration, no theatrical lighting, no face alterations, no text."
      },
      {
        "id": "pro-cinema",
        "title": "Cinématique veste rouge",
        "source": "@leesiefken",
        "text": "Create a highly cinematic portrait of the person in the uploaded reference photo while preserving their exact facial identity, age, proportions, and skin texture.\n\nThe subject wears a white T-shirt beneath a red jacket and faces the camera with a calm, confident expression.\n\nBackground: dark-to-light cinematic gradient with natural depth and subtle atmosphere.\n\nLighting: soft cinematic key light with realistic shadow shaping and gentle contrast.\n\nPhotographed with an 85mm portrait lens. Photorealistic skin texture, detailed eyes, realistic fabric textures, natural hair detail, premium film-poster quality without looking stylised or AI-generated.\nNo facial alterations, no excessive sharpening, no beauty filters, no artefacts."
      },
      {
        "id": "pro-dirigeant",
        "title": "Dirigeant au bureau",
        "source": "@leesiefken",
        "text": "Create an ultra-realistic executive portrait of the person in the uploaded reference photo. Preserve their exact facial identity, age, skin texture, proportions, and natural asymmetry.\n\nThe subject stands behind a modern desk, leaning slightly forward with both hands resting naturally on the surface. Expression is warm, confident, approachable, and authentic. Wardrobe: tailored business attire. Background: premium modern office, softly blurred. Lighting: soft natural window light with realistic highlights and shadow falloff.\n\nCamera: Canon EOS R5, 85mm lens, f/2.8.\nStyle: Forbes CEO portrait, premium corporate photography, photorealistic skin texture, natural eye reflections, realistic depth of field. Negative prompt: no facial alterations, no beauty filters, no excessive retouching, no body reshaping, no distorted hands, no AI artefacts, no text, no logos, no watermarks."
      },
      {
        "id": "pro-chaleureux",
        "title": "Chaleureux & lumineux",
        "source": "@leesiefken",
        "text": "Create a warm, approachable professional portrait of the person in the uploaded reference photo. Preserve their exact facial features, age, skin texture, body proportions, and natural asymmetry.\n\nThe subject stands comfortably with relaxed shoulders and a slight lean towards the camera. Expression is friendly, genuine, and confident.\n\nWardrobe: light beige blazer with a soft blue shirt. Background: elegant neutral interior with shallow depth of field. Lighting: natural window light with soft highlights and realistic skin tones.\n\nPhotographed on a Canon EOS R5 with an 85mm lens. Visible skin texture, realistic eyes, authentic smile, subtle imperfections, premium corporate photography. No beauty filters, no excessive retouching, no text, no logos, no facial changes."
      }
    ]
  },
  {
    "id": "essentiels",
    "name": "Essentiels (à compléter)",
    "emoji": "🧰",
    "color": "#0f766e",
    "prompts": [
      {
        "id": "ess-dslr",
        "title": "Mode photographe DSLR",
        "source": "@ia.boss.officiel",
        "text": "Transforme ma photo téléchargée en un portrait professionnel façon DSLR. Garde mon visage, ma structure faciale, mon teint, ma coiffure et mon identité reconnaissables et naturels. Place-moi dans [lieu] avec un éclairage réaliste, une texture de peau naturelle, une faible profondeur de champ, une séparation subtile de l'arrière-plan, une perspective d'objectif réaliste, une composition professionnelle et des détails photographiques authentiques.\nFais en sorte que cela ressemble à une vraie photo prise par un photographe professionnel, pas à une image générée par une IA."
      },
      {
        "id": "ess-cinema",
        "title": "Séance photo cinématique",
        "source": "@ia.boss.officiel",
        "text": "Transforme ma photo téléchargée en une séance photo professionnelle et cinématographique. Place-moi dans [scène] avec un éclairage dramatique mais réaliste, des ombres naturelles, une faible profondeur de champ, un flou d'arrière-plan subtil, une composition cinématographique, une texture de peau réaliste, des vêtements détaillés et un étalonnage des couleurs professionnel. Garde mon identité et mes traits du visage cohérents. L'image finale doit ressembler à une véritable photo issue d'une séance photo cinématographique haut de gamme."
      },
      {
        "id": "ess-insta-luxe",
        "title": "Instagram luxe",
        "source": "@ia.boss.officiel",
        "text": "Transforme ma photo téléchargée en une photo lifestyle premium adaptée à un profil Instagram haut de gamme.\nPlace-moi dans [lieu de luxe], portant [tenue], avec un éclairage sophistiqué, des détails environnementaux réalistes, une pose naturelle, une composition professionnelle, une faible profondeur de champ et une texture de peau authentique.\nFais en sorte que cela paraisse cher et éditorial sans que l'image ait l'air artificielle ou trop retouchée."
      },
      {
        "id": "ess-voyage",
        "title": "Influenceur voyage",
        "source": "@ia.boss.officiel",
        "text": "Transforme ma photo téléchargée en une véritable photo de voyage professionnelle et authentique prise à [destination].\nGarde mon visage et mon identité reconnaissables tout en m'intégrant naturellement dans le décor.\nAdapte l'éclairage, les ombres, la perspective, la météo, les vêtements et l'environnement de manière réaliste.\nUtilise une composition typique de la photographie de voyage professionnelle, avec une profondeur de champ réaliste, des couleurs naturelles, des détails soignés et une séparation subtile de l'arrière-plan."
      },
      {
        "id": "ess-magazine",
        "title": "Couverture de magazine",
        "source": "@ia.boss.officiel",
        "text": "Transforme ma photo téléchargée en une photographie éditoriale de mode haut de gamme.\nGarde mon identité reconnaissable et naturelle. Donne-moi une pose sophistiquée, [tenue/style], un éclairage de studio ou éditorial professionnel, une texture de peau réaliste, des ombres soigneusement contrôlées, une composition premium, une faible profondeur de champ et un étalonnage des couleurs élégant mais naturel.\nFais en sorte que cela ressemble à une véritable photo de mode prise par un photographe professionnel pour un grand magazine."
      },
      {
        "id": "ess-restaurer",
        "title": "Restaurer une ancienne photo",
        "source": "@ia.boss.officiel",
        "text": "Restaure et transforme ma photo téléchargée en un portrait moderne et professionnel.\nPréserve mes traits réels, mon identité et mes caractéristiques naturelles tout en améliorant l'éclairage, la composition, la netteté, les détails de la peau, l'exposition, l'arrière-plan et la qualité photographique globale.\nFais en sorte que cela ressemble à une photo originale prise aujourd'hui avec un appareil photo professionnel et un objectif portrait de haute qualité."
      },
      {
        "id": "ess-lieu",
        "title": "Change ton lieu",
        "source": "@ia.boss.officiel",
        "text": "Garde-moi exactement reconnaissable à partir de la photo téléchargée, mais change complètement l'environnement pour [lieu]. Fais en sorte que l'éclairage, les ombres, la perspective, les reflets, l'atmosphère, les vêtements, l'interaction avec le décor et l'arrière-plan correspondent naturellement au nouveau lieu.\nPhotographie-moi comme si j'y étais réellement, avec un appareil photo DSLR professionnel.\nPréserve la texture réaliste de ma peau et mes détails faciaux naturels."
      },
      {
        "id": "ess-headshot",
        "title": "Photo pro (headshot)",
        "source": "@ia.boss.officiel",
        "text": "Transforme ma photo téléchargée en un portrait professionnel adapté pour LinkedIn, un site d'entreprise ou une marque personnelle.\nGarde mon visage, ma structure faciale, mon teint, ma coiffure et mon identité reconnaissables et naturels.\nUtilise un éclairage professionnel et propre, une texture de peau réaliste, une expression naturelle, une séparation subtile de l'arrière-plan, des détails faciaux nets et une composition soignée.\nFais en sorte que cela ressemble à un véritable portrait pris par un photographe professionnel avec un appareil haut de gamme."
      }
    ]
  },
  {
    "id": "artistique",
    "name": "Effets artistiques",
    "emoji": "🌪️",
    "color": "#c2410c",
    "prompts": [
      {
        "id": "art-ame",
        "title": "Énergie de l'âme (fumée & feuilles)",
        "source": "@dhinovwirandhi (traduit de l'indonésien)",
        "text": "Silhouette of a man matching the reference face (height ... cm, weight ... kg), partly dissolving into a dynamic explosion of colorful smoke, autumn leaves and abstract particles. This \"soul energy\" trail follows the colors of his clothing — bright orange, teal and earthy brown — bursting out from his back and legs. A small dark bird silhouette is seen flying away from the smoke trail, emphasizing the theme of freedom.\n\nBackground & Lighting: Minimalist background split into two colors, showing soft blue-grey on the left side and bold deep orange on the right side. Soft, cinematic lighting highlights the fabric texture and the ethereal nature of the smoke.\n\nTechnical Style: Ultra-realistic surrealism, 8K resolution, high-fashion editorial aesthetic. The composition must keep sharp focus on the man's face and clothing, while the trail elements in the back have a fluid, painterly motion blur.\n\nMain Visual Elements: Color palette: striking contrast between warm orange and cool teal. Composition: low camera angle with a dynamic floating pose in mid-air that makes the subject look dominant and free. Theme: high-fashion editorial meets conceptual digital art.\n\nAspect ratio: 9:16.",
        "format": "9:16"
      },
      {
        "id": "art-vortex",
        "title": "Vortex de feu & fumée",
        "source": "@dhinovwirandhi (traduit de l'indonésien)",
        "text": "Ultra-realistic full-body studio portrait of a rugged man (height ... cm, weight ... kg), standing and radiating a powerful aura in front of a clean, stark white background. He wears epic layered clothing: a heavy charcoal-grey trench coat with distressed texture details, paired with a dark knit sweater, a thick wool scarf, a jet-black beanie and brown tactical boots. The character shows a sharp stoic expression. Visual effect: his body silhouette merges dramatically with a dynamic vortex of ethereal orange fire and bluish smoke, rendered in a highly fluid and artistic double-exposure watercolor style. Add striking rim lighting to accentuate the edges of his silhouette and volumetric lighting on the swirl of smoke and fire, make sure the background is truly clean with no extra characters, and produce this masterpiece in super-sharp, cinematic 8K resolution. Aspect ratio 9:16.",
        "format": "9:16"
      },
      {
        "id": "art-moto",
        "title": "Moto vintage à pleine vitesse",
        "source": "@dhinovwirandhi (traduit de l'indonésien)",
        "text": "Cinematic, high-fashion, ultra-realistic low-angle shot of a man with the face from the reference photo (height ... cm, weight ... kg), striking with a sharp and intense gaze, riding a classic (vintage) motorcycle at high speed straight toward the camera. He leans his body forward in an aggressive posture, his hands in jet-black leather gloves gripping the gleaming chrome handlebars. His dark hair is messy, blown by the wind and looks damp, giving a dramatic effect to this high-speed atmosphere. Wardrobe & Style: he wears a sleek, fitted black leather biker jacket, with contrasting silver zippers and stitching. Visual effects: add dramatic rim lighting to separate the subject from the background, volumetric late-afternoon sunlight rays, motion blur on the background to emphasize speed, and render in photorealistic 8K resolution with high sharpness. Aspect ratio 9:16.",
        "format": "9:16"
      },
      {
        "id": "art-soleil",
        "title": "Soleil orange post-apo",
        "source": "@dhinovwirandhi (traduit de l'indonésien)",
        "text": "Ultra-realistic high-fashion editorial full-body portrait of a man matching the reference photo (height ... cm, weight ... kg), walking with full dominance and confidence straight toward the camera. He wears layered oversized post-apocalyptic streetwear, featuring an elegantly textured teal trench coat, a thick intricately patterned scarf, cargo trousers and tough military boots with bright orange laces. His look is sharpened by futuristic black sunglasses with blue lenses. Behind him looms a huge, solid, bright orange round sun as the main backdrop. Visual effects: apply dramatic rim lighting to highlight his body silhouette against the sun, epic volumetric lighting, high-level cinematic color contrast (between teal and orange), and render in super-detailed 8K resolution with a clean composition without background characters (no background characters). Aspect ratio 9:16.",
        "format": "9:16"
      }
    ]
  },
  {
    "id": "concepts",
    "name": "Concepts créatifs",
    "emoji": "💡",
    "color": "#4338ca",
    "prompts": [
      {
        "id": "conc-appli",
        "title": "Sortir d'une appli",
        "source": "@smarts.ai",
        "text": "Using my uploaded photo as the exact face reference, create a surreal fashion editorial, 4:5. I sit on stone steps against a petrol-blue facade, emerging from a giant floating frosted-glass phone interface. My legs, shoes and one arm extend outside the preview into the foreground with realistic shadows. Original interface, abstract icons, no real app UI. Cool daylight, electric-blue glow, 45mm lens, realistic skin, photorealistic. No logos.",
        "format": "4:5"
      },
      {
        "id": "conc-puzzle",
        "title": "Puzzle de vérification",
        "source": "@smarts.ai",
        "text": "Using my uploaded photo as the exact face reference, create a conceptual street-fashion ad, 4:5. I stand in an iridescent silver jacket in front of a pale concrete wall, partly covered by a huge floating white verification puzzle with a violet header and a 3x3 photo grid. Parts of my body show through tiles and some pieces break outside the card. Original wording and design. 40mm lens, photorealistic. No logos.",
        "format": "4:5"
      },
      {
        "id": "conc-scan",
        "title": "Cadre de scan en ville",
        "source": "@smarts.ai",
        "text": "Using my uploaded photo as the exact face reference, create a cinematic city scene, 4:5. I stand still on a wet crosswalk at dusk while blurred commuters pass. A cyan scanning frame outlines my body with small crop windows for my bag, shoes and face, plus labels PERSON_01, MOOD: CALM, OUTFIT: TECHWEAR. Cyan and magenta reflections on wet asphalt, 35mm lens, photorealistic. No logos.",
        "format": "4:5"
      },
      {
        "id": "conc-nuancier",
        "title": "Nuancier de couleurs",
        "source": "@smarts.ai",
        "text": "Using my uploaded photo as the exact face reference, create a fashion campaign photo, 4:5. I stand beside a stone planter in a sunlit plaza sipping iced coffee from a plain clear cup, while three tall floating paint-chip cards labeled Moss Green, Charcoal and Lime Zest hover beside me. Soft overcast light, rich greens, 40mm lens, realistic skin, photorealistic. No logos.",
        "format": "4:5"
      },
      {
        "id": "conc-immobile",
        "title": "Immobile dans la foule",
        "source": "@smarts.ai",
        "text": "Using my uploaded photo as the exact face reference, create a cinematic street portrait, 4:5. I stand perfectly still and sharp in the middle of a busy avenue, calm gaze at the camera, while foreground and background passersby are heavily motion-blurred. Teal traffic lights, overcast light, shallow depth of field, 50mm lens, realistic skin, photorealistic. No text, no logos.",
        "format": "4:5"
      }
    ]
  },
  {
    "id": "feminin",
    "name": "Portraits féminins",
    "emoji": "💃",
    "color": "#9d174d",
    "prompts": [
      {
        "id": "fem-dos-nb",
        "title": "Dos nu, noir & gris",
        "source": "@prompts_photo (traduit du russe)",
        "text": "Preserve appearance 100%. Do not change facial features or proportions. Black-and-grey, heavily darkened photo, grainy, with film texture. A woman in profile, head tilted back, eyes closed, calm and sensual facial expression. Hair full and voluminous, styled in a luxurious blowout. A hand rests elegantly on the neck. The back is bare, only the upper part visible. Light falls from the front, emphasizing the profile and the texture of the hair. Deep shadows, high contrast, dramatic mood. Minimalist background, light grey but heavily darkened. Flawless makeup: full lips outlined with pencil, with a light gloss, long fluffy lashes, sharp winged eyeliner, accentuated cheekbones. Long square nails. Cinematic style, hyperrealism, high resolution."
      },
      {
        "id": "fem-passage",
        "title": "Robe blanche, passage piéton",
        "source": "@prompts_photo (traduit du russe)",
        "text": "Preserve appearance 100%. Do not change facial features or proportions. A woman with straight, smooth hair, the ends curled inward, a couple of strands falling on the face. With one hand she adjusts her hair, which flutters slightly from the movement. Makeup with winged liner and cat-eye lashes, glossy lips, radiant face. She wears a white fitted mini dress. In motion, the woman walks across the pedestrian crossing of a busy megacity street. The dress emphasizes the figure. In the background, cars stopped at a traffic light. The woman casually turns toward the camera, paparazzi effect. Daylight, dark frame, high contrast. Playful look into the camera. Candid phone shot with digital noise, 50 mm."
      },
      {
        "id": "fem-satin",
        "title": "Robe satin, canapé beige",
        "source": "@prompts_photo (traduit du russe)",
        "text": "Preserve appearance 1:1. The photo is the only reference. Do not change facial features or proportions. A woman sits in a relaxed, elegant pose on a light beige sofa. She wears a cream satin slip dress with thin straps and a side slit, legs crossed, right over left. Voluminous wavy hair falls loosely on the shoulders. Lightly tanned skin, long lashes, light gloss on the lips. The right hand rests on the back of the sofa, the left touches the neck and hair. A large ring on the finger, a thin bracelet on the wrist, an anklet on the ankle. Light beige square manicure. Background: thick brown curtains and dark brown cushions. Cool beige-brown palette. Emphasis on the sheen of the fabric and the silhouette, soft shadows, glamorous atmosphere. Bright hard flash. Shot from slightly above, close-up portrait."
      },
      {
        "id": "fem-plage-nb",
        "title": "Plage en noir & blanc",
        "source": "@prompts_photo (traduit du russe)",
        "text": "Preserve appearance 100%: do not change facial features or proportions. Black-and-white photograph shot on an iPhone camera: a woman stands on the seashore with her back to the camera, looking over her shoulder, one arm lowered along the body, the other softly bent. In the background, a calm sea and a wide, beautiful cloudy sky, low horizon. She wears a fitted black midi slip dress with thin straps, minimalist. Hairstyle: romantic cascade — hair loose, styled in voluminous layers with soft waves creating movement and lightness; strands falling naturally, without stiff hold. Makeup: matte lipstick. Thin-framed sunglasses slightly lowered on the nose."
      }
    ]
  }
];
