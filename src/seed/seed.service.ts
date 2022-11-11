import { Injectable } from '@nestjs/common';
import { BRANDS_SEED } from './data/brands.seed';
import { CARS_SEED } from './data/cars.seed';
import { CarsService } from './../cars/cars.service';
import { BrandsService } from './../brands/brands.service';

@Injectable()
export class SeedService {

  constructor(
    private readonly carService: CarsService,
    private readonly brandService: BrandsService
  ) {}

  populateDB() {

    //CARS_SEED
    this.carService.fillCarsWithSeedData( CARS_SEED );
    this.brandService.fillBrandsWithSeedData( BRANDS_SEED );

    return 'SEED executed succesfully';
  }
}
