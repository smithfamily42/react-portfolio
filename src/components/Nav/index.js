import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    const {
        pages = [],
        setCurrentPage,
        currentPage,
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentPage.name);
    }, [currentPage]);

    return (

        <nav className="navbar navbar-expand-md navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand fs-1 fw-bolder" href="/">Brad Smith's Portfolio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-lg-0">
                        {pages.map((Page) => (
                            <li className={`me-5 nav-item ${currentPage.name === Page.name && 'navActive'}`}
                                key={Page.name}
                            >
                                <span onClick={() => setCurrentPage(Page)}
                                >
                                    {capitalizeFirstLetter(Page.name)}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Nav;