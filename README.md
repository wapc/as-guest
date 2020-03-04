# waPC Guest Library for AssemblyScript

This is the [AssemblyScript](https://assemblyscript.org/) implementation of the **waPC** standard for WebAssembly guest modules. It allows any waPC-compliant WebAssembly host to invoke to procedures inside a TinyGo compiled guest and similarly for the guest to invoke procedures exposed by the host.

## Example
The following is a simple example of synchronous, bi-directional procedure calls between a WebAssembly host runtime and the guest module.

```typescript
import {
  register,
  handleCall,
  hostCall,
} from "../wapc";

register("hello", function(payload: ArrayBuffer): ArrayBuffer {
  hostCall("sample", "hello", String.UTF8.encode("Simon"))
  return String.UTF8.encode("Hello")
})

export function __guest_call(operation_size: usize, payload_size: usize): bool {
  return handleCall(operation_size, payload_size);
}
```

```sh
asc example/hello.ts -b example/hello.wasm --use abort=wapc/abort --validate --optimize
```