import React from 'react'
import useFetch from '../../use-fetch/use-fetch'



type UserProps = {
    aulas: number;
    cursos: number;
    id: number;
    idade: number;
    nome: string;
    preferencias: {
        playback: number,
        volume: number
        qualidade: string,
    }
}

type ExerciseProps = {
    data: UserProps | null
    loading: boolean
}

const ExerciseConsumer = React.createContext<ExerciseProps | null>( null )

export const useUser = () => {
    const context = React.useContext( ExerciseConsumer );
    if ( context === null ) throw new Error( "Exercise Context deve estar dentro de um Provider" )
    return context
}

const ExerciseProvider = ( { children }: React.PropsWithChildren ) => {


    const { data, loading } = useFetch<UserProps>( "https://data.origamid.dev/usuarios/1", {
        cache: 'force-cache'
    } );

    return (

        <ExerciseConsumer.Provider value={{ data, loading }}>
            {children}
        </ExerciseConsumer.Provider>
    )


}

export default ExerciseProvider