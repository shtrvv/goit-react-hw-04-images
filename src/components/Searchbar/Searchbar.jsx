import { useState } from "react"

const Searchbar = ({getSearch}) => {
    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        getSearch(value);

        setValue('');
    }

    return (
        <header className="searchbar">
            <form className="form" onSubmit={handleSubmit}>
                <button type="submit" className="button">
                    Search
                </button>
                <input
                    onChange={handleChange}
                    value={value}
                    className="input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </form>
        </header>
    )
}

export default Searchbar

