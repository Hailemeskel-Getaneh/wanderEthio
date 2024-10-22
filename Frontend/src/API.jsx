


const tourData = [
  { id: 1, name: 'Gondar', description: 'Historic castles and churches', price: 5000, image: Gondar1 },
  { id: 2, name: 'Semen Mountains', description: 'Breathtaking landscapes and wildlife', price: 8000, image: Semen },
  { id: 3, name: 'Lalibela', description: 'Rock-hewn churches', price: 6000, image: Lalibela },
  { id: 4, name: 'Omo Valley', description: 'Diverse tribes and cultures', price: 7000, image: Omo },
  { id: 5, name: 'Axum', description: 'Ancient obelisks and ruins', price: 5500, image: AxumImage },
  { id: 6, name: 'Bahirdar', description: 'Lake Tana and Blue Nile Falls', price: 4500, image: BahirdarImage },
  { id: 7, name: 'Harar', description: 'Walled city and hyena feeding', price: 5000, image: HararImage },
  { id: 8, name: 'Tigray', description: 'Rock churches and stunning landscapes', price: 7500, image: TigrayImage },
  { id: 9, name: 'Danakil Depression', description: 'Hottest place on earth', price: 10000, image: DanakilDepressionImage },
  { id: 10, name: 'Ogaden', description: 'Rich history and culture', price: 6500, image: OgadenImage },
  { id: 11, name: 'Awash National Park', description: 'Waterfalls and wildlife', price: 6000, image: AwashImage },
  { id: 12, name: 'Bale Mountains', description: 'Stunning highland scenery', price: 8500, image: BaleImage },
  { id: 13, name: 'Rift Valley', description: 'Lakes and hot springs', price: 7000, image: RiftImage },
  { id: 14, name: 'Lake Afdera', description: 'Salt lake and desert scenery', price: 9000, image: AfderaImage },
  { id: 15, name: 'Blue Nile Falls', description: 'Spectacular waterfalls', price: 5000, image: BlueNileImage },
  { id: 16, name: 'Debre Damo', description: 'Clifftop monastery', price: 7500, image: DebreDamoImage },
  { id: 17, name: 'Uarho', description: 'Remote and beautiful', price: 8000, image: UarhoImage },
  { id: 18, name: 'Medhane Alem', description: 'Large Ethiopian Orthodox church', price: 4000, image: MedhaneAlemImage },
  { id: 19, name: 'Debre Libanos', description: 'Historic monastery and bridge', price: 5500, image: DebreLibanosImage }
];
  

  export const fetchTours = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(toursData);
      }, 1000); 
    });
  };
  

  export const checkAvailability = (tourId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {

        const availableDates = ['2022-07-01', '2022-07-15', '2022-08-01'];
        resolve(availableDates);
      }, 1000); 
    });
  };
  

  export const makeBooking = (tourId, bookingData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
   
        const bookingId = '123456';
        resolve(bookingId);
      }, 1000); 
    });
  };
  

  const ethiopianDestinationsData = [
    { id: 1, name: 'Simien Mountains National Park', description: 'Stunning mountain scenery and unique wildlife', location: 'Amhara Region' },
    { id: 2, name: 'Lalibela', description: 'Famous for its rock-hewn churches and ancient history', location: 'Amhara Region' },
    { id: 3, name: 'Axum', description: 'Home to ancient obelisks and the Ark of the Covenant', location: 'Tigray Region' },
    { id: 4, name: 'Gondar', description: 'Known for its medieval castles and palaces', location: 'Amhara Region' },
    { id: 5, name: 'Bahir Dar and Lake Tana', description: 'Explore the largest lake in Ethiopia and its ancient monasteries', location: 'Amhara Region' },
    { id: 6, name: 'Danakil Depression', description: 'Surreal landscape of colorful salt flats and volcanic craters', location: 'Afar Region' },
    { id: 7, name: 'Harar', description: 'City of Saints with ancient walls and vibrant markets', location: 'Harari Region' },
    { id: 8, name: 'Omo Valley', description: 'Culturally diverse region with indigenous tribes and traditional lifestyles', location: 'Southern Nations, Nationalities, and Peoples\' Region' },
    { id: 9, name: 'Tigray Churches', description: 'Ancient churches carved into cliffs and mountainsides', location: 'Tigray Region' },
    { id: 10, name: 'Bale Mountains National Park', description: 'Haven for wildlife and diverse ecosystems', location: 'Oromia Region' },
    { id: 11, name: 'Awash National Park', description: 'Diverse wildlife and scenic landscapes', location: 'Afar Region' },
    { id: 12, name: 'Rift Valley Lakes', description: 'Stunning lakes and birdwatching opportunities', location: 'Various Regions' },
    { id: 13, name: 'Sof Omar Caves', description: 'Extensive underground network of limestone caves', location: 'Oromia Region' },
    { id: 14, name: 'Gheralta Mountains', description: 'Dramatic landscapes and ancient rock-hewn churches', location: 'Tigray Region' },
    { id: 15, name: 'Debre Libanos Monastery', description: 'Revered religious site with ancient churches and hermit caves', location: 'Oromia Region' },
    // Add more destinations as needed
  ];
  
 
  export const fetchEthiopianDestinations = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(ethiopianDestinationsData);
      }, 1000); 
    });
  };
  