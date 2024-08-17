import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as csvParse from 'csv-parse/sync';

@Injectable()
export class AppService {
  getTablePage(page: number, page_size: number) {
    const items = page * page_size;
    const fileContent = fs.readFileSync('./src/assets/article_def_v_orig.csv');
    const rows = csvParse.parse(fileContent, {
      bom: true,
      columns: true,
      from: items + 1,
      to: items + page_size,
      cast: true,
    });
    return rows as TableRow[];
  }

  getHello(): string {
    return 'Hello World!';
  }
}

export interface TableRow {
  articleid: number;
  subarticleid: number;
  articlename: string;
  external_str_id: number;
  ecrlongname: string;
  ecrsectionid: number;
  sectionname: string;
  articlebarcode: number;
  unitname: string;
  sectiontype: string;
  rest: string;
  flgbase: string;
  subarticlebarcode: number;
  flg_disable: string;
  flg_disable_name: string;
  preparemoment_name: string;
  baseprice: number;
  ecological_class: number;
  articletype: string;
  article_type_name: string;
  tax_system: string;
  tag_1212: string;
  tag_1162: string;
  tag_1162_name: string;
  subarticle_marking: string;
  subarticle_marking_name: string;
  has_any_bc_marking: string;
  has_mrc: number;
  isloto: number;
  class_path: number;
  strpath: string;
}
