import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  private _energyType: EnergyType = 'stamina';
  static archetypeCount = 0;
  constructor(name: string) {
    super(name);
    Ranger.archetypeCount += 1;
  }
  
  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances() {
    return this.archetypeCount;
  }
}