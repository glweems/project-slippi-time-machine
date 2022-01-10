import { characters } from '@slippi/slippi-js';
import fs from 'fs';
import { gameDetailsFromSLPDir } from './storeGame';

(async function main() {
  try {
    // const dirDetails = await gameDetailsFromSLPDir('slp/');
    const chars = characters.getAllCharacters();
    console.log(chars);
    // await fs.writeFileSync('prisma/games.json', JSON.stringify(dirDetails, null, 2));
  } catch (e) {
    console.error(e);
  }
})();

/* const prisma = new PrismaClient();
async function main() {
  // Connect the client
  await prisma.$connect();
}
const add = async (slp: string) => {
  const games: GameData[] = [];
  try {
    // Get the files as an array
    const files = await fs.promises.readdir(slp);
    files.forEach(async (file) => {
      const game = new SlippiGame(path.join(slp, file));
      const details = generateGameData(file, game);
      games.push(details);
    });
    // Loop them all with the new for...of
  } catch (e) {
    // Catch anything bad that happens
    console.error("We've thrown! Whoops!", e);
  }
  return games;
};
add('slp').then((games) => {
  fs.writeFileSync('games.json', JSON.stringify(games));
});
main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
 */
