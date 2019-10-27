import React, { useState, useEffect } from 'react'
import CopiedMessage from '../components/copiedMessage'
import Router from 'next/router'

const Generator = () => {
    const [address, setAddress] = useState('')
    const [isCopiedMessageVisible, setIsCopiedMessageVisible] = useState(0)

    const gMapsUrl = `https://www.google.com/maps/dir//`

    useEffect(() => {
        if (process.browser) {
            const localStorage = window.localStorage.getItem('address')
            setAddress(localStorage)
        }
    }, [])

    return (
        <section>

            <div className="container">
                <div className="logo">
                    <svg width="100px" height="100px" viewBox="0 0 3963 3963" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="Logo">
                                <rect id="Rectangle" fill="#FFFFFF" x="0" y="0" width="3963" height="3963" rx="1051"></rect>
                                <path d="M3618.90028,1862.10937 L2100.10305,343.359375 C2034.2885,277.546875 1927.12892,277.546875 1862.15815,343.359375 L343.36091,1862.10937 C277.546363,1927.92187 277.546363,2035.07812 343.36091,2100.89062 L1862.15815,3618.79687 L1862.15815,3619.64062 C1927.97269,3685.45312 2035.13228,3685.45312 2100.94682,3619.64062 L3619.74406,2100.89062 C3685.5586,2034.23437 3685.5586,1927.92187 3618.90028,1862.10937 Z M2318.64109,2402.95312 L2318.64109,1981.07812 L1643.6201,1981.07812 L1643.6201,2487.32812 L1306.1096,2487.32812 L1306.1096,1812.32812 C1306.1096,1718.67187 1381.20569,1643.57812 1474.86485,1643.57812 L2318.64109,1643.57812 L2318.64109,1221.70312 L2909.28446,1812.32812 L2318.64109,2402.95312 Z" id="Shape" fill="#018000" fill-rule="nonzero"></path>
                            </g>
                        </g>
                    </svg>
                </div>
                <h1>Google Maps Directions Link Generator</h1>

                <input
                    name="address"
                    className="address"
                    id="address"
                    autoFocus
                    placeholder="Enter an address or business name"
                    value={address}
                    onChange={e => {
                        setAddress(e.target.value)
                        window.localStorage.setItem('address', e.target.value)
                    }} />
                <p className="helper-text">The more precise you are, the better the results will be. <a className="examples" href="#examples">Take a look at the examples.</a></p>

                {address &&
                    <div className="sep">
                        <svg width="630px" height="639px" viewBox="0 0 630 639" version="1.1">
                            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <g id="Arrow" transform="translate(-21.000000, 0.000000)" fill="#000000">
                                    <g id="Arrow-Up">
                                        <path d="M94,152 L235,152 L235,619 C235,630.045695 226.045695,639 215,639 L114,639 C102.954305,639 94,630.045695 94,619 L94,152 Z" id="Rectangle"></path>
                                        <path d="M180.187032,19.8352742 L303.370955,175.59367 C310.222782,184.257378 308.753962,196.835205 300.090254,203.687032 C296.558272,206.480354 292.186982,208 287.683923,208 L41.3160767,208 C30.2703817,208 21.3160767,199.045695 21.3160767,188 C21.3160767,183.496941 22.8357232,179.125651 25.629045,175.59367 L148.812968,19.8352742 C155.664795,11.1715658 168.242622,9.70274577 176.90633,16.5545729 C178.123467,17.5171642 179.22444,18.6181375 180.187032,19.8352742 Z" id="Triangle"></path>
                                    </g>
                                    <g id="Arrow-Up" transform="translate(507.500000, 319.500000) rotate(-180.000000) translate(-507.500000, -319.500000) translate(343.000000, 0.000000)">
                                        <path d="M94,152 L235,152 L235,619 C235,630.045695 226.045695,639 215,639 L114,639 C102.954305,639 94,630.045695 94,619 L94,152 Z" id="Rectangle"></path>
                                        <path d="M180.187032,19.8352742 L303.370955,175.59367 C310.222782,184.257378 308.753962,196.835205 300.090254,203.687032 C296.558272,206.480354 292.186982,208 287.683923,208 L41.3160767,208 C30.2703817,208 21.3160767,199.045695 21.3160767,188 C21.3160767,183.496941 22.8357232,179.125651 25.629045,175.59367 L148.812968,19.8352742 C155.664795,11.1715658 168.242622,9.70274577 176.90633,16.5545729 C178.123467,17.5171642 179.22444,18.6181375 180.187032,19.8352742 Z" id="Triangle"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                }

                {address &&
                    <div className="result">
                        <input
                            name="link"
                            className="link"
                            id="link"
                            readOnly
                            onClick={e => {
                                e.target.select()
                            }}
                            value={gMapsUrl + encodeURI(address)} />
                        <button onClick={e => {
                            const directionsUrl = document.getElementById('link')
                            directionsUrl.select();
                            document.execCommand("copy");
                            setIsCopiedMessageVisible(1)
                        }}>Copy</button>
                    </div>
                }
            </div>

            {
                useEffect(() => {
                    if (isCopiedMessageVisible) {
                        const message = document.querySelector('.js-copied-message')

                        message.style.bottom = `calc(-${message.clientHeight}px - 1rem)`


                        setTimeout(() => {
                            message.style.visibility = 'visible'
                            message.style.bottom = '1rem'
                        }, 200);

                        setTimeout(() => {
                            message.style.bottom = `calc(-${message.clientHeight}px - 1rem)`
                        }, 3000);

                        message.style.visibility = 'hidden'
                    }

                }, [isCopiedMessageVisible])
            }

            <CopiedMessage />

            <style jsx>{`
                section {
                    background-color: #f2f2f2;
                    min-height: 70vh;
                    padding-top: 2rem;
                    padding-bottom: 2rem;

                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }

                @media (max-width: 760px) {
                    section {
                        min-height: 50vh;
                    }
                }

                .logo {
                    text-align: center;
                    margin-bottom: 1rem;
                }

                .logo svg {
                    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
                    border-radius: 2rem;
                }

                .examples {
                    color: #018000;
                    text-decoration: none;
                }

                .helper-text {
                    margin-left: 1.5rem;
                    line-height: 1.5;
                }

                .container {
                    width: 100%;
                    max-width: 760px;
                    margin-left: auto;
                    margin-right: auto;
                    padding-left: 1rem;
                    padding-right: 1rem;
                }

                .address,
                .link {
                    appearance: none;
                    width: 100%;
                    border: 0;
                    font-size: 1.5rem;
                    padding: 0.75rem 1.5rem;
                }

                .link {
                    cursor: no-drop;
                }

                .sep {
                    margin-top: 1.5rem;
                    margin-bottom: 1.5rem;
                    text-align: center;
                }

                .sep svg {
                    width: 25px;
                    height: auto;
                }

                .sep svg * {
                    fill: #444;
                }

                h1 {
                    margin-top: 0;
                    font-size: 2rem;
                    text-align: center;
                    font-weight: normal;
                    line-height: 1.5;
                }

                .result {
                    display: flex;
                }

                .result input {
                    color: green;
                    outline: 0;
                }

                .result button {
                    appearance: none;
                    padding: 0 1.5rem;
                    border: 0;
                    font-size: 1rem;
                    background-color: green;
                    color: #fff;
                    cursor: pointer;
                }

            `}</style>
        </section >
    )
}

export default Generator