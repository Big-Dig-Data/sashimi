function parseConfig(config) {
  // config is a string with parts separated by ; with key=value pairs
  let out = {};
  let parts = config.split(";");
  for (let part of parts) {
    let subparts = part.split(":");
    if (subparts.length === 2) {
      out[subparts[0].trim()] = subparts[1].trim();
    }
  }
  return out;
}

export { parseConfig };
