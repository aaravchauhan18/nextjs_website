import React from 'react';
import Link from "next/link";
import MovieCard from "@/app/components/MovieCard";
import styles from '@/app/styles/common.module.css'

const Movie = async () => {

    await new Promise(resolve => setTimeout(resolve, 500))

    const url = process.env.RAPID_KEY;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2e65620299msh421150f9499c364p164415jsnd2de26908503',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options)
    const data = await res.json();
    const main_data = data.titles;
    console.log(data)

    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1> Series & Movie</h1>
                    <div className={styles.card_section}>
                        {
                            main_data.map((curElem) => {
                                return <MovieCard key={curElem.id} {...curElem} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Movie;