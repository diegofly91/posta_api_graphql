import { EntityRepository,Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';

import { Location } from './location.entity';
import { LocationInput, NewLocationInput } from './locationDto/location.Input';

@EntityRepository()
class RepoLocation {
    public constructor(
        @InjectRepository(Location) public readonly _locationRepository: Repository<Location>
    ) {}

    async getLocation(companyId: number): Promise<Location> {
        return await this._locationRepository.findOne({companyId});
    }

    async createLocation(input: NewLocationInput): Promise<boolean> {
        const saved: Location = await this._locationRepository.save(input);
        if (saved) {
            return true;
        } else {
            throw new NotFoundException();
        }
    }

    async updateLocation(id: number, input: LocationInput): Promise<boolean> {
        console.log(id);
        console.log(input);
        const update = await this._locationRepository.update({id}, input);
        if (!update.affected) {
            throw new NotFoundException();
        } 
         return true;
    }

    async deleteLocation(id: number): Promise<boolean> {
        const dele = await this._locationRepository.delete({id});
        if (!dele.affected) {
            throw new NotFoundException();
        } 
        return true;
    }
    
}

export default RepoLocation;
