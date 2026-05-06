# 1. Why is any labeled a "type safety hole," and why is unknown the safer choice for handling unpredictable data? Explain the concept of type narrowing.

#### Ans:

Any is called a type safety hole because it disable TypeScript's type checking. You can do anything with it, even unsafe operations and TypeScript won't complain. On the other hand, unknown is safer because you must check (narrow) its type before using it.

Type Narrowing means reducing a board type like unknown or union types into a more specific type using checks under bellow:-

- typeof
- instanceof
- custom guards
