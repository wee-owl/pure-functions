export default function lifeIndication(hero) {
  let lifeLevel = '';
  if (hero.health > 50) {
    lifeLevel = 'healthy';
  } else if (hero.health < 15) {
    lifeLevel = 'critical';
  } else {
    lifeLevel = 'wounded';
  }
  return lifeLevel;
}
