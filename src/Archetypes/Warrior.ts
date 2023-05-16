import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  private _energyType: EnergyType = 'stamina';
  static archetypeCount = 0;
  constructor(name: string) {
    super(name);
    Warrior.archetypeCount += 1;
  }
  
  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances() {
    return this.archetypeCount;
  }
}