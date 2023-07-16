import { Injectable } from '@nestjs/common';
import {randomInt} from "crypto";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


@Injectable()
export class AppService {
  BigArrayProcess(size : number): number {

    const start = performance.now();

    let benchmarkArray = new Array<number>();

    for (let i = 0; i < size; i++) {
      benchmarkArray.push(randomInt(1000))
    }

    const end = performance.now();

    return end - start;
  }

  async BigDbFetch(): Promise<number> {

    const start = performance.now();

    const cars = await prisma.car.findMany()

    const end = performance.now();

    return end - start;
  }
}
