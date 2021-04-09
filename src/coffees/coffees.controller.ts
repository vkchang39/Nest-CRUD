import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee-dto';
import { UpdateCoffeeDto } from './dto/update-coffee-dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesServise: CoffeesService) {}

  @Get()
  findAll(@Query() queryPagination) {
    //const { limit, offser } = queryPagination;
    return this.coffeesServise.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeesServise.findOne(id);
  }

  @Post()
  create(@Body() body: CreateCoffeeDto) {
    return this.coffeesServise.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateCoffeeDto) {
    return this.coffeesServise.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.coffeesServise.delete(id);
  }
}
