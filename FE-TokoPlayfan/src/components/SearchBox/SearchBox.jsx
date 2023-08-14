import './SearchBox.css';

const SearchBox = ({ placeholder, onChangeHandler }) => (
    <div className='flex items-center justify-end sm:justify-center pl-[40%] sm:pl-0'>
        <input
            className="text-[12px] sm:text-lg py-1 px-0 sm:gap-4 w-[100%] sm:w-[80%] text-center sm:px-2 sm:py-2 rounded-xl"
            type='search'
            placeholder={placeholder}
            onChange={onChangeHandler}
        />
    </div>
);

export default SearchBox;
