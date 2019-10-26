import React from 'react'

const App = (props) => {
    return(
        <div>
            {props.children}

            <style jsx>{`
                :global(body) {
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
                    margin: 0;
                }

                :global(html) {
                    box-sizing: border-box;
                }

                :global(*, *:before, *:after) {
                    box-sizing: inherit;
                }
            `}</style>
        </div>
    )
}

export default App