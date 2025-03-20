(module
  (type (;0;) (func (param i32) (result i32)))
  (type (;1;) (func (param i32)))
  (type (;2;) (func))
  (type (;3;) (func (param i32 i32)))
  (type (;4;) (func (param i32 i32 i32)))
  (type (;5;) (func (param i32 i32) (result i32)))
  (import "PrimeChecker" "isPrime" (func (;0;) (type 0)))
  (import "console" "log" (func (;1;) (type 1)))
  (func (;2;) (type 2)
    i32.const 1
    i32.const 100
    call 3
    return)
  (func (;3;) (type 3) (param i32 i32)
    (local i32)
    local.get 0
    local.set 2
    loop  ;; label = @1
      local.get 2
      local.get 1
      i32.le_s
      if  ;; label = @2
        local.get 2
        call 0
        if  ;; label = @3
          local.get 2
          call 1
        else
          br 0 (;@3;)
        end
        local.get 2
        i32.const 2
        i32.add
        local.set 2
        br 1 (;@1;)
      else
        return
      end
    end)
  (func (;4;) (type 4) (param i32 i32 i32)
    local.get 1
    local.get 2
    call 3)
  (func (;5;) (type 5) (param i32 i32) (result i32)
    local.get 1
    call 0)
  (func (;6;) (type 3) (param i32 i32)
    local.get 1
    call 1)
  (table (;0;) 4 4 funcref)
  (memory (;0;) 1 1)
  (export "main" (func 2))
  (export "memory" (memory 0))
  (export "FindPrimes" (func 3))
  (elem (;0;) (i32.const 1) func 4 5 6)
  (data (;0;) (i32.const 8) ""))
