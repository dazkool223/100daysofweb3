# Solidity

## require()

require makes it so that the function will throw an error and stop executing if some condition is not true.

## Inheritance

Solidity that makes this more manageable is contract inheritance. Solidity uses `is` keyword.\
Example :

```
contract Animal {
  function send() public returns (string memory) {
    return "This is an animal";
  }
}

contract Cat is Animal {
  function anotherSend() public returns (string memory) {
    return "This is Cat";
  }
}
```

if you compile and deploy contract `Cat`, it will have access to both send() and anotherSend() (and any other public functions we may define on Animal).

### Importing a contract

```
import "./someothercontract.sol";

contract newContract is SomeOtherContract {

}
```

## Storage vs Memory

In Solidity, there are two locations you can store variables — in storage and in memory.

Storage refers to variables stored permanently on the blockchain. Memory variables are temporary, and are erased between external function calls to your contract. Think of it like your computer's hard disk vs RAM.

Most of the time you don't need to use these keywords because Solidity handles them by default. State variables (variables declared outside of functions) are by default storage and written permanently to the blockchain, while variables declared inside functions are memory and will disappear when the function call ends.

## Functional Visibility

In addition to `public` and `private`, Solidity has two more types of visibility for functions: `internal` and `external`.

- `internal` is the same as `private`, except that it's also accessible to contracts that inherit from the parent contract.

- `external` is similar to `public`, except that these functions can **ONLY** be called outside the contract — they can't be called by other functions inside that contract.

## Interacting with Other Contracts

For our contract to talk to another contract on the blockchain that we don't own, first we need to define an interface.

Let's look at a simple example. Say there was a contract on the blockchain that looked like this:

```
contract LuckyNumber {
  mapping(address => uint) numbers;

  function setNum(uint _num) public {
    numbers[msg.sender] = _num;
  }

  function getNum(address _myAddress) public view returns (uint) {
    return numbers[_myAddress];
  }
}
```

This would be a simple contract where anyone could store their lucky number, and it will be associated with their Ethereum address. Then anyone else could look up that person's lucky number using their address.

Now let's say we had an external contract that wanted to read the data in this contract using the getNum function.

First we'd have to define an interface of the `LuckyNumber` contract:

```
contract NumberInterface {
  function getNum(address _myAddress) public view returns (uint);
}
```

Notice that this looks like defining a contract, with a few differences. For one, we're only declaring the functions we want to interact with — in this case getNum — and we don't mention any of the other functions or state variables.

Secondly, we're not defining the function bodies. Instead of curly braces ({ ... }), we're simply ending the function declaration with a semi-colon (;).

So it kind of looks like a _contract skeleton_. This is how the compiler knows it's an interface.

By including this interface in our dapp's code our contract knows what the other contract's functions look like, how to call them, and what sort of response to expect.

## Side notes

1. Solidity doesn't have native string comparison, so we compare their keccak256 hashes to see if the strings are equal
