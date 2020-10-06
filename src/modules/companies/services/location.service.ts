import { Injectable } from '@nestjs/common';
import { Location } from '../entities/location.entity';
import { NewLocationInput, LocationInput} from '../dtos/location.Input';
import RepoLocation  from '../repositories/location.repository';
@Injectable()
export class LocationService {
    constructor(private readonly repo: RepoLocation) {}

    async getLocation(companyId: number): Promise<Location> {
        return await this.repo.getLocation(companyId);
    }

    async createLocation(input: NewLocationInput): Promise<boolean> {
        return await this.repo.createLocation(input);
    }

    async updateLocation(id: number, input: LocationInput): Promise<boolean> {
        return await this.repo.updateLocation(id,input);
    }

    async deleteLocation(id: number): Promise<boolean> {
        return await this.repo.deleteLocation(id);
    }

}
