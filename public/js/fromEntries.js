// 檢查是否需要 Polyfill
if (!Object.fromEntries) {
  // 如果該方法不存在，則定義它
  Object.fromEntries = function(entries) {
    if (!entries || !entries[Symbol.iterator]) {
      throw new Error('Object.fromEntries requires an iterable argument');
    }

    const obj = {};

    for (const [key, value] of entries) {
      obj[key] = value;
    }

    return obj;
  };
}