import React, { useState, useEffect } from 'react';
import { fetchCountries } from '../../api';

// Styles
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from './CountryPicker.module.css'

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            setFetchedCountries(await fetchCountries())
        }

        fetchApi()
    }, [setFetchedCountries])

    console.log("FETCHED COUNTRIES", fetchedCountries);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defualtValue='' onChange={(e) => handleCountryChange(e.target.value)}>
                <option value='global'>Global</option>
                {fetchedCountries.map((country, index) => <option key={index} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;