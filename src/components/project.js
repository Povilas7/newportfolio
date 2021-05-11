import React from 'react';

function Project() {
    return (
        <div className="project">
            <div className="projectChild">
                <h3 className='name'>My Projects</h3>
                <div className='d-flex'>
                    <div className="hangman">
                        <p className="gameText">Hangman game</p>
                        <div className='link'>
                            <a href="https://github.com/Povilas7/Hangman">Click</a>
                        </div>
                    </div>
                    <div className="recipe">
                        <p className="gameText">Recipe creation</p>
                        <div className='link'>
                            <a href="https://github.com/Povilas7/newProject">Click</a>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
}

export default Project;