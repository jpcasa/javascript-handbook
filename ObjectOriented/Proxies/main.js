const transmitter = {
  transmit() {}
};

const receiver = {
  receive() {}
};

// Create a proxy object that intercepts property accesses and forwards to each parent,
// returning the first defined value it finds
const inheritsFromMultiple = new Proxy([transmitter, receiver], {
  get: function(proxyTarget, propertyKey) {
    const foundParent = proxyTarget.find(parent => parent[propertyKey] !== undefined);
    return foundParent && foundParent[propertyKey];
  }
});

inheritsFromMultiple.transmit(); // works
inheritsFromMultiple.receive(); // works
