import { Passenger } from './entities/passenger.entity';
import { Repository } from 'typeorm';

export class PassengerService {
  private passengerRepository: Repository<Passenger>;

  constructor(passengerRepository: Repository<Passenger>) {
    this.passengerRepository = passengerRepository;
  }

  async findAllPassengers(): Promise<Passenger[]> {
    return this.passengerRepository.find({
      where: {
        isActivate: true,
      },
    });
  }

  async createPassenger(passenger: any): Promise<Passenger[]> {
    const passengerCreated = this.passengerRepository.create(passenger);
    return this.passengerRepository.save(passengerCreated);
  }

  async findOnePassenger(id: string): Promise<Passenger | null> {
    return this.passengerRepository.findOne({
      where: {
        passengerId: id,
        isActivate: true,
      },
    });
  }

  async updatePassenger(passenger: Passenger, data: any): Promise<Passenger> {
    passenger.email = data.email;
    passenger.celphone = data.celphone;
    return this.passengerRepository.save(passenger);
  }

  async deletePassenger(passenger: Passenger): Promise<Passenger> {
    passenger.isActivate = false;
    return this.passengerRepository.save(passenger);
  }
}
