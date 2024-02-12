function prefixMaker(prefijo) {
  return function palabra(palabra) {
    console.log(`${prefijo}${palabra}`);
  };
}

const prefijoRe = prefixMaker("re");
prefijoRe("bueno");
// -> rebueno
