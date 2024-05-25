import { Injectable } from '@nestjs/common';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { Test } from '@nestjs/testing';

@Injectable()
export class TestService {
  private tests: Test[] = [];

  create(createTestDto: CreateTestDto) {
    this.tests.push(createTestDto);
    return createTestDto;
  }

  findAll() {
    return `This action returns all test`;
  }

  findOne(id: number) {
    return this.tests[id];
  }

  update(id: number, updateTestDto: UpdateTestDto) {
    return `This action updates a #${id} test`;
  }

  remove(id: number) {
    return `This action removes a #${id} test`;
  }
}
