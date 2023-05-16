import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  private _energyType: EnergyType = 'mana';
  static archetypeCount = 0;
  constructor(name: string) {
    super(name);
    Mage.archetypeCount += 1;
  }
  
  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances() {
    return this.archetypeCount;
  }
}