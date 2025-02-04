import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          welcomeTitle: 'Welcome to Japan!',
          welcomeText: 'Experience the perfect blend of ancient traditions and cutting-edge modernity in Japan. Explore iconic landmarks, from the historic temples of Kyoto to the bustling streets of Tokyo. Discover breathtaking natural landscapes, savor world-renowned cuisine, and immerse yourself in the rich cultural heritage of this fascinating country. Whether you are seeking adventure, relaxation, or cultural enrichment, Japan offers an unforgettable journey for every traveler.',
          learnMore: 'Learn more',
          exploreJapan: 'Explore Japan',
          attractions: 'Must see attractions',
          fushimiInari: 'Fushimi Inari Taisha',
          kinkakuji: 'Kinkaku-ji',
          imperialPalace: 'Imperial Palace',
          mountFuji: 'Mount Fuji',
          shibuyaCrossing: 'Shibuya Crossing',
          likeAttraction: 'Like this attraction',
          unlikeAttraction: 'Unlike this attraction',whereToStay: 'Where to stay',
      hotelGranviaTokyo: 'Hotel Granvia Tokyo',
      hotelGraceryShinjuku: 'Hotel Gracery Shinjuku',
      parkHyattTokyo: 'Park Hyatt Tokyo',
      shibuyaExcelHotelTokyu: 'Shibuya Excel Hotel Tokyu',
      parkHotelTokyo: 'Park Hotel Tokyo',
      likeHotel: 'Like this hotel',
      unlikeHotel: 'Unlike this hotel',
      hotelGranviaKyotoAlt: 'Hotel Granvia Kyoto',
      hotelGranviaKyoto: 'Hotel Granvia Kyoto',
      pricePerNight: 'CA ${{price}} per night',
      includesTaxesAndFees: 'includes taxes and fees',
      greatDeal: 'Great Deal!',
      fiveStarRating: '5 star rating',
      hotelDescription: 'Set in the contemporary Kyoto Station complex, this sprawling, high-end hotel features interiors filled with modern art. It\'s 2 km from To-ji Buddhist temple and 4 km Nijo-jo Castle.',
      checkIn: 'Check In',
      checkOut: 'Check Out',
      reserveNowPayLater: 'Reserve now, pay later',
      freeWifi: 'Free WiFi',
      oneQueenBed: '1 Queen Bed',
      sleepsTwo: 'Sleeps 2',
      roomSize: '18 sq m',
      roomOptions: 'Room Options',
      breakfastBuffet: 'Breakfast buffet + CAD ${{price}}',
      noExtras: 'No extras + CAD $0',
      fullyRefundable: 'Fully refundable before {{date}}',
      noPrepayment: 'No prepayment needed',
      travellers: 'Travellers',
      oneTraveller: '1 traveller',
      twoTravellers: '2 travellers',
      threeTravellers: '3 travellers',
      fourTravellers: '4 travellers',
      fiveTravellers: '5 travellers',
      sixPlusTravellers: '6+ travellers',
      bookingConfirmed: 'Your booking has been confirmed.',
      close: 'Close',
      onlyTwoLeft: 'Only 2 left',
      bookNow: 'Book Now',
      travelerReviews: 'Traveler reviews',
      starRating: '{{stars}} star rating',
      leaveReview: 'Want to share your experiences? Leave a Review!',
      name: 'Name',
      review: 'Review',
      rating: 'Rating',
      submitReview: 'Submit Review',
      whereToStay: 'Where to stay',
      hotelGranviaTokyo: 'Hotel Granvia Tokyo',
      hotelGraceryShinjuku: 'Hotel Gracery Shinjuku',
      parkHyattTokyo: 'Park Hyatt Tokyo',
      shibuyaExcelHotelTokyu: 'Shibuya Excel Hotel Tokyu',
      parkHotelTokyo: 'Park Hotel Tokyo',
      likeHotel: 'Like this hotel',
      unlikeHotel: 'Unlike this hotel',
      hotelGranviaKyotoAlt: 'Hotel Granvia Kyoto',
      hotelGranviaKyoto: 'Hotel Granvia Kyoto',
      pricePerNight: 'CA ${{price}} per night',
      includesTaxesAndFees: 'includes taxes and fees',
      greatDeal: 'Great Deal!',
      fiveStarRating: '5 star rating',
      hotelDescription: 'Set in the contemporary Kyoto Station complex, this sprawling, high-end hotel features interiors filled with modern art. It\'s 2 km from To-ji Buddhist temple and 4 km Nijo-jo Castle.',
      checkIn: 'Check In',
      checkOut: 'Check Out',
      reserveNowPayLater: 'Reserve now, pay later',
      freeWifi: 'Free WiFi',
      oneQueenBed: '1 Queen Bed',
      sleepsTwo: 'Sleeps 2',
      roomSize: '18 sq m',
      roomOptions: 'Room Options',
      breakfastBuffet: 'Breakfast buffet + CAD ${{price}}',
      noExtras: 'No extras + CAD $0',
      fullyRefundable: 'Fully refundable before {{date}}',
      noPrepayment: 'No prepayment needed',
      travellers: 'Travellers',
      oneTraveller: '1 traveller',
      twoTravellers: '2 travellers',
      threeTravellers: '3 travellers',
      fourTravellers: '4 travellers',
      fiveTravellers: '5 travellers',
      sixPlusTravellers: '6+ travellers',
      bookingConfirmed: 'Your booking has been confirmed.',
      close: 'Close',
      onlyTwoLeft: 'Only 2 left',
      bookNow: 'Book Now',
      travelerReviews: 'Traveler reviews',
      starRating: '{{stars}} star rating',
      leaveReview: 'Want to share your experiences? Leave a Review!',
      name: 'Name',
      review: 'Review',
      rating: 'Rating',
      submitReview: 'Submit Review',
      travelWithUs: 'Travel With Us',
      trustedPartner: 'Your trusted travel partner.',
      explore: 'Explore',
      destinations: 'Destinations',
      packages: 'Packages',
      blog: 'Blog',
      help: 'Help',
      faq: 'FAQ',
      contactUs: 'Contact Us',
      supportCenter: 'Support Center',
      about: 'About',
      ourStory: 'Our Story',
      team: 'Team',
      careers: 'Careers'
    }
  },
  fr: {
    translation: {
      welcomeTitle: 'Bienvenue au Japon!',
      welcomeText: 'Découvrez le mélange parfait de traditions anciennes et de modernité d\'avant-garde au Japon. Explorez des monuments emblématiques, des temples historiques de Kyoto aux rues animées de Tokyo. Découvrez des paysages naturels à couper le souffle, savourez une cuisine de renommée mondiale et plongez dans le riche patrimoine culturel de ce pays fascinant. Que vous recherchiez l\'aventure, la détente ou l\'enrichissement culturel, le Japon offre un voyage inoubliable à chaque voyageur.',
      learnMore: 'En savoir plus',
      exploreJapan: 'Explorer le Japon',
      attractions: 'Attractions incontournables',
      fushimiInari: 'Fushimi Inari Taisha',
      kinkakuji: 'Kinkaku-ji',
      imperialPalace: 'Palais Impérial',
      mountFuji: 'Mont Fuji',
      shibuyaCrossing: 'Carrefour de Shibuya',
      likeAttraction: 'Aimer cette attraction',
      unlikeAttraction: 'Ne plus aimer cette attraction',
      whereToStay: 'Où rester',
      hotelGranviaTokyo: 'Hôtel Granvia Tokyo',
      hotelGraceryShinjuku: 'Hôtel Gracery Shinjuku',
      parkHyattTokyo: 'Park Hyatt Tokyo',
      shibuyaExcelHotelTokyu: 'Shibuya Excel Hotel Tokyu',
      parkHotelTokyo: 'Park Hotel Tokyo',
      likeHotel: 'Aimer cet hôtel',
      unlikeHotel: 'Ne plus aimer cet hôtel',
      hotelGranviaKyotoAlt: 'Hôtel Granvia Kyoto',
      hotelGranviaKyoto: 'Hôtel Granvia Kyoto',
      pricePerNight: 'CA ${{price}} par nuit',
      includesTaxesAndFees: 'taxes et frais inclus',
      greatDeal: 'Bonne affaire !',
      fiveStarRating: 'Note 5 étoiles',
      hotelDescription: 'Situé dans le complexe contemporain de la gare de Kyoto, cet hôtel haut de gamme propose des intérieurs remplis d\'art moderne. Il est à 2 km du temple bouddhiste To-ji et à 4 km du château de Nijo-jo.',
      checkIn: 'Arrivée',
      checkOut: 'Départ',
      reserveNowPayLater: 'Réservez maintenant, payez plus tard',
      freeWifi: 'WiFi gratuit',
      oneQueenBed: '1 lit Queen',
      sleepsTwo: 'Pour 2 personnes',
      roomSize: '18 m²',
      roomOptions: 'Options de chambre',
      breakfastBuffet: 'Petit-déjeuner buffet + CAD ${{price}}',
      noExtras: 'Pas d\'extras + CAD $0',
      fullyRefundable: 'Entièrement remboursable avant le {{date}}',
      noPrepayment: 'Pas de prépaiement nécessaire',
      travellers: 'Voyageurs',
      oneTraveller: '1 voyageur',
      twoTravellers: '2 voyageurs',
      threeTravellers: '3 voyageurs',
      fourTravellers: '4 voyageurs',
      fiveTravellers: '5 voyageurs',
      sixPlusTravellers: '6+ voyageurs',
      bookingConfirmed: 'Votre réservation a été confirmée.',
      close: 'Fermer',
      onlyTwoLeft: 'Plus que 2 disponibles',
      bookNow: 'Réserver maintenant',
      travelerReviews: 'Avis des voyageurs',
      starRating: 'Note {{stars}} étoiles',
      leaveReview: 'Vous voulez partager votre expérience ? Laissez un avis !',
      name: 'Nom',
      review: 'Avis',
      rating: 'Note',
      submitReview: 'Soumettre l\'avis',
      travelWithUs: 'Voyagez avec nous',
      trustedPartner: 'Votre partenaire de voyage de confiance.',
      explore: 'Explorer',
      destinations: 'Destinations',
      packages: 'Forfaits',
      blog: 'Blog',
      help: 'Aide',
      faq: 'FAQ',
      contactUs: 'Contactez-nous',
      supportCenter: 'Centre d\'assistance',
      about: 'À propos',
      ourStory: 'Notre histoire',
      team: 'Équipe',
      careers: 'Carrières'
    }
  }
},
    lng: 'en', // Set default language to English
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;