const ObjectUtils = {
  deepFreeze(target) {
    if (
      target 
      && typeof target === 'object' 
      && !Object.isFrozen(target)
    ) {
      Object.freeze(target);
      Object.keys(target).forEach(key => this.deepFreeze(target[key]));
    }
    return target;
  },
}

module.exports = ObjectUtils;
