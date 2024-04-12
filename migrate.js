import { Currencies, Users } from './models/index.js';

async function main() {
  // eslint-disable-next-line no-restricted-syntax
  for (const Model of [
    Currencies, Users,
  ]) {
    console.log(Model);
    await Model.sync({ alter: true });
  }

  process.exit(0);
}

main().catch(console.error);
