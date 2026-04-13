import React, {
  type InputHTMLAttributes,
  type TextareaHTMLAttributes,
} from 'react'

type BaseProps = {
  label: string
  id?: string
}

// Discriminant union to type either an input or a textarea properly.
type InputFieldProps = BaseProps &
  (
    | ({ as?: 'input' } & InputHTMLAttributes<HTMLInputElement>)
    | ({ as: 'textarea' } & TextareaHTMLAttributes<HTMLTextAreaElement>)
  )

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  as = 'input',
  className = '',
  ...props
}) => {
  // Use id if provided, otherwise fallback to label to create a valid html pointer
  const inputId = id || label.replace(/\s+/g, '-').toLowerCase()

  const elementClasses = `w-full bg-surface-container-low border border-outline/20 rounded-md text-sm font-mono py-2 px-3 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all ${
    as === 'textarea' ? 'resize-none' : ''
  } ${className}`

  return (
    <div className="space-y-2">
      <label
        htmlFor={inputId}
        className="text-on-surface-variant block font-mono text-[11px] tracking-widest uppercase"
      >
        {label}
      </label>

      {as === 'textarea' ? (
        <textarea
          id={inputId}
          className={elementClasses}
          {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={inputId}
          className={elementClasses}
          {...(props as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
    </div>
  )
}

export default InputField
