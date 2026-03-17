$(() => {
  let count = 0;
  $('#btn').dxButton({
    text: `Click count: ${count}`,
    onClick(e) {
      count += 1;
      e.component.option('text', `Click count: ${count}`);
    },
  });
});
