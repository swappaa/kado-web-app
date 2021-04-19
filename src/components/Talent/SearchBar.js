import React from 'react';

const SearchBar = props => {
    return (
        <div className="input-group flex-nowrap">
            <input type="text"
                className="form-control form-control-lg px-4 py-3 br-radius fs-6 border-end-0"
                placeholder="SEARCH" aria-label="SEARCH" aria-describedby="basic-addon2"
                onChange={(event) => {
                    props.setSearchTerm(event.target.value.replace(/^.*?(?=[-_\+\^#%&$\*:<';`>\!@?/\{\|\}\[\]\\\)\(]).*$/g, ''))
                }}
                onFocus={() => {
                    props.setSearchFocus(true)
                }}
                onBlur={() => {
                    props.setSearchFocus(false)
                }}
            />
            {props.searchTalent ? <span className="input-group-text bg-white del-search border-start-0 border-end-0">
                <button className="btn" href="#" onClick={(event) => {
                    props.setSearchTerm('')
                }}>
                    <svg width="13px" height="11px" viewBox="0 0 22 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <g id="#0a09094d">
                            <path fill="#0a0909" opacity="0.30" d=" M 0.00 0.00 L 2.20 0.00 C 5.18 2.59 7.97 5.38 11.00 7.90 C 14.03 5.38 16.82 2.61 19.75 0.00 L 22.00 0.00 L 22.00 1.86 C 19.24 4.71 16.13 7.19 13.33 10.00 C 16.13 12.80 19.21 15.30 22.00 18.10 L 22.00 20.00 L 19.79 20.00 C 16.82 17.41 14.03 14.62 11.00 12.10 C 7.97 14.62 5.18 17.39 2.24 20.00 L 0.00 20.00 L 0.00 18.00 C 2.85 15.30 5.89 12.78 8.67 10.00 C 5.89 7.22 2.87 4.70 0.00 2.02 L 0.00 0.00 Z" />
                        </g>
                    </svg>
                </button>
            </span> : null}
            <span
                className="input-group-text bg-white br-radius px-3 border-start-0 search-wrapper position-relative">
                <a
                    href="#">
                    <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="13px" height="11px" viewBox="0 0 10.812 10.771" enableBackground="new 0 0 10.812 10.771" >
                        <path fill="#ABADB0" d="M10.592,9.491L8.73,7.628c0.571-0.792,0.916-1.756,0.916-2.805C9.646,2.164,7.483,0,4.823,0
	C2.164,0,0,2.164,0,4.823c0,2.659,2.164,4.822,4.823,4.822c1.07,0,2.05-0.361,2.851-0.953l1.858,1.859
	c0.146,0.146,0.338,0.22,0.53,0.22s0.384-0.073,0.53-0.22C10.885,10.259,10.885,9.784,10.592,9.491z M1.5,4.823
	C1.5,2.991,2.991,1.5,4.823,1.5s3.323,1.491,3.323,3.323c0,1.832-1.491,3.322-3.323,3.322S1.5,6.655,1.5,4.823z"/>
                    </svg>
                </a>
            </span>
        </div>

    )
}


export default SearchBar;