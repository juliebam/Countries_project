import React from 'react';

const Gallery = (props) => {
    console.log(props)
        return (
            <section className="countryGallery">
                    { props.countries.map((country) => {
                        return(
                            <div className="Country-Card">
                                <img src={country.flag} alt={country.name} />
                                <ul>
                                    <li>{country.name}</li>
                                    <li>{country.population}</li>
                                    <li>{country.region}</li>
                                    <li>{country.capital}</li>
                                </ul>
                            </div>
                        )
                    })
                }
            </section>
            )           
    }


export default Gallery;