import { count as initialCount } from "./data.js";

$(() => {
  let count = initialCount;
  $('#btn').dxButton({
    text: `Click count: ${count}`,
    onClick(e) {
      count += 1;
      e.component.option('text', `Click count: ${count}`);
    },
  });
});
