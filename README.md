## A custom hook for react: useRipple

### Demo (Codepen)

https://codepen.io/ferdotnet/pen/gOKKxNr

### Install

```yarn add @ferdotnet/use-ripple```

### How to use it?

```
import React from 'react';
import useRipple from '@ferdotnet/use-ripple';

export default () => {
    const ref = useRef(null);
    useRipple(ref);

    return <button ref={ref}>Click me</button>;
};
```

#### Also import the styles:

```@import '~@ferdotnet/use-ripple/styles';``` 

or check the codepen link for custom styles.
