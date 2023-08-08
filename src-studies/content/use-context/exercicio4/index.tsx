import React from 'react'
import ExerciseProvider from './exercise-context'
import Header from './header'
import Content from './content'


const Exercise_04 = () => {


    return (
        <ExerciseProvider>
            <div>
                <Header />
                <Content />
            </div>
        </ExerciseProvider>
    )
}

export default Exercise_04