function testURL(url) {
  const pattern = /^https?:\/\/(\w+\.)+\w{2,4}(\/\S*)?/i;
  return pattern.test(url);
}

export { testURL };
