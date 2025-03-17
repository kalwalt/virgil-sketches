(module
  (type (;0;) (func (param i32) (result i32)))
  (type (;1;) (func))
  (type (;2;) (func (param i32)))
  (type (;3;) (func (param i32 i32) (result i32)))
  (import "MyImports" "print" (func (;0;) (type 0)))
  (func (;1;) (type 1)
    return)
  (func (;2;) (type 2) (param i32)
    local.get 0
    i32.const 33
    i32.add
    call 0
    drop
    return)
  (func (;3;) (type 3) (param i32 i32) (result i32)
    local.get 1
    call 0)
  (table (;0;) 2 2 funcref)
  (memory (;0;) 1 1)
  (export "main" (func 1))
  (export "memory" (memory 0))
  (export "printPlus33" (func 2))
  (elem (;0;) (i32.const 1) func 3)
  (data (;0;) (i32.const 8) ""))
