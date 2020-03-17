import React from 'react';
import { useField } from 'formik';

interface InputProps {
    label: string,
    id: string,
    name: string,
    type: string
}

interface InputWithChildrenProps extends InputProps {
    children: React.ReactNode
}

export const TextInput = ({ label, ...props }: InputProps) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and also replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    const { id, name } = props;
    return (
        <>
            <label htmlFor={id || name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};

interface TextAreaProps extends InputProps {
    rows: number,
    cols: number
}

export const TextArea = ({
    label, rows, cols, ...props
}: TextAreaProps) => {
    const [field, meta] = useField(props);
    const { id, name } = props;
    return (
        <>
            <label htmlFor={id || name}>{label}</label>
            <textarea className="text-input" rows={rows} cols={cols} {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};

export const Checkbox = ({ children, ...props }:InputWithChildrenProps) => {
    // We need to tell useField what type of input this is
    // since React treats radios and checkboxes differently
    // than inputs/select/textarea.
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    const { id, name } = props;
    return (
        <>
            <label htmlFor={id || name} className="checkbox">
                <input type="checkbox" {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};

export const Radio = ({ label, ...props }:InputProps) => {
    // We need to tell useField what type of input this is
    // since React treats radios and checkboxes differently
    // than inputs/select/textarea.
    const [field, meta] = useField({ ...props, type: 'radio' });
    const { id, name } = props;
    return (
        <>
            <input type="radio" {...field} {...props} />
            <label htmlFor={id || name} className="radio">{label}</label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};

export const Select = ({ children, ...props }:InputWithChildrenProps) => {
    const [field, meta] = useField(props);
    const { id, name, label } = props;
    return (
        <>
            <label htmlFor={id || name}>{label}</label>
            <select className="checkbox" {...field} {...props}>
                {children}
            </select>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};
