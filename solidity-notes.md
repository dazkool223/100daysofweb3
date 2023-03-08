# Solidity

## Variables

`State` variables are permanently stored in contract storage. This means they're written to the Ethereum blockchain. Think of them like writing to a DB.

## Default Data types in Solidity

In Solidity docs they are called initial values:

`boolean`: false

`string`: ""

`int`: 0

`uint`: 0

`fixed`: 0.0 (presumably; this type is not fully supported)

`enum`: the first element of the enum

`address`: 0x0000000000000000000000000000000000000000 (or address(0))

function

- `internal`: empty function, returning initial values (if return is needed)
- `external`: function that throws when called

Reference Types

`mapping`: empty mapping

`struct`: a struct where all members are set to initial values

array

`dynamically-sized`: []
`fixed-sized`: an array of the fixed size where all elements are set to initial values
When you use the delete keyword it will assign the initial value to the variable, except for mappings, where it doesn't have any effect. For structs the delete keyword will recurse into the members, unless they are mappings.

## Storage vs Memory

In Solidity, there are two locations you can store variables — in `storage` and in `memory`.

Storage refers to variables stored permanently on the blockchain. Memory variables are temporary, and are erased between external function calls to your contract. Think of it like your computer's hard disk vs RAM.

Most of the time you don't need to use these keywords because Solidity handles them by default. State variables (variables declared outside of functions) are by default storage and written permanently to the blockchain, while variables declared inside functions are memory and will disappear when the function call ends.

## Structs

Sometimes you need a more complex data type. For this, Solidity provides structs:

```
struct Person {
  uint age;
  string name;
}
```

## Arrays

When you want a collection of something, you can use an array. There are two types of arrays in Solidity: `fixed` arrays and `dynamic` arrays:

```// Array with a fixed length of 2 elements:
uint[2] fixedArray;
// another fixed Array, can contain 5 strings:
string[5] stringArray;
// a dynamic Array - has no fixed size, can keep growing:
uint[] dynamicArray;
```

You can also create an array of structs. Using the previous chapter's Person struct:

```
Person[] people; // dynamic Array, we can keep adding to it
```

You can declare an array as `public`, and Solidity will automatically create a getter method for it.

## Function Declaration

```

function eatHamburgers(string memory _name, uint _amount) public {
  // function body...
}
eatHamburgers("vitalik", 100);
```

## Functional Visibility

In addition to `public` and `private`, Solidity has two more types of visibility for functions: `internal` and `external`.

- `internal` is the same as `private`, except that it's also accessible to contracts that inherit from the parent contract.

- `external` is similar to `public`, except that these functions can **ONLY** be called outside the contract — they can't be called by other functions inside that contract.

## Function modifiers

- `require()` makes it so that the function will throw an error and stop executing if some condition is not true.

A function modifier looks just like a function, but uses the keyword `modifier` instead of the keyword `function`. And it can't be called directly like a function can — instead we can attach the modifier's name at the end of a function definition to change that function's behavior.

Example :

```
modifier onlyOwner() {
  require(....);
  _;
}

function sample() onlyOwner{
// function body...
}

```

the `onlyOwner` modifier on the specific function. When you call that function, the code inside `onlyOwner` executes first. Then when it hits the `_;` statement in `onlyOwner`, it goes back and executes the code inside the called function.

So while there are other ways you can use modifiers, one of the most common use-cases is to add a quick require check before a function executes.

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

## Interacting with Other Contracts

For our contract to talk to another contract on the blockchain that we don't own, first we need to define an interface.

Let's look at a simple example. Say there was a contract on the blockchain that looked like this:

```

contract LuckyNumber {
mapping(address => uint) numbers;

function setNum(uint \_num) public {
numbers[msg.sender] = \_num;
}

function getNum(address \_myAddress) public view returns (uint) {
return numbers[_myAddress];
}
}

```

This would be a simple contract where anyone could store their lucky number, and it will be associated with their Ethereum address. Then anyone else could look up that person's lucky number using their address.

Now let's say we had an external contract that wanted to read the data in this contract using the getNum function.

First we'd have to define an interface of the `LuckyNumber` contract:

```

contract NumberInterface {
function getNum(address \_myAddress) public view returns (uint);
}

```

Notice that this looks like defining a contract, with a few differences. For one, we're only declaring the functions we want to interact with — in this case getNum — and we don't mention any of the other functions or state variables.

Secondly, we're not defining the function bodies. Instead of curly braces ({ ... }), we're simply ending the function declaration with a semi-colon (;).

So it kind of looks like a _contract skeleton_. This is how the compiler knows it's an interface.

By including this interface in our dapp's code our contract knows what the other contract's functions look like, how to call them, and what sort of response to expect.

## Gas

In Solidity, your users have to pay every time they execute a function on your DApp using a currency called `gas`. Users buy gas with Ether (the currency on Ethereum), so your users have to spend ETH in order to execute functions on your DApp.

How much gas is required to execute a function depends on how complex that function's logic is. Each individual operation has a gas cost based roughly on how much computing resources will be required to perform that operation (e.g. writing to storage is much more expensive than adding two integers). The total gas cost of your function is the sum of the gas costs of all its individual operations.

Because running functions costs real money for your users, code optimization is much more important in Ethereum than in other programming languages. If your code is sloppy, your users are going to have to pay a premium to execute your functions — and this could add up to millions of dollars in unnecessary fees across thousands of users.

### Why is gas necessary?

Ethereum is like a big, slow, but extremely secure computer. When you execute a function, every single node on the network needs to run that same function to verify its output — thousands of nodes verifying every function execution is what makes Ethereum decentralized, and its data immutable and censorship-resistant.

The creators of Ethereum wanted to make sure someone couldn't clog up the network with an infinite loop, or hog all the network resources with really intensive computations. So they made it so transactions aren't free, and users have to pay for computation time as well as storage.

### Struct packing to save gas

You'll also want to cluster identical data types together (i.e. put them next to each other in the struct) so that Solidity can minimize the required storage space. For example, a struct with fields `uint` c; `uint32` a; `uint32` b; will cost less gas than a struct with fields `uint32` a; `uint` c; `uint32` b; because the `uint32` fields are clustered together.

```
struct NormalStruct {
  uint a;
  uint b;
  uint c;
}

struct MiniMe {
  uint32 a;
  uint32 b;
  uint c;
}

// `mini` will cost less gas than `normal` because of struct packing
NormalStruct normal = NormalStruct(10, 20, 30);
MiniMe mini = MiniMe(10, 20, 30);
```

## Declaring arrays in memory

You can use the memory keyword with arrays to create a new array inside a function without needing to write anything to storage. The array will only exist until the end of the function call, and this is a lot cheaper gas-wise than updating an array in storage — free if it's a `view` function called externally.

Here's how to declare an array in memory :

```
function getArray() external pure returns(uint[] memory) {
  // Instantiate a new array in memory with a length of 3
  uint[] memory values = new uint[](3);

  // Put some values to it
  values[0] = 1;
  values[1] = 2;
  values[2] = 3;

  return values;
}
```

## Side notes

1. Solidity doesn't have native string comparison, so we compare their keccak256 hashes to see if the strings are equal

```

```
