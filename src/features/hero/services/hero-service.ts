import BaseService from '../../../app/services/base-service';
import { IOptionsResult } from '../models/options-model';

export class HeroService extends BaseService {
  async getOptions() {
    const result = await this.get<IOptionsResult>('/options');

    return result;
  }
}
