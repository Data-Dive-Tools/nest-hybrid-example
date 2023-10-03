import { AccumluationService } from './accumulation.service';

describe(AccumluationService, () => {
  it('accumulate', () => {
    const service = new AccumluationService();
    expect(service.accumulate('3,5')).toBe(8);
  });
});
