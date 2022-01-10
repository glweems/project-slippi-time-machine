import cliProgress from 'cli-progress';

const bar = new cliProgress.SingleBar({}, cliProgress.Presets.rect);
bar.start(10, 1);
let val = 0;
bar.update(val);
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(i => {
  setTimeout(() => {
    val += 1;
  }, 1000);
});
// []
// bar.emit();
// console.log(2);

// const main = async () => {
//   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(i => {});
//   bar.stop();
// };
// main();
