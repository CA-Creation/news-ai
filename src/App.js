import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { common } from "@material-ui/core/colors";

import NewsCards from "./components/NewsCards/NewsCards";

const alanKey = 'b9d38d7d14fdb96a4fd1c1d57bc754bb2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles }) => {
                if(command === 'newHeadlines'){
                   setNewsArticles(articles);
                }
            }
        })
    }, [])

    return (
        <div>
            <h1>Alan Ai news application</h1>
            <NewsCards articles={newsArticles} />
        </div>
    );
}

export default App;