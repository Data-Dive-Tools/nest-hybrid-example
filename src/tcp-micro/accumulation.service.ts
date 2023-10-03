import { Injectable } from '@nestjs/common';

@Injectable()
export class AccumluationService {
  public accumulate(query: string) {
    const elements = query.split(',');
    return elements.reduce((acc, num) => acc + Number(num), 0);
  }
}
