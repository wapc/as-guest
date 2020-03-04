import {
  register,
  handleCall,
  hostCall,
} from "../wapc";

register("hello", function(payload: ArrayBuffer): ArrayBuffer {
  hostCall("sample", "hello", String.UTF8.encode("Simon"))
  return String.UTF8.encode("Hello")
})

// This must be present in the entry file.
export function __guest_call(operation_size: usize, payload_size: usize): bool {
  return handleCall(operation_size, payload_size);
}