export type CreateCars = {
  model: string;
  make: string;
  year: number;
  body_type: string;
  speed: number;
};

export type GetCars = {
  id: number;
  make: string;
  model: string;
  year: number;
  body_type: string;
  top_speed_kmh: number;
  price_kes: number;
  available_colors: string[];
  image_url: string;
};
