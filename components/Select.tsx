import {
  HTMLAttributes,
  MouseEvent,
  MouseEventHandler,
  PropsWithChildren,
  Ref,
  createContext,
  useContext,
  useState,
} from 'react'

type SelectContextValue = {
  value: string
  onChangeValue: (value: string) => void
  open: boolean
  onChangeOpen: (value: boolean) => void
}

const SelectContext = createContext<SelectContextValue>({
  value: '',
  onChangeValue: () => {
    //
  },
  open: false,
  onChangeOpen: () => {
    //
  },
})
const useSelectContext = () => useContext(SelectContext)

type SelectProps = PropsWithChildren<
  HTMLAttributes<HTMLDivElement> & {
    defaultValue: string
    defaultOpen: boolean
  }
>

const Select = (
  { children, defaultValue, defaultOpen, ...props }: SelectProps,
  forwaredRef: Ref<HTMLDivElement & SelectContextValue>
) => {
  const [value, setValue] = useState(defaultValue)
  const [open, setOpen] = useState(defaultOpen)

  return (
    <SelectContext.Provider
      value={{
        value,
        onChangeValue: (value: string) => setValue(value),
        open,
        onChangeOpen: (value: boolean) => setOpen(value),
      }}
    >
      <div ref={forwaredRef} {...props}>
        {children}
      </div>
    </SelectContext.Provider>
  )
}

type TriggerProps = PropsWithChildren<
  HTMLAttributes<HTMLDivElement> & {
    // ...
  }
>

const Trigger = ({ children, ...props }: TriggerProps) => {
  return <div {...props}>{children}</div>
}

type OptionListProps = PropsWithChildren<
  HTMLAttributes<HTMLDivElement> & {
    // ...
  }
>

const OptionList = ({ children, ...props }: OptionListProps) => {
  const { open } = useSelectContext()

  if (open === false) return null

  return <div {...props}>{children}</div>
}

type OptionProps = PropsWithChildren<
  HTMLAttributes<HTMLDivElement> & {
    onClick: (e: MouseEvent<HTMLDivElement, MouseEvent>) => void
  }
>

const Option = ({ children, onClick, ...props }: OptionProps) => {
  const { value, onChangeValue } = useSelectContext()

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    onClick?.(e)
  }

  return (
    <div onClick={handleClick} {...props}>
      {children}
    </div>
  )
}

// Select.Trigger = Trigger
// Select.OptionList = OptionList
// Select.Option = Option

export default Select
