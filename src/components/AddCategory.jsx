import { useState } from "react"

export const AddCategory = (props) => {
    const [inputValue, setInputValue] = useState('');
    const {onSetCategories} = props;

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;

        // setCategories( c => [inputValue, ...c]);
        onSetCategories( inputValue.trim() );
        setInputValue('');
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input type="text"
                placeholder="Buscar gif"
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            />
        </form>
    )
}