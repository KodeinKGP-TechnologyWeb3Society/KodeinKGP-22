import React, { useEffect } from 'react';
import AI from "./AI.jpg";
import Web from "./web.png";
import BlockChain from "./Blockchain.png";
import './Cards.css';

export default function Cards() {
    function fieldCardAnimate() {
        let cards = document.getElementsByClassName('field-card');
        for (let i = 0; i < cards.length; i++) {
            cards[i].classList.add(`transition-${i + 1}`);
        }
    }

    useEffect(() => {
        // Create an Intersection Observer instance
        const sectionObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    fieldCardAnimate(); // Trigger animation when the section is in viewport
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null, // Use the viewport as the root
            threshold: 0.8, // Trigger when 80% of the section is visible
        });

        // Observe the target section
        const targetSection = document.querySelector('.field-cards');
        if (targetSection) {
            sectionObserver.observe(targetSection);
        }
    }, []);

    return (
        <div className='field-cards'>
            <div className='field-card card1'>
                <img src={Web} alt="Web" />
                <p className='field-heading'>Web</p>
                <p className='field-description'>Weave your digital aspirations into reality through our dynamic Web solutions, fusing creativity with functionality.​</p>
            </div>
            <div className='field-card card2'>
                <img src={AI} alt="AI & Metaverse" />
                <p className='field-heading'>AI & Metaverse</p>
                <p className='field-description'> Enter a realm where AI drives immersive Metaverse encounters, pushing boundaries of what's possible.</p>
            </div>
            <div className='field-card card3'>
                <img src={BlockChain} alt="Blockchain" />
                <p className='field-heading'>Blockchain</p>
                <p className='field-description'>Transform transactions with our secure Blockchain solutions, rewriting the rules of trust and transparency.</p>
            </div>
        </div>
    )
}
