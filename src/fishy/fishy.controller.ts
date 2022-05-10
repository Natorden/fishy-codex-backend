import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FishyService } from '../domain/fishy.service';
import { CreateFishyDto } from './dto/create-fishy.dto';
import { UpdateFishyDto } from './dto/update-fishy.dto';

@Controller('fishy')
export class FishyController {
  constructor(private readonly fishyService: FishyService) {}

  @Post()
  create(@Body() createFishyDto: CreateFishyDto) {
    return this.fishyService.create(createFishyDto);
  }

  @Get()
  findAll() {
    return this.fishyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fishyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFishyDto: UpdateFishyDto) {
    return this.fishyService.update(+id, updateFishyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fishyService.remove(+id);
  }
}
