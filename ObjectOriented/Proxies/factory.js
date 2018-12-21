function makeTransmitterClass(Superclass = Object) {
  return class Transmitter extends Superclass {
    transmit() {}
  };
}

function makeReceiverClass(Superclass = Object) {
  return class Receiver extends Superclass
    receive() {}
  };
}

class InheritsFromMultiple extends makeTransmitterClass(makeReceiverClass()) {}

const inheritsFromMultiple = new InheritsFromMultiple();

inheritsFromMultiple.transmit(); // works
inheritsFromMultiple.receive(); // works
