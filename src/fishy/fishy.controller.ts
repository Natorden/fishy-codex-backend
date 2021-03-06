import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { FishyService } from '../domain/fishy.service';
import { CreateFishyDto } from './dto/create-fishy.dto';
import { UpdateFishyDto } from './dto/update-fishy.dto';

@Controller('fishy')
export class FishyController {
  constructor(
    @Inject('FishyService') private readonly fishyService: FishyService,
  ) {}

  @Post()
  create(@Body() createFishyDto: CreateFishyDto) {
    console.log(createFishyDto);
    return this.fishyService
      .create(
        createFishyDto.catchName,
        createFishyDto.species,
        createFishyDto.length,
        createFishyDto.weight,
        createFishyDto.image,
        createFishyDto.userUuid,
      )
      .catch((err) => console.log(err.message));
  }

  @Get()
  findAll() {
    return this.fishyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fishyService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFishyDto: UpdateFishyDto) {
    return this.fishyService.update(id, updateFishyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fishyService.remove(id);
  }
}
