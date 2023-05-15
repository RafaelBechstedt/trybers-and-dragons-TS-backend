import Race from './Races';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  static raceCount = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.raceCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
  
  static createdRacesInstances(): number {
    return this.raceCount;
  }
}