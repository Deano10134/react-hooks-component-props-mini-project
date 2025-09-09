import React from "react";

function Article({ title, date = "January 1, 1970", preview = "", minutes }) {
    let emoji = "";
    if (minutes) {
        if (minutes < 30) {
            const cups = Math.ceil(minutes / 5);
            emoji = "☕️".repeat(cups);
        } else {
            const bentos = Math.ceil(minutes / 10);
            emoji = "🍱".repeat(bentos);
        }
    }
    return (
        <article>
            <h3>{title}</h3>
            <small>{emoji} {minutes ? `${minutes} min read` : date}</small>
            <p>{preview}</p>
        </article>
    );
}

export default Article;