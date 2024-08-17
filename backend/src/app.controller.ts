import { Controller, Get, Query } from '@nestjs/common';
import { AppService, TableRow } from './app.service';

const NUM_OF_ITEMS_ON_PAGE = 10;

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('table')
  getTable(@Query('page') page) {
    const isFirstPage = !Number.parseInt(page);
    const data = this.appService.getTablePage(
      isFirstPage ? 0 : Number.parseInt(page),
      NUM_OF_ITEMS_ON_PAGE + 1,
    );
    return {
      data: data
        .slice(0, NUM_OF_ITEMS_ON_PAGE)
        .map((v) => ({
          articleid: v.articleid,
          subarticleid: v.subarticleid,
          articlename: v.articlename,
          external_str_id: v.external_str_id,
          ecrlongname: v.ecrlongname,
        })),
      next: data.length > NUM_OF_ITEMS_ON_PAGE,
      previous: !isFirstPage,
    };
  }
}
