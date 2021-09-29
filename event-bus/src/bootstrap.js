class eventBus {
  constructor() {
    this.store = {};
  }
  dispatch(input) {
    return (this.store = {
      ...this.store,
      input,
    });
  }

  subscribe() {
      console.log(this.store);
      return this.store
  }
}

const evBus = new eventBus();

export { evBus };

