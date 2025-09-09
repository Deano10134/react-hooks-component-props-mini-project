import React from "react";
import Article from "./Article";

function ArticleList(props) {
    return (
        <main className="Articles">
            {(props.posts || []).map((p) => (
                <Article key={p.id || p.title} {...p} />
            ))}
        </main>
    );
}

export default ArticleList;