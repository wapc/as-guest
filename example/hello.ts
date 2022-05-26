import {
  register,
  handleCall,
  hostCall,
  handleAbort,
  Result,
} from "../assembly";

register("hello", function (payload: ArrayBuffer): Result {
  hostCall("myBinding", "sample", "hello", String.UTF8.encode("Simon"));
  return Result.ok(String.UTF8.encode("Hello"));
});

// This must be present in the entry file. Do not remove.

export function __guest_call(operation_size: usize, payload_size: usize): bool {
  return handleCall(operation_size, payload_size);
}

function abort(message: string | null, fileName: string | null, lineNumber: u32, columnNumber: u32): void {
  handleAbort(message, fileName, lineNumber, columnNumber)
}
