function generateMileage(min = 1000, max = 150000) {
  const minRounded = Math.ceil(min / 100);
  const maxRounded = Math.floor(max / 100);
  return (
    (Math.floor(Math.random() * (maxRounded - minRounded + 1)) + minRounded) *
    100
  );
}

function generateCondition() {
  const options = ["Certified", "Used", "New"];

  return options[Math.floor(Math.random() * options.length)];
}

function generateFuel() {
  const fuel = ["Gasoline", "Electric", "Hybrid", "Diesel"];

  return fuel[Math.floor(Math.random() * fuel.length)];
}

function generateTransmission() {
  const transmission = ["Automatic", "Manual"];

  return transmission[Math.floor(Math.random() * transmission.length)];
}

export const carImages: {
  Img: string;
  id: number;
  name: string;
  mileage: number;
  condition: string;
  fuel: string;
  transmission: string;
}[] = [
  {
    id: 1,
    Img: "/car-images/Honda.jpg",
    name: "Honda",
    mileage: generateMileage(),
    condition: generateCondition(),
    fuel: generateFuel(),
    transmission: generateTransmission(),
  },
  {
    id: 2,
    Img: "/car-images/Kia.jpg",
    name: "Kia",
    mileage: generateMileage(),
    condition: generateCondition(),
    fuel: generateFuel(),
    transmission: generateTransmission(),
  },
  {
    id: 3,
    Img: "/car-images/Toyota.jpg",
    name: "Toyota",
    mileage: generateMileage(),
    condition: generateCondition(),
    fuel: generateFuel(),
    transmission: generateTransmission(),
  },
  {
    id: 4,
    Img: "/car-images/Hyundai.jpg",
    name: "Hyundai",
    mileage: generateMileage(),
    condition: generateCondition(),
    fuel: generateFuel(),
    transmission: generateTransmission(),
  },
  {
    id: 5,
    Img: "/car-images/Mini.jpg",
    name: "Mini",
    mileage: generateMileage(),
    condition: generateCondition(),
    fuel: generateFuel(),
    transmission: generateTransmission(),
  },
  {
    id: 6,
    Img: "/car-images/Volkswagen.jpg",
    name: "Volkswagen",
    mileage: generateMileage(),
    condition: generateCondition(),
    fuel: generateFuel(),
    transmission: generateTransmission(),
  },
  {
    id: 7,
    Img: "/car-images/Mercedes.jpg",
    name: "Mercedes Benz",
    mileage: generateMileage(),
    condition: generateCondition(),
    fuel: generateFuel(),
    transmission: generateTransmission(),
  },
  {
    id: 8,
    Img: "/car-images/RR.jpg",
    name: "Rolls Royce",
    mileage: generateMileage(),
    condition: generateCondition(),
    fuel: generateFuel(),
    transmission: generateTransmission(),
  },
  {
    id: 9,
    Img: "/car-images/Bugatti.jpg",
    name: "Bugatti",
    mileage: generateMileage(),
    condition: generateCondition(),
    fuel: generateFuel(),
    transmission: generateTransmission(),
  },
  {
    id: 10,
    Img: "/car-images/Lamborghini.jpg",
    name: "Lamborghini",
    mileage: generateMileage(),
    condition: generateCondition(),
    fuel: generateFuel(),
    transmission: generateTransmission(),
  },
  {
    id: 11,
    Img: "/car-images/Tesla.jpg",
    name: "Tesla",
    mileage: generateMileage(),
    condition: generateCondition(),
    fuel: generateFuel(),
    transmission: generateTransmission(),
  },
  {
    id: 12,
    Img: "/car-images/Chrysler.jpg",
    name: "Chrysler",
    mileage: generateMileage(),
    condition: generateCondition(),
    fuel: generateFuel(),
    transmission: generateTransmission(),
  },
  {
    id: 13,
    Img: "/car-images/LandRover.jpg",
    name: "Land Rover",
    mileage: generateMileage(),
    condition: generateCondition(),
    fuel: generateFuel(),
    transmission: generateTransmission(),
  },
  {
    id: 14,
    Img: "/car-images/Nissan.jpg",
    name: "Nissan",
    mileage: generateMileage(),
    condition: generateCondition(),
    fuel: generateFuel(),
    transmission: generateTransmission(),
  },
  {
    id: 15,
    Img: "/car-images/Fiat.jpg",
    name: "Fiat",
    mileage: generateMileage(),
    condition: generateCondition(),
    fuel: generateFuel(),
    transmission: generateTransmission(),
  },
  {
    id: 16,
    Img: "/car-images/Polestar.jpg",
    name: "Polestar",
    mileage: generateMileage(),
    condition: generateCondition(),
    fuel: generateFuel(),
    transmission: generateTransmission(),
  },
  {
    id: 17,
    Img: "/car-images/Maserati.jpg",
    name: "Maserati",
    mileage: generateMileage(),
    condition: generateCondition(),
    fuel: generateFuel(),
    transmission: generateTransmission(),
  },
  {
    id: 18,
    Img: "/car-images/Aston.jpg",
    name: "Aston Martin",
    mileage: generateMileage(),
    condition: generateCondition(),
    fuel: generateFuel(),
    transmission: generateTransmission(),
  },
  {
    id: 19,
    Img: "/car-images/Bmw.jpg",
    name: "BMW",
    mileage: generateMileage(),
    condition: generateCondition(),
    fuel: generateFuel(),
    transmission: generateTransmission(),
  },
  {
    id: 20,
    Img: "/car-images/Dodge.jpg",
    name: "Dodge",
    mileage: generateMileage(),
    condition: generateCondition(),
    fuel: generateFuel(),
    transmission: generateTransmission(),
  },
  {
    id: 21,
    Img: "/car-images/Ferrari.jpg",
    name: "Ferrari",
    mileage: generateMileage(),
    condition: generateCondition(),
    fuel: generateFuel(),
    transmission: generateTransmission(),
  },
  {
    id: 22,
    Img: "/car-images/Audi.jpg",
    name: "Audi",
    mileage: generateMileage(),
    condition: generateCondition(),
    fuel: generateFuel(),
    transmission: generateTransmission(),
  },
  {
    id: 23,
    Img: "/car-images/Cadillac.jpg",
    name: "Cadillac",
    mileage: generateMileage(),
    condition: generateCondition(),
    fuel: generateFuel(),
    transmission: generateTransmission(),
  },
  {
    id: 24,
    Img: "/car-images/Volvo.jpg",
    name: "Volvo",
    mileage: generateMileage(),
    condition: generateCondition(),
    fuel: generateFuel(),
    transmission: generateTransmission(),
  },
  {
    id: 25,
    Img: "/car-images/Bentley.jpg",
    name: "Bentley",
    mileage: generateMileage(),
    condition: generateCondition(),
    fuel: generateFuel(),
    transmission: generateTransmission(),
  },
  {
    id: 26,
    Img: "/car-images/Ford.jpg",
    name: "Ford",
    mileage: generateMileage(),
    condition: generateCondition(),
    fuel: generateFuel(),
    transmission: generateTransmission(),
  },
  {
    id: 27,
    Img: "/car-images/Jaguar.jpg",
    name: "Jaguar",
    mileage: generateMileage(),
    condition: generateCondition(),
    fuel: generateFuel(),
    transmission: generateTransmission(),
  },
  {
    id: 28,
    Img: "/car-images/Jeep.jpg",
    name: "Jeep",
    mileage: generateMileage(),
    condition: generateCondition(),
    fuel: generateFuel(),
    transmission: generateTransmission(),
  },
  {
    id: 29,
    Img: "/car-images/Porsche.jpg",
    name: "Porsche",
    mileage: generateMileage(),
    condition: generateCondition(),
    fuel: generateFuel(),
    transmission: generateTransmission(),
  },
  {
    id: 30,
    Img: "/car-images/Smart.jpg",
    name: "Smart",
    mileage: generateMileage(),
    condition: generateCondition(),
    fuel: generateFuel(),
    transmission: generateTransmission(),
  },
  {
    id: 31,
    Img: "/car-images/Chevrolet.jpg",
    name: "Chevrolet",
    mileage: generateMileage(),
    condition: generateCondition(),
    fuel: generateFuel(),
    transmission: generateTransmission(),
  },
  {
    id: 32,
    Img: "/car-images/Mazda.jpg",
    name: "Mazda",
    mileage: generateMileage(),
    condition: generateCondition(),
    fuel: generateFuel(),
    transmission: generateTransmission(),
  },
];
