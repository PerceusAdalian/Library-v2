import React, { useState, useEffect } from 'react'

export default function ContactModal() {
    const [isOpen, setIsOpen] = useState(false)

    // Lock body scroll while the modal is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [isOpen])

    // Close on Escape
    useEffect(() => {
        if (!isOpen) return
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setIsOpen(false)
        }
        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [isOpen])

    const handleBackdropClick = (e) => {
        // Only close if the click was on the overlay itself, not the content
        if (e.target === e.currentTarget) setIsOpen(false)
    }

    // Listen for clicks anywhere in the document on ".contact-trigger" elements
    // (nav + footer buttons) via event delegation, so this modal's state stays
    // local while still being openable from multiple places in the DOM.
    useEffect(() => {
        const handleTriggerClick = (e) => {
            if (e.target.closest('.contact-trigger')) {
                e.preventDefault()
                setIsOpen(true)
            }
        }
        document.addEventListener('click', handleTriggerClick)
        return () => document.removeEventListener('click', handleTriggerClick)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const firstName = document.getElementById('contact-first-name').value
        const lastName = document.getElementById('contact-last-name').value
        const email = document.getElementById('contact-email').value
        const phone = document.getElementById('contact-phone').value
        const message = document.getElementById('contact-message').value

        const subject = `Portfolio Contact from ${firstName} ${lastName}`
        const bodyLines = [
            `Name: ${firstName} ${lastName}`,
            `Email: ${email}`,
            phone && `Phone: ${phone}`,
            '',
            message || '(no message)'
        ].filter(Boolean)

        const mailto = `mailto:davidmwilly@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`
        window.location.href = mailto
        setIsOpen(false)
    }

    return (
        <>
            <div
                className={`modal-overlay${isOpen ? ' active' : ''}`}
                aria-hidden={!isOpen}
                onClick={handleBackdropClick}
            >
                <div className="modal-content">
                    <button
                        className="modal-close"
                        aria-label="Close Contact Modal"
                        onClick={() => setIsOpen(false)}
                    >
                        &times;
                    </button>
                    <figure className="figure__">
                        <img src="./assets/illustrations/contact.svg" alt="" className="img__" />
                    </figure>
                    <h2 className="section__title">Let's Connect</h2>
                    <p className="background--paragraph">
                        I'd love to hear from you!
                    </p>
                    <p className="background--paragraph">
                        Go ahead and fill this out. You'll be redirected to an email app of your choice, ready to send.
                    </p>
                    <form id="contact-form" className="modal-form" noValidate onSubmit={handleSubmit}>
                        <div className="modal-form__row">
                            <input type="text" id="contact-first-name" className="modal-form__input" placeholder="First Name *" required />
                            <input type="text" id="contact-last-name" className="modal-form__input" placeholder="Last Name *" required />
                        </div>
                        <input type="email" id="contact-email" className="modal-form__input" placeholder="Email *" required />
                        <input type="tel" id="contact-phone" className="modal-form__input" placeholder="Phone Number (optional)" />
                        <textarea id="contact-message" className="modal-form__input modal-form__textarea" placeholder="Message (optional)" rows={4}></textarea>
                        <button type="submit" className="modal-form__submit">Send</button>
                    </form>
                    <div className="divider"><span>or reach out directly</span></div>
                    <div className="modal-links">
                        <a href="mailto:davidmwilly@gmail.com" className="nav__icon tooltip mailto-trigger" data-tooltip="Via E-Mail" aria-label="Email">
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/perceus-willy-a71392333/" className="nav__icon tooltip" data-tooltip="Via LinkedIn" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/PerceusAdalian" className="nav__icon tooltip" data-tooltip="Via GitHub" target="_blank" rel="noreferrer" aria-label="GitHub">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}