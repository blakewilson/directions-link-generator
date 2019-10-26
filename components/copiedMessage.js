import React from 'react'

const CopiedMessage = (props) => {

    return (
        <div className="js-copied-message copied" ref={props.ref}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 17l-5-5.299 1.399-1.43 3.574 3.736 6.572-7.007 1.455 1.403-8 8.597z"/></svg>
            <span>Copied to clipboard</span>
            <style jsx>{`
                .copied {
                    visibility: hidden;
                    display: flex;
                    align-items: center;
                }

                svg {
                    width: 1rem;
                    fill: #fff;
                    margin-right: 0.5rem;
                }

                .copied {
                    position: fixed;
                    background-color: #2a2a2a;
                    transition: bottom 0.2s ease-in-out;
                    color: #fff;
                    border-radius: 5px;
                    padding: 0.75rem 1.5rem;
                    bottom: 1rem;
                    right: 1rem;
                    width: 100%;
                    max-width: 300px;
                }
            `}</style>
        </div>
    )
}

export default CopiedMessage