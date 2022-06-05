import data from "./data.json";
import "./styles.css";

const Theory = () => {
    let num=1;
    return (
        <>
        <div className="title">Theory Tests</div>
        {data.initialBasics[1].Elements.map((data) =>(
                <div className="datapreview" key={num}>
                    <details>
                    <summary># Question- {num++}</summary>
                    <h3 ><pre>{data.Question}</pre></h3>
                    <details>
                    <summary><div className="code">Solution:</div>
                    </summary>
                    
                    <div className="answer"><pre className="line-numbers"><code className="language-cpp">{data.Answer}</code></pre></div>
                    
                    </details>
                    </details>
                    {/* <button onClick={() => func(data.id)}> Delete</button> */}
                </div>
                ))}
        {data.loops[1].Elements.map((data) =>(
        <div className="datapreview" key={num}>
            <details>
            <summary># Question- {num++}</summary>
            <h3 ><pre>{data.Question}</pre></h3>
            <details>
            <summary><div className="code">Solution:</div>
            </summary>
            
            <div className="answer"><pre className="line-numbers"><code className="language-cpp">{data.Answer}</code></pre></div>
            
            </details>
            </details>
            {/* <button onClick={() => func(data.id)}> Delete</button> */}
        </div>
        ))}
        {data.ArrayAndStrings[1].Elements.map((data) =>(
                <div className="datapreview" key={num}>
                    <details>
                    <summary># Question- {num++}</summary>
                    <h3 ><pre>{data.Question}</pre></h3>
                    <details>
                    <summary><div className="code">Solution:</div>
                    </summary>
                    
                    <div className="answer"><pre className="line-numbers"><code className="language-cpp">{data.Answer}</code></pre></div>
                    
                    </details>
                    </details>
                    {/* <button onClick={() => func(data.id)}> Delete</button> */}
                </div>
                ))}
                {data.functionsAndRecursions[1].Elements.map((data) =>(
                <div className="datapreview" key={num}>
                    <details>
                    <summary># Question- {num++}</summary>
                    <h3 ><pre>{data.Question}</pre></h3>
                    <details>
                    <summary><div className="code">Solution:</div>
                    </summary>
                    
                    <div className="answer"><pre className="line-numbers"><code className="language-cpp">{data.Answer}</code></pre></div>
                    
                    </details>
                    </details>
                    {/* <button onClick={() => func(data.id)}> Delete</button> */}
                </div>
                ))}
        {data.sortingAnd2dArrays[1].Elements.map((data) =>(
                <div className="datapreview" key={num}>
                    <details>
                    <summary># Question- {num++}</summary>
                    <h3 ><pre>{data.Question}</pre></h3>
                    <details>
                    <summary><div className="code">Solution:</div>
                    </summary>
                    
                    <div className="answer"><pre className="line-numbers"><code className="language-cpp">{data.Answer}</code></pre></div>
                    
                    </details>
                    </details>
                    {/* <button onClick={() => func(data.id)}> Delete</button> */}
                </div>
                ))}
                {data.structuresAndPointers[1].Elements.map((data) =>(
                <div className="datapreview" key={num}>
                    <details>
                    <summary># Question- {num++}</summary>
                    <h3 ><pre>{data.Question}</pre></h3>
                    <details>
                    <summary><div className="code">Solution:</div>
                    </summary>
                    
                    <div className="answer"><pre className="line-numbers"><code className="language-cpp">{data.Answer}</code></pre></div>
                    
                    </details>
                    </details>
                    {/* <button onClick={() => func(data.id)}> Delete</button> */}
                </div>
                ))}
                {data.linkedList[1].Elements.map((data) =>(
                    <div className="datapreview" key={num}>
                        <details>
                        <summary># Question- {num++}</summary>
                        <h3 ><pre>{data.Question}</pre></h3>
                        <details>
                        <summary><div className="code">Solution:</div>
                        </summary>
                        
                        <div className="answer"><pre className="line-numbers"><code className="language-cpp">{data.Answer}</code></pre></div>
                        
                        </details>
                        </details>
                        {/* <button onClick={() => func(data.id)}> Delete</button> */}
                    </div>
                    ))}
                </>
    );
}

export default Theory;