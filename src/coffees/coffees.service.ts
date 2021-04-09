import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'coffee waala',
      brand: 'brown coffees',
      flavour: ['capichuno', 'mocha'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    return this.coffees.find((item) => item.id === +id);
  }
  create(createCoffee: any) {
    return this.coffees.push(createCoffee);
  }

  update(id: string, updateCoffee: any) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      //Update the data
    }
  }

  delete(id: string) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
